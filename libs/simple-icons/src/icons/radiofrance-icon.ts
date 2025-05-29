import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-radiofrance-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Radio France</svg:title>
    <svg:path
      d="M12 24C6.144 24 1.397 19.497 1.397 13.94a9.6 9.6 0 0 1 .208-1.991h5.99a4.4 4.4 0 0 0-.474 1.991c0 2.557 2.184 4.63 4.88 4.63.6 0 1.175-.104 1.706-.292v5.592Q12.872 24 12 24m10.355-7.888H16.31a4.4 4.4 0 0 0 .57-2.172c0-2.557-2.184-4.63-4.879-4.63-.504 0-.99.073-1.448.208V0h5.25v4.546c3.978 1.45 6.802 5.109 6.802 9.394a9.6 9.6 0 0 1-.249 2.172"
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
export class SiRadiofranceIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#2B00E7');
}
