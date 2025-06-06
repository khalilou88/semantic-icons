import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-align-text-center-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.5234 4.5C17.9377 4.5 18.2734 4.83579 18.2734 5.25C18.2734 5.66421 17.9377 6 17.5234 6L6.52344 6C6.10922 6 5.77344 5.66421 5.77344 5.25C5.77344 4.83579 6.10922 4.5 6.52344 4.5H17.5234Z"
      fill="#323544"
    />
    <svg:path
      d="M20.0234 9C20.4377 9 20.7734 9.33579 20.7734 9.75C20.7734 10.1642 20.4377 10.5 20.0234 10.5L4.02344 10.5C3.60922 10.5 3.27344 10.1642 3.27344 9.75C3.27344 9.33579 3.60922 9 4.02344 9L20.0234 9Z"
      fill="#323544"
    />
    <svg:path
      d="M20.0234 18C20.4377 18 20.7734 18.3358 20.7734 18.75C20.7734 19.1642 20.4377 19.5 20.0234 19.5L4.02344 19.5C3.60922 19.5 3.27344 19.1642 3.27344 18.75C3.27344 18.3358 3.60922 18 4.02344 18L20.0234 18Z"
      fill="#323544"
    />
    <svg:path
      d="M18.2734 14.25C18.2734 13.8358 17.9377 13.5 17.5234 13.5L6.52344 13.5C6.10922 13.5 5.77344 13.8358 5.77344 14.25C5.77344 14.6642 6.10922 15 6.52344 15L17.5234 15C17.9377 15 18.2734 14.6642 18.2734 14.25Z"
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
export class SiAlignTextCenterIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
