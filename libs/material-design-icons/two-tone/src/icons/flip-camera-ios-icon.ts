import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-flip-camera-ios-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.12 5H9.88L8.05 7H4v12h16V7h-4.05l-1.83-2zM12 18c-2.76 0-5-2.24-5-5H5l2.49-2.49.01-.01L10 13H8c0 2.21 1.79 4 4 4 .58 0 1.13-.13 1.62-.35l.74.74c-.71.37-1.5.61-2.36.61zm7-5-2.49 2.49-.01.01L14 13h2c0-2.21-1.79-4-4-4-.58 0-1.13.13-1.62.35l-.74-.73C10.35 8.24 11.14 8 12 8c2.76 0 5 2.24 5 5h2z"
      opacity=".3"
    />
    <svg:path
      d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h4.05l1.83-2h4.24l1.83 2H20v12z"
    />
    <svg:path
      d="M12 17c-2.21 0-4-1.79-4-4h2l-2.5-2.5-.01.01L5 13h2c0 2.76 2.24 5 5 5 .86 0 1.65-.24 2.36-.62l-.74-.74c-.49.23-1.04.36-1.62.36zm0-9c-.86 0-1.65.24-2.36.62l.74.73C10.87 9.13 11.42 9 12 9c2.21 0 4 1.79 4 4h-2l2.5 2.5.01-.01L19 13h-2c0-2.76-2.24-5-5-5z"
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
export class SiFlipCameraIosIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
