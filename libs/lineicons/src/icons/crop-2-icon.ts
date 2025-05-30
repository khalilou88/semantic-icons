import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-crop-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.02344 2.75C6.02344 2.33579 5.68765 2 5.27344 2C4.85922 2 4.52344 2.33579 4.52344 2.75V4.5H2.77344C2.35922 4.5 2.02344 4.83579 2.02344 5.25C2.02344 5.66422 2.35922 6 2.77344 6L4.52344 6L4.52344 17.25C4.52344 18.4926 5.5308 19.5 6.77344 19.5H18.0234V21.25C18.0234 21.6642 18.3592 22 18.7734 22C19.1877 22 19.5234 21.6642 19.5234 21.25V19.5H21.2734C21.6877 19.5 22.0234 19.1642 22.0234 18.75C22.0234 18.3358 21.6877 18 21.2734 18H19.5234V5.56066L21.3038 3.78033C21.5967 3.48744 21.5967 3.01256 21.3038 2.71967C21.0109 2.42678 20.536 2.42678 20.2431 2.71967L18.4628 4.5L6.02344 4.5V2.75ZM16.9628 6L6.02344 16.9393L6.02344 6L16.9628 6ZM7.0841 18L18.0234 7.06066V18L7.0841 18Z"
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
export class SiCrop2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
