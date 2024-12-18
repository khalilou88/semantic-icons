import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-rescript-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>ReScript</title>
      <path
        d="M23.29 1.8c-.3-.4-.6-.7-.9-.9-1.3-.9-2.899-.9-6.098-.9H7.696C4.498 0 2.9 0 1.8.8c-.4.3-.7.6-1 1C0 2.9 0 4.5 0 7.7v8.6c0 3.2 0 4.8.8 5.9.3.4.6.7.9.9 1.199.9 2.798.9 5.996.9h8.596c3.199 0 4.798 0 5.898-.8.4-.3.7-.6.9-.9.799-1.1.799-2.7.799-5.9V7.7c.2-3.2.2-4.8-.6-5.9ZM11.194 16.5c0 .2 0 .5-.1.8 0 .2-.1.3-.1.5-.1.1-.2.3-.4.5s-.4.3-.6.4c-.3.1-.7.1-1.399.1-.8 0-1.1 0-1.4-.1-.4-.2-.699-.5-.899-.9-.1-.3-.1-.7-.1-1.4v-8c0-.9 0-1.4.2-1.7.2-.3.4-.5.8-.7.3-.2.8-.2 1.699-.2h2.299zm5.097-4.9c-1.599 0-2.798-1.3-2.798-2.8 0-1.6 1.3-2.8 2.798-2.8 1.5 0 2.8 1.3 2.8 2.8 0 1.5-1.3 2.8-2.8 2.8z"
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
export class SvgRescriptIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
