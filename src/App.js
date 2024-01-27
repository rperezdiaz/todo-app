// import "./App.css";
import Todo from "./components/Todo/Todo";
import Header from "./components/Header";
import './styles/main.scss'

function App() {

  return (
    <div className="App">
      <Header title={'TODO LIST'}/>
      <Todo/>
    </div>
  );
}

export default App;
