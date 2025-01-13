import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-film-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect
      x="48"
      y="96"
      width="416"
      height="320"
      rx="28"
      ry="28"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:rect
      x="384"
      y="336"
      width="80"
      height="80"
      rx="28"
      ry="28"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:rect
      x="384"
      y="256"
      width="80"
      height="80"
      rx="28"
      ry="28"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:rect
      x="384"
      y="176"
      width="80"
      height="80"
      rx="28"
      ry="28"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:rect
      x="384"
      y="96"
      width="80"
      height="80"
      rx="28"
      ry="28"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:rect
      x="48"
      y="336"
      width="80"
      height="80"
      rx="28"
      ry="28"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:rect
      x="48"
      y="256"
      width="80"
      height="80"
      rx="28"
      ry="28"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:rect
      x="48"
      y="176"
      width="80"
      height="80"
      rx="28"
      ry="28"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:rect
      x="48"
      y="96"
      width="80"
      height="80"
      rx="28"
      ry="28"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:rect
      x="128"
      y="96"
      width="256"
      height="160"
      rx="28"
      ry="28"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:rect
      x="128"
      y="256"
      width="256"
      height="160"
      rx="28"
      ry="28"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFilmOutlineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
