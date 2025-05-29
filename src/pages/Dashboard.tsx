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
    <div className="p-4 w-full">
      <h1 className="text-2xl font-bold">Bem-vindo, {user}!</h1>
      <button
        onClick={logout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Sair
      </button>
    </div>
  );
}

export default Dashboard;
