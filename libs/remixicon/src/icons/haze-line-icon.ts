import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-haze-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.08296 13C6.0284 12.6748 6 12.3407 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 12.3407 17.9716 12.6748 17.917 13H15.874C15.9562 12.6804 16 12.3453 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 12.3453 8.04375 12.6804 8.12602 13H6.08296ZM2 15H12V17H2V15ZM14 15H22V17H14V15ZM16 19H20V21H16V19ZM4 19H14V21H4V19ZM11 1H13V4H11V1ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHazeLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
