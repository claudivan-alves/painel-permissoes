import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { AccessState } from '@/core/enums/access-state.enum';
import { UserOption } from '@/core/models/system.model';
import { AUTH_USERS } from '@/features/auth/mocks/auth.mock';
import { LoginModalComponent } from '@/features/auth/components/login-modal/login-modal.component';
import { SYSTEMS } from '@/features/systems/systems.mock';
import { DashboardHeaderComponent } from '../../components/dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from '../../components/dashboard-footer/dashboard-footer.component';
import { FilterPanelComponent } from '../../components/filter-panel/filter-panel.component';
import { SystemCardComponent } from '@/shared/components/system-card/system-card.component';
import { LucideDynamicIcon } from '@lucide/angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardHeaderComponent, DashboardFooterComponent, FilterPanelComponent, SystemCardComponent, LoginModalComponent, LucideDynamicIcon],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  readonly state = signal<AccessState>(AccessState.Locked);
  readonly currentUser = signal<UserOption | null>(null);
  readonly showLogin = signal(false);
  readonly secretary = signal('');
  readonly workplace = signal('');
  readonly selectedUser = signal('');
  readonly systems = SYSTEMS;
  readonly users = AUTH_USERS;
  readonly permissions = signal<Record<string, string>>({});
  readonly isAuthenticated = computed(() => this.state() === AccessState.Authenticated);
  readonly selectedUserName = computed(() => this.users.find((user) => user.id === this.selectedUser())?.name ?? 'Nenhum usuário');
  readonly permissionCount = computed(() => Object.values(this.permissions()).filter(Boolean).length);

  authenticate(user: UserOption): void {
    this.currentUser.set(user);
    this.state.set(AccessState.Authenticated);
    this.selectedUser.set(user.id);
    this.showLogin.set(false);
  }

  logout(): void {
    this.currentUser.set(null);
    this.state.set(AccessState.Locked);
    this.secretary.set('');
    this.workplace.set('');
    this.selectedUser.set('');
    this.permissions.set({});
  }

  changeFilter(event: { field: 'secretary' | 'workplace' | 'user'; value: string }): void {
    if (event.field === 'secretary') this.secretary.set(event.value);
    if (event.field === 'workplace') this.workplace.set(event.value);
    if (event.field === 'user') this.selectedUser.set(event.value);
  }

  resetFilters(): void {
    this.secretary.set('');
    this.workplace.set('');
    this.selectedUser.set(this.currentUser()?.id ?? '');
  }

  updatePermission(systemId: string, permissionId: string): void {
    this.permissions.update((current) => ({ ...current, [systemId]: permissionId }));
  }
}
