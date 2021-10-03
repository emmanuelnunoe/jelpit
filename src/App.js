import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import Main from './Containers/Main/Main';
import Footer from './Components/Footer/Footer';
import Features from './Containers/Features/Features';
import Pricing from './Containers/Pricing/Pricing';
function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Features />
      <Pricing />
      <Footer></Footer>
    </div>
  );
}

export default App;
