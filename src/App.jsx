import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardWithForm from "./components/auth/login"; // adjust the path as needed
import { Button } from "@/components/ui/button"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<CardWithForm />} />
        {/* other routes */}
      </Routes>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button>Click me</Button>
      </div>
    </Router>
  )
}

export default App
