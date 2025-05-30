import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-scale-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect
      width="416"
      height="416"
      x="48"
      y="48"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
      rx="96"
    />
    <svg:path
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
      d="M388.94 151.56c-24.46-22.28-68.72-51.4-132.94-51.4s-108.48 29.12-132.94 51.4a34.66 34.66 0 0 0-3.06 48.08l33.32 39.21a26.07 26.07 0 0 0 33.6 5.21c15.92-9.83 40.91-21.64 69.1-21.64s53.18 11.81 69.1 21.64a26.07 26.07 0 0 0 33.6-5.21L392 199.64a34.66 34.66 0 0 0-3.06-48.08Z"
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
export class SiScaleOutlineIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
