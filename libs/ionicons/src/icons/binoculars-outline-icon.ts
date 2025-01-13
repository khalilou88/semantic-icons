import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-binoculars-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle
      cx="392"
      cy="344"
      r="88"
      stroke="currentColor"
      stroke-width="32"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <svg:circle
      cx="120"
      cy="344"
      r="88"
      stroke="currentColor"
      stroke-width="32"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <svg:path
      d="M208 344V128c0-26.5-16-48-44-48-35 0-46.5 21.5-57 48 0 0-48.5 127.833-71 189.5M208 184s16.5-8 48-8 48 8 48 8M208 272s16.5-8 48-8 48 8 48 8M304 344V128c0-26.5 16-48 44-48 35 0 46.5 21.5 57 48 0 0 48.5 127.833 71 189.5"
      stroke="currentColor"
      stroke-width="32"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBinocularsOutlineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');

  readonly fill = input<string>('none');
}
