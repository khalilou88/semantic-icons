import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-today-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M32 456a24 24 0 0024 24h400a24 24 0 0024-24V176H32zm80-238.86a9.14 9.14 0 019.14-9.14h109.72a9.14 9.14 0 019.14 9.14v109.72a9.14 9.14 0 01-9.14 9.14H121.14a9.14 9.14 0 01-9.14-9.14zM456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 00-24 23.77V144h448V87.77A23.8 23.8 0 00456 64z"
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
export class SiTodaySharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
