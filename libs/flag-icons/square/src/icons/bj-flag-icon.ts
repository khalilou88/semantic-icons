import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-bj-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="bj-a">
        <svg:path fill="gray" d="M67.6-154h666v666h-666z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g clip-path="url(#bj-a)" transform="translate(-52 118.4)scale(.7688)">
      <svg:g fill-rule="evenodd" stroke-width="1pt">
        <svg:path fill="#319400" d="M0-154h333v666H0z" />
        <svg:path fill="#ffd600" d="M333-154h666v333H333z" />
        <svg:path fill="#de2110" d="M333 179h666v333H333z" />
      </svg:g>
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
export class SiBjFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
