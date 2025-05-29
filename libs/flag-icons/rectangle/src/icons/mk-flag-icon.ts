import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mk-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#d20000" d="M0 0h640v480H0z" />
    <svg:path
      fill="#ffe600"
      d="M0 0h96l224 231.4L544 0h96L0 480h96l224-231.4L544 480h96zm640 192v96L0 192v96zM280 0l40 205.7L360 0zm0 480 40-205.7L360 480z"
    />
    <svg:circle
      cx="320"
      cy="240"
      r="77.1"
      fill="#ffe600"
      stroke="#d20000"
      stroke-width="17.1"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMkFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 480');
}
