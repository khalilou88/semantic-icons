import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-currency-kip-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-currency-kip"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 12h12" />
      <path d="M9 5v14" />
      <path d="M16 19a7 7 0 0 0 -7 -7a7 7 0 0 0 7 -7" />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCurrencyKipIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
