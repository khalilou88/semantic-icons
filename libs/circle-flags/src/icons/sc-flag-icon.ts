import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sc-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#0052b4" d="M0 0v332l150.9-138.5L225.2 0z" />
      <svg:path fill="#ffda44" d="M273.1 253.3 512 0H225.2L0 332v80.2z" />
      <svg:path fill="#d80027" d="M512 0 0 412.2v50.4L277.9 390 512 256z" />
      <svg:path fill="#eee" d="M0 462.6 512 256v133.5l-223.9 78.8L0 488.4z" />
      <svg:path fill="#6da544" d="m512 389.5-512 99V512h512z" />
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
export class SiScFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
