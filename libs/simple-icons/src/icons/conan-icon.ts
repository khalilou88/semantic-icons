import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-conan-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Conan</svg:title>
    <svg:path
      d="M11.709 0 0 5.534V16.76L11.984 24l4.857-2.706V9.998c.13-.084.275-.196.399-.27l.032-.017c.197-.11.329-.102.23.33v10.884l6.466-3.603V6.11L24 6.093Zm.915 2.83c.932.02 1.855.191 2.706.552 1.32.533 2.522 1.364 3.45 2.429a62.814 62.814 0 0 1-3.044 1.616c.56-.853.14-2.009-.76-2.455-.93-.648-2.093-.73-3.205-.674-1.064.175-2.258.51-2.893 1.474-.722.862-.084 2.11.914 2.408 1.2.509 2.543.38 3.806.413-.975.457-1.931.97-2.927 1.358-1.701-.176-3.585-.917-4.374-2.51-.574-1.178.215-2.572 1.319-3.14a11.426 11.426 0 0 1 3.336-1.348 9.212 9.212 0 0 1 1.672-.123Z"
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
export class SiConanIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#6699CB');
}
