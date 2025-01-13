import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-logo-web-component-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="none"
      d="M179.9 388l-76.16-132 76.16 132zM179.9 388h152.21l76.15-132-76.15-132H179.9l-76.16 132 76.16 132zM103.74 256l76.16-132-76.16 132z"
    />
    <svg:path
      d="M496 256L376 48H239.74l-43.84 76h136.21l76.15 132-76.15 132H195.9l43.84 76H376l120-208z"
    />
    <svg:path
      d="M179.9 388l-76.16-132 76.16-132 43.84-76H136L16 256l120 208h87.74l-43.84-76z"
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
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
