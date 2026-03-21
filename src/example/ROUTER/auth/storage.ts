const AUTH_KEY = 'auth_user';

export function getAuth(): string | null {
  return localStorage.getItem(AUTH_KEY);
}

export function setAuth(token: string): void {
  localStorage.setItem(AUTH_KEY, token);
}

export function clearAuth(): void {
  localStorage.removeItem(AUTH_KEY);
}

export function isAuthenticated(): boolean {
  return !!getAuth();
}
