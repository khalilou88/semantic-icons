import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-line-axis-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.34 6.77a1 1 0 0 0-1.45.04l-3.33 3.74-5.65-5.24c-.79-.73-2.01-.71-2.77.05L2.7 10.81a.996.996 0 0 0 0 1.41l.09.09c.39.39 1.02.39 1.41 0l5.44-5.45 5.59 5.19L13.5 14l-2.58-2.58c-.78-.78-2.05-.78-2.83 0L2.7 16.8a.996.996 0 0 0 0 1.41l.1.09c.39.39 1.02.39 1.41 0l5.3-5.3 2.5 2.5c.81.81 2.14.77 2.91-.09l1.78-2.01 3.19 2.96c.39.36 1 .35 1.38-.03l.01-.01c.4-.4.39-1.05-.03-1.43l-3.22-2.99 3.35-3.77c.35-.39.33-.99-.04-1.36z"
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
export class SiLineAxisIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
