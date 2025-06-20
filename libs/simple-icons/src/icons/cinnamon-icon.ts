import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cinnamon-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Cinnamon</svg:title>
    <svg:path
      d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12zm0 2.045c5.498 0 9.955 4.457 9.955 9.955 0 .844-.116 1.66-.314 2.443l-4.735-5.26-6.054 6.887 2.921-5.844-1.46-2.609-8.604 9.889A9.908 9.908 0 0 1 2.045 12c0-5.498 4.457-9.955 9.955-9.955z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCinnamonIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#DC682E');
}
