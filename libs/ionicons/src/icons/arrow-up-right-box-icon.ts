import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-arrow-up-right-box-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M331.636 32H464a16.002 16.002 0 0116 16v132.364c0 8.836-7.163 16-16 16s-16-7.164-16-16V86.627l-51.128 51.128a58.521 58.521 0 00-22.591-22.663L425.373 64h-93.737c-8.836 0-16-7.163-16-16s7.164-16 16-16zm42.645 83.092a58.543 58.543 0 00-28.59-7.456H90.546A58.547 58.547 0 0032 166.182v255.273A58.543 58.543 0 0090.546 480h255.272a58.543 58.543 0 0058.546-58.545V166.182c0-.808-.06-1.602-.176-2.378a58.544 58.544 0 00-7.316-26.049L227.314 307.314c-6.249 6.248-16.379 6.248-22.628 0-6.248-6.249-6.248-16.379 0-22.628l169.595-169.594z"
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
export class SiArrowUpRightBoxIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
