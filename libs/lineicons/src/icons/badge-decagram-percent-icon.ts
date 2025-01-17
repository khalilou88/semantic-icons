import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-badge-decagram-percent-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.21947 10.4686C9.90983 10.4686 10.4695 9.90899 10.4695 9.21863C10.4695 8.52828 9.90983 7.96863 9.21947 7.96863C8.52912 7.96863 7.96947 8.52828 7.96947 9.21863C7.96947 9.90899 8.52912 10.4686 9.21947 10.4686Z"
      fill="#323544"
    />
    <svg:path
      d="M8.20184 14.7381C7.90894 15.031 7.90894 15.5059 8.20184 15.7988C8.49473 16.0917 8.9696 16.0917 9.2625 15.7988L15.8 9.26125C16.0929 8.96835 16.0929 8.49348 15.8 8.20059C15.5071 7.90769 15.0323 7.90769 14.7394 8.20059L8.20184 14.7381Z"
      fill="#323544"
    />
    <svg:path
      d="M16.032 14.7811C16.032 15.4715 15.4723 16.0311 14.782 16.0311C14.0916 16.0311 13.532 15.4715 13.532 14.7811C13.532 14.0908 14.0916 13.5311 14.782 13.5311C15.4723 13.5311 16.032 14.0908 16.032 14.7811Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.4772 2.46978C12.605 1.62596 11.2207 1.62596 10.3484 2.46978L9.44622 3.34257C9.27996 3.50341 9.04877 3.57853 8.81972 3.54613L7.57682 3.37033C6.37515 3.20036 5.25523 4.01404 5.04554 5.20941L4.82866 6.4458C4.78869 6.67366 4.64581 6.87032 4.44146 6.97874L3.3326 7.56707C2.26053 8.13589 1.83276 9.45244 2.36574 10.5428L2.91701 11.6705C3.01861 11.8783 3.01861 12.1214 2.91701 12.3293L2.36574 13.457C1.83275 14.5473 2.26053 15.8639 3.3326 16.4327L4.44146 17.021C4.64581 17.1294 4.78869 17.3261 4.82866 17.554L5.04554 18.7904C5.25523 19.9857 6.37516 20.7994 7.57682 20.6294L8.81972 20.4536C9.04877 20.4212 9.27996 20.4964 9.44622 20.6572L10.3484 21.53C11.2207 22.3738 12.605 22.3738 13.4772 21.53L14.3794 20.6572C14.5457 20.4964 14.7769 20.4212 15.0059 20.4536L16.2488 20.6294C17.4505 20.7994 18.5704 19.9857 18.7801 18.7904L18.997 17.554C19.037 17.3261 19.1799 17.1294 19.3842 17.021L20.4931 16.4327C21.5651 15.8639 21.9929 14.5473 21.4599 13.457L20.9087 12.3293C20.8071 12.1214 20.8071 11.8783 20.9087 11.6705L21.4599 10.5428C21.9929 9.45244 21.5651 8.13589 20.4931 7.56707L19.3842 6.97874C19.1799 6.87032 19.037 6.67366 18.997 6.4458L18.7801 5.20941C18.5704 4.01404 17.4505 3.20036 16.2488 3.37033L15.0059 3.54613C14.7769 3.57853 14.5457 3.50341 14.3794 3.34257L13.4772 2.46978ZM11.3914 3.54787C11.6821 3.2666 12.1435 3.2666 12.4343 3.54787L13.3365 4.42065C13.8353 4.90319 14.5289 5.12854 15.216 5.03135L16.4589 4.85555C16.8595 4.79889 17.2328 5.07012 17.3027 5.46857L17.5196 6.70497C17.6395 7.38853 18.0681 7.97851 18.6812 8.30379L19.79 8.89212C20.1474 9.08172 20.29 9.52057 20.1123 9.88402L19.561 11.0118C19.2563 11.6353 19.2563 12.3645 19.561 12.988L20.1123 14.1157C20.29 14.4792 20.1474 14.918 19.79 15.1076L18.6812 15.696C18.0681 16.0213 17.6395 16.6112 17.5196 17.2948L17.3027 18.5312C17.2328 18.9296 16.8595 19.2009 16.4589 19.1442L15.216 18.9684C14.5289 18.8712 13.8353 19.0966 13.3365 19.5791L12.4343 20.4519C12.1435 20.7332 11.6821 20.7332 11.3914 20.4519L10.4892 19.5791C9.99037 19.0966 9.2968 18.8712 8.60964 18.9684L7.36674 19.1442C6.96619 19.2009 6.59288 18.9296 6.52298 18.5312L6.3061 17.2948C6.1862 16.6112 5.75755 16.0213 5.14449 15.696L4.03563 15.1076C3.67828 14.918 3.53569 14.4792 3.71335 14.1157L4.26462 12.988C4.5694 12.3645 4.5694 11.6353 4.26462 11.0118L3.71335 9.88402C3.53569 9.52057 3.67828 9.08172 4.03563 8.89212L5.14449 8.30379C5.75755 7.97852 6.1862 7.38853 6.3061 6.70497L6.52298 5.46858C6.59288 5.07012 6.96619 4.79889 7.36674 4.85555L8.60964 5.03135C9.2968 5.12854 9.99037 4.90319 10.4892 4.42065L11.3914 3.54787Z"
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
export class SiBadgeDecagramPercentIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
