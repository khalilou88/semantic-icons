import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-flower-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.9999 2.07617L12.4551 2.30885C14.2208 3.21149 15.7328 4.53815 16.8573 6.15479C17.7852 5.71408 18.7788 5.38878 19.8193 5.19765L21 4.98077V12.9998C21 17.9703 16.9706 22 12 22C7.02944 22 3 17.9706 3 13V4.98077L4.18066 5.19765C5.22115 5.38877 6.2147 5.71404 7.14253 6.15472C8.26706 4.53811 9.77902 3.21147 11.5447 2.30885L11.9999 2.07617ZM8.87757 7.1651C10.1073 8.02652 11.1679 9.11272 12 10.3645C12.8322 9.11279 13.893 8.02648 15.1223 7.16521C14.2952 6.016 13.2302 5.04929 11.9999 4.33747C10.7697 5.04926 9.70468 6.01593 8.87757 7.1651ZM10.8993 12.4338C10.0182 10.7203 8.65593 9.29326 6.99112 8.33231C6.3667 7.97189 5.6999 7.67713 5 7.45734V13C5 16.29 7.26961 19.0498 10.3285 19.7992C10.1137 18.9004 10 17.9629 10 16.9998C10 15.3831 10.3198 13.8412 10.8993 12.4338ZM12.4531 19.9856C16.1079 19.7521 19 16.7136 19 12.9998V7.45734C18.3 7.67715 17.6332 7.97193 17.0088 8.33239C14.0127 10.0618 12 13.2964 12 16.9998C12 18.0411 12.1588 19.0437 12.4531 19.9856Z"
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
export class SiFlowerLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
