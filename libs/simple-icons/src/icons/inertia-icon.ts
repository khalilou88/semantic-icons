import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-inertia-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Inertia</svg:title>
    <svg:path
      d="M6.901 5.331H0L6.669 12 0 18.669h6.901L13.571 12 6.9 5.331zm10.43 0H10.43L17.099 12l-6.67 6.669h6.902L24 12l-6.669-6.669z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiInertiaIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#9553E9');
}
