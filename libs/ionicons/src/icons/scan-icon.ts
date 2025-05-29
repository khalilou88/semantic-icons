import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-scan-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M342 444h46a56 56 0 0 0 56-56v-46M444 170v-46a56 56 0 0 0-56-56h-46M170 444h-46a56 56 0 0 1-56-56v-46M68 170v-46a56 56 0 0 1 56-56h46"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="44px"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiScanIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
