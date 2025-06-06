import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-comment-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.50002 12.0957C2.50002 6.849 6.75332 2.5957 12 2.5957C17.2467 2.5957 21.5 6.849 21.5 12.0957C21.5 17.3424 17.2467 21.5957 12 21.5957H3.25002C2.94668 21.5957 2.6732 21.413 2.55711 21.1327C2.44103 20.8525 2.50519 20.5299 2.71969 20.3154L4.77303 18.262C3.35633 16.603 2.50002 14.4488 2.50002 12.0957ZM12 4.0957C7.58174 4.0957 4.00002 7.67742 4.00002 12.0957C4.00002 14.305 4.89463 16.304 6.34317 17.7526C6.48382 17.8932 6.56284 18.084 6.56284 18.2829C6.56284 18.4818 6.48382 18.6726 6.34317 18.8132L5.06068 20.0957H12C16.4183 20.0957 20 16.514 20 12.0957C20 7.67742 16.4183 4.0957 12 4.0957Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiComment1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
