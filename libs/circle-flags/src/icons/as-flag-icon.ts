import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-as-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#eee" d="M512 20.4V490L23.8 255.8z" />
      <svg:path
        fill="#a2001d"
        d="M445.2 246.5h-30.5c8-9.6 7.5-23.7-1.5-32.7a24.2 24.2 0 0 0 0-34.2l-.5.5a25 25 0 0 0 .5-34.8l-137 137a23.9 23.9 0 0 0 34 0l2.6-2.5 65.6-6v28.3h22.3v-30.2l33.4-3z"
      />
      <svg:path fill="#ffda44" d="M278.3 311.7 256 300.5l22.3-11.1H423v22.3z" />
      <svg:path fill="#0052b4" d="M0 0v512h512L28.7 256.2 512 0z" />
      <svg:path
        fill="#d80027"
        d="M512 0 0 256l512 256v-22L43.8 256 512 20.4z"
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
export class SiAsFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
