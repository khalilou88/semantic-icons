import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-netflix-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.75006 14.3906C4.4492 14.4443 4.14305 14.4603 3.82635 14.5032L2.86037 11.6298V14.6265C2.55951 14.6587 2.28504 14.7016 2 14.7445V9.25488H2.80234L3.90024 12.3696V9.25488H4.75006V14.3906ZM6.41278 11.2652C6.74006 11.2652 7.24153 11.2491 7.54238 11.2491V12.1069C7.16758 12.1069 6.7295 12.1069 6.41278 12.1229V13.3989C6.90894 13.3667 7.40514 13.3238 7.90654 13.3077V14.1333L5.56819 14.3209V9.25488H7.90654V10.1126H6.41278V11.2652ZM11.0472 10.1126H10.171V14.0583C9.886 14.0583 9.60092 14.0583 9.32651 14.069V10.1126H8.45031V9.25488H11.0473L11.0472 10.1126ZM12.4196 11.2063H13.5756V12.064H12.4196V14.01H11.5908V9.25488H13.9504V10.1126H12.4196V11.2063ZM15.3228 13.2595C15.8031 13.2702 16.2887 13.3078 16.7585 13.3345V14.1816C16.0037 14.1333 15.2489 14.0851 14.4782 14.069V9.25488H15.3228V13.2595ZM17.4711 14.2405C17.7403 14.2566 18.0253 14.2727 18.2998 14.3049V9.25488H17.4711V14.2405ZM22 9.25488L20.9285 11.8656L22 14.7445C21.6833 14.7016 21.3666 14.6426 21.0499 14.589L20.4429 13.0022L19.8254 14.4604C19.5191 14.4067 19.2236 14.3906 18.9175 14.3477L20.0048 11.8335L19.023 9.25488H19.9309L20.4851 10.697L21.0763 9.25488H22Z"
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
export class SiNetflixIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
