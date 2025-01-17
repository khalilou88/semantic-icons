import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-trillertv-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>TrillerTV</svg:title>
    <svg:path
      d="m9.496.07-1.8 3.107-.868-.498c-1.269-.729-2.852.184-2.852 1.64v6.28l3.9-6.734L9.933.319a.14.14 0 0 0-.053-.19l-.19-.11a.143.143 0 0 0-.193.05Zm-.713 3.734-4.807 8.301v7.163c0 .674.338 1.23.826 1.562l-1.65 2.85a.14.14 0 0 0 .05.192l.192.109a.142.142 0 0 0 .193-.05l1.665-2.874L13.629 6.59Zm11.63 2.547-1.8 3.108-4.33-2.49-8.217 14.186a1.91 1.91 0 0 0 .764-.248l8.598-4.948 5.42-9.356a.141.141 0 0 0-.05-.193c-.065-.035-.128-.073-.192-.11-.027-.02-.14-.041-.193.051zm-.711 3.735-2.967 5.123 3.08-1.774c1.268-.731 1.268-2.556 0-3.285z"
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
export class SiTrillertvIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#E61414');
}
