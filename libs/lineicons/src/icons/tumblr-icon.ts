import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-tumblr-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.8925 20.7419C17.3441 21.2903 15.957 22 14.086 22C9.37632 22 8.31181 18.5484 8.31181 16.5161V10.871H6.44084C6.21503 10.871 6.02148 10.6774 6.02148 10.4516V7.80645C6.02148 7.54839 6.21503 7.25806 6.4731 7.16129C8.95697 6.32258 9.6989 4.22581 9.79568 2.64516C9.82794 2.19355 10.0215 2 10.4408 2H13.215C13.4408 2 13.6344 2.19355 13.6344 2.41935V6.90323H16.8925C17.1183 6.90323 17.3118 7.03226 17.3118 7.25806V10.4194C17.3118 10.6452 17.1183 10.8387 16.8925 10.8387H13.6021V16C13.6021 17.3548 14.5699 18.0968 16.2473 17.4194C16.4408 17.3871 16.6021 17.2903 16.7312 17.3226C16.8602 17.3548 16.957 17.4516 16.9892 17.6452L17.8602 20.129C17.957 20.3226 18.0537 20.5806 17.8925 20.7419Z"
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
export class SiTumblrIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
