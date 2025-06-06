import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-shift-right-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19.5781 20.5009C19.5781 20.9151 19.9139 21.2509 20.3281 21.2509C20.7423 21.2509 21.0781 20.9151 21.0781 20.5009V4.5C21.0781 4.08579 20.7423 3.75 20.3281 3.75C19.9139 3.75 19.5781 4.08579 19.5781 4.5V20.5009Z"
      fill="#323544"
    />
    <svg:path
      d="M17.0781 12.4989C17.0781 12.7149 16.9868 12.9096 16.8407 13.0464L12.234 17.656C11.9412 17.949 11.4664 17.9492 11.1734 17.6564C10.8804 17.3636 10.8802 16.8887 11.173 16.5957L14.5177 13.2489H4.32812C3.91391 13.2489 3.57812 12.9131 3.57812 12.4989C3.57812 12.0847 3.91391 11.7489 4.32812 11.7489H14.5136L11.173 8.40601C10.8802 8.11302 10.8804 7.63814 11.1734 7.34535C11.4664 7.05256 11.9413 7.05273 12.234 7.34572L16.8058 11.9207C16.9721 12.0582 17.0781 12.2662 17.0781 12.4989Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiShiftRightIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
