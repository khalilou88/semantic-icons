import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-satellite-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.95 14.88a6.985 6.985 0 0 1-6.07 6.07.995.995 0 0 0-.87 1.11c.07.55.57.94 1.12.87 4.09-.51 7.3-3.72 7.81-7.81.06-.55-.33-1.05-.88-1.11a.987.987 0 0 0-1.11.87zm-2.11.38a1 1 0 0 0-.72-1.22.996.996 0 0 0-1.22.72 3 3 0 0 1-2.15 2.15 1.003 1.003 0 0 0-.72 1.22c.14.53.69.85 1.22.72a5.018 5.018 0 0 0 3.59-3.59zM21.8 4.12 18.26.58c-.78-.78-2.05-.78-2.83 0l-3.18 3.18c-.78.78-.78 2.05 0 2.83l1.24 1.24-.71.71-1.23-1.24c-.78-.78-2.05-.78-2.83 0L7.3 8.72c-.78.78-.78 2.05 0 2.83l1.24 1.24-.71.71-1.23-1.25c-.78-.78-2.05-.78-2.83 0L.59 15.43c-.78.78-.78 2.05 0 2.83l3.54 3.54c.78.78 2.05.78 2.83 0l3.18-3.18c.78-.78.78-2.05 0-2.83L8.9 14.55l.71-.71 1.24 1.24c.78.78 2.05.78 2.83 0l1.41-1.41c.78-.78.78-2.05 0-2.83L13.84 9.6l.71-.71 1.24 1.24c.78.78 2.05.78 2.83 0l3.18-3.18c.78-.78.78-2.05 0-2.83zM5.54 20.38 2 16.85l1.06-1.06 3.54 3.54-1.06 1.05zm2.12-2.12-3.54-3.54 1.06-1.06 3.54 3.54-1.06 1.06zm9.54-9.54-3.54-3.54 1.06-1.06 3.54 3.54-1.06 1.06zm2.12-2.12-3.54-3.54L16.85 2l3.54 3.54-1.07 1.06z"
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
export class SiSatelliteAltIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
