import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-align-vertical-center-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 11h-4V7.5c0-.83-.67-1.5-1.5-1.5S14 6.67 14 7.5V11h-4V4.5C10 3.67 9.33 3 8.5 3S7 3.67 7 4.5V11H2.84c-.55 0-1 .45-1 1s.45 1 1 1H7v6.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V13h4v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V13h4c.55 0 1-.45 1-1s-.45-1-1-1z"
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
export class SiAlignVerticalCenterIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
