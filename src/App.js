import './App.css';

// import ProfilePage from './pages/Profile/ProfilePage';
// import { mockUsers } from './mockDataUser';
import TodoListPage from './pages/TodoApp/TodoListPage'; 
import { mockTodo } from './mockDataTodo';

function App() {
  return (
    <div className="App">
      {/* <ProfilePage users={mockUsers}/> */}
      <TodoListPage lists={mockTodo} />
    </div>
  );
}

export default App;
