import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-braintrust-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Braintrust</svg:title>
    <svg:path
      d="M0 12.002C0 5.372 5.374-.002 12.001-.002 18.626-.002 24 5.372 24 12.002c0 6.625-5.374 12-11.999 12h-9.98a2.01 2.01 0 0 1-2.013-2.013V12.01zm0 0"
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
export class SiBraintrustIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
