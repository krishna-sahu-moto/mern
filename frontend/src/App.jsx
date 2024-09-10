import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './component/Header';
import Footer from './component/Footer';
import Sidebar from './component/Sidebar';
import CreatPost from './component/CreatPost';
import Post from './component/Post';
import PostList from './component/PostList';
import Orders from './component/Orders';
import Products from './component/Products';
import Customers from './component/Customers';
// import Features from './component/Features';
// import About from './About';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Lala from './component/Lala';
import Anil from './component/Anil';
import React from 'react';

function App() {
  // const [selectedTab, setselectedTab] = useState("Dashboard");
  // const [selectedH, setselectedH] = useState("Features");
  return (
    <>
      {/* <h1><Anil></Anil></h1>
    <h1><Lala></Lala></h1> */}
      <Router>
        <Routes>
          <Route path="/" element={<Lala />} />
          <Route path="/anil" element={<Anil />} />
        </Routes>
      </Router>
    </>
    // <div className="app-container">
    //   <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab}></Sidebar>
    //   <div className="content">

    //     {/* <Header selectedH={selectedH}setselectedH={setselectedH}></Header> */}
    //     {/* {selectedTab==='Home'?<CreatPost></CreatPost>:(<PostList></PostList>)} */}

    //     {selectedTab === 'Home' ? <CreatPost></CreatPost> : (selectedTab === 'Dashboard' ? (<PostList></PostList>) : (selectedTab === 'Orders' ? (<Orders></Orders>) : (selectedTab === 'Products' ? (<Products></Products>) : <Customers></Customers>)))}
    //     {/* {selectedH==='Features'?<Features></Features>:(<PostList></PostList>)} */}



    //     <Footer></Footer>
    //   </div>



    // </div>

  );
}

export default App
