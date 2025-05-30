import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hospital-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.9193 10.419C10.9192 10.0048 10.5834 9.669 10.1692 9.66904C9.755 9.66908 9.41925 10.0049 9.41929 10.4191V15.5816C9.41925 15.9958 9.755 16.3317 10.1692 16.3317C10.5834 16.3317 10.9192 15.996 10.9193 15.5818L10.9195 13.7504H13.0807L13.0807 15.5817C13.0807 15.9959 13.4165 16.3317 13.8307 16.3317C14.2449 16.3317 14.5807 15.9959 14.5807 15.5817L14.5807 10.419C14.5807 10.0048 14.2449 9.66904 13.8307 9.66904C13.4164 9.66904 13.0807 10.0048 13.0807 10.419V12.2504H10.9195L10.9193 10.419Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.35 3.70391C12.55 3.10391 11.45 3.10391 10.65 3.70391L4.15 8.57891C3.58344 9.00383 3.25 9.6707 3.25 10.3789V18.5003C3.25 19.743 4.25736 20.7503 5.5 20.7503H18.5C19.7426 20.7503 20.75 19.743 20.75 18.5003V10.3789C20.75 9.6707 20.4166 9.00383 19.85 8.57891L13.35 3.70391ZM11.55 4.90391C11.8167 4.70391 12.1833 4.70391 12.45 4.90391L18.95 9.77891C19.1389 9.92055 19.25 10.1428 19.25 10.3789V18.5003C19.25 18.9145 18.9142 19.2503 18.5 19.2503H5.5C5.08579 19.2503 4.75 18.9145 4.75 18.5003V10.3789C4.75 10.1428 4.86115 9.92055 5.05 9.77891L11.55 4.90391Z"
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
export class SiHospital2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
