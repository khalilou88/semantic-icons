import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-codepen-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.6594 8.26409L12.4807 2.14493C12.1586 1.95169 11.8365 1.95169 11.5145 2.14493L2.36794 8.26409C2.1425 8.39291 2.01367 8.71498 2.01367 8.94042V15.0274C2.01367 15.285 2.1425 15.5749 2.36794 15.7681L11.5145 21.8551C11.8365 22.0483 12.1586 22.0483 12.4807 21.8551L21.6272 15.7681C21.8526 15.6393 21.9815 15.3172 21.9815 15.0274V8.94042C22.0137 8.68277 21.8848 8.39291 21.6594 8.26409ZM12.8671 4.46377L19.5982 8.97263L16.5386 10.9694L12.8349 8.45733C12.8671 8.45733 12.8671 4.46377 12.8671 4.46377ZM11.1602 4.46377V8.45733L7.4243 10.9694L4.42913 8.97263L11.1602 4.46377ZM3.7528 10.5507L5.87841 12L3.7528 13.4493V10.5507ZM11.1602 19.5362L4.42913 15.0274L7.4243 13.0306L11.1602 15.5427V19.5362ZM12.0298 14.0612L8.97019 12L12.0298 9.93881L15.0894 12L12.0298 14.0612ZM12.8671 19.5362V15.5427L16.603 13.0306L19.5982 15.0274L12.8671 19.5362ZM20.2745 13.4493L18.1489 12L20.2745 10.5507V13.4493Z"
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
export class SiCodepenIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
