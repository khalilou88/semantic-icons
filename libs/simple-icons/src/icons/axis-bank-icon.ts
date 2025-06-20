import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-axis-bank-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Axis Bank</svg:title>
    <svg:path
      d="M11.978 1.596 0 22.404h7.453l8.265-14.369Zm.027 12.896 4.533 7.903H24l-4.533-7.903z"
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
export class SiAxisBankIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#971A4D');
}
