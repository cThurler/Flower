// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import CreateTask from "./pages/CreateTask";
import TaskList from "./pages/TaskList";
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound'; // crie esse se não existir

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={<CreateTask />} />
      <Route path="/tasks" element={<TaskList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
