import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-arrow-forward-circle-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208m-224 80.09L303.58 272H154v-32h149.58L240 175.91l22.71-22.54L364.54 256 262.7 358.63Z"
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
export class SiArrowForwardCircleSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
