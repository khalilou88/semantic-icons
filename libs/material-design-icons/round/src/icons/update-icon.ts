import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-update-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11 8.75v3.68c0 .35.19.68.49.86l3.12 1.85c.36.21.82.09 1.03-.26.21-.36.1-.82-.26-1.03l-2.87-1.71v-3.4c-.01-.4-.35-.74-.76-.74s-.75.34-.75.75zm10 .75V4.21c0-.45-.54-.67-.85-.35l-1.78 1.78a9.01 9.01 0 0 0-7.21-2.6c-4.19.38-7.64 3.75-8.1 7.94a9 9 0 0 0 17.87 2.14c.07-.6-.4-1.12-1-1.12-.5 0-.92.37-.98.86-.43 3.49-3.44 6.19-7.05 6.14-3.71-.05-6.84-3.18-6.9-6.9C4.94 8.2 8.11 5 12 5c1.93 0 3.68.79 4.95 2.05l-2.09 2.09c-.32.32-.1.86.35.86h5.29c.28 0 .5-.22.5-.5z"
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
export class SiUpdateIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
