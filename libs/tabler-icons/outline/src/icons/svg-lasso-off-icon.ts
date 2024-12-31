import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lasso-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-lasso-off"
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
        d="M4.028 13.252c-.657 -.972 -1.028 -2.078 -1.028 -3.252c0 -1.804 .878 -3.449 2.319 -4.69m2.49 -1.506a11.066 11.066 0 0 1 4.191 -.804c4.97 0 9 3.134 9 7c0 1.799 -.873 3.44 -2.307 4.68m-2.503 1.517a11.066 11.066 0 0 1 -4.19 .803c-1.913 0 -3.686 -.464 -5.144 -1.255"
      />
      <path d="M5 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M5 17c0 1.42 .316 2.805 1 4" />
      <path d="M3 3l18 18" />
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
export class SvgLassoOffIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
