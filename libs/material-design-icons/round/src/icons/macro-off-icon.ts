import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-macro-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.2 13.08c-.64-.09-1.21.48-1.12 1.12C3.67 18.6 7.44 22 12 22c0-4.56-3.4-8.33-7.8-8.92zM12 5.5A2.5 2.5 0 0 1 14.5 8c0 .99-.58 1.84-1.42 2.25l2.48 2.48c.11.02.23.03.35.03a2.5 2.5 0 0 0 2.5-2.5c0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25a2.5 2.5 0 0 0-3.92-2.06l.01-.2a2.5 2.5 0 0 0-5 0l.02.19a2.485 2.485 0 0 0-2.93.08l3.16 3.16c.41-.85 1.26-1.43 2.25-1.43zm7.98 11.65c.47-.91.8-1.9.94-2.95.09-.64-.48-1.21-1.12-1.12-1.05.14-2.05.47-2.95.94l3.13 3.13z"
    />
    <svg:path
      d="M2.1 3.51a.996.996 0 0 0 0 1.41l3.93 3.93c-.35.52-.53 1.17-.38 1.89.22 1.13 1.26 1.98 2.41 2 .54.01 1.02-.15 1.44-.43l.02.02-.02.17A2.5 2.5 0 0 0 12 15c.05 0 .1-.01.16-.02l1.64 1.64A8.905 8.905 0 0 0 12 22c2.02 0 3.88-.67 5.38-1.79l1.69 1.69a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0z"
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
export class SiMacroOffIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
