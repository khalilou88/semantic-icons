import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pound-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5.58539 20.566C5.55006 20.4901 5.52707 20.4072 5.51899 20.3201C5.5107 20.2327 5.51792 20.1469 5.5386 20.0656C5.59356 19.8495 5.74351 19.6652 5.94975 19.5696C6.0062 19.5434 6.06646 19.5239 6.12948 19.5124L6.14652 19.5087C6.16711 19.504 6.20077 19.4961 6.24564 19.4843C6.33555 19.4606 6.46932 19.4215 6.63219 19.3624C6.96009 19.2434 7.39364 19.0478 7.82285 18.7431C8.6606 18.1483 9.49828 17.1341 9.49828 15.3492V13.875H6.32617C5.91196 13.875 5.57617 13.5392 5.57617 13.125C5.57617 12.7108 5.91196 12.375 6.32617 12.375H9.49828V8.22498C9.49828 5.61544 11.6137 3.5 14.2233 3.5C16.8328 3.5 18.9482 5.61545 18.9482 8.22498V8.37754C18.9482 8.79176 18.6125 9.12754 18.1982 9.12754C17.784 9.12754 17.4482 8.79176 17.4482 8.37754V8.22498C17.4482 6.44387 16.0044 5 14.2233 5C12.4422 5 10.9983 6.44387 10.9983 8.22498V12.375H14.1716C14.5858 12.375 14.9216 12.7108 14.9216 13.125C14.9216 13.5392 14.5858 13.875 14.1716 13.875H10.9983V15.3492C10.9983 17.3145 10.1996 18.6389 9.26679 19.5H18.2303C18.6445 19.5 18.9803 19.8358 18.9803 20.25C18.9803 20.6642 18.6445 21 18.2303 21H6.27923C6.21165 21.0013 6.14537 20.9934 6.08184 20.9773C5.86553 20.9224 5.68107 20.7724 5.58539 20.566Z"
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
export class SiPoundIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
