import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-artix-linux-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Artix Linux</svg:title>
    <svg:path
      d="M12 0L7.873 8.462l11.358 6.363zM6.626 11.018L.295 24l18.788-7.762zm13.846 6.352l-5.926 3.402L23.706 24Z"
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
export class SiArtixLinuxIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#10A0CC');
}
