import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-drizzle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.46077 11.8524C6.70089 11.4334 6.55376 10.9028 6.13214 10.6673C5.71053 10.4318 5.17408 10.5805 4.93396 10.9996L2.11528 15.9181C1.87516 16.3371 2.02229 16.8677 2.44391 17.1032C2.86552 17.3387 3.40197 17.19 3.64209 16.771L6.46077 11.8524Z"
      fill="#323544"
    />
    <svg:path
      d="M12.5363 8.08109C12.7764 7.66208 12.6293 7.13148 12.2076 6.89597C11.786 6.66045 11.2496 6.80921 11.0095 7.22822L8.19079 12.1468C7.95066 12.5658 8.09779 13.0964 8.51941 13.3319C8.94103 13.5674 9.47748 13.4187 9.7176 12.9996L12.5363 8.08109Z"
      fill="#323544"
    />
    <svg:path
      d="M21.8847 8.08125C22.1248 7.66224 21.9777 7.13165 21.5561 6.89613C21.1345 6.66062 20.598 6.80937 20.3579 7.22838L17.5392 12.1469C17.2991 12.566 17.4462 13.0965 17.8679 13.3321C18.2895 13.5676 18.8259 13.4188 19.066 12.9998L21.8847 8.08125Z"
      fill="#323544"
    />
    <svg:path
      d="M15.8072 11.8524C16.0474 11.4334 15.9002 10.9028 15.4786 10.6673C15.057 10.4318 14.5206 10.5805 14.2804 10.9996L11.4618 15.9181C11.2216 16.3371 11.3688 16.8677 11.7904 17.1032C12.212 17.3387 12.7484 17.19 12.9886 16.771L15.8072 11.8524Z"
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
export class SiDrizzleIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
