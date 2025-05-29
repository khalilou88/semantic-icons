import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-medication-liquid-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:g opacity=".3">
      <svg:defs><svg:path id="a" d="M4 8h10v11H4z" opacity=".3" /></svg:defs>
      <svg:use xlink:href="#a" overflow="visible" />
      <svg:clipPath id="b">
        <svg:use xlink:href="#a" overflow="visible" />
      </svg:clipPath>
      <svg:path
        d="M4 19h10V8H4v11zm1-7h2.5V9.5h3V12H13v3h-2.5v2.5h-3V15H5v-3z"
        clip-path="url(#b)"
      />
    </svg:g>
    <svg:path
      d="M3 3h12v2H3zm11 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 13H4V8h10v11z"
    />
    <svg:path d="M7.5 17.5h3V15H13v-3h-2.5V9.5h-3V12H5v3h2.5z" />
    <svg:ellipse cx="20" cy="10" opacity=".3" rx="1" ry="2" />
    <svg:path
      d="M20 6c-1.68 0-3 1.76-3 4 0 1.77.83 3.22 2 3.76V20c0 .55.45 1 1 1s1-.45 1-1v-6.24c1.17-.54 2-1.99 2-3.76 0-2.24-1.32-4-3-4zm0 6c-.41 0-1-.78-1-2s.59-2 1-2 1 .78 1 2-.59 2-1 2z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMedicationLiquidIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
