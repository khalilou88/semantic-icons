import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-css-design-awards-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>CSS Design Awards</svg:title>
    <svg:path
      d="m7.46.93-7.46 7.38 3.73 3.73 3.74 3.65 3.73 3.65 3.74-3.65-7.47-7.38 7.47-7.4zm5.33 3.73-3.67 3.65 7.39 7.38-7.46 7.4h7.46l3.76-3.66 3.73-3.73-3.73-3.65-3.74-3.73z"
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
export class SiCSSDesignAwardsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#280FEE');
}
