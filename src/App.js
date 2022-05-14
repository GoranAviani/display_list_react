import DisplayList from "./DisplayList/DisplayList";


const LIST = ["car", "house", "dog", "pool", "umbrella"]

function App() {
  return (
   <div>
      <DisplayList lista={LIST}/>
    </div>
  );
}

export default App;
