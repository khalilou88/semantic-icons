import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-chrome-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.3645 19.8327L12.2941 16.4905C12.1969 16.4968 12.0988 16.5 12 16.5C10.3037 16.5 8.82656 15.5614 8.0597 14.1752L4.79459 8.51986C4.28545 9.57206 4 10.7527 4 12C4 15.8578 6.73064 19.0778 10.3645 19.8327ZM12.5897 19.9786C16.7326 19.6767 20 16.2199 20 12C20 11.1269 19.8601 10.2865 19.6016 9.5H15.7422C16.2209 10.215 16.5 11.0749 16.5 12C16.5 12.8477 16.2656 13.6406 15.8581 14.3175L12.5897 19.9786ZM14.1434 13.2875L14.1651 13.25C14.3782 12.8824 14.5 12.4554 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 12.4383 9.6128 12.8503 9.81094 13.2084L9.83494 13.25C10.2669 13.9973 11.0747 14.5 12 14.5C12.9098 14.5 13.7061 14.014 14.1434 13.2875ZM6.03522 6.66871L7.9635 10.0086C8.69821 8.52222 10.2297 7.5 12 7.5H18.6153C17.1753 5.38723 14.7497 4 12 4C9.62968 4 7.50014 5.03086 6.03522 6.66871ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
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
export class SiChromeLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
