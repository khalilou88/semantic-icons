import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-asana-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16.3493 7.11982C16.3493 9.51708 14.3973 11.4691 12 11.4691C9.60274 11.4691 7.65069 9.51708 7.65069 7.11982C7.65069 4.72256 9.60274 2.77051 12 2.77051C14.4315 2.77051 16.3493 4.68832 16.3493 7.11982ZM6.34932 12.5308C3.95205 12.5308 2 14.4828 2 16.8801C2 19.2774 3.95205 21.2294 6.34932 21.2294C8.74658 21.2294 10.6986 19.2774 10.6986 16.8801C10.6986 14.4828 8.78082 12.5308 6.34932 12.5308ZM17.6507 12.5308C15.2534 12.5308 13.3014 14.4828 13.3014 16.8801C13.3014 19.2774 15.2534 21.2294 17.6507 21.2294C20.0479 21.2294 22 19.2774 22 16.8801C22 14.4828 20.0822 12.5308 17.6507 12.5308Z"
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
export class SiAsanaIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
