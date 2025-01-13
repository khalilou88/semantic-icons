import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-shield-dollar-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.2519 5.5C12.6662 5.5 13.0019 5.83579 13.0019 6.25V6.68778C13.9927 6.83842 14.7519 7.69397 14.7519 8.72685C14.7519 9.14106 14.4162 9.47685 14.0019 9.47685C13.5877 9.47685 13.2519 9.14106 13.2519 8.72685C13.2519 8.41613 13.0001 8.16425 12.6893 8.16425H12.0019C11.5877 8.16425 11.2519 8.50003 11.2519 8.91425V9.17932C11.2519 9.49195 11.4459 9.77178 11.7386 9.88156L13.292 10.4641C14.1702 10.7935 14.7519 11.633 14.7519 12.5709V12.8359C14.7519 13.9067 14.0039 14.8028 13.0019 15.0302V15.5C13.0019 15.9142 12.6662 16.25 12.2519 16.25C11.8377 16.25 11.5019 15.9142 11.5019 15.5V15.0624C10.5111 14.9118 9.75194 14.0562 9.75194 13.0233C9.75194 12.6091 10.0877 12.2733 10.5019 12.2733C10.9162 12.2733 11.2519 12.6091 11.2519 13.0233C11.2519 13.3341 11.5038 13.5859 11.8145 13.5859H12.5019C12.9162 13.5859 13.2519 13.2502 13.2519 12.8359V12.5709C13.2519 12.2582 13.058 11.9784 12.7653 11.8686L11.2119 11.286C10.3337 10.9567 9.75194 10.1172 9.75194 9.17932V8.91425C9.75194 7.84345 10.4999 6.94737 11.5019 6.72V6.25C11.5019 5.83579 11.8377 5.5 12.2519 5.5Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.1871 2.35323C12.5928 2.08148 11.9098 2.08148 11.3156 2.35323L5.5916 4.97088C4.79089 5.33705 4.27733 6.13663 4.27734 7.01709L4.27742 12.4822C4.27744 14.0385 4.75474 15.5847 5.75814 16.8262C6.55842 17.8164 7.64456 19.0736 8.75563 20.0899C9.31059 20.5975 9.88978 21.0618 10.4576 21.4032C11.011 21.7359 11.6317 22 12.2514 22C12.8712 22 13.4919 21.7359 14.0452 21.4032C14.6131 21.0618 15.1923 20.5976 15.7472 20.09C16.8583 19.0737 17.9444 17.8165 18.7447 16.8263C19.7481 15.5847 20.2254 14.0385 20.2254 12.4821L20.2253 7.01704C20.2253 6.1366 19.7118 5.33705 18.9111 4.97089L13.1871 2.35323ZM11.9394 3.71735C12.1375 3.62677 12.3652 3.62677 12.5632 3.71735L18.2872 6.33501C18.5541 6.45707 18.7253 6.72358 18.7253 7.01706L18.7254 12.4821C18.7254 13.7364 18.3413 14.939 17.5781 15.8834C16.7961 16.8509 15.7645 18.0413 14.7348 18.9832C14.2194 19.4546 13.7224 19.8471 13.2724 20.1177C12.8079 20.3969 12.469 20.5 12.2514 20.5C12.0339 20.5 11.695 20.3969 11.2305 20.1176C10.7805 19.8471 10.2835 19.4546 9.76804 18.9831C8.73831 18.0412 7.70673 16.8509 6.92475 15.8833C6.16153 14.939 5.77744 13.7364 5.77742 12.4822L5.77734 7.01707C5.77734 6.72358 5.94852 6.45706 6.21543 6.335L11.9394 3.71735Z"
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
export class SiShieldDollarIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
