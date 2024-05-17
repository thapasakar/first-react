import Backdrop from "./component/Backdrop.js";
import Modal from "./component/Modal.js";
import Todo from "./component/Todo.js";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="You are champion" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
