import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-gg-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#fff" d="M0 0h512v512H0z" />
    <svg:path fill="#e8112d" d="M192 0h128v512H192z" />
    <svg:path fill="#e8112d" d="M0 187.7h512v136.6H0z" />
    <svg:path
      id="gg-a"
      fill="#f9dd16"
      d="m46 305.8 23.3-25h210v-49.7h-210L46 206.2z"
    />
    <svg:use
      xlink:href="#gg-a"
      width="36"
      height="24"
      transform="matrix(0 1.06667 -.9375 0 496 -17)"
    />
    <svg:use
      xlink:href="#gg-a"
      width="36"
      height="24"
      transform="matrix(0 -1.06667 .9375 0 16 529)"
    />
    <svg:use
      xlink:href="#gg-a"
      width="36"
      height="24"
      transform="rotate(180 256 256)"
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
export class SiGgFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
