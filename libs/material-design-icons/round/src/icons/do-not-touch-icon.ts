import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-do-not-touch-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m13 10.17-2.5-2.5V2.25a1.25 1.25 0 0 1 2.5 0v7.92zm7-4.85c0-.65-.47-1.25-1.12-1.32-.75-.08-1.38.51-1.38 1.24v5.25c0 .28-.22.5-.5.5s-.5-.22-.5-.5V3.31c0-.65-.47-1.25-1.12-1.32-.75-.06-1.38.53-1.38 1.26v7.92l6 6V5.32zM9.5 4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67V4.25zM17 22c.62 0 1.18-.19 1.65-.52l-.02-.02.44.44a.996.996 0 1 0 1.41-1.41L3.51 3.51A.996.996 0 1 0 2.1 4.92l4.92 4.92L7 9.83v4.3l-2.6-1.48c-.17-.09-.34-.14-.54-.14-.26 0-.5.09-.7.26L2 13.88l6.8 7.18c.57.6 1.35.94 2.18.94H17z"
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
export class SiDoNotTouchIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
