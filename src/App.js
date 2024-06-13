import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Subject from './components/subject_taught/Subject';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App =() =>{
  return (
    <>
      <Header />

      <main className="main">
        <Home/>
        <About/>
        <Subject/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}

export default App;
