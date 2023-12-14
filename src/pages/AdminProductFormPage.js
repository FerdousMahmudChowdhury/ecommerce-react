import React from 'react';
import Navbar from '../features/navabr/Navbar';
import ProductForm from '../features/admin/components/ProductForm';

const AdminProductFormPage  = () => {
    return (
        <div>
            <Navbar>
                <ProductForm/>
            </Navbar>
            
        </div>
    );
};

export default AdminProductFormPage ;