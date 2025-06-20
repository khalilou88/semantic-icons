import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bulma-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Bulma</svg:title>
    <svg:path
      d="M11.25 0l-6 6 -1.5 10.5 7.5 7.5 9 -6 -6 -6 4.5 -4.5 -7.5 -7.5Z"
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
export class SiBulmaIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#00D1B2');
}
