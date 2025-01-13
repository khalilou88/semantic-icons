import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cellular-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M472 432h-48a24 24 0 01-24-24V104a24 24 0 0124-24h48a24 24 0 0124 24v304a24 24 0 01-24 24zM344 432h-48a24 24 0 01-24-24V184a24 24 0 0124-24h48a24 24 0 0124 24v224a24 24 0 01-24 24zM216 432h-48a24 24 0 01-24-24V248a24 24 0 0124-24h48a24 24 0 0124 24v160a24 24 0 01-24 24zM88 432H40a24 24 0 01-24-24v-96a24 24 0 0124-24h48a24 24 0 0124 24v96a24 24 0 01-24 24z"
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
export class SiCellularIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
