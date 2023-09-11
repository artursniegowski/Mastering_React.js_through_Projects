import './App.css';
import Login from './components/Login';

let userRegistered = true;


function App() {
  return (
    <div className="container">
    <Login userRegistered={userRegistered}/>
    </div>
  );
}

export default App;
