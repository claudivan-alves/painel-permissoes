import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  template: `
    <select [value]="value()" [disabled]="disabled()" [attr.aria-label]="label()" class="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400" (change)="changed.emit($any($event.target).value)">
      <option value="">{{ placeholder() }}</option>
      @for (option of options(); track option.value) { <option [value]="option.value">{{ option.label }}</option> }
    </select>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSelectComponent {
  readonly label = input('');
  readonly value = input('');
  readonly placeholder = input('Selecione');
  readonly disabled = input(false);
  readonly options = input<ReadonlyArray<{ value: string; label: string }>>([]);
  readonly changed = output<string>();
}
