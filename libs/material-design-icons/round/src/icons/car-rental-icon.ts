import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-car-rental-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8 7c1.3 0 2.41-.84 2.83-2H16v1c0 .55.45 1 1 1s1-.45 1-1V5c.55 0 1-.45 1-1s-.45-1-1-1h-7.17A3.004 3.004 0 0 0 7.4 1.06c-1.17.23-2.12 1.19-2.35 2.36C4.7 5.32 6.15 7 8 7zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm8.39 6H7.61c-.43 0-.81.28-.95.68L5 14.69V21c0 .55.45 1 1 1s1-.45 1-1v-1h10v1c0 .55.45 1 1 1s1-.45 1-1v-6.31l-1.66-5.01c-.14-.4-.52-.68-.95-.68zM9 17.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM7.67 13l.66-2h7.34l.66 2H7.67z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCarRentalIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
