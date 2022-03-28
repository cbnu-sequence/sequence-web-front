import { User } from '../interfaces/user';

const USER_LOCALSTORAGE_KEY = 'sequence_user';

export function getStoredUser(): String {
  const storedUserId = localStorage.getItem(USER_LOCALSTORAGE_KEY);
  return storedUserId ? JSON.parse(storedUserId) : null;
}

export function setStoredUser(userId: string): void {
  localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(userId));
}

export function clearStoredUser(): void {
  localStorage.removeItem(USER_LOCALSTORAGE_KEY);
}
