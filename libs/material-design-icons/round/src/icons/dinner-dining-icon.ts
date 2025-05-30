import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-dinner-dining-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m2.85 19.85 1 1c.1.1.22.15.36.15H19.8c.13 0 .26-.05.35-.15l1-1a.5.5 0 0 0-.35-.85H3.21a.5.5 0 0 0-.36.85zM3 18h16.97c.29-3.26-2.28-6-5.48-6-2.35 0-4.35 1.48-5.14 3.55-.41-.23-.87-.38-1.35-.47V9h1.75C10.99 9 12 7.99 12 6.75h8.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H12C12 4.01 10.99 3 9.75 3h-6c-.41 0-.75.34-.75.75s.34.75.75.75H4v.75h-.25c-.41 0-.75.34-.75.75s.34.75.75.75H4v.75h-.25c-.41 0-.75.34-.75.75s.34.75.75.75H4v7.39c-.44.46-.78 1-1 1.61zM8 4.5h2v.75H8V4.5zm0 2.25h2v.75H8v-.75zM5.5 4.5h1v.75h-1V4.5zm0 2.25h1v.75h-1v-.75zM5.5 9h1v6.06c-.35.06-.68.17-1 .3V9z"
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
export class SiDinnerDiningIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
