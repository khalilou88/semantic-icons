import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-upcloud-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>UpCloud</svg:title>
    <svg:path
      d="M22.1155 12.9964a1.8845 1.8845 0 110 3.769H8.6643V11.87h.888v4.0072h12.5849a1.0078 1.0078 0 00.9964-.9964 1.0317 1.0317 0 00-1.0397-.9964H10.397v-.888zm-8.6859-5.7617H8.6643v1.9927h.888V8.1011h3.899a1.0078 1.0078 0 01.9964.9964 1.0653 1.0653 0 01-1.018 1.0397H1.8845a1.8845 1.8845 0 100 3.769h5.8917v-.8881H1.8845a.9964.9964 0 010-1.9928h11.5668a1.8999 1.8999 0 001.8844-1.8845 1.9375 1.9375 0 00-1.9061-1.9061z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiUpcloudIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#7B00FF');
}
