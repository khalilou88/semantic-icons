import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-nordic-walking-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.25 23c-.41 0-.75-.34-.75-.75V14H19v8.25c0 .41-.34.75-.75.75zM4.93 23c.35 0 .66-.24.73-.59L7.53 14H6l-1.8 8.09c-.1.47.25.91.73.91zM13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM14 23c.55 0 1-.45 1-1v-5.64c0-.55-.22-1.07-.62-1.45L12.9 13.5l.6-3a7.321 7.321 0 0 0 4.36 2.41c.6.1 1.14-.38 1.14-.99 0-.49-.35-.91-.83-.98-1.53-.24-2.79-1.14-3.47-2.33l-1-1.6a2.155 2.155 0 0 0-2.66-.84L7.22 7.78C6.48 8.1 6 8.82 6 9.62V12c0 .55.45 1 1 1s1-.45 1-1V9.6l1.8-.7-2.55 12.86c-.13.64.36 1.24 1.02 1.24.49 0 .91-.34 1.02-.81L10.9 15l2.1 2v5c0 .55.45 1 1 1z"
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
export class SiNordicWalkingIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
