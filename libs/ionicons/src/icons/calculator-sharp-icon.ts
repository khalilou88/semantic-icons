import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-calculator-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M416 48a16 16 0 00-16-16H112a16 16 0 00-16 16v416a16 16 0 0016 16h288a16 16 0 0016-16zM192 432h-48v-48h48zm0-80h-48v-48h48zm0-80h-48v-48h48zm88 160h-48v-48h48zm0-80h-48v-48h48zm0-80h-48v-48h48zm88 160h-48V304h48zm0-160h-48v-48h48zm0-96H144V80h224z"
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
export class SiCalculatorSharpIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
