import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-align-text-left-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.02344 4.5C3.60922 4.5 3.27344 4.83579 3.27344 5.25C3.27344 5.66421 3.60922 6 4.02344 6L15.0234 6C15.4377 6 15.7734 5.66421 15.7734 5.25C15.7734 4.83579 15.4377 4.5 15.0234 4.5H4.02344Z"
      fill="#323544"
    />
    <svg:path
      d="M4.02344 9C3.60922 9 3.27344 9.33579 3.27344 9.75C3.27344 10.1642 3.60922 10.5 4.02344 10.5L20.0234 10.5C20.4377 10.5 20.7734 10.1642 20.7734 9.75C20.7734 9.33579 20.4377 9 20.0234 9L4.02344 9Z"
      fill="#323544"
    />
    <svg:path
      d="M4.02344 18C3.60922 18 3.27344 18.3358 3.27344 18.75C3.27344 19.1642 3.60922 19.5 4.02344 19.5L20.0234 19.5C20.4377 19.5 20.7734 19.1642 20.7734 18.75C20.7734 18.3358 20.4377 18 20.0234 18L4.02344 18Z"
      fill="#323544"
    />
    <svg:path
      d="M3.27344 14.25C3.27344 13.8358 3.60922 13.5 4.02344 13.5L15.0234 13.5C15.4377 13.5 15.7734 13.8358 15.7734 14.25C15.7734 14.6642 15.4377 15 15.0234 15L4.02344 15C3.60922 15 3.27344 14.6642 3.27344 14.25Z"
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
export class SiAlignTextLeftIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
