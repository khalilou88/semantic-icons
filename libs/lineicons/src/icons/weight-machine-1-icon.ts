import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-weight-machine-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.5538 6.28033C13.8467 5.98744 13.8467 5.51256 13.5538 5.21967C13.2609 4.92678 12.786 4.92678 12.4931 5.21967L11.4931 6.21967C11.2002 6.51256 11.2002 6.98744 11.4931 7.28033C11.786 7.57322 12.2609 7.57322 12.5538 7.28033L13.5538 6.28033Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.52344 4.5H7.83909C8.64113 3.01157 10.2142 2 12.0234 2C13.8327 2 15.4057 3.01157 16.2078 4.5H18.5234C19.7661 4.5 20.7734 5.50736 20.7734 6.75V18.5C20.7734 19.7426 19.7661 20.75 18.5234 20.75H5.52344C4.2808 20.75 3.27344 19.7426 3.27344 18.5V6.75C3.27344 5.50736 4.2808 4.5 5.52344 4.5ZM7.27344 6.75C7.27344 6.4948 7.29356 6.2443 7.33231 6H5.52344C5.10922 6 4.77344 6.33579 4.77344 6.75V18.5C4.77344 18.9142 5.10922 19.25 5.52344 19.25H18.5234C18.9377 19.25 19.2734 18.9142 19.2734 18.5V6.75C19.2734 6.33579 18.9377 6 18.5234 6H16.7146C16.7533 6.2443 16.7734 6.4948 16.7734 6.75C16.7734 9.37335 14.6468 11.5 12.0234 11.5C9.40008 11.5 7.27344 9.37335 7.27344 6.75ZM12.0234 3.5C10.2285 3.5 8.77344 4.95507 8.77344 6.75C8.77344 8.54493 10.2285 10 12.0234 10C13.8184 10 15.2734 8.54493 15.2734 6.75C15.2734 4.95507 13.8184 3.5 12.0234 3.5Z"
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
export class SiWeightMachine1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
