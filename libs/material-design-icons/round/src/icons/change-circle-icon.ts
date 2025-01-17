import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-change-circle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.91 16.15a.5.5 0 0 1-.85-.35V17H12c-1.28 0-2.56-.49-3.54-1.46a5.005 5.005 0 0 1-1.14-5.3c.19-.51.86-.64 1.24-.25.22.22.27.54.17.82-.46 1.24-.2 2.68.8 3.68.7.7 1.62 1.03 2.54 1.01v-.94c0-.45.54-.67.85-.35l1.62 1.62c.2.2.2.51 0 .71l-1.63 1.61zm2.53-4.13a.78.78 0 0 1-.17-.82c.46-1.24.2-2.68-.8-3.68-.7-.7-1.62-1.04-2.53-1.02v.94c0 .45-.54.67-.85.35L9.46 8.18c-.2-.2-.2-.51 0-.71l1.62-1.62a.5.5 0 0 1 .85.35v.81c1.3-.02 2.61.45 3.6 1.45a5.005 5.005 0 0 1 1.14 5.3c-.19.52-.85.65-1.23.26z"
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
export class SiChangeCircleIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
