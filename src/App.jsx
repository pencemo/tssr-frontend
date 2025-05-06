import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./app/Auth/login";
import Home from "./page/Home";
import Page from "./app/admin/page";
import Dashbord from "./app/admin/dashboard/dashbord";
import { StudyCentre } from "./app/admin/study centre/studycentre";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin" element={<Page />} >
          <Route index element={<Dashbord />} />
          <Route path="studycentre" element={<StudyCentre />} >
            <Route index element={<Dashbord />} />
            <Route path="req" element={<Dashbord />} />
          </Route>
          <Route path="course" element={<Dashbord />} />
          <Route path="students" element={<Dashbord />} />
          <Route path="hallticket" element={<Dashbord />} />
          <Route path="results" element={<Dashbord />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
