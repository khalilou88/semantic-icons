import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-landscape-ai-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.2134 8.62811L5.96682 9.19379C5.78637 9.60792 5.21357 9.60792 5.03312 9.19379L4.78656 8.62811C4.34706 7.61947 3.55545 6.81641 2.56767 6.37708L1.80805 6.03922C1.39732 5.85653 1.39732 5.25881 1.80805 5.07612L2.5252 4.75714C3.53838 4.30651 4.34417 3.47373 4.77612 2.43083L5.02932 1.81953C5.20578 1.39349 5.79417 1.39349 5.97063 1.81953L6.22382 2.43083C6.65577 3.47373 7.46158 4.30651 8.4748 4.75714L9.19188 5.07612C9.60271 5.25881 9.60271 5.85653 9.19188 6.03922L8.43228 6.37708C7.44451 6.81641 6.65288 7.61947 6.2134 8.62811ZM11.2381 12.2698L16 21H23L15 6L11.2381 12.2698ZM14 21L8 10L2 21H14Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLandscapeAiFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
