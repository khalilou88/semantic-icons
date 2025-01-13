import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cd-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#338af3" d="M0 0h401.9L512 110.3V512H110.3L0 401.9z" />
      <svg:path
        fill="#ffda44"
        d="M401.9 0 0 401.9V449l63 63h47.3L512 110.3V63L449 0z"
      />
      <svg:path fill="#d80027" d="M449 0 0 449v63h63L512 63V0h-63z" />
      <svg:path
        fill="#ffda44"
        d="m136.4 78 13.8 42.4H195l-36 26.3 13.7 42.5-36.2-26.3-36 26.3 13.7-42.5L78 120.4h44.7z"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCdFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
