import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { LucideDynamicIcon} from '@lucide/angular';
import { AppSelectComponent } from '@/shared/components/app-select/app-select.component';
import { UserOption } from '@/core/models/system.model';

@Component({
  selector: 'app-filter-panel',
  standalone: true,
  imports: [AppSelectComponent, LucideDynamicIcon],
  templateUrl: './filter-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterPanelComponent {
  readonly enabled = input(false);
  readonly users = input<UserOption[]>([]);
  readonly secretary = input('');
  readonly workplace = input('');
  readonly user = input('');
  readonly filterChanged = output<{ field: 'secretary' | 'workplace' | 'user'; value: string }>();
  readonly reset = output<void>();

  readonly secretaries = [
    { value: 'administracao', label: 'Secretaria de Administração' },
    { value: 'transito', label: 'Secretaria de Mobilidade' },
    { value: 'educacao', label: 'Secretaria de Educação' }
  ];

  readonly workplaces = [
    { value: 'sede', label: 'Sede administrativa' },
    { value: 'atendimento', label: 'Unidade de atendimento' },
    { value: 'fiscalizacao', label: 'Núcleo de fiscalização' }
  ];

  get userOptions() {
    return this.users().map((user) => ({ value: user.id, label: user.name }));
  }
}
