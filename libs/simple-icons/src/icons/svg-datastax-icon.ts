import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-datastax-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>DataStax</title>
      <path
        d="M10.863 8.818v6.364l-2.181 1.683H0v-9.73h8.682l2.181 1.683Zm-9.18 6.366h7.498V8.818H1.683v6.366Zm13.243-6.296v2.26h6.919L24 12.793v2.318l-2.155 1.646h-8.153v-1.646h8.645v-2.318h-6.919l-2.155-1.645v-2.26l2.155-1.645h7.939v1.645h-8.431Z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgDatastaxIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}