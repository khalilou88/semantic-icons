import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-face-4-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.42 9.47a8.046 8.046 0 0 0 3.66-4.44 8.046 8.046 0 0 0-3.66 4.44zM17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12C12.06 6.44 14.6 8 17.5 8zM7.35 3.15C6.8 2.46 5.95 2 5 2 3.35 2 2 3.35 2 5c0 .95.46 1.8 1.15 2.35.94-1.79 2.41-3.26 4.2-4.2z"
      opacity=".3"
    />
    <svg:path
      d="M12 2c-.96 0-1.88.14-2.75.39A4.986 4.986 0 0 0 5 0C2.24 0 0 2.24 0 5c0 1.8.96 3.37 2.39 4.25C2.14 10.12 2 11.04 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 2c2.9 0 5.44 1.56 6.84 3.88-.43.07-.88.12-1.34.12-2.9 0-5.44-1.56-6.84-3.88.43-.07.88-.12 1.34-.12zM2 5c0-1.65 1.35-3 3-3 .95 0 1.8.46 2.35 1.15-1.79.94-3.26 2.41-4.2 4.2C2.46 6.8 2 5.95 2 5zm6.08.03a8.046 8.046 0 0 1-3.66 4.44 8.046 8.046 0 0 1 3.66-4.44zM12 20c-4.41 0-8-3.59-8-8 0-.05.01-.1.01-.15 2.6-.98 4.68-2.99 5.74-5.55a9.942 9.942 0 0 0 9.92 3.46c.21.71.33 1.46.33 2.24 0 4.41-3.59 8-8 8z"
    />
    <svg:circle cx="9" cy="13" r="1.25" />
    <svg:circle cx="15" cy="13" r="1.25" />
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
export class SiFace4Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
