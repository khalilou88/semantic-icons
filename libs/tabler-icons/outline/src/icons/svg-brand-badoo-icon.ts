import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-brand-badoo-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-badoo"
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
      <path
        d="M22 9.43c0 5.838 -4.477 10.57 -10 10.57s-10 -4.662 -10 -10.5c0 -2.667 1.83 -5.01 4.322 -5.429c2.492 -.418 4.9 1.392 5.678 3.929c.768 -2.54 3.177 -4.354 5.668 -3.931c2.495 .417 4.332 2.69 4.332 5.36z"
      />
      <path d="M7.5 10c0 2.761 2.015 5 4.5 5s4.5 -2.239 4.5 -5" />
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
export class SvgBrandBadooIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
