import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-logo-web-component-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m179.9 388-76.16-132zM179.9 388h152.21l76.15-132-76.15-132H179.9l-76.16 132zM103.74 256l76.16-132z"
      fill="none"
    />
    <svg:path
      d="M496 256 376 48H239.74l-43.84 76h136.21l76.15 132-76.15 132H195.9l43.84 76H376z"
    />
    <svg:path
      d="m179.9 388-76.16-132 76.16-132 43.84-76H136L16 256l120 208h87.74z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLogoWebComponentIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
