import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-kyocera-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Kyocera</svg:title>
    <svg:path
      d="M9.677 4.645L2.323 12V4.645h7.354zm-7.354 14.71h7.355L2.323 12v7.355zm7.354 0L17.032 12 9.677 4.645v14.71zM21.677 0h-7.355L9.677 4.645h7.355V12l4.645-4.645V0zm-12 19.355L14.323 24h7.355v-7.355L17.032 12v7.355H9.677z"
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
export class SiKyoceraIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#DF0522');
}
