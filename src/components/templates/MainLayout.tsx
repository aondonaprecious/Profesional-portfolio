/** @format */

// src/components/templates/MainLayout.tsx
import React from "react";
import Navbar from "../organisms/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-hero-gradient text-white antialiased">
      {/* The Navbar is now officially 'Used' here */}
      <Navbar />
      <main>
        {/* Outlet renders the specific page content based on the URL */}
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
