import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Main from "../pages/main/Main";
import Header from "../components/Header";
import Recommend from "../pages/recommend/Recommend";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import MusicDetail from "../pages/musicDetail/MusicDetail";
import Composer from "../pages/composer/Composer";
import Footer from "../components/Footer";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/recommend/music/:id" element={<MusicDetail />} />
        <Route path="/composer" element={<Composer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
