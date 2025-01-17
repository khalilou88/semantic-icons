import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-arrow-up-left-box-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M32 180.364V48a16 16 0 0116-16h132.364c8.836 0 16 7.163 16 16s-7.164 16-16 16H86.627l51.128 51.128a58.521 58.521 0 00-22.663 22.591L64 86.627v93.737c0 8.836-7.163 16-16 16s-16-7.164-16-16zm83.092-42.645a58.543 58.543 0 00-7.456 28.59v255.146A58.545 58.545 0 00166.182 480h255.273a58.541 58.541 0 0041.397-17.148A58.541 58.541 0 00480 421.455V166.182a58.543 58.543 0 00-58.545-58.546H166.182c-.808 0-1.602.06-2.378.176a58.544 58.544 0 00-26.049 7.316l169.559 169.558c6.248 6.249 6.248 16.379 0 22.628-6.249 6.248-16.379 6.248-22.628 0L115.092 137.719z"
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
export class SiArrowUpLeftBoxIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
