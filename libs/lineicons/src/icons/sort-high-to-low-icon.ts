import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sort-high-to-low-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.504 3.25C13.0898 3.25 12.754 3.58579 12.754 4C12.754 4.41421 13.0898 4.75 13.504 4.75L20.5 4.75C20.9142 4.75 21.25 4.41421 21.25 4C21.25 3.58579 20.9142 3.25 20.5 3.25H13.504Z"
      fill="#323544"
    />
    <svg:path
      d="M13.504 15.4167C13.0898 15.4167 12.754 15.0809 12.754 14.6667C12.754 14.2525 13.0898 13.9167 13.504 13.9167H17.5C17.9142 13.9167 18.25 14.2525 18.25 14.6667C18.25 15.0809 17.9142 15.4167 17.5 15.4167H13.504Z"
      fill="#323544"
    />
    <svg:path
      d="M16 20.75H13.504C13.0898 20.75 12.754 20.4142 12.754 20C12.754 19.5858 13.0898 19.25 13.504 19.25H16C16.4142 19.25 16.75 19.5858 16.75 20C16.75 20.4142 16.4142 20.75 16 20.75Z"
      fill="#323544"
    />
    <svg:path
      d="M13.504 10.0833L19 10.0833C19.4142 10.0833 19.75 9.7475 19.75 9.33329C19.75 8.91908 19.4142 8.58329 19 8.58329L13.504 8.58329C13.0898 8.58329 12.754 8.91908 12.754 9.33329C12.754 9.74751 13.0898 10.0833 13.504 10.0833Z"
      fill="#323544"
    />
    <svg:path
      d="M8.25206 18.1901L9.97387 16.4695C10.2669 16.1767 10.7417 16.1769 11.0345 16.4699C11.3273 16.7629 11.3271 17.2377 11.0342 17.5305L8.03205 20.5305C7.73919 20.8232 7.26459 20.8232 6.97174 20.5305L3.96984 17.5305C3.67685 17.2377 3.6767 16.7628 3.9695 16.4698C4.2623 16.1769 4.73718 16.1767 5.03016 16.4695L6.75206 18.1903L6.75206 4.49915C6.75206 4.08493 7.08784 3.74915 7.50206 3.74915C7.91627 3.74915 8.25206 4.08493 8.25206 4.49915L8.25206 18.1901Z"
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
export class SiSortHighToLowIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
