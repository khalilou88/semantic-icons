import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-auto-awesome-motion-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13 2H4c-1.1 0-2 .9-2 2v9c0 .55.45 1 1 1s1-.45 1-1V4h9c.55 0 1-.45 1-1s-.45-1-1-1zm4 4H8c-1.1 0-2 .9-2 2v9c0 .55.45 1 1 1s1-.45 1-1V8h9c.55 0 1-.45 1-1s-.45-1-1-1zm3 4h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z"
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
export class SiAutoAwesomeMotionIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
