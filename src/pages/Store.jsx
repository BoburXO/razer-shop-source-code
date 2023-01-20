import React, {useEffect} from 'react';
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import StoreHeader from "../components/StoreHeader/StoreHeader";
import StoreUseCart from "../components/StoreUseCart/StoreUseCart";
import StoreAside from "../components/StoreASide/StoreAside";



const Store = () => {
    useEffect(() => {
        document.title = ` Razer United States | Store`;
    }, []);
    return (
        <>
         <Navbar/>
         <StoreHeader/>
            <StoreUseCart/>
            <StoreAside/>
         <Footer/>
        </>
    );
};

export default Store;