import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-diversity-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.77 15.23a1 1 0 0 0-.04-1.45C8.17 11.47 6.65 9.9 7.07 8.33 7.29 7.52 8.01 7 8.85 7c1.11 0 1.54.65 2.68 2h.93c1.12-1.31 1.53-2 2.68-2 .87 0 1.55.54 1.77 1.32.35-.04.68-.06 1-.06.36 0 .7.03 1.03.08C18.7 6.43 17.13 5 15.15 5c-.12 0-.23.03-.35.04.26-.71.31-1.53-.18-2.43-.43-.81-1.22-1.43-2.12-1.57C10.62.74 9 2.18 9 4c0 .37.08.71.2 1.04-.12-.01-.23-.04-.35-.04C6.69 5 5 6.69 5 8.85c0 2.23 1.73 4.01 4.4 6.41.39.36 1 .34 1.37-.03z"
    />
    <svg:path
      d="M23.52 17.25c-.54-.87-1.27-1.23-2.01-1.36.07-.1.15-.18.21-.28 1.08-1.87.46-4.18-1.41-5.26-1.93-1.11-4.34-.5-7.75.6-.51.16-.79.7-.66 1.21.15.55.73.87 1.28.69 3.28-1.06 5.4-1.6 6.55-.45.59.59.68 1.48.26 2.21-.56.96-1.33 1-3.07 1.32l-.47.81c.58 1.62.97 2.33.39 3.32-.53.91-1.61 1.2-2.53.68-.06-.03-.11-.09-.17-.13-.3.67-.64 1.24-1.03 1.73v.01c1.9 1.24 4.34.64 5.46-1.29.06-.1.09-.21.14-.32.22.27.48.51.8.69 1.58.91 3.64.23 4.31-1.55.32-.86.18-1.85-.3-2.63z"
    />
    <svg:path
      d="M12.1 15.04c-.72 3.38-1.32 5.48-2.89 5.9-.81.22-1.62-.15-2.04-.88-.56-.96-.2-1.66.39-3.32l-.46-.81c-1.7-.31-2.5-.33-3.07-1.32-.53-.91-.24-2 .68-2.53.09-.05.19-.08.29-.11-.27-.42-.5-.87-.67-1.37-.24-.11-.36-.16-.6-.26a3.816 3.816 0 0 0-1.43 5.27c.06.1.14.18.21.28-.75.13-1.48.49-2.01 1.36-.48.78-.62 1.77-.3 2.63a3 3 0 0 0 4.31 1.55c.32-.18.58-.42.8-.69.05.11.08.22.14.32 1.08 1.87 3.39 2.49 5.26 1.41 1.93-1.11 2.61-3.51 3.36-7.01a.996.996 0 0 0-.72-1.17 1 1 0 0 0-1.25.75z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDiversity2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
