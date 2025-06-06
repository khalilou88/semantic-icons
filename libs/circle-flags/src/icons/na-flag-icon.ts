import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-na-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#eee"
        d="m0 401.9 160.6-237.1L401.9 0H449l63 63v47.3L350.3 339.2 110.3 512H63L0 449z"
      />
      <svg:path fill="#a2001d" d="M0 512h63L512 63V0h-63L0 449z" />
      <svg:path fill="#0052b4" d="M0 0v401.9L401.9 0z" />
      <svg:path fill="#496e2d" d="M512 512V110.3L110.3 512z" />
      <svg:path
        fill="#ffda44"
        d="m211.5 144.7-28.7 13.5L198 186l-31.2-6-4 31.5-21.6-23.2-21.7 23.2-4-31.5-31 6 15.2-27.8L71 144.7l28.7-13.5-15.3-27.8 31.1 6 4-31.5 21.7 23.2L163 78l4 31.5 31-6-15.2 27.8z"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNaFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
