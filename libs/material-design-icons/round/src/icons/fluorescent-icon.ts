import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-fluorescent-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7 15h10c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2zm5-13c-.56 0-1 .45-1 1v1c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1zm7.79 3.3a.996.996 0 0 0-1.41 0l-.38.38a.996.996 0 1 0 1.41 1.41l.38-.38a.996.996 0 0 0 0-1.41zM12 22c.56 0 1-.45 1-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1c0 .55.45 1 1 1zm5.99-3.59.38.39c.39.39 1.02.39 1.41 0l.01-.01a.996.996 0 0 0 0-1.41L19.4 17a.996.996 0 1 0-1.41 1.41zM6 5.69l-.39-.38A.996.996 0 1 0 4.2 6.72l.39.38c.39.39 1.02.39 1.41 0 .38-.39.38-1.03 0-1.41zm-1.8 13.1c.39.4 1.03.4 1.42 0L6 18.4a.996.996 0 1 0-1.41-1.41l-.39.39a.996.996 0 0 0 0 1.41z"
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
export class SiFluorescentIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
