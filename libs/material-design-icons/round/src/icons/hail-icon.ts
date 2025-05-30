import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hail-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.95-4a1 1 0 0 1 1 1.09c-.02.15-.21 4.06-3.95 5.31V21c0 .55-.45 1-1 1s-1-.45-1-1v-5h-2v5c0 .55-.45 1-1 1s-1-.45-1-1V10.1c-.3.1-.5.2-.6.3-.46.36-1.17.87-1.36 2.67-.05.52-.47.93-1 .93a.995.995 0 0 1-1-1.07c.13-1.6.62-2.98 2.07-4.22C8.21 7.81 10 7 12 7s2.68-.46 3.48-1.06c.43-.34 1.28-.99 1.48-3.02a1 1 0 0 1 .99-.92zM5 16h1c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1z"
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
export class SiHailIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
