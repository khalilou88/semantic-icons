import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-film-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect
      width="416"
      height="320"
      x="48"
      y="96"
      rx="28"
      ry="28"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:rect
      width="80"
      height="80"
      x="384"
      y="336"
      rx="28"
      ry="28"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:rect
      width="80"
      height="80"
      x="384"
      y="256"
      rx="28"
      ry="28"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:rect
      width="80"
      height="80"
      x="384"
      y="176"
      rx="28"
      ry="28"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:rect
      width="80"
      height="80"
      x="384"
      y="96"
      rx="28"
      ry="28"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:rect
      width="80"
      height="80"
      x="48"
      y="336"
      rx="28"
      ry="28"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:rect
      width="80"
      height="80"
      x="48"
      y="256"
      rx="28"
      ry="28"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:rect
      width="80"
      height="80"
      x="48"
      y="176"
      rx="28"
      ry="28"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:rect
      width="80"
      height="80"
      x="48"
      y="96"
      rx="28"
      ry="28"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:rect
      width="256"
      height="160"
      x="128"
      y="96"
      rx="28"
      ry="28"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:rect
      width="256"
      height="160"
      x="128"
      y="256"
      rx="28"
      ry="28"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32px"
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
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
