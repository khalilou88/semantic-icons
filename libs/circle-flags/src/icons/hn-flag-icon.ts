import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-hn-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#338af3"
        d="M0 0h512v144.7l-40.5 112.6 40.5 110V512H0V367.3l42.2-114L0 144.7z"
      />
      <svg:path fill="#eee" d="M0 144.7h512v222.6H0z" />
      <svg:path
        fill="#338af3"
        d="m157.5 167 8.3 25.5h26.9L171 208.2l8.2 25.5-21.7-15.7-21.7 15.7 8.3-25.5-21.7-15.7h26.9zm0 111.3 8.3 25.5h26.9L171 319.5l8.2 25.5-21.7-15.7-21.7 15.7 8.3-25.5-21.7-15.7h26.9zm197-111.3 8.2 25.5h26.9l-21.7 15.7 8.3 25.5-21.7-15.7-21.7 15.7 8.2-25.5-21.7-15.7h26.9zm0 111.3 8.2 25.5h26.9l-21.7 15.7 8.3 25.5-21.7-15.7-21.7 15.7 8.2-25.5-21.7-15.7h26.9zM256 222.6l8.3 25.5H291L269.4 264l8.3 25.5-21.7-15.8-21.7 15.8 8.3-25.5-21.7-15.8h26.8z"
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
export class SiHnFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
