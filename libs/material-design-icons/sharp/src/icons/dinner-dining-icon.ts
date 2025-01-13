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
      d="m2 19 2 2h16l2-2zm1-1h16.97c.29-3.26-2.28-6-5.48-6-2.35 0-4.35 1.48-5.14 3.55-.41-.23-.87-.38-1.35-.47V9h4V6.75h9v-1.5h-9V3H3v1.5h1v.75H3v1.5h1v.75H3V9h1v7.39c-.44.46-.78 1-1 1.61zM8 7.5v-.75h2v.75H8zm2-2.25H8V4.5h2v.75zM5.5 4.5h1v.75h-1V4.5zm0 2.25h1v.75h-1v-.75zM6.5 9v6.06c-.35.06-.68.17-1 .3V9h1z"
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
export class SiDinnerDiningIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
