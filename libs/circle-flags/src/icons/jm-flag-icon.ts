import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-jm-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#333"
        d="M23.3 488.6 0 465V47.1l23.4-23.7 464 464 24.6-22.6V47.1l-24.5-22.7z"
      />
      <svg:path
        fill="#6da544"
        d="M23.3 23.3 47.1 0h417.7l23.8 23.4-464 464L47 512h418l22.6-24.5z"
      />
      <svg:path
        fill="#ffda44"
        d="M0 0v47.1L208.8 256 0 464.9V512h47.1L256 303.2 464.9 512H512v-47L303.1 256 512 47.2V0h-47.2L256 208.9 47 0z"
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
export class SiJmFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
