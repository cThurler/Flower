import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

  return (
    <div className="p-4 w-full space-y-4">
      <h1 className="text-2xl font-bold">Bem-vindo, {user}!</h1>
      <div className="space-x-4">
        <button
          onClick={() => navigate('/create')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Nova Tarefa
        </button>
        <button
          onClick={() => navigate('/tasks')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Ver Tarefas
        </button>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Sair
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
