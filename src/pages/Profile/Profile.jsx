import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { useAuth } from '../../hooks/useAuth';
import editIcon from "../../assets/icons/edit.svg"
import avatarIcon from "../../assets/images/avatars/avatar_1.png"
const Profile = () => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const { api } = useAxios();
    const { auth } = useAuth();
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await api.get(`${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`)
                setUser(response.data.user);
                setPosts(response.data.posts);

            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        fetchProfile()
    }, []);
  
    const info = auth?.user;

    const firstName = info.firstName;
    const lastName = info.lastName;
    const name = firstName + " " + lastName;


    if (loading) {
        return <div>Fetching your Profile data ...</div>
    }
    return (
        <>
        <div>
            
        </div>
            <div class="flex flex-col items-center py-8 text-center">
                {/**<!-- profile image -->*/}
                <div
                    class="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]" >
                    <img
                        class="max-w-full"
                        src={avatarIcon}
                        alt="sumit saha" />
                    <button
                        class="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80" >
                        <img src={editIcon} alt="Edit" />
                    </button>
                </div>
                {/** <!-- name , email --> */}
                <div>
                    <h3 class="text-2xl font-semibold text-white lg:text-[28px]">
                        {name}
                    </h3>
                    <p class="leading-[231%] lg:text-lg">{info.email}</p>
                </div>
                {/**<!-- bio --> */}
                <div class="mt-4 flex items-start gap-2 lg:mt-6">
                    <div class="flex-1">
                        <p class="leading-[188%] text-gray-400 lg:text-lg">{info.bio}</p>
                    </div>
                    {/** <!-- Edit Bio button. The Above bio will be editable when clicking on the button --> */}
                    <button class="flex-center h-7 w-7 rounded-full">
                        <img src={editIcon} alt="Edit" />
                    </button>
                </div>
                <div class="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
            </div></>
    );
};

export default Profile;