import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-star-sharp-disabled-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7.21481 8.27571L2.21967 3.28057C1.92678 2.98768 1.92678 2.51281 2.21967 2.21991C2.51256 1.92702 2.98744 1.92702 3.28033 2.21991L21.7794 20.7189C22.0722 21.0118 22.0722 21.4867 21.7794 21.7796C21.4865 22.0725 21.0116 22.0725 20.7187 21.7796L18.3107 19.3716L18.3703 19.555C18.4707 19.864 18.3607 20.2026 18.0978 20.3936C17.835 20.5845 17.479 20.5845 17.2161 20.3936L11.9996 16.6035L6.78296 20.3936C6.52009 20.5845 6.16415 20.5845 5.90128 20.3936C5.63841 20.2026 5.52842 19.864 5.62883 19.555L7.62139 13.4226L2.40479 9.63247C2.14193 9.44149 2.03193 9.10297 2.13234 8.79395C2.23275 8.48493 2.52071 8.27571 2.84563 8.27571L7.21481 8.27571ZM15.9744 17.0353L8.71481 9.77571H5.1539L8.9439 12.5293C9.20677 12.7203 9.31676 13.0588 9.21636 13.3678L7.7687 17.8233L11.5587 15.0697C11.8216 14.8787 12.1775 14.8787 12.4404 15.0697L16.2304 17.8233L15.9744 17.0353Z"
      fill="#323544"
    />
    <svg:path
      d="M18.8452 9.77571L15.3808 12.2927L16.4547 13.3666L21.5943 9.63247C21.8572 9.44149 21.9672 9.10297 21.8668 8.79395C21.7664 8.48493 21.4784 8.27571 21.1535 8.27571L14.7054 8.27571L12.7128 2.14324C12.6124 1.83422 12.3245 1.625 11.9996 1.625C11.6746 1.625 11.3867 1.83422 11.2863 2.14324L9.80136 6.71327L10.9918 7.90368L11.9996 4.80205L13.4472 9.25747C13.5476 9.56649 13.8356 9.77571 14.1605 9.77571H18.8452Z"
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
export class SiStarSharpDisabledIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
