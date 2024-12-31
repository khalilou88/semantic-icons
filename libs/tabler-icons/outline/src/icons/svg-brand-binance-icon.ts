import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-brand-binance-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-binance"
      [class]="classInput()"
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
      <path d="M6 8l2 2l4 -4l4 4l2 -2l-6 -6z" />
      <path d="M6 16l2 -2l4 4l3.5 -3.5l2 2l-5.5 5.5z" />
      <path d="M20 10l2 2l-2 2l-2 -2z" />
      <path d="M4 10l2 2l-2 2l-2 -2z" />
      <path d="M12 10l2 2l-2 2l-2 -2z" />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBrandBinanceIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
