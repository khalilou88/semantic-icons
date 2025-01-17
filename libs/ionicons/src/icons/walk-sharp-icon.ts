import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-walk-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M315.09 481.38l-56.95-115.12-45-57.56a73.11 73.11 0 01-10.16-37.17V142h15.73A40.36 40.36 0 01259 182.32v162.52"
      stroke="currentColor"
      stroke-linecap="square"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:path
      fill="none"
      stroke="currentColor"
      stroke-linecap="square"
      stroke-linejoin="round"
      stroke-width="32"
      d="M128.18 291.5v-74.77l64.95-65.1"
    />
    <svg:path
      d="M376.35 295.73l-83.95-56.38v-44.68l104.68 72.95-20.73 28.11zM175.13 498.58l-21.43-26.91 80.33-81.54 15.53 32.07-74.43 76.38z"
    />
    <svg:circle
      cx="259.02"
      cy="67.21"
      r="37.38"
      stroke="currentColor"
      stroke-linecap="square"
      stroke-linejoin="round"
      stroke-width="16"
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
export class SiWalkSharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
