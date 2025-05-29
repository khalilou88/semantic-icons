import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-color-wand-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect
      width="63.03"
      height="378.2"
      x="280.48"
      y="122.9"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
      rx="31.52"
      transform="rotate(-45 312.002 311.994)"
    />
    <svg:path
      d="M178.38 178.38a31.64 31.64 0 0 0 0 44.75L223.25 268 268 223.25l-44.87-44.87a31.64 31.64 0 0 0-44.75 0"
    />
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="32"
      d="M48 192h48M90.18 90.18l33.94 33.94M192 48v48M293.82 90.18l-33.94 33.94M124.12 259.88l-33.94 33.94"
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
export class SiColorWandOutlineIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
