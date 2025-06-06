import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-forward-step-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      d="M17 6a1 1 0 1 0-2 0v4L8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8L15 14v4a1 1 0 1 0 2 0V6Z"
      clip-rule="evenodd"
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
export class SiForwardStepIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
