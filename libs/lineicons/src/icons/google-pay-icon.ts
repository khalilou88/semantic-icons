import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-google-pay-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.56961 9.83225C6.22877 9.50712 5.77364 9.32916 5.30264 9.33683C4.44115 9.33683 3.70995 9.91757 3.44848 10.7002C3.31025 11.1102 3.31025 11.5543 3.44848 11.9644C3.70995 12.747 4.44115 13.3277 5.30264 13.3277C5.74896 13.3277 6.13064 13.213 6.42696 13.0121V13.0116C6.59896 12.8975 6.74609 12.7498 6.85944 12.5773C6.97283 12.4048 7.05009 12.2111 7.0866 12.008H5.30264V10.7359H8.41734C8.45547 10.9578 8.47451 11.1824 8.47422 11.4075C8.47422 12.4126 8.11505 13.2626 7.49164 13.8373H7.49106L7.49164 13.8378C6.94438 14.3424 6.19393 14.6351 5.30264 14.6351C4.69042 14.635 4.09028 14.4648 3.56919 14.1435C3.0481 13.8222 2.62658 13.3623 2.35169 12.8153C2.12044 12.3552 2 11.8473 2 11.3323C2 10.8173 2.12044 10.3094 2.35169 9.84925C2.62658 9.30222 3.0481 8.84238 3.56919 8.52106C4.09028 8.19971 4.69042 8.02955 5.30264 8.02951C6.12264 8.01993 6.91454 8.32816 7.51228 8.88961L6.56961 9.83225ZM11.4586 11.9093V14.2373H10.7201V8.48822H12.6788C12.9126 8.48335 13.1451 8.5248 13.3628 8.61022C13.5805 8.69564 13.7791 8.82335 13.9472 8.98593C14.117 9.13864 14.2521 9.32593 14.3435 9.53522C14.4349 9.74448 14.4804 9.9709 14.477 10.1993C14.4819 10.4288 14.437 10.6567 14.3456 10.8673C14.2541 11.0779 14.1182 11.2663 13.9472 11.4194C13.6047 11.746 13.1819 11.9092 12.6788 11.9089H11.4586V11.9093ZM11.4586 9.19603V11.2029H12.6972C12.833 11.2069 12.9681 11.1826 13.0939 11.1314C13.2197 11.0802 13.3335 11.0033 13.4279 10.9057C13.5219 10.8143 13.5965 10.7051 13.6475 10.5845C13.6985 10.4638 13.7247 10.3341 13.7247 10.2032C13.7247 10.0722 13.6985 9.94248 13.6475 9.8218C13.5965 9.70116 13.5219 9.59193 13.4279 9.50061C13.3347 9.4009 13.2213 9.32212 13.0953 9.26954C12.9694 9.21693 12.8336 9.19174 12.6972 9.19558H11.4586V9.19603ZM16.1788 10.1754C16.7247 10.1754 17.1556 10.3213 17.4715 10.613C17.7874 10.9047 17.9452 11.3048 17.9449 11.813V14.2373H17.2385V13.6915H17.2064C16.9006 14.141 16.4938 14.3658 15.9862 14.3658C15.5528 14.3658 15.1903 14.2373 14.8986 13.9805C14.7586 13.8626 14.6466 13.7149 14.5709 13.5482C14.4952 13.3816 14.4576 13.2002 14.4609 13.0172C14.4609 12.6101 14.6148 12.2864 14.9224 12.0461C15.2301 11.8057 15.6408 11.6852 16.1545 11.6846C16.5931 11.6846 16.9542 11.7648 17.238 11.9254V11.7566C17.2389 11.6318 17.2119 11.5084 17.1592 11.3954C17.1064 11.2823 17.0291 11.1824 16.933 11.1029C16.7377 10.9267 16.4832 10.8306 16.2201 10.8336C15.8076 10.8336 15.4811 11.0077 15.2408 11.3557L14.5903 10.946C14.9481 10.4323 15.4776 10.1754 16.1788 10.1754ZM15.2233 13.0332C15.2229 13.1272 15.2448 13.22 15.2874 13.3037C15.33 13.3875 15.392 13.4599 15.4683 13.5149C15.6316 13.6433 15.8344 13.7114 16.0421 13.7075C16.3538 13.707 16.6525 13.583 16.8729 13.3626C17.1176 13.1323 17.2399 12.8621 17.2399 12.552C17.0096 12.3685 16.6885 12.2768 16.2766 12.2768C15.9766 12.2768 15.7264 12.3491 15.5261 12.4938C15.3238 12.6405 15.2233 12.819 15.2233 13.0332ZM19.5339 15.9713L22 10.3038H21.1958L20.0559 13.1295H20.0399L18.8678 10.3038H18.0651L19.6867 13.9882L18.7715 15.9713H19.5339Z"
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
export class SiGooglePayIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
