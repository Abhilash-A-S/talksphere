import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root', standalone: true,
  template: `
    <div class="page">
      <header class="top"><a class="brand" href="/">◉ <span>TalkSphere</span></a><span class="phase">V2 · Foundation</span></header>
      <main class="hero">
        <div class="eyebrow">A SPACE FOR REAL CONVERSATIONS</div>
        <h1>Meet new people.<br><em>Make meaningful connections.</em></h1>
        <p>Discover people through shared interests, chat in real time, and connect through voice or video.</p>
        <div class="actions"><button disabled title="Available in the guest-chat milestone">Continue as guest <span>↗</span></button><button class="outline" disabled title="Available in the authentication milestone">Sign in with Google</button></div>
        <p class="note">18+ platform · Guest chats are temporary · Calling requires consent</p>
        <div class="status"><span class="dot" [class.online]="apiStatus() === 'connected'"></span> Backend: {{ apiStatus() }}</div>
      </main>
      <footer>TalkSphere V2 — foundation milestone. Chat, matching and calling are not implemented yet.</footer>
    </div>
  `
})
export class AppComponent {
  private readonly http = inject(HttpClient);
  readonly apiStatus = signal('checking…');
  constructor() {
    this.http.get<{status: string}>('/api/health').subscribe({
      next: result => this.apiStatus.set(result.status === 'ok' ? 'connected' : 'unexpected response'),
      error: () => this.apiStatus.set('unavailable')
    });
  }
}
