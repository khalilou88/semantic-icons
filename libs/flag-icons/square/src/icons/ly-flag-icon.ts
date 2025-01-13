import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ly-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="ly-a">
        <svg:path d="M250 12h500v500H250z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g clip-path="url(#ly-a)" transform="translate(-256 -12.3)scale(1.024)">
      <svg:path fill="#239e46" d="M0 12h1000v500H0z" />
      <svg:path fill="#000001" d="M0 12h1000v375H0z" />
      <svg:path fill="#e70013" d="M0 12h1000v125H0z" />
      <svg:path
        fill="#fff"
        d="M544.2 217.8a54.3 54.3 0 1 0 0 88.4 62.5 62.5 0 1 1 0-88.4M530.4 262l84.1-27.3-52 71.5v-88.4l52 71.5z"
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
export class SiLyFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
