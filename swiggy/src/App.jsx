// import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer';
import Advertisement from './components/advertisement/Advertisement';
import {Header} from './components/signin/Signin';

function App() {
  return (
    <div className="App">
      <Header/>

      <Advertisement />
      <Footer/>
    </div>
  );
}

export default App;


