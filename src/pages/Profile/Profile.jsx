import React, { useEffect } from 'react';
import useAxios from '../../hooks/useAxios';
import { useAuth } from '../../hooks/useAuth';
import editIcon from "../../assets/icons/edit.svg"
import avatarIcon from "../../assets/images/avatars/avatar_1.png"
import {useProfile} from '../../hooks/useProfile';
import { actions } from '../../actions';
const Profile = () => {
   const {state,dispatch}=useProfile()
    const { api } = useAxios();
    const { auth } = useAuth();
    useEffect(() => {
        dispatch({type: actions.profile.DATA_FETCHING})
        const fetchProfile = async () => {
            try {
                const response = await api.get(`${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`)
               if (response.status === 200) {
                dispatch({type: actions.profile.DATA_FETCHED, data: response.data})
                // console.log(response.data)
               }

            } catch (error) {
                console.error(error)
                 dispatch({type: actions.profile.DATA_FETCH_ERROR,error:error})
            } 
        }
        fetchProfile()
    }, []);
  
const name=state.user?.firstName + " "+state?.user?.lastName 
    if ( state.loading) {
        return <div>Fetching your Profile data ...</div>
    }
    return (
        <>
        <div>
            
        </div>
            <div className="flex flex-col items-center py-8 text-center">
                {/**<!-- profile image -->*/}
                <div
                    className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]" >
                    <img
                        className="max-w-full"
                        src={avatarIcon}
                        alt="sumit saha" />
                    <button
                        className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80" >
                        <img src={editIcon} alt="Edit" />
                    </button>
                </div>
                {/** <!-- name , email --> */}
                <div>
                    <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
                        {name|| "Your Name"}
                    </h3>
                    <p className="leading-[231%] lg:text-lg">{state?.user?.email}</p>
                </div>
                {/**<!-- bio --> */}
                <div className="mt-4 flex items-start gap-2 lg:mt-6">
                    <div className="flex-1">
                        <p className="leading-[188%] text-gray-400 lg:text-lg">{state?.user?.bio}</p>
                    </div>
                    {/** <!-- Edit Bio button. The Above bio will be editable when clicking on the button --> */}
                    <button className="flex-center h-7 w-7 rounded-full">
                        <img src={editIcon} alt="Edit" />
                    </button>
                </div>
                <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
            </div></>
    );
};

export default Profile;