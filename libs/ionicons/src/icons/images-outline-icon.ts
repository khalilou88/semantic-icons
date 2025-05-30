import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-images-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M432 112V96a48.14 48.14 0 0 0-48-48H64a48.14 48.14 0 0 0-48 48v256a48.14 48.14 0 0 0 48 48h16"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:rect
      width="400"
      height="336"
      x="96"
      y="128"
      rx="45.99"
      ry="45.99"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:ellipse
      cx="372.92"
      cy="219.64"
      rx="30.77"
      ry="30.55"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32px"
    />
    <svg:path
      d="M342.15 372.17 255 285.78a30.93 30.93 0 0 0-42.18-1.21L96 387.64M265.23 464l118.59-117.73a31 31 0 0 1 41.46-1.87L496 402.91"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32px"
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
export class SiImagesOutlineIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
