import React from 'react';
import Bio from './Bio';
import ProfileImage from './ProfileImage';
import { useProfile } from '../../hooks/useProfile';
const ProfileInfo = () => {
    const { state } = useProfile();
    const name = state.user?.firstName + " " + state?.user?.lastName
    return (
        <>
            <div className="flex flex-col items-center py-8 text-center">
                <ProfileImage />
                {/** <!-- name , email --> */}
                <div>
                    <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
                        {name || "Your Name"}
                    </h3>
                    <p className="leading-[231%] lg:text-lg">{state?.user?.email}</p>
                </div>
                <Bio />
            </div>
        </>
    );
};

export default ProfileInfo;