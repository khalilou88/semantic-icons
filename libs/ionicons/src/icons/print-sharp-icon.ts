import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-print-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M400 96V56a8 8 0 00-8-8H120a8 8 0 00-8 8v40" />
    <svg:rect
      x="152"
      y="264"
      width="208"
      height="160"
      rx="4"
      ry="4"
      fill="none"
    />
    <svg:rect
      x="152"
      y="264"
      width="208"
      height="160"
      rx="4"
      ry="4"
      fill="none"
    />
    <svg:path
      d="M408 112H104a56 56 0 00-56 56v208a8 8 0 008 8h56v72a8 8 0 008 8h272a8 8 0 008-8v-72h56a8 8 0 008-8V168a56 56 0 00-56-56zm-48 308a4 4 0 01-4 4H156a4 4 0 01-4-4V268a4 4 0 014-4h200a4 4 0 014 4zm34-212.08a24 24 0 1122-22 24 24 0 01-22 22z"
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
export class SiPrintSharpIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
