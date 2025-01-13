import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-expand-circle-down-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.79 9.71-3.08 3.08c-.39.39-1.02.39-1.42 0l-3.08-3.08c-.39-.39-.39-1.03 0-1.42a.996.996 0 0 1 1.41 0L12 12.67l2.38-2.38a.996.996 0 0 1 1.41 0c.39.39.39 1.03 0 1.42z"
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
export class SiExpandCircleDownIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
