import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.profileImg} src="https://static-cse.canva.com/blob/787332/vk1941.fc04f702.avif"
                     alt=""/>
            </div>
            <div>
                ava +description
            </div>
        </div>

    )
}

export default ProfileInfo;