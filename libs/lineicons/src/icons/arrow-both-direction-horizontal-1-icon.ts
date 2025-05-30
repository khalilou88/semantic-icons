import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-arrow-both-direction-horizontal-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22.0679 11.9341C22.2258 12.0716 22.3257 12.2741 22.3257 12.5C22.3257 12.7249 22.2267 12.9267 22.0699 13.0641L18.1064 17.0302C17.8136 17.3231 17.3387 17.3233 17.0457 17.0305C16.7528 16.7377 16.7526 16.2628 17.0454 15.9698L19.7635 13.25L4.88801 13.25L7.60597 15.9699C7.89876 16.2629 7.89859 16.7377 7.6056 17.0305C7.3126 17.3233 6.83773 17.3231 6.54494 17.0301L2.54761 13.03C2.25496 12.7372 2.25496 12.2626 2.54763 11.9697L6.54496 7.96984C6.83776 7.67686 7.31263 7.6767 7.60562 7.9695C7.8986 8.2623 7.89875 8.73718 7.60595 9.03016L4.88785 11.75L19.7633 11.75L17.0454 9.03014C16.7526 8.73715 16.7528 8.26227 17.0458 7.96948C17.3388 7.67669 17.8136 7.67686 18.1064 7.96986L22.0679 11.9341Z"
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
export class SiArrowBothDirectionHorizontal1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
