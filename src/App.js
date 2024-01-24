import "./App.css";
import Todo from "./components/Todo";
import Header from "./components/Header";
import './styles/main.scss'

function App() {

  return (
    <div className="App">
      <Header title={'TODO List'}/>
      <Todo/>
    </div>
  );
}

export default App;
