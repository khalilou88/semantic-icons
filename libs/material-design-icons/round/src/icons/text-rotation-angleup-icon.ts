import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-text-rotation-angleup-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m17.61 9.85.56.56-8.48 8.49a.996.996 0 1 0 1.41 1.41l8.49-8.49.56.56c.31.32.85.1.85-.34V9.5c0-.28-.22-.5-.5-.5h-2.54a.5.5 0 0 0-.35.85zm-9.13 2.9 3.54-3.54 1.6.67c.36.15.77.07 1.05-.21a.958.958 0 0 0-.32-1.57L5.26 4.5c-.43-.16-.91-.06-1.23.26-.32.32-.42.8-.25 1.23l3.61 9.09c.25.64 1.08.81 1.57.32.28-.28.36-.69.21-1.05l-.69-1.6zm-.82-1.72L5.43 6.16l4.87 2.23-2.64 2.64z"
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
export class SiTextRotationAngleupIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
