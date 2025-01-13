import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-telefonica-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Telef&#243;nica</svg:title>
    <svg:path
      d="M7.162 3.581a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0m8.419 0a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0m8.419 0a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0M15.581 12a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0m0 8.419a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTelefonicaIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#0066FF');
}
