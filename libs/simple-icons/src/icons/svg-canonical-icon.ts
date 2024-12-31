import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-canonical-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Canonical</title>
      <path
        d="M4.427 0v24h15.146V0Zm9.994 10.25a1.568 1.568 0 0 1 1.567 1.568 1.568 1.568 0 0 1-1.567 1.568 1.568 1.568 0 0 1-1.568-1.568 1.568 1.568 0 0 1 1.568-1.568zm-2.157.16c.122 0 .245.005.369.015a2.268 2.268 0 0 0-.476 1.271 3.825 3.825 0 0 0-3.08 1.647 2.243 2.243 0 0 0-1.308-.335 5.159 5.159 0 0 1 4.495-2.599zm4.242 2.296a5.14 5.14 0 0 1 .74 3.905 5.139 5.139 0 0 1-.997 2.113 2.25 2.25 0 0 0-.75-1.167 3.837 3.837 0 0 0 .125-3.818 2.26 2.26 0 0 0 .882-1.033zm-8.616.982a1.568 1.568 0 0 1 1.568 1.568 1.568 1.568 0 0 1-1.568 1.568 1.568 1.568 0 0 1-1.567-1.568 1.568 1.568 0 0 1 1.567-1.568Zm.933 3.618a3.818 3.818 0 0 0 2.604 1.986c.127.027.256.048.385.063.01.476.17.932.459 1.31a5.161 5.161 0 0 1-1.114-.114 5.105 5.105 0 0 1-3.675-3.08 2.26 2.26 0 0 0 1.34-.165zm5.244.427a1.568 1.568 0 0 1 1.568 1.568 1.568 1.568 0 0 1-1.568 1.568A1.568 1.568 0 0 1 12.5 19.3a1.568 1.568 0 0 1 1.568-1.568z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCanonicalIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
