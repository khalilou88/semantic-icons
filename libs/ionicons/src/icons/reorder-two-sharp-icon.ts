import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-reorder-two-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M118 304h276M118 208h276"
      fill="none"
      stroke="currentColor"
      stroke-linecap="square"
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
export class SiReorderTwoSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
