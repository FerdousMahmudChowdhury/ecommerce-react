import React from 'react';
import ProductDetails from '../features/product/components/ProductDetails';
import Navbar from '../features/navabr/Navbar';

const ProductDetailsPage = () => {
    return (
        <div>
            <Navbar>
                <ProductDetails></ProductDetails>
            </Navbar>
            
        </div>
    );
};

export default ProductDetailsPage;