import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bq-bo-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#eee"
        d="M113.7 119.8 276 0h236v31.7L306 289.5 31.6 512H0V276z"
      />
      <svg:path fill="#ffda44" d="M0 0v276L276 0H0z" />
      <svg:path fill="#0052b4" d="M512 31.7 31.7 512H512V31.7z" />
      <svg:path
        fill="#333"
        d="m255 245.7 22.1-12-22-12a78 78 0 0 0-65-65l-12-22-12 22a78 78 0 0 0-65 65l-22 12 22 12a78 78 0 0 0 65 65l12 22.1 12-22a78 78 0 0 0 65-65zm-77 32.6a44.5 44.5 0 1 1 0-89 44.5 44.5 0 0 1 0 89z"
      />
      <svg:path
        fill="#d80027"
        d="m178 200.3 9.7 16.7H207l-9.6 16.7 9.6 16.7h-19.3l-9.6 16.7-9.7-16.7h-19.2l9.6-16.7-9.6-16.7h19.2z"
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
export class SiBqBoFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
