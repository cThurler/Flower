import type { User } from '../types';

const STORAGE_KEY = 'taskflow_users';

export function getUsers(): User[] {
  const users = localStorage.getItem(STORAGE_KEY);
  return users ? JSON.parse(users) : [];
}

export function saveUser(newUser: User): boolean {
  const users = getUsers();
  const exists = users.some(u => u.username === newUser.username);
  if (exists) return false;
  users.push(newUser);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  return true;
}

export function authenticateUser(username: string, password: string): boolean {
  const users = getUsers();
  return users.some(u => u.username === username && u.password === password);
}
