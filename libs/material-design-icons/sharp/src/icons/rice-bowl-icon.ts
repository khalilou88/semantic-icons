import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-rice-bowl-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 3.69 2.47 6.86 6 8.25V22h8v-1.75c3.53-1.39 6-4.56 6-8.25zm-2 0h-4V5.08c2.39 1.39 4 3.97 4 6.92zm-6-7.74V12h-4V4.26c.64-.16 1.31-.26 2-.26s1.36.1 2 .26zM4 12c0-2.95 1.61-5.53 4-6.92V12H4z"
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
export class SiRiceBowlIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
