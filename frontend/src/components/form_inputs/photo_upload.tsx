import { FC, useRef, useState, useEffect } from "react";
import { PhotoSlot } from "../buttons/add_photo_btn";

interface ImageSlot {
  file?: File;
  url?: string;
  onChange?: () => void;
}

const MAX_SIZE_MB = 5;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/jpg"];

interface PhotoUploadProps {
  onChange?: (photos: File[]) => void; // <- pass selected files to parent
}

const PhotoUpload: FC<PhotoUploadProps> = ({ onChange }) => {

  const containerRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null); // Ref for the popup itself
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [images, setImages] = useState<ImageSlot[]>(Array(6).fill({}));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleDelete = (index: number) => {
    const updated = [...images];
    updated[index] = {};
    setImages(updated);
    setActiveIndex(null);
  
    // ✅ Notify parent
    const selectedFiles = updated.filter(slot => slot.file).map(slot => slot.file!) as File[];
    onChange?.(selectedFiles);
  };
  

  const handleFileSelect = (file: File, index: number) => {
    if (!ACCEPTED_TYPES.includes(file.type)) {
      alert("Only JPG and PNG images are allowed.");
      return;
    }
  
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      alert("Image must be under 5MB.");
      return;
    }
  
    const url = URL.createObjectURL(file);
    const updated = [...images];
    updated[index] = { file, url };
    setImages(updated);
    setActiveIndex(null);
  
    // ✅ Notify parent about new list of files
    const selectedFiles = updated.filter(slot => slot.file).map(slot => slot.file!) as File[];
    onChange?.(selectedFiles);
  };
  

  

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Close the popup when clicking outside of it
  const handleOverlayClick = (e: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
      setActiveIndex(null); // Close the popup
    }
  };

  // Set up and clean up event listener for clicks outside the popup
  useEffect(() => {
    document.addEventListener("mousedown", handleOverlayClick);
    return () => {
      document.removeEventListener("mousedown", handleOverlayClick);
    };
  }, []);

  return (
    <div className="relative">
      {/* Main photo container */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="overflow-x-auto w-full cursor-grab active:cursor-grabbing touch-pan-x"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex gap-4 min-w-max px-1 ">
          {images.map((img, idx) => (
            <PhotoSlot
              key={idx}
              index={idx}
              imageUrl={img.url}
              onFileSelect={handleFileSelect}
              onClick={() => setActiveIndex(idx)}
              onReplace={() => setActiveIndex(null)}
            />
          ))}
        </div>
      </div>

      {/* Popup overlay */}
      {activeIndex !== null && (
        <>
          <div
            className="absolute inset-0 z-10 "
            onClick={handleOverlayClick} // This should now work to close the popup
          />
          <div
            ref={popupRef}
            className="absolute z-20 pointer-events-auto"
            style={{
              top: 0,
              transform: 'translateX(-50%)',
              left:
                ((containerRef.current?.children[0]?.children[activeIndex] as HTMLElement)
                  ?.offsetLeft ?? 0) - (containerRef.current?.scrollLeft ?? 0) + 52,
            }}
          >
            <div className="w-[106px] h-[104px] bg-neutral-40 rounded-[8px]">
              <div className="pt-6 pl-4">
                <button
                  className="text-tech-attention body16-bold mb-2"
                  onClick={() => handleDelete(activeIndex)}
                >
                  Delete
                </button>
                <button
                  className="text-prime-blue body16-bold"
                  onClick={() => {
                    setActiveIndex(null);
                    const input = document.querySelectorAll("input[type='file']")[activeIndex];
                    if (input) (input as HTMLInputElement).click();
                  }}
                >
                  Replace
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default PhotoUpload;
