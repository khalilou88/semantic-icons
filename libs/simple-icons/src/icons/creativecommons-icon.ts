import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-creativecommons-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Creative Commons</svg:title>
    <svg:path
      d="M11.983 0c-3.292 0-6.19 1.217-8.428 3.485C1.25 5.819 0 8.844 0 12c0 3.189 1.217 6.148 3.522 8.45C5.827 22.75 8.822 24 11.983 24c3.16 0 6.222-1.25 8.593-3.583C22.815 18.214 24 15.287 24 12c0-3.255-1.186-6.214-3.458-8.483C18.238 1.217 15.275 0 11.983 0zm.033 2.17c2.7 0 5.103 1.02 6.98 2.893 1.843 1.841 2.83 4.274 2.83 6.937 0 2.696-.954 5.063-2.798 6.872-1.943 1.906-4.444 2.926-7.012 2.926-2.601 0-5.038-1.019-6.914-2.893-1.877-1.875-2.93-4.34-2.93-6.905 0-2.597 1.053-5.063 2.93-6.97 1.844-1.874 4.214-2.86 6.914-2.86zM8.68 8.278C6.723 8.278 5.165 9.66 5.165 12c0 2.38 1.465 3.722 3.581 3.722 1.358 0 2.516-.744 3.155-1.874l-1.491-.758c-.333.798-.839 1.037-1.478 1.037-1.105 0-1.61-.917-1.61-2.126 0-1.21.426-2.127 1.61-2.127.32 0 .96.173 1.332.97l1.597-.838c-.68-1.236-1.837-1.728-3.181-1.728zm6.932 0c-1.957 0-3.514 1.382-3.514 3.722 0 2.38 1.464 3.722 3.58 3.722 1.359 0 2.516-.744 3.155-1.874l-1.49-.758c-.333.798-.84 1.037-1.478 1.037-1.105 0-1.611-.917-1.611-2.126 0-1.21.426-2.127 1.61-2.127.32 0 .96.173 1.332.97l1.597-.838c-.68-1.236-1.837-1.728-3.181-1.728z"
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
export class SiCreativecommonsIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#ED592F');
}
