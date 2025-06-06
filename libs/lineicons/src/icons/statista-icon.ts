import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-statista-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.64423 3C3.47729 3 3.31687 3.06622 3.19895 3.18463C3.08066 3.30292 3.01432 3.46297 3.01432 3.62991V15.0427H3.10409C3.10409 15.0427 5.81273 14.9916 6.96131 14.3872C7.94685 13.8077 8.79939 13.0279 9.46425 12.0984L10.1413 11.1428L10.356 10.8384C10.3815 10.8085 10.4929 10.6459 10.5571 10.5516C10.6215 10.4573 10.8999 10.0629 11.1699 9.66873C12.2203 8.2177 13.5654 7.00578 15.1171 6.11163C17.6199 4.82553 20.9373 4.95434 20.9373 4.95434H20.9884V3.6686C20.9992 3.49475 20.9378 3.3245 20.8185 3.19779C20.6992 3.07108 20.5327 3 20.3589 3H3.64423ZM20.9845 8.96163C20.931 8.97534 20.8764 8.98234 20.8214 8.98285C20.8214 8.98285 18.1172 9.03439 16.956 9.64281C15.9704 10.2202 15.1179 10.9985 14.453 11.9271L13.7888 12.887C13.6901 13.0245 13.5959 13.1615 13.5703 13.1915L13.3684 13.4786L12.7556 14.3617C12.7556 14.3617 11.1229 16.7187 8.80861 17.9188C6.40837 19.1659 3.26713 19.0845 3.00981 19.0757V20.3616C3.00792 20.5301 3.0732 20.6926 3.19149 20.8124C3.30991 20.9322 3.47146 21 3.63991 21H20.3546C20.5215 21 20.6814 20.9337 20.7998 20.8154C20.9181 20.6975 20.9845 20.537 20.9845 20.3701V8.96163Z"
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
export class SiStatistaIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
