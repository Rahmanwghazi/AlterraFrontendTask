import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutApp from './pages/about_app/AboutApp';
import AboutAuthor from './pages/about_author/AboutAuthor';
import NotFoundPage from './pages/not_found/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutApp />}/>
        <Route path="/about/about-app" element={<AboutApp />}/>
        <Route path="/about/about-author" element={<AboutAuthor />}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
