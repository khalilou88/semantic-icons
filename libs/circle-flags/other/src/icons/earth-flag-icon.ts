import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-earth-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#0052b4" d="M0 0h512v512H0z" />
      <svg:path
        fill="#eee"
        d="M302.7 233.7a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206zm0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83z"
      />
      <svg:path
        fill="#eee"
        d="M209.4 72.3a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206zm0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83z"
      />
      <svg:path
        fill="#eee"
        d="M302.7 72.3a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206zm0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83z"
      />
      <svg:path
        fill="#eee"
        d="M349.2 153a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206zm0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83z"
      />
      <svg:path
        fill="#eee"
        d="M209.4 233.7a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206zm0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83z"
      />
      <svg:path
        fill="#eee"
        d="M162.8 153a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206zm0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83z"
      />
      <svg:path
        fill="#eee"
        d="M256 153.1a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206zm0 20c46 0 83 37 83 83 0 45.9-37 83-83 83s-83-37.1-83-83c0-46 37-83 83-83z"
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
export class SiEarthFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
