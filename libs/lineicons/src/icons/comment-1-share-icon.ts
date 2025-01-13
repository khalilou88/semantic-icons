import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-comment-1-share-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.368 8.12399C13.1535 7.90949 12.8309 7.84532 12.5507 7.96141C12.2704 8.0775 12.0877 8.35097 12.0877 8.65432V9.66172C9.66594 10.0238 7.80862 12.1126 7.80862 14.6352C7.80862 14.9982 7.84719 15.353 7.92074 15.6955C7.99497 16.0412 8.3005 16.288 8.65402 16.288C9.00755 16.288 9.31307 16.0412 9.3873 15.6955C9.67709 14.3461 10.7393 13.2835 12.0877 12.9916V13.8636C12.0877 14.167 12.2704 14.4404 12.5507 14.5565C12.8309 14.6726 13.1535 14.6084 13.368 14.3939L15.9727 11.7893C16.1133 11.6486 16.1923 11.4579 16.1923 11.259C16.1923 11.0601 16.1133 10.8693 15.9727 10.7286L13.368 8.12399Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.50002 12.0957C2.50002 6.849 6.75332 2.5957 12 2.5957C17.2467 2.5957 21.5 6.849 21.5 12.0957C21.5 17.3424 17.2467 21.5957 12 21.5957H3.25002C2.94668 21.5957 2.6732 21.413 2.55711 21.1327C2.44103 20.8525 2.50519 20.5299 2.71969 20.3154L4.77303 18.262C3.35633 16.603 2.50002 14.4488 2.50002 12.0957ZM12 4.0957C7.58174 4.0957 4.00002 7.67742 4.00002 12.0957C4.00002 14.305 4.89463 16.304 6.34317 17.7526C6.48382 17.8932 6.56284 18.084 6.56284 18.2829C6.56284 18.4818 6.48382 18.6726 6.34317 18.8132L5.06068 20.0957H12C16.4183 20.0957 20 16.514 20 12.0957C20 7.67742 16.4183 4.0957 12 4.0957Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiComment1ShareIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
