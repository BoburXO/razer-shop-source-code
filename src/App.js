import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pnf/PageNotFound";
import Pc from "./pages/Pc";
import Store from "./pages/Store";
import StoreCard from "./pages/StoreCard";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import CreatePost from "./pages/AdminPanel/CreatePost/CreatePost";
import Services from "./pages/Services";
import Mobile from "./pages/Mobile";
import AdminPassword from "./pages/AdminPassword";
import FixedBtn from './pages/FixedBtn';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
          <Route path="/pc" element={<Pc/>}/>
          <Route path="/mobile" element={<Mobile/>}/>
          <Route path="/store" element={<Store/>}/>
          <Route path="/storeCard" element={<StoreCard/>}/>
          <Route path="/createPostRazerAdmin" element={<CreatePost/>}/>
          <Route path='/adminPrivateRazer' element={<AdminPanel/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path="/adminPassword" element={<AdminPassword/>}/>
      </Routes>
      <FixedBtn/>
    </>
  );
}

export default App;
