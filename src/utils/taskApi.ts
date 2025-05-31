import type { Task } from '../types';

const STORAGE_KEY = 'taskflow_tasks';

export function getTasks(): Task[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveTask(task: Task): void {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function searchTasks(query: string, owner: string): Task[] {
  return getTasks().filter(
    task =>
      task.owner === owner &&
      (task.title.toLowerCase().includes(query.toLowerCase()) ||
       task.description.toLowerCase().includes(query.toLowerCase()))
  );
}

