import React from 'react';
import ProductDetails from '../features/product/components/ProductDetails';
import Navbar from '../features/navabr/Navbar';
import Footer from '../features/common/Footer';

const ProductDetailsPage = () => {
    return (
        <div>
            <Navbar>
                <ProductDetails></ProductDetails>
            </Navbar>
            <Footer></Footer>
            
        </div>
    );
};

export default ProductDetailsPage;