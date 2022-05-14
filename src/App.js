import './App.css';
import DisplayList from "./DisplayList/DisplayList";


const LIST = ["a", "b", "c"]

function App() {
  return (
   <div>
      <DisplayList lista={LIST}/>
    </div>
  );
}

export default App;
