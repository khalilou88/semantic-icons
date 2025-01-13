import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-exchange-cny-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19.3788 15.1057C20.9258 11.4421 19.5373 7.11431 16.0042 5.0745C13.4511 3.60046 10.4232 3.69365 8.03452 5.0556L7.04216 3.31879C10.028 1.61639 13.8128 1.4999 17.0042 3.34245C21.4949 5.93513 23.2139 11.4848 21.1217 16.112L22.4635 16.8867L18.2984 19.1008L18.1334 14.3867L19.3788 15.1057ZM4.62961 8.89968C3.08263 12.5633 4.47116 16.8911 8.00421 18.9309C10.5573 20.4049 13.5851 20.3118 15.9737 18.9499L16.9661 20.6867C13.9803 22.389 10.1956 22.5055 7.00421 20.663C2.51357 18.0703 0.794565 12.5206 2.88672 7.89342L1.54492 7.11873L5.70999 4.90463L5.87505 9.61873L4.62961 8.89968ZM13.0042 13.5382H16.0042V15.5382H13.0042V17.5382H11.0042V15.5382H8.00421V13.5382H11.0042V12.5382H8.00421V10.5382H10.59L8.46868 8.41692L9.88289 7.00271L12.0042 9.12403L14.1255 7.00271L15.5397 8.41692L13.4184 10.5382H16.0042V12.5382H13.0042V13.5382Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiExchangeCnyLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
