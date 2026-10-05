import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { PermissionOption, SystemItem } from '@/core/models/system.model';

@Component({
  selector: 'app-system-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './system-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemCardComponent {
  readonly system = input.required<SystemItem>();
  readonly selectedPermission = input('');
  readonly enabled = input(false);
  readonly permissionChanged = output<string>();
  readonly menu = { open: false };

  permissionLabel(): string {
    const selected = this.system().permissions.find((permission) => permission.id === this.selectedPermission());
    return selected?.name ?? 'Sem Permissão';
  }

  selectPermission(permission: PermissionOption): void {
    if (this.enabled()) this.permissionChanged.emit(permission.id);
  }
}
