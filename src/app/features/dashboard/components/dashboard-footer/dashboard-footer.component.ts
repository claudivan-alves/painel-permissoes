import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';

@Component({
  selector: 'app-dashboard-footer',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './dashboard-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardFooterComponent {}
