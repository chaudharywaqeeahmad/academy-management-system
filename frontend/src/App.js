import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Footer from './Components/Footer';
import AmazonFba from './Pages/AmazonFba';
import AmazonVirtual from './Pages/AmazonVirtual';
import Computer from './Pages/Computer';
import Contact from './Pages/Contact';
import Courses from './Pages/Courses';
import DigitalMarketing from './Pages/DigitalMarketing';
import English from './Pages/English';
import Freelancing from './Pages/Freelancing';
import GraphicDesigner from './Pages/GraphicDesigner';
import Ielts from './Pages/Ielts';
import Instructor from './Pages/Instructor';
import InstructorTwo from './Pages/InstructorTwo';
import InstructorOne from './Pages/InstructorOne';
import InstructorThree from './Pages/InstructorThree';
import InstructorFour from './Pages/InstructorFour';
import Nat from './Pages/Nat';
import News from './Pages/News';
import NewDetails from './Pages/NewsDetails';
import Shopify from './Pages/Shopify';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import TestSeries from './Pages/TestSeries';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} exact  />
        <Route path='/about' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route path='/amazon_fba' element={<AmazonFba />} />
        <Route path='/amazon_virtual' element={<AmazonVirtual />} />
        <Route path='/computer' element={<Computer />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/digital_marketing' element={<DigitalMarketing />} />
        <Route path='/english' element={<English />} />
        <Route path='/freelancing' element={<Freelancing />} />
        <Route path='/graphic' element={<GraphicDesigner />} />
        <Route path='/ielts' element={<Ielts />} />
        <Route path='/instructor' element={<Instructor />} />
        <Route path='/instructor_one' element={<InstructorOne />} />
        <Route path='/instructor_two' element={<InstructorTwo />} />
        <Route path='/instructor_three' element={<InstructorThree />} />
        <Route path='/instructor_four' element={<InstructorFour />} />
        <Route path='/nat' element={<Nat />} />
        <Route path='/news' element={<News />} />
        <Route path='/news_details' element={<NewDetails />} />
        <Route path='/shopify' element={<Shopify />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/test_series' element={<TestSeries />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
