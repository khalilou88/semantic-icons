import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-abstract-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Abstract</svg:title>
    <svg:path
      d="M12 0c9.601 0 12 2.399 12 12 0 9.601-2.399 12-12 12-9.601 0-12-2.399-12-12C0 2.399 2.399 0 12 0zm-1.969 18.564c2.524.003 4.604-2.07 4.609-4.595 0-2.521-2.074-4.595-4.595-4.595S5.45 11.449 5.45 13.969c0 2.516 2.065 4.588 4.581 4.595zm8.344-.189V5.625H5.625v2.247h10.498v10.503h2.252zm-8.344-6.748a2.343 2.343 0 11-.002 4.686 2.343 2.343 0 01.002-4.686z"
    />
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
export class SiAbstractIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#191A1B');
}
