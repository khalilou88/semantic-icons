import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-booth-curtain-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 5v2H3a1 1 0 0 0 0 2h1v10a1 1 0 1 0 2 0V9h2v5.586c0 1.782 2.154 2.674 3.414 1.414l.586-.586.586.586a2 2 0 0 0 2.828 0l.586-.586.586.586c.411.411.918.593 1.414.59V19a1 1 0 1 0 2 0V9h1a1 1 0 1 0 0-2h-1V6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H6V5a1 1 0 0 0-2 0Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBoothCurtainIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
