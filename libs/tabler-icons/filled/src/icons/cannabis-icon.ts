import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cannabis-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M12.894 1.553c1.472 2.945 2.17 5.028 2.244 6.812l.001 .091l.032 -.022a8.7 8.7 0 0 1 2.73 -1.191l.352 -.079a8 8 0 0 1 1.562 -.169l.253 .007a1 1 0 0 1 .85 1.396c-.949 2.187 -1.818 3.595 -2.902 4.664l-.061 .058l.25 .055q .45 .108 .869 .259l.276 .104c.586 .235 1.006 .479 1.25 .662a1 1 0 0 1 -.042 1.63l-.199 .112l-1.133 .587c-.567 .289 -1.166 .584 -1.404 .67q -.123 .045 -.244 .083l-.074 .019l.016 .042c.327 .912 .456 1.789 .477 2.462l.003 .195a1 1 0 0 1 -1 1c-1.257 0 -2.77 -.729 -4.001 -1.647l.001 2.647a1 1 0 0 1 -2 0v-2.647c-1.16 .866 -2.57 1.563 -3.781 1.64l-.219 .007a1 1 0 0 1 -1 -1c0 -.624 .098 -1.464 .379 -2.358l.116 -.341l-.073 -.02l-.244 -.081c-.343 -.125 -1.442 -.686 -2.106 -1.032l-.52 -.274a1 1 0 0 1 -.152 -1.694c.244 -.183 .664 -.427 1.25 -.662a8 8 0 0 1 1.145 -.363l.249 -.055l-.06 -.058c-1.024 -1.01 -1.856 -2.322 -2.744 -4.307l-.157 -.357a1 1 0 0 1 .724 -1.38l.149 -.017l.058 -.003a7.5 7.5 0 0 1 1.744 .159a8.6 8.6 0 0 1 2.727 1.045l.27 .169v-.037c-.028 -1.594 .375 -3.18 1.095 -4.704l.139 -.285c.455 -.908 .914 -1.586 1.238 -1.98a1 1 0 0 1 1.666 .189"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCannabisIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
