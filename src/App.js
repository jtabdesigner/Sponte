import './App.css';
import rocketImg from './assets/produto.png';
import { Signup } from './componets/Signup';
function App() {
  return (
    <div className= "container mt-3">
      <div className= "row">
        <div className= "col-md-5">
          <Signup />
        </div>
        <div className= "col-md-7 my-auto">
          <img className= "img-fluid w-100" src={rocketImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
