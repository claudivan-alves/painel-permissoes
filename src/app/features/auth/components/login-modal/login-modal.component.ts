import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideDynamicIcon } from '@lucide/angular';
import { APP_CONFIG } from '@/core/config/app.config';
import { AUTH_USERS } from '../../mocks/auth.mock';
import { AppButtonComponent } from '@/shared/components/app-button/app-button.component';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [FormsModule, AppButtonComponent, LucideDynamicIcon],
  templateUrl: './login-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginModalComponent {
  readonly authenticated = output<typeof AUTH_USERS[number]>();
  readonly closed = output<void>();
  readonly errorMessage = signal('');
  readonly showPassword = signal(false);
  readonly email = signal(APP_CONFIG.demoCredentials.email);
  readonly password = signal('');

  login(): void {
    const user = AUTH_USERS.find((item) => item.email.toLowerCase() === this.email().trim().toLowerCase());
    if (!user || this.password() !== APP_CONFIG.demoCredentials.password) {
      this.errorMessage.set('Login ou senha inválidos. Use os dados de demonstração.');
      return;
    }
    this.errorMessage.set('');
    this.authenticated.emit(user);
  }

  useDemo(): void {
    this.email.set(APP_CONFIG.demoCredentials.email);
    this.password.set(APP_CONFIG.demoCredentials.password);
    this.login();
  }
}
