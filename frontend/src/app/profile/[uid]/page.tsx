'use client';
import { useEffect, useState } from 'react';

const UserProfile = ({ params }: { params: { uid: string } }) => {
    const { uid } = params;
    const [profile, setProfile] = useState<any>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const res = await fetch(`/api/get-profile?uid=${uid}`);
            const data = await res.json();
        setProfile(data);
        };

        fetchProfile();
    }, [uid]);

    if (!profile) return <div>Loading...</div>;

    return (
        <div>
        <h1>{profile.name}'s Profile</h1>
        <p>{profile.bio}</p>
        <p>{profile.age} years old</p>
        <p>{profile.gender}</p>
        <p>{profile.location}</p>
        {/* Add other profile fields as necessary */}
        </div>
    );
};

export default UserProfile;
