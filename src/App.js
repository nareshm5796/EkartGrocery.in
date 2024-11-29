import { Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/headers/Header';
import Home from './pages/homepage';
import About from './pages/aboutpage';
import Contact from './pages/contactpage';
import Shop from './pages/shoppage';
import Blogs from './pages/blogspage';

function App() {
  return (
    <div className="App">
      <Header / >
      <div className='main-body'>
        <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
