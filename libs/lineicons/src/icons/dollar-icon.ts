import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-dollar-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.999 3.00049C12.999 2.58627 12.6632 2.25049 12.249 2.25049C11.8348 2.25049 11.499 2.58627 11.499 3.00049V4.57251H9.70264C8.46 4.57251 7.45264 5.57987 7.45264 6.82251V9.83925C7.45264 10.8145 8.08096 11.6788 9.0087 11.9796L15.0282 13.9312C15.3375 14.0315 15.5469 14.3196 15.5469 14.6447V17.6614C15.5469 18.0756 15.2111 18.4114 14.7969 18.4114H9.70264C9.28842 18.4114 8.95264 18.0756 8.95264 17.6614V16.5371C8.95264 16.1228 8.61685 15.7871 8.20264 15.7871C7.78842 15.7871 7.45264 16.1228 7.45264 16.5371V17.6614C7.45264 18.904 8.46 19.9114 9.70264 19.9114H11.499V21.4995C11.499 21.9137 11.8348 22.2495 12.249 22.2495C12.6632 22.2495 12.999 21.9137 12.999 21.4995V19.9114H14.7969C16.0395 19.9114 17.0469 18.904 17.0469 17.6614V14.6447C17.0469 13.6694 16.4186 12.8051 15.4908 12.5044L9.47132 10.5527C9.16208 10.4524 8.95264 10.1643 8.95264 9.83925V6.82251C8.95264 6.4083 9.28842 6.07251 9.70264 6.07251H14.7969C15.2111 6.07251 15.5469 6.4083 15.5469 6.82251V7.94686C15.5469 8.36107 15.8827 8.69686 16.2969 8.69686C16.7111 8.69686 17.0469 8.36107 17.0469 7.94686V6.82251C17.0469 5.57987 16.0395 4.57251 14.7969 4.57251H12.999V3.00049Z"
      fill="#323544"
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
export class SiDollarIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
