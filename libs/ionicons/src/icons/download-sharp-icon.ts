import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-download-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M272 160v147.37l64-64L358.63 266 256 368.63 153.37 266 176 243.37l64 64V160H92a12 12 0 0 0-12 12v296a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V172a12 12 0 0 0-12-12ZM240 32h32v128h-32z"
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
export class SiDownloadSharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
