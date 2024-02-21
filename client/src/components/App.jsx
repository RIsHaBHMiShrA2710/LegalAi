import React from "react";
import Bot from "./Bot/Bot";
import PdfPage from "./Documents_Page/pdfPage";
import NavBar from "./NavBar"; 
import FindLawyer from "./findlawyer/FindLawyer"
import SegOptions from "./seg_options/segOptions";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <> 
        <Router>
          
            <NavBar />
            <SegOptions />
             <Routes>
             <Route path="/" element={<Bot />} />
             <Route path="/pdf" element={<PdfPage />} />
             <Route path="/findlawyer" element={<FindLawyer />} />
             </Routes>
             <Footer />
           </Router>
        </>
        

    );
}

export default App;