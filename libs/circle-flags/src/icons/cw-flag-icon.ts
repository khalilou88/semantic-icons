import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cw-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#0052b4"
        d="M0 0h512v342.3l-22 34.2 22 32.5v103H0V409l25.4-31L0 342.2z"
      />
      <svg:path
        fill="#eee"
        d="m175.2 164.2 13.8 42.5h44.7L197.6 233l13.8 42.5-36.2-26.3-36.1 26.3 13.8-42.5-36.2-26.3h44.7zm-76.7-44.5 8.2 25.5h26.9L111.9 161l8.3 25.5-21.7-15.7-21.7 15.7L85 161l-21.7-15.7h26.9z"
      />
      <svg:path fill="#ffda44" d="M0 342.3h512V409H0z" />
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
export class SiCwFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
