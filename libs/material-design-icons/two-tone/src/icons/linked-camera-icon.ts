import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-linked-camera-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 20H4V8h4.05l1.83-2H15V4H9L7.17 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9h-2v11zM16 2v1.33c2.58 0 4.66 2.09 4.67 4.66H22A6.003 6.003 0 0 0 16 2zm0 2.67V6c1.11 0 1.99.89 2 1.99h1.33A3.327 3.327 0 0 0 16 4.67z"
    />
    <svg:path
      d="M14.98 10.01c-.13-.09-.26-.18-.39-.26.14.08.27.17.39.26zM17 9a2.015 2.015 0 0 0-1.01-1.73C15.7 7.1 15.36 7 15 7V6H9.88L8.05 8H4v12h16V9h-3zm-5 10c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
      opacity=".3"
    />
    <svg:path
      d="M12 9c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"
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
export class SiLinkedCameraIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
