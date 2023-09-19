import Routers from './router/Routers'
import './App.css';
import Header from "./component/Header"
import Footer from "./component/Footer"

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className='contentWrapper'>
        <Routers />
      </div>
      <Footer />
    </div>
  );
}

export default App;
