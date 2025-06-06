import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-musical-note-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M381.55 32.05c-18.13 4.28-126.57 31.07-156 38.19a2 2 0 0 0-1.55 1.94V353.3a2 2 0 0 1-1.32 1.88L182 369.88c-29.82 10.66-54 18.94-54 59.06 0 32.47 23.53 47.18 37.95 50a82 82 0 0 0 15 1.08c8.89 0 31-3.59 47.52-14.24C256 448 256 448 256 415.93V169.16a2 2 0 0 1 1.49-1.94l125-33a2 2 0 0 0 1.49-1.94V34a2 2 0 0 0-2.43-1.95"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMusicalNoteSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
