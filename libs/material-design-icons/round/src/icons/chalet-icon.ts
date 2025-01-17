import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-chalet-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10 15c-.55 0-1 .45-1 1v4H6c-.55 0-1-.45-1-1v-3.67l-.38.38a.996.996 0 1 1-1.41-1.41L9.3 8.21a.996.996 0 0 1 1.41 0l6.09 6.09a.996.996 0 1 1-1.41 1.41l-.39-.38V19c0 .55-.45 1-1 1h-3v-4c0-.55-.45-1-1-1zm7.5-7.5v.89l-1.08 1.08c-.18.18-.21.48-.05.69.19.23.53.24.74.04l.39-.39v.69c0 .28.22.5.5.5s.5-.22.5-.5v-.69l.39.39c.21.21.55.19.74-.04.17-.2.14-.5-.05-.69L18.5 8.39V7.5h.89l1.08 1.08c.18.18.48.21.69.05.23-.19.24-.53.04-.74l-.39-.39h.69c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-.69l.39-.39c.21-.21.19-.55-.04-.74-.2-.17-.5-.14-.69.05L19.39 6.5h-.89v-.89l1.08-1.08c.18-.18.21-.48.05-.69a.506.506 0 0 0-.74-.04l-.39.39V3.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v.69l-.39-.39a.498.498 0 0 0-.74.04c-.17.2-.14.5.05.69l1.08 1.08v.89h-.89l-1.08-1.08a.531.531 0 0 0-.69-.05c-.23.19-.24.53-.04.74l.39.39h-.69c-.28 0-.5.22-.5.5s.22.5.5.5h.69l-.39.39c-.21.21-.19.55.04.74.2.17.5.14.69-.05l1.08-1.08h.89z"
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
export class SiChaletIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
