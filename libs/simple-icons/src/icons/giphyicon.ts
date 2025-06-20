import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-giphyicon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>GIPHY</svg:title>
    <svg:path
      d="M2.666 0v24h18.668V8.666l-2.668 2.668v10H5.334V2.668H10L12.666 0zm10.668 0v8h8V5.334h-2.668V2.668H16V0"
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
export class SiGIPHYIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FF6666');
}
