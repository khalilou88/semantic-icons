import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-drupal-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5163 5.79914C16.4513 5.79914 16.4513 5.76667 16.5163 5.79914C15.6071 5.21466 14.7628 4.92242 13.8861 4.46782C13.7562 4.43535 13.6588 4.33793 13.5289 4.24052C12.9444 3.78592 12.0677 2.81178 11.3533 2C11.3209 2.42213 11.2559 2.74684 11.1585 3.07155C11.0286 3.59109 10.7039 3.98075 10.4441 4.20805C10.3792 4.24052 10.3792 4.24052 10.3467 4.24052C9.34008 5.01983 8.72316 5.24713 7.8789 5.70173C7.84643 5.7342 7.68408 5.79914 7.55419 5.89656C7.03465 6.22127 6.12545 6.8707 5.31367 7.81237C3.1056 10.3776 2.55359 14.2092 4.11221 17.1966C4.6967 18.3006 5.5085 19.3397 6.51511 20.119C7.55419 20.9308 8.95046 21.4178 10.2168 21.7101C12.0352 22.1322 13.7887 22.1322 15.5097 21.4503C16.841 20.9308 18.01 20.0541 18.9192 18.95C20.1531 17.4239 20.77 15.4756 20.77 13.5273C20.9324 8.55921 17.1008 6.22127 16.5163 5.79914ZM5.18378 9.07875C5.15131 9.04628 4.82658 8.85145 5.15131 8.42932C6.12545 6.96811 7.91137 5.9615 8.46339 5.70173C8.65822 5.60432 9.53494 5.18219 10.3792 4.56523C10.9312 4.14311 11.2884 3.75345 11.4507 2.48707C11.5806 2.94167 11.5806 3.29885 11.5806 3.78592C11.5482 4.30546 11.0611 4.59771 11.0286 4.66265C10.9312 4.76006 10.5091 4.92242 10.4441 5.01983C10.3467 5.0523 10.3467 5.11725 10.4441 5.11725C10.574 5.14972 10.6714 5.21466 10.6714 5.34455C10.6714 5.44196 10.6389 5.70173 10.1519 6.15633C9.34008 6.96811 8.72316 7.52012 7.29442 8.36438C5.93062 9.17616 5.24873 9.07875 5.18378 9.07875ZM16.6137 20.4112C16.5163 20.5087 15.6071 21.1581 14.5355 21.223C13.464 21.288 12.0677 21.3529 11.2234 20.5736C11.0936 20.4437 11.126 20.2164 11.2234 20.1515C11.3209 20.0541 11.3533 20.0216 11.4832 20.0216C11.5806 20.0216 11.5806 20.0216 11.6131 20.0541C11.9703 20.3788 12.5872 20.6061 13.8212 20.6061C15.0551 20.6061 15.9967 20.2489 16.3539 19.9566C16.4838 19.8268 16.5812 19.9242 16.6137 19.9891C16.6786 20.1839 16.7436 20.3463 16.6137 20.4112ZM13.1393 18.6903C13.3666 18.4954 13.6913 18.1707 14.016 18.0408C14.3732 17.9109 14.5355 17.9434 14.8278 17.9434C15.1525 17.9434 15.4772 17.9759 15.7045 18.0733C15.9318 18.2032 16.0617 18.5928 16.1591 18.7552C16.2565 18.95 16.1591 19.0799 16.0292 19.1124C15.8993 19.2098 15.8993 19.1449 15.7694 18.8851C15.6395 18.6578 15.5421 18.3655 14.7953 18.3655C14.1134 18.3655 13.9185 18.5928 13.5614 18.8851C13.2042 19.1449 13.1068 19.2423 13.0093 19.1124C12.9119 19.015 12.9769 18.8526 13.1393 18.6903ZM18.3347 18.8201C17.6528 18.7877 16.224 16.5796 15.3473 16.5796C14.2108 16.5472 11.7754 18.9176 9.82715 18.9176C8.69065 18.9176 8.30103 18.7877 7.91137 18.463C7.35936 18.0408 7.03465 17.3914 7.03465 16.5796C7.06712 15.0535 8.49583 13.6247 10.3142 13.5923C12.5547 13.5598 14.1783 15.8328 15.3148 15.8328C16.289 15.8003 18.1723 13.917 19.0815 13.917C20.0556 13.917 20.3154 14.9236 20.3154 15.5405C20.3154 16.125 20.1206 17.229 19.666 17.9434C19.1789 18.6253 18.8867 18.8526 18.3347 18.8201Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgDrupalIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
