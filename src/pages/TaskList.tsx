import { useState } from 'react';
import { searchTasks } from '../utils/taskApi';
import { useAuth } from '../contexts/AuthContext';

function TaskList() {
  const { user } = useAuth();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(() => searchTasks('', user!));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setResults(searchTasks(query, user!));
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Minhas Tarefas</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          className="border px-3 py-2 rounded w-full"
          placeholder="Buscar por título ou descrição"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </form>
      <ul className="space-y-2">
        {results.map(task => (
          <li key={task.id} className="border p-3 rounded bg-white shadow">
            <h2 className="text-lg font-semibold dark">{task.title}</h2>
            <p>{task.description}</p>
            <small className="text-gray-500">Criado em: {new Date(task.createdAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
