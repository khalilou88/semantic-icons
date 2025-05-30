import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-shift-left-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5.07813 4.5C5.07813 4.08579 4.74234 3.75 4.32813 3.75C3.91391 3.75 3.57812 4.08579 3.57812 4.5V20.5009C3.57812 20.9151 3.91391 21.2509 4.32812 21.2509C4.74234 21.2509 5.07812 20.9151 5.07812 20.5009L5.07813 4.5Z"
      fill="#323544"
    />
    <svg:path
      d="M7.57812 12.502C7.57812 12.286 7.66944 12.0913 7.81556 11.9544L12.4222 7.34484C12.715 7.05185 13.1899 7.0517 13.4829 7.3445C13.7759 7.6373 13.776 8.11218 13.4832 8.40516L10.1386 11.752L20.3281 11.752C20.7423 11.752 21.0781 12.0877 21.0781 12.502C21.0781 12.9162 20.7423 13.252 20.3281 13.252L10.1427 13.252L13.4832 16.5949C13.776 16.8879 13.7759 17.3627 13.4829 17.6555C13.1899 17.9483 12.715 17.9481 12.4222 17.6551L7.85048 13.0802C7.68412 12.9426 7.57812 12.7347 7.57812 12.502Z"
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
export class SiShiftLeftIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
