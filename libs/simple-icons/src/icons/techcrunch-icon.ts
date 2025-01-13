import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-techcrunch-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>TechCrunch</svg:title>
    <svg:path d="M0 6v4h4v8h4v-8h4V6Zm12 4v8h12v-4h-8v-4zm4 0h8V6h-8z" />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTechcrunchIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#029F00');
}
