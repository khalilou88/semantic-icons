import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-scan-circle-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-24 320h-44a44.05 44.05 0 01-44-44v-44h32v44a12 12 0 0012 12h44zm0-192h-44a12 12 0 00-12 12v44h-32v-44a44.05 44.05 0 0144-44h44zm136 148a44.05 44.05 0 01-44 44h-44v-32h44a12 12 0 0012-12v-44h32zm0-92h-32v-44a12 12 0 00-12-12h-44v-32h44a44.05 44.05 0 0144 44z"
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
export class SiScanCircleSharpIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
