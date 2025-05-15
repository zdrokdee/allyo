// hooks/useOutsideClick.ts
import { useEffect, RefObject } from "react";

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    onClose: () => void
) {
    useEffect(() => {
        function handleEvent(event: MouseEvent | TouchEvent) {
            if (!ref.current) return;
            if (!ref.current.contains(event.target as Node)) {
                onClose();
            }
        }

        document.addEventListener("mousedown", handleEvent);
        document.addEventListener("touchstart", handleEvent);

        return () => {
            document.removeEventListener("mousedown", handleEvent);
            document.removeEventListener("touchstart", handleEvent);
        };
    }, [ref, onClose]);
}
