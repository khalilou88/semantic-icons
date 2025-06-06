import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hdr-auto-select-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10 16H7.25c-.41 0-.75.34-.75.75v4.5c0 .41.34.75.75.75H10c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5zm0 4.5H8v-3h2v3zM4.25 16c-.41 0-.75.34-.75.75V18h-2v-1.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V19.5h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-4.5c0-.41-.34-.75-.75-.75zm19 2.5H22v-1.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.25h-1.25c-.41 0-.75.34-.75.75s.34.75.75.75h1.25v1.25c0 .41.34.75.75.75s.75-.34.75-.75V20h1.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zM16.5 16h-2.75c-.41 0-.75.34-.75.75v4.56c0 .38.31.69.69.69h.11c.38 0 .69-.31.69-.69V20h1.1l.72 1.59c.11.25.36.41.63.41.5 0 .83-.51.64-.97l-.48-1.13c.5-.3.9-.8.9-1.4v-1c0-.83-.67-1.5-1.5-1.5zm0 2.5h-2v-1h2v1zM11.97 5.3l-1.02 2.89h2.1L12.03 5.3z"
    />
    <svg:path
      d="M12 2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm2.44 9c-.24 0-.45-.15-.53-.38l-.49-1.41h-2.83l-.5 1.41a.564.564 0 1 1-1.06-.38l2.12-5.65a.906.906 0 0 1 1.7 0l2.12 5.65a.56.56 0 0 1-.53.76z"
    />
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
export class SiHdrAutoSelectIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
