import './App.css';

import ProfilePage from './pages/Profile/ProfilePage';
import { mockUsers } from './mockData';

function App() {
  return (
    <div className="App">
      <ProfilePage users={mockUsers}/>
    </div>
  );
}

export default App;
