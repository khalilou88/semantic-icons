import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-wondershare-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Wondershare</svg:title>
    <svg:path
      d="M16.216 17.814 7.704 9.368l.02-.02c.391.239.91.19 1.249-.147l3.041-3.016 7.241 7.184c.397.394.402 1.029.005 1.426l-3.044 3.019Zm-5.253-3.017-3.03 3.017L0 9.915l3.746-3.73 7.217 7.187a1.005 1.005 0 0 1 0 1.425ZM24 9.913l-3.725 3.727L16 9.367l.02-.021c.388.239.903.19 1.239-.146l3.014-3.015L24 9.913Z"
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
export class SiWondershareIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
