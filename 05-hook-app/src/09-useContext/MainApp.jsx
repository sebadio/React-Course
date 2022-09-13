import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { NavBar } from "./components/NavBar";

export const MainApp = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
