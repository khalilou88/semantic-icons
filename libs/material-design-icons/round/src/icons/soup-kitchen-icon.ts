import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-soup-kitchen-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.15 13.5c-.46 0-.8-.42-.71-.87.04-.18.06-.39.06-.63 0-1-1-2.85-1-3.62 0-.29.03-.59.17-.93A.72.72 0 0 1 5.34 7c.45 0 .8.42.71.86-.04.18-.05.35-.05.52C6 9.15 7 11 7 12c0 .42-.08.76-.17 1.01-.1.3-.37.49-.68.49zm6.5 0c.31 0 .58-.19.68-.49.09-.25.17-.59.17-1.01 0-1-1-2.85-1-3.62 0-.17.01-.34.04-.51a.723.723 0 0 0-.7-.87.73.73 0 0 0-.67.45c-.14.34-.17.63-.17.93 0 .77 1 2.62 1 3.62 0 .24-.02.45-.06.63-.09.45.25.87.71.87zm-3.25 0c.31 0 .58-.19.68-.49.09-.25.17-.59.17-1.01 0-1-1-2.85-1-3.62 0-.17.01-.34.04-.51a.723.723 0 0 0-.7-.87c-.3 0-.56.18-.67.45-.14.34-.17.63-.17.93 0 .77 1 2.63 1 3.62 0 .24-.02.45-.06.63-.09.45.25.87.71.87zm11.06-7.13a.991.991 0 0 0 1.12-.91c.01-.18.02-.34.02-.46 0-1.65-1.35-3-3-3-1.54 0-2.81 1.16-2.98 2.65L14.53 15H3.99c-.6 0-1.07.54-.98 1.14C3.54 19.46 6.39 22 9.75 22c3.48 0 6.34-2.73 6.71-6.23L17.61 4.9c.05-.51.47-.9.99-.9.55 0 1 .45 1 1 0 .07-.01.18-.01.31-.04.53.34.99.87 1.06z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSoupKitchenIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
