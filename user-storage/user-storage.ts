import { User } from '../interfaces/user';

const USER_LOCALSTORAGE_KEY = 'sequence_user';

export function getStoredUser(): String {
  if (typeof window !== 'undefined') {
    const storedUserId = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    return storedUserId ? JSON.stringify(storedUserId) : null;
  }
}

export function setStoredUser(user: User): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
  }
}

export function clearStoredUser(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
  }
}
