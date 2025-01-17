import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-eu-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:g id="eu-d">
        <svg:g id="eu-b">
          <svg:path id="eu-a" d="m0-1-.3 1 .5.1z" />
          <svg:use xlink:href="#eu-a" transform="scale(-1 1)" />
        </svg:g>
        <svg:g id="eu-c">
          <svg:use xlink:href="#eu-b" transform="rotate(72)" />
          <svg:use xlink:href="#eu-b" transform="rotate(144)" />
        </svg:g>
        <svg:use xlink:href="#eu-c" transform="scale(-1 1)" />
      </svg:g>
    </svg:defs>
    <svg:path fill="#039" d="M0 0h512v512H0z" />
    <svg:g fill="#fc0" transform="translate(256 258.4)scale(25.28395)">
      <svg:use xlink:href="#eu-d" width="100%" height="100%" y="-6" />
      <svg:use xlink:href="#eu-d" width="100%" height="100%" y="6" />
      <svg:g id="eu-e">
        <svg:use xlink:href="#eu-d" width="100%" height="100%" x="-6" />
        <svg:use
          xlink:href="#eu-d"
          width="100%"
          height="100%"
          transform="rotate(-144 -2.3 -2.1)"
        />
        <svg:use
          xlink:href="#eu-d"
          width="100%"
          height="100%"
          transform="rotate(144 -2.1 -2.3)"
        />
        <svg:use
          xlink:href="#eu-d"
          width="100%"
          height="100%"
          transform="rotate(72 -4.7 -2)"
        />
        <svg:use
          xlink:href="#eu-d"
          width="100%"
          height="100%"
          transform="rotate(72 -5 .5)"
        />
      </svg:g>
      <svg:use
        xlink:href="#eu-e"
        width="100%"
        height="100%"
        transform="scale(-1 1)"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEuFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
