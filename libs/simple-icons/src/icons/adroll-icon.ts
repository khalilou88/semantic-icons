import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-adroll-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Adroll</svg:title>
    <svg:path
      d="M24 12c0-6.01-4.727-10.886-10.886-10.886a10.863 10.863 0 0 0-9.508 5.578L8.914 12c0-2.323 1.958-4.2 4.2-4.2 2.377 0 4.2 1.877 4.2 4.2s-1.836 4.2-4.2 4.2H4.065A4.07 4.07 0 0 0 0 20.266v2.62h13.114C19.232 22.886 24 18.01 24 12"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAdrollIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#0DBDFF');
}
