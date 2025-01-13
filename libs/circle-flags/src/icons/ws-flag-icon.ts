import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ws-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#d80027" d="M0 256 256 0h256v512H0z" />
      <svg:path fill="#0052b4" d="M0 0h256v256H0z" />
      <svg:path
        fill="#eee"
        d="m205 167 4.2 12.7h13.4l-10.8 7.9 4.1 12.7-10.8-7.8-10.9 7.8 4.1-12.7-10.8-7.9h13.4zM137.8 66.8l7 21.2H167l-18.1 13.2 6.9 21.2-18.1-13.1-18 13.1 6.8-21.2-18-13.2h22.3zM204.5 89l6.9 21.3h22.3l-18 13.1 6.9 21.3-18.1-13.1-18.1 13.1 7-21.3-18.2-13.1h22.4zm-52.8 89 6.9 21.3H181l-18.1 13.2 6.9 21.2-18.1-13.1-18 13.1 6.8-21.2-18-13.2h22.3zm-58.5-55.6 6.9 21.3h22.3l-18 13.1 6.9 21.3-18.1-13.2L75 178.1l6.9-21.3-18-13.1h22.3z"
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
export class SiWsFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
