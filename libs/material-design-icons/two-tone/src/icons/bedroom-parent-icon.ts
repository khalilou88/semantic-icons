import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bedroom-parent-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 20h16V4H4v16zm1-6.83c0-.66.25-1.26.65-1.72V9c0-1.1.9-2 2-2H11c.37 0 .72.12 1 .32.28-.2.63-.32 1-.32h3.35c1.1 0 2 .9 2 2v2.45c.4.46.65 1.06.65 1.72V17h-1.5v-1.5h-11V17H5v-3.83z"
      opacity=".3"
    />
    <svg:path
      d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z"
    />
    <svg:path
      d="M6.5 15.5h11V17H19v-3.83c0-.66-.25-1.26-.65-1.72V9c0-1.1-.9-2-2-2H13c-.37 0-.72.12-1 .32-.28-.2-.63-.32-1-.32H7.65c-1.1 0-2 .9-2 2v2.45c-.4.46-.65 1.06-.65 1.72V17h1.5v-1.5zm6.25-7h4v2h-4v-2zm-5.5 0h4v2h-4v-2zM6.5 13c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v1h-11v-1z"
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
export class SiBedroomParentIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
