import React, { useState } from 'react';
import { useProfile } from '../../hooks/useProfile';

import editIcon from "../../assets/icons/edit.svg"
import cheackIcon from "../../assets/icons/check.svg"
import useAxios from '../../hooks/useAxios';
import { actions } from '../../actions';


const Bio = () => {
    const { api } = useAxios()
    const { state,dispatch } = useProfile();
    const [bio, setBio] = useState(state?.user?.bio);
    const [editMode, setEditMode] = useState(false);
    const handleEditBio= async () => {
        dispatch({type:actions.profile.DATA_FETCHING})
        try{
            const response= await api.patch(`${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id}`, {bio})
            if(response.status === 200){
                dispatch({
                    type:actions.profile.USER_DATA_EDITED, data: response.data

                })
            }
        }catch(error){
            dispatch({
                type: actions.profile.DATA_FETCHING_ERROR,
                error: error.message || "Something went wrong"
            })
        }
    }

    return (
        <>

            {/**<!-- bio --> */}
            <div className="mt-4 flex items-start gap-2 lg:mt-6">
               {
                !editMode ? (
                     <div className="flex-1">
                    <p className="leading-[188%] text-gray-400 lg:text-lg">{state?.user?.bio}</p>
                </div>
                ) : (
                    <textarea
                      className="leading-[188%] text-gray-600 lg:text-lg rounded-md"
                        value={bio}
                        rows={4}
                        cols={55}
                        onChange={(e) => setBio(e.target.value)}
                    />
                )
               }
                {/** <!-- Edit Bio button*/}
                {
                    !editMode ? (<button 
                    onClick={() => setEditMode(true)}
                    className="flex-center h-7 w-7 rounded-full">
                        <img src={editIcon} alt="Edit" />
                    </button>) : (<button 
                    onClick={handleEditBio}
                    className="flex-center h-7 w-7 rounded-full">
                        <img className='bg-black rounded-full p-1' src={cheackIcon} alt="check " />
                    </button>)
                }
            </div>
            <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8">
            </div>
        </>
    );
};

export default Bio;