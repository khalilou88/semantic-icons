import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-contactless-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
    />
    <svg:path
      d="M7.1 10.18a4.384 4.384 0 0 1 0 3.66l1.37.62c.37-.81.55-1.65.54-2.5-.01-.84-.19-1.65-.54-2.4l-1.37.62zm6.23-2.85c.78 1.57 1.18 3.14 1.18 4.64 0 1.51-.4 3.09-1.18 4.69l1.35.66c.88-1.81 1.33-3.61 1.33-5.35 0-1.74-.45-3.53-1.33-5.31l-1.35.67zM10.2 8.72c.53 1.07.8 2.21.8 3.4 0 1.17-.26 2.23-.78 3.15l1.3.74c.65-1.15.98-2.45.98-3.89 0-1.42-.32-2.79-.96-4.07l-1.34.67z"
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
export class SiContactlessIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
