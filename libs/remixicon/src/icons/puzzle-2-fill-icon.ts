import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-puzzle-2-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8 4C8 2.34315 9.34315 1 11 1C12.6569 1 14 2.34315 14 4C14 4.35064 13.9398 4.68722 13.8293 5H20C20.5523 5 21 5.44772 21 6V9.12602C21 9.43517 20.857 9.72694 20.6127 9.91635C20.3683 10.1058 20.0501 10.1715 19.7507 10.0945C19.5119 10.033 19.2605 10 19 10C17.3431 10 16 11.3431 16 13C16 14.6569 17.3431 16 19 16C19.2605 16 19.5119 15.967 19.7507 15.9055C20.0501 15.8285 20.3683 15.8942 20.6127 16.0836C20.857 16.2731 21 16.5648 21 16.874V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V6C3 5.44772 3.44772 5 4 5H8.17071C8.06015 4.68722 8 4.35064 8 4Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPuzzle2FillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
