import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";  // or "./index.css"

import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import PlayerForm from "./pages/PlayerForm";
import BulkUpload from "./pages/BulkUpload";
import SearchFilter from "./pages/SearchFilter";
import Settings from "./pages/Settings";
import BracketGenerator from "./pages/BracketGenerator";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="player-registration" element={<PlayerForm />} />
          <Route path="bulk-upload" element={<BulkUpload />} />
          <Route path="search-filter" element={<SearchFilter />} />
          <Route path="settings" element={<Settings />} />
          <Route path="bracket-generator" element={<BracketGenerator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
