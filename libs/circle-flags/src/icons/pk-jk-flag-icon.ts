import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pk-jk-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#ff9811" d="M0 0h224l32 88-32 88-96 32L0 176Z" />
      <svg:path
        fill="#eee"
        d="m0 224 256-32 256 32v48l-32 24 32 24v48l-32 24 32 24v48l-256 32L0 464v-48l32-24-32-24v-48l32-24-32-24Z"
      />
      <svg:path
        fill="#496e2d"
        d="M224 0v176H0v48h512V0ZM0 272v48h512v-48zm0 96v48h512v-48zm0 96v48h512v-48z"
      />
      <svg:circle cx="355.6" cy="110.2" r="80.5" fill="#eee" />
      <svg:circle cx="376.2" cy="91.9" r="73.8" fill="#496e2d" />
      <svg:path fill="#eee" d="m370 76 47-20-27 44-4-50 34 38z" />
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
export class SiPkJkFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
