import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-fontawesome-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Font Awesome</title>
      <path
        d="M4.3934 4.5c.6837-.4317 1.1379-1.194 1.1379-2.0625C5.5313 1.0913 4.4398 0 3.0938 0 1.7475 0 .6563 1.0913.6563 2.4375c0 .7805.3668 1.4753.9375 1.9214V24h3v-3h17.5126c.6834 0 1.2373-.554 1.2373-1.2373a1.237 1.237 0 0 0-.1066-.5027l-2.8934-6.51 2.8934-6.51a1.237 1.237 0 0 0 .1066-.5026c0-.6834-.5539-1.2374-1.2373-1.2374Z"
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
export class SvgFontawesomeIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
