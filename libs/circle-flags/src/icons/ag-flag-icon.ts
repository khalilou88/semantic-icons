import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-ag-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#333" d="M0 .4h512l-34 229H36z" />
      <svg:path
        fill="#ffda44"
        d="m367.3 205.3-109.7 19.4-112.9-19.4 45.5-21.3-24.2-44 49.3 9.4 6.3-49.9 34.4 36.7 34.4-36.6 6.3 50L346 140l-24.2 44z"
      />
      <svg:path fill="#0052b4" d="M25.6 205.3h466.8L257 439.5z" />
      <svg:path fill="#eee" d="M34 307.4h446L256 511.6z" />
      <svg:path fill="#a2001d" d="m0 511.6 256 .4L0 .4zm256 .4 256-.4V0z" />
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
export class SiAgFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
