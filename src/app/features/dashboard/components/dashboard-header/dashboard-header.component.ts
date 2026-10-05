import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { UserOption } from '@/core/models/system.model';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './dashboard-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardHeaderComponent {
  readonly user = input<UserOption | null>(null);
  readonly loginRequested = output<void>();
  readonly logoutRequested = output<void>();
}
