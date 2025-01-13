import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bike-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5.5 12H4V7H2V5H8V7H6V9.79548L15.8131 7.16607L15.2327 5H12V3H15.9784C16.4286 2.98994 16.8442 3.28693 16.9659 3.74118L18.5188 9.53674L16.587 10.0544L16.3307 9.09792L5.5 12ZM5 19C6.10457 19 7 18.1046 7 17C7 15.8954 6.10457 15 5 15C3.89543 15 3 15.8954 3 17C3 18.1046 3.89543 19 5 19ZM5 21C2.79086 21 1 19.2091 1 17C1 14.7909 2.79086 13 5 13C7.20914 13 9 14.7909 9 17C9 19.2091 7.20914 21 5 21ZM18 19C19.6569 19 21 17.6569 21 16C21 14.3431 19.6569 13 18 13C16.3431 13 15 14.3431 15 16C15 17.6569 16.3431 19 18 19ZM18 21C15.2386 21 13 18.7614 13 16C13 13.2386 15.2386 11 18 11C20.7614 11 23 13.2386 23 16C23 18.7614 20.7614 21 18 21Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBikeLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
