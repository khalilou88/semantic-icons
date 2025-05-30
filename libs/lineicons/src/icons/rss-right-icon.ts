import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-rss-right-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.6691 18.4604C18.6691 11.6499 13.1481 6.12891 6.33762 6.12891C5.92341 6.12891 5.58762 5.79312 5.58762 5.37891C5.58762 4.96469 5.92341 4.62891 6.33762 4.62891C13.9765 4.62891 20.1691 10.8215 20.1691 18.4604C20.1691 18.8746 19.8333 19.2104 19.4191 19.2104C19.0049 19.2104 18.6691 18.8746 18.6691 18.4604Z"
      fill="#323544"
    />
    <svg:path
      d="M6.17383 10.0652C10.9003 10.0652 14.7318 13.8967 14.7318 18.6231C14.7318 19.0373 15.0676 19.3731 15.4818 19.3731C15.896 19.3731 16.2318 19.0373 16.2318 18.6231C16.2318 13.0683 11.7287 8.56516 6.17383 8.56516C5.75961 8.56516 5.42383 8.90095 5.42383 9.31516C5.42383 9.72938 5.75961 10.0652 6.17383 10.0652Z"
      fill="#323544"
    />
    <svg:path
      d="M6.22357 18.5742C6.61409 18.9647 7.24726 18.9647 7.63778 18.5742C8.02831 18.1836 8.02831 17.5505 7.63778 17.16C7.24726 16.7694 6.61409 16.7694 6.22357 17.16C5.83304 17.5505 5.83304 18.1836 6.22357 18.5742Z"
      fill="#323544"
    />
    <svg:path
      d="M6.27645 14.0009C8.71295 14.1301 10.6667 16.0839 10.7959 18.5204C10.8179 18.934 11.171 19.2515 11.5846 19.2296C11.9982 19.2076 12.3158 18.8545 12.2938 18.4409C12.124 15.2385 9.55832 12.6728 6.35589 12.503C5.94226 12.481 5.58916 12.7986 5.56722 13.2122C5.54528 13.6258 5.86281 13.9789 6.27645 14.0009Z"
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
export class SiRssRightIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
