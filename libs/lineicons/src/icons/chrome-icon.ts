import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-chrome-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.4361 8.69472H14.6211C15.5949 9.46695 16.2218 10.6576 16.2229 11.997C16.2236 12.7388 16.0285 13.4674 15.6576 14.1099C15.5931 14.2206 15.5227 14.3263 15.4493 14.4297L11.2324 21.9657C11.488 21.9868 11.744 22.0008 12.0006 22C17.5214 21.9953 21.9956 17.521 22.0003 12.0003C22.0023 10.8732 21.8112 9.75518 21.4361 8.69472Z"
      fill="#323544"
    />
    <svg:path
      d="M11.9862 16.2192C11.2506 16.2192 10.528 16.0252 9.89107 15.6572C9.24884 15.2857 8.7155 14.7521 8.34439 14.1097C8.25994 13.9634 8.18816 13.8134 8.12283 13.6621L3.80812 6.27781C2.88011 7.60493 2.28366 9.13761 2.07988 10.7487C1.40766 16.0692 5.05036 20.9395 10.2806 21.8464L13.6091 15.8983C13.1024 16.1075 12.5522 16.2199 11.9862 16.2192Z"
      fill="#323544"
    />
    <svg:path
      d="M9.88863 8.3465C10.5306 7.97582 11.2591 7.78093 12.0006 7.78116C12.1538 7.78093 12.3046 7.79005 12.4535 7.80582H21.0701C20.3969 6.34825 19.3854 5.07002 18.1111 4.08557C13.8696 0.808423 7.82816 1.47399 4.39213 5.51558L7.82616 11.3927C8.00683 10.1596 8.72573 9.01783 9.88863 8.3465Z"
      fill="#323544"
    />
    <svg:path
      d="M9.07262 10.3127C8.14061 11.9288 8.69506 13.9945 10.3113 14.9266C11.9275 15.8586 13.9933 15.3041 14.9253 13.6879C15.8573 12.0734 15.3042 10.0092 13.69 9.07717C13.1789 8.78205 12.5993 8.62628 12.0093 8.62494H12.0084C10.7973 8.6185 9.6764 9.26295 9.07262 10.3127Z"
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
export class SiChromeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
