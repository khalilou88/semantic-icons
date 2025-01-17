import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-flask-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M452.32 365L327.4 167.12a48.07 48.07 0 01-7.4-25.64V64h15.56c8.61 0 16-6.62 16.43-15.23A16 16 0 00336 32H176.45c-8.61 0-16 6.62-16.43 15.23A16 16 0 00176 64h16v77.48a47.92 47.92 0 01-7.41 25.63L59.68 365a74 74 0 00-2.5 75.84C70.44 465.19 96.36 480 124.13 480h263.74c27.77 0 53.69-14.81 66.95-39.21a74 74 0 00-2.5-75.79zM211.66 184.2A79.94 79.94 0 00224 141.48V68a4 4 0 014-4h56a4 4 0 014 4v73.48a79.94 79.94 0 0012.35 42.72l57.8 91.53a8 8 0 01-6.78 12.27H160.63a8 8 0 01-6.77-12.27z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFlaskIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
