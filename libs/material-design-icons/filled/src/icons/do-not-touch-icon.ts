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
      d="m13 10.17-2.5-2.5V2.25a1.25 1.25 0 0 1 2.5 0v7.92zm7 2.58v-7.5a1.25 1.25 0 0 0-2.5 0V11h-1V3.25a1.25 1.25 0 0 0-2.5 0v7.92l6 6v-4.42zM9.5 4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67V4.25zm3.5 5.92-2.5-2.5V2.25a1.25 1.25 0 0 1 2.5 0v7.92zm7 2.58v-7.5a1.25 1.25 0 0 0-2.5 0V11h-1V3.25a1.25 1.25 0 0 0-2.5 0v7.92l6 6v-4.42zM9.5 4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67V4.25zm11.69 16.94L2.81 2.81 1.39 4.22l5.63 5.63L7 9.83v4.3c-1.11-.64-2.58-1.47-2.6-1.48-.17-.09-.34-.14-.54-.14-.26 0-.5.09-.7.26-.04.01-1.16 1.11-1.16 1.11l6.8 7.18c.57.6 1.35.94 2.18.94H17c.62 0 1.18-.19 1.65-.52l-.02-.02 1.15 1.15 1.41-1.42z"
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
export class SiDoNotTouchIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
