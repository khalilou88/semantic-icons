import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pan-tool-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19.5 5.65c-.28 0-.5.22-.5.5V12h-2V3.42c0-.28-.22-.5-.5-.5s-.5.22-.5.5V12h-2V2.51c0-.28-.22-.5-.5-.5s-.5.22-.5.5V12h-2V4.79c0-.28-.22-.5-.5-.5s-.5.23-.5.5v12.87l-5.35-2.83-.51.45 5.86 6.1c.38.39.9.62 1.44.62H18c1.1 0 2-.9 2-2V6.15c0-.28-.22-.5-.5-.5z"
      opacity=".3"
    />
    <svg:path
      d="M19.5 3.65c-.17 0-.34.02-.5.05v-.28a2.5 2.5 0 0 0-2.5-2.5c-.33 0-.65.06-.94.18a2.494 2.494 0 0 0-4.55 1.24A2.5 2.5 0 0 0 8 4.79v9.55l-2.41-1.28c-.73-.39-1.64-.28-2.26.27l-2.07 1.83 7.3 7.61c.75.78 1.8 1.23 2.89 1.23H18c2.21 0 4-1.79 4-4V6.15a2.5 2.5 0 0 0-2.5-2.5zM20 20c0 1.1-.9 2-2 2h-6.55c-.54 0-1.07-.22-1.44-.62l-5.86-6.11.51-.45L10 17.66V4.79c0-.28.22-.5.5-.5s.5.23.5.5V12h2V2.51c0-.28.22-.5.5-.5s.5.22.5.5V12h2V3.42c0-.28.22-.5.5-.5s.5.22.5.5V12h2V6.15c0-.28.22-.5.5-.5s.5.22.5.5V20z"
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
export class SiPanToolIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
