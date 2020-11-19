import './App.css';

function App() {
  return (
    <div className="App">
      WE ON
    </div>
  );
}
fetch(`/test`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));


export default App;
