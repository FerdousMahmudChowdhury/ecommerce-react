import React from 'react';
import Navbar from '../features/navabr/Navbar';
import UserProfile from '../features/user/components/UserProfile';

const UserProfilePage = () => {
    return (
        <div>
            <Navbar>
                <h1 className='text-2xl'>My Profile</h1>
                <UserProfile></UserProfile>
            </Navbar>
        </div>
    );
};

export default UserProfilePage;