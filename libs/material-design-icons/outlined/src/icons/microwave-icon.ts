import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-microwave-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h10v12H4V6zm16 12h-4V6h4v12zm-1-9h-2V7h2v2zm-1 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-7.75-1c-.79 0-1.37-.38-1.79-.66-.33-.22-.52-.34-.71-.34-.37 0-.8.41-.95.61l-1.42-1.42c.35-.4 1.21-1.19 2.37-1.19.8 0 1.39.39 1.81.67.31.21.51.33.69.33.37 0 .8-.41.95-.61l1.42 1.42c-.36.4-1.21 1.19-2.37 1.19zm0-5c-.79 0-1.37-.38-1.79-.66-.33-.22-.52-.34-.71-.34-.37 0-.8.41-.95.61L5.37 9.19C5.73 8.79 6.59 8 7.75 8c.8 0 1.39.39 1.81.67.31.21.51.33.69.33.37 0 .8-.41.95-.61l1.42 1.42c-.36.4-1.21 1.19-2.37 1.19z"
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
export class SiMicrowaveIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
