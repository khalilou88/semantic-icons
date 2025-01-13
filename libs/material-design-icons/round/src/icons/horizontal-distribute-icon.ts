import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-horizontal-distribute-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3 22c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1s1 .45 1 1v18c0 .55-.45 1-1 1zM21 2c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1zm-9 5c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHorizontalDistributeIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
