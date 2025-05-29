import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-albums-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect
      width="384"
      height="256"
      x="64"
      y="176"
      rx="28.87"
      ry="28.87"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:path
      d="M144 80h224M112 128h288"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-miterlimit="10"
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
export class SiAlbumsOutlineIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
