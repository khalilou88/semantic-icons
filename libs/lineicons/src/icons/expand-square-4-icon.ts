import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-expand-square-4-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.5625 5.5C3.5625 4.25736 4.56986 3.25 5.8125 3.25H8.31213C8.72635 3.25 9.06213 3.58579 9.06213 4C9.06213 4.41421 8.72635 4.75 8.31213 4.75H5.8125C5.39829 4.75 5.0625 5.08579 5.0625 5.5V8C5.0625 8.41421 4.72671 8.75 4.3125 8.75C3.89829 8.75 3.5625 8.41421 3.5625 8V5.5Z"
      fill="#323544"
    />
    <svg:path
      d="M15.5614 4C15.5614 3.58579 15.8972 3.25 16.3114 3.25H18.811C20.0537 3.25 21.061 4.25736 21.061 5.5L21.061 8C21.061 8.41421 20.7253 8.75 20.311 8.75C19.8968 8.75 19.561 8.41421 19.561 8L19.561 5.5C19.561 5.08579 19.2253 4.75 18.811 4.75H16.3114C15.8972 4.75 15.5614 4.41421 15.5614 4Z"
      fill="#323544"
    />
    <svg:path
      d="M4.3125 15.25C4.72671 15.25 5.0625 15.5858 5.0625 16V18.5C5.0625 18.9142 5.39829 19.25 5.8125 19.25H8.31214C8.72635 19.25 9.06214 19.5858 9.06214 20C9.06214 20.4142 8.72635 20.75 8.31214 20.75H5.8125C4.56986 20.75 3.5625 19.7426 3.5625 18.5V16C3.5625 15.5858 3.89829 15.25 4.3125 15.25Z"
      fill="#323544"
    />
    <svg:path
      d="M20.3111 15.25C20.7253 15.25 21.0611 15.5858 21.0611 16L21.0611 18.5C21.0611 19.7426 20.0537 20.75 18.8111 20.75H16.3114C15.8972 20.75 15.5614 20.4142 15.5614 20C15.5614 19.5858 15.8972 19.25 16.3114 19.25H18.8111C19.2253 19.25 19.5611 18.9142 19.5611 18.5L19.5611 16C19.5611 15.5858 19.8968 15.25 20.3111 15.25Z"
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
export class SiExpandSquare4Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
