import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-yen-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7.10846 3.47162C6.81556 3.17873 6.34069 3.17873 6.04779 3.47162C5.7549 3.76452 5.7549 4.23939 6.04779 4.53228L11.5 9.98449V11.4824H7.92782C7.51361 11.4824 7.17782 11.8182 7.17782 12.2324C7.17782 12.6466 7.51361 12.9824 7.92782 12.9824H11.5V14.4824H7.92782C7.51361 14.4824 7.17782 14.8182 7.17782 15.2324C7.17782 15.6466 7.51361 15.9824 7.92782 15.9824H11.5L11.5 20.0001C11.5 20.4143 11.8358 20.7501 12.25 20.7501C12.6642 20.7501 13 20.4143 13 20.0001L13 15.9824H16.5742C16.9884 15.9824 17.3242 15.6466 17.3242 15.2324C17.3242 14.8182 16.9884 14.4824 16.5742 14.4824H13V12.9824H16.5742C16.9884 12.9824 17.3242 12.6466 17.3242 12.2324C17.3242 11.8182 16.9884 11.4824 16.5742 11.4824H13V9.98491L18.4526 4.53228C18.7455 4.23939 18.7455 3.76452 18.4526 3.47162C18.1597 3.17873 17.6849 3.17873 17.392 3.47162L12.2502 8.61338L7.10846 3.47162Z"
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
export class SiYenIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
