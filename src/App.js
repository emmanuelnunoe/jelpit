import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import Main from './Containers/Main/Main';
import Footer from './Components/Footer/Footer';
import Services from './Containers/Services/Services';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
