import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-angle-double-up-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.0478 18.4053C18.3407 18.6982 18.8156 18.6982 19.1085 18.4053C19.4013 18.1124 19.4013 17.6376 19.1085 17.3447L12.8585 11.0947C12.5656 10.8018 12.0907 10.8018 11.7978 11.0947L5.5478 17.3447C5.2549 17.6376 5.2549 18.1124 5.5478 18.4053C5.84069 18.6982 6.31556 18.6982 6.60845 18.4053L12.3281 12.6857L18.0478 18.4053Z"
      fill="#323544"
    />
    <svg:path
      d="M18.0478 13.9053C18.3407 14.1982 18.8156 14.1982 19.1085 13.9053C19.4013 13.6124 19.4013 13.1376 19.1085 12.8447L12.8585 6.59467C12.5656 6.30178 12.0907 6.30178 11.7978 6.59467L5.5478 12.8447C5.2549 13.1376 5.2549 13.6124 5.5478 13.9053C5.84069 14.1982 6.31556 14.1982 6.60845 13.9053L12.3281 8.18566L18.0478 13.9053Z"
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
export class SiAngleDoubleUpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
