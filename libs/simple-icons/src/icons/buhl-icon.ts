import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-buhl-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Buhl</svg:title>
    <svg:path
      d="M21.3409 10.8756a1.697 1.697 0 0 0-.4196-.7807 1.593 1.593 0 0 0-.76-.3968 5.17 5.17 0 0 0-1.1423-.1128c-.1072 0-.2232.0044-.36.0136a6.4 6.4 0 0 0-.406.04l-.4.054c-.1292.018-.25.0316-.3524.04-.0716 0-.116-.0224-.1336-.0632V6.941a.124.124 0 0 0-.0328-.1032.12.12 0 0 0-.1028-.0352h-1.0083a.09.09 0 0 0-.0492.0092.12.12 0 0 0-.08.1308v.0436c0 .0272-.0044.054-.0044.0904l.0044.1084v9.7196a.124.124 0 0 0 .0328.1032.12.12 0 0 0 .1008.0368h1c.0891 0 .134-.0452.134-.14v-6.0798a.173.173 0 0 1 .12-.0992 5.48 5.48 0 0 1 1.2179-.1128 3.2 3.2 0 0 1 .7675.0768.88.88 0 0 1 .4596.2664 1.09 1.09 0 0 1 .2232.5148 3.13 3.13 0 0 1 .058.6776v4.7518c0 .0948.0448.14.1292.14h.9952c.0892 0 .1292-.0452.1292-.14V12.136a4.8 4.8 0 0 0-.12-1.2604ZM1.3876 15.3243H.134c-.0892 0-.134.04-.134.1248v1.2671c0 .0848.0448.1248.134.1248h1.2536c.0892 0 .134-.04.134-.1248v-1.2671a.1176.1176 0 0 0-.134-.1248M23.8664 6.801h-1c-.0892 0-.134.0452-.134.14v9.9652a.124.124 0 0 0 .0328.1032.12.12 0 0 0 .1012.0368h1c.0892 0 .1336-.0452.1336-.14V6.941c.0004-.0948-.044-.14-.1336-.14m-9.1689 3.0455h-.9952c-.0892 0-.1292.0448-.1292.134v5.9146c0 .0716-.0448.12-.1291.1472a3.6 3.6 0 0 1-.5044.08 6.1 6.1 0 0 1-.5844.0268 3.66 3.66 0 0 1-.812-.076.926.926 0 0 1-.754-.7716 3.63 3.63 0 0 1-.0716-.794v-4.529a.1168.1168 0 0 0-.1292-.134h-.9951c-.0892 0-.1292.0448-.1292.134v4.6678a5 5 0 0 0 .1292 1.236 1.576 1.576 0 0 0 .4596.7807 1.91 1.91 0 0 0 .8923.4148 7 7 0 0 0 1.428.12c.156 0 .3348-.0088.5312-.0224s.4-.0356.6111-.0624q.3169-.0402.6248-.0936c.2052-.0356.3972-.0716.5712-.1072.0892-.018.1292-.0624.1292-.134V9.9785a.1288.1288 0 0 0-.1432-.134Zm-7.023.5587a1.97 1.97 0 0 0-.9231-.6051 4.67 4.67 0 0 0-1.41-.1852 4.9 4.9 0 0 0-.7364.054 3.9 3.9 0 0 1-.4727.054q-.1072 0-.1072-.0948V6.9366a.12.12 0 0 0-.0316-.1004.116.116 0 0 0-.0984-.0332h-1c-.0888 0-.1288.0432-.1288.1788v9.8368c0 .018.04.0632.116.0904a8.7 8.7 0 0 0 .9864.2076 8.4 8.4 0 0 0 1.2227.08 4.6 4.6 0 0 0 1.6-.24 2.09 2.09 0 0 0 .9903-.7495 3.15 3.15 0 0 0 .5044-1.28 9.93 9.93 0 0 0 .1428-1.8291 7.1 7.1 0 0 0-.1516-1.6036 2.55 2.55 0 0 0-.5028-1.0892m-.72 4.2591a2.2 2.2 0 0 1-.2631.9124 1.102 1.102 0 0 1-.5888.4832 3.2 3.2 0 0 1-1.0308.1356c-.1472 0-.32-.0092-.5132-.0224a1.84 1.84 0 0 1-.446-.0768.135.135 0 0 1-.0935-.1492v-4.9955a.185.185 0 0 1 .1072-.194 3.7 3.7 0 0 1 .4195-.08 4.2 4.2 0 0 1 .6156-.04 3.15 3.15 0 0 1 .8968.1084 1.04 1.04 0 0 1 .5712.4064 1.98 1.98 0 0 1 .2968.8104 7.7 7.7 0 0 1 .0848 1.2827 12.9 12.9 0 0 1-.0536 1.418zm-5.567-4.9078H.134c-.0892 0-.134.04-.134.1248v1.2671c0 .0848.0448.1248.134.1248h1.2536c.0892 0 .134-.04.134-.1248V9.8813a.1176.1176 0 0 0-.134-.1248"
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
export class SiBuhlIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#023E84');
}
