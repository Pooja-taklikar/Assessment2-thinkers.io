import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Productlist from './components/Productlist';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Navbar></Navbar>
    <Productlist></Productlist>
    </>
  );
}

export default App;
