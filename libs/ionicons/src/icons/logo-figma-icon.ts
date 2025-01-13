import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-logo-figma-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M336 176a80 80 0 000-160H176a80 80 0 000 160 80 80 0 000 160 80 80 0 1080 80V176z"
    />
    <svg:circle cx="336" cy="256" r="80" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLogoFigmaIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
