import logo from './logo.svg';
import './App.css';
import Info from './components/info.js'

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem />
    </div>
  );

}


function AddItem()  {
  const value= "seetoh is great"

  return(
  <form> 
    <label for="text-form"> Type Something: </label>
    <input type ="text" value={value} id="text-form"  />
  </form>
  )
}
export default App;
