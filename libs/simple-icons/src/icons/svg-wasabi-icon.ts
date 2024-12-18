import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-wasabi-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Wasabi</title>
      <path
        d="M20.483 3.517A11.91 11.91 0 0 0 12 0a11.91 11.91 0 0 0-8.483 3.517A11.91 11.91 0 0 0 0 12a11.91 11.91 0 0 0 3.517 8.483A11.91 11.91 0 0 0 12 24a11.91 11.91 0 0 0 8.483-3.517A11.91 11.91 0 0 0 24 12a11.91 11.91 0 0 0-3.517-8.483Zm1.29 7.387-5.16-4.683-5.285 4.984-2.774 2.615V9.932l4.206-3.994 3.146-2.969c3.163 1.379 5.478 4.365 5.867 7.935zm-.088 2.828a10.632 10.632 0 0 1-1.025 2.951l-2.952-2.668v-3.87Zm-8.183-11.47-2.227 2.103-2.739 2.598v-4.17A9.798 9.798 0 0 1 12 2.155c.513 0 1.007.035 1.502.106zM6.398 13.891l-4.083-3.658a9.744 9.744 0 0 1 1.078-2.987L6.398 9.95zm0-9.968v3.129l-1.75-1.573a8.623 8.623 0 0 1 1.75-1.556Zm-4.189 9.102 5.284 4.736 5.302-4.983 2.74-2.598v3.817l-7.423 7.016a9.823 9.823 0 0 1-5.903-7.988Zm8.306 8.695 5.02-4.754v4.206a9.833 9.833 0 0 1-3.553.654c-.495 0-.99-.035-1.467-.106zm7.176-1.714v-3.11l1.714 1.555a9.604 9.604 0 0 1-1.714 1.555z"
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
export class SvgWasabiIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
