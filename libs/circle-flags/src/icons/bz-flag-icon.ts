import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-bz-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#0052b4"
        d="m0 44.5 257.8-23.7L512 44.5v423l-252.5 26L0 467.5z"
      />
      <svg:circle cx="256" cy="256" r="122.4" fill="#eee" />
      <svg:circle cx="256" cy="256" r="100.2" fill="#6da544" />
      <svg:circle cx="256" cy="256" r="66.8" fill="#eee" />
      <svg:path
        fill="#0052b4"
        d="M256 239.3 219.8 256v27.8l36.2 22.3 36.2-22.3V256z"
      />
      <svg:path fill="#ffda44" d="M219.8 222.6h72.4V256h-72.4z" />
      <svg:path fill="#a2001d" d="M0 0h512v44.5H0zm0 467.5h512V512H0z" />
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
export class SiBzFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
