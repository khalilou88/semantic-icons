import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-beer-mug-empty-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M16.125 6H20v3.85927c0 1.33743-.6684 2.58633-1.7812 3.32823l-1.5791 1.0468M4.18754 17H16.8125M9.00004 7v7M12 7v7M4.94144 4.93762l-.875 13.99998C4.03046 19.5133 4.48767 20 5.06449 20H15.9356c.5768 0 1.034-.4867.998-1.0624l-.875-13.99998C16.0257 4.41059 15.5887 4 15.0606 4H5.93949c-.52806 0-.96511.41059-.99805.93762Z"
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
export class SiBeerMugEmptyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
