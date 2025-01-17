import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-folder-unknow-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM4 5V19H20V7H11.5858L9.58579 5H4ZM11 16H13V18H11V16ZM8.56731 10.8135C8.88637 9.20919 10.302 8 12 8C13.933 8 15.5 9.567 15.5 11.5C15.5 13.433 13.933 15 12 15H11V13H12C12.8284 13 13.5 12.3284 13.5 11.5C13.5 10.6716 12.8284 10 12 10C11.2723 10 10.6656 10.5182 10.5288 11.2058L8.56731 10.8135Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFolderUnknowLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
