import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, user, User } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState$: Observable<User | null>;

  constructor(private auth: Auth) {
    this.authState$ = user(this.auth);
  }

  async signup(email: string, password: string): Promise<any> {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (e: any) {
      return e.message;
    }
  }

  async login(email: string, password: string): Promise<any> {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (e: any) {
      return e.message;
    }
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
  }

  getCurrentUser(): Observable<User | null> {
    return this.authState$;
  }
}