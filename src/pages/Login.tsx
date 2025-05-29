import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { authenticateUser } from '../utils/fakeApi';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Preencha todos os campos');
      return;
    }

    const valid = authenticateUser(username, password);
    if (!valid) {
      setError('Usuário ou senha inválidos');
      return;
    }

    login(username);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-80 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Login</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          className="w-full border px-3 py-2 rounded"
          placeholder="Usuário"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="w-full border px-3 py-2 rounded"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
