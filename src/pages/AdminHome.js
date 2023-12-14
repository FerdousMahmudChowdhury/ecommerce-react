import React from 'react';
import Navbar from '../features/navabr/Navbar';
import AdminProductList from '../features/admin/components/AdminProductList';

const AdminHome = () => {
    return (
        <div>
            <Navbar><AdminProductList></AdminProductList></Navbar>
        </div>
    );
};

export default AdminHome;