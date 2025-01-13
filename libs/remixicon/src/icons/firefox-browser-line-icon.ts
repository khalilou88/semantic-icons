import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-firefox-browser-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 12.0001C22 17.523 17.5228 22.0001 12 22.0001C6.47715 22.0001 2 17.523 2 12.0001C2 8.84411 3.24891 6.30485 5.5 4.68754C5.90861 4.39397 6.34156 4.18048 6.81518 3.94694C7.03421 3.83894 7.26195 3.72664 7.5 3.60015V5.50015C7.5 5.50015 10.0984 4.2191 10.45 4.15015C10.4272 4.24797 10.3774 4.41827 10.315 4.63159C10.1194 5.30083 9.8 6.39352 9.8 7.00015C9.8 7.21017 9.81607 7.40022 9.84546 7.56444C10.1315 7.78962 10.3767 8.07806 10.6199 8.36401C10.6749 8.42871 10.7298 8.49328 10.785 8.55696C11.2278 9.06739 12.0415 9.59731 12.5485 9.92748C12.813 10.0997 12.994 10.2176 12.9953 10.25C12.9953 10.5266 12.35 11.5182 11.5 11.5182C9.33 11.5182 8.43403 11.5182 9 13.1485C9.47525 14.5174 10.75 15.2501 12 15.2501C13.5 15.2501 14.9 14.0053 14.9 12.5001C14.9 10.7243 14.0248 9.92669 13.1625 9.14081C12.3252 8.37773 11.5 7.62572 11.5 6C11.5 3.60015 13.5 1.9 15.3 0.850098C15.7808 2.51309 16.9521 3.50972 18.1832 4.55734C20.0246 6.12422 22 7.80514 22 12.0001ZM5.5 7.4C4.45585 8.66765 4 10.3427 4 11.9858C4 16.4133 7.57804 19.9995 12.0029 19.9995C15.9613 19.9995 19.2604 17.1298 19.9119 13.3612C20.0981 11.936 20.0336 10.5316 19.55 9.25L18.5 9.47568C18.5 7.52933 17.331 6.49491 16.1816 5.47774C15.5737 4.93982 14.9712 4.40671 14.55 3.74609C13.6403 4.62161 13.2629 5.25 13.2629 5.99994C13.2629 6.89473 13.8938 7.27188 15.012 7.94037C15.491 8.22672 16.0595 8.56653 16.706 9.02337L15.7106 9.29717C16.4561 10.2592 16.8984 11.3335 16.8984 12.5C16.8984 15.0002 14.6612 17.2165 12.0029 17.25C9.35 17.2827 6.83984 15.0736 6.83984 12.4375C6.83984 11.8 6.99992 10.2 9.1 9.67969C8.87855 9.35 8.31255 8.85 8 8.65C7.9171 8.36 7.8 7.6 7.8 7.6L5.5 8.7V7.4Z"
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
export class SiFirefoxBrowserLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
