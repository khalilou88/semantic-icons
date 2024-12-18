import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-logitechg-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Logitech G</title>
      <path
        d="M12.5664 0C10.9101 0 9.352.3143 7.8887.9414c-1.4794.6271-2.766 1.483-3.8594 2.5684-1.0935 1.0854-1.9549 2.359-2.582 3.8222-.6432 1.4473-.9575 3-.9414 4.6563 0 1.6563.3142 3.2164.9414 4.6797.8537 1.9702 2.6764 4.7711 6.4414 6.3672C9.352 23.6784 10.91 24 12.5664 24v-4.9922c-.9809 0-1.8977-.1848-2.75-.5547-1.6852-.7313-2.9903-2.0167-3.7383-3.7402-.7467-1.7207-.736-3.755 0-5.4512.737-1.6981 2.0318-2.9977 3.7383-3.7383.8523-.3698 1.7691-.5546 2.75-.5546Zm.17 9.8418v4.9434h5.8124v5.8144h4.9453V9.8418Z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgLogitechgIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}