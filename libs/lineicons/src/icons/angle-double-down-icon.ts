import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-angle-double-down-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.60846 11.0947C6.31556 10.8018 5.84069 10.8018 5.54779 11.0947C5.2549 11.3876 5.2549 11.8624 5.54779 12.1553L11.7978 18.4053C12.0907 18.6982 12.5656 18.6982 12.8585 18.4053L19.1085 12.1553C19.4013 11.8624 19.4013 11.3876 19.1085 11.0947C18.8156 10.8018 18.3407 10.8018 18.0478 11.0947L12.3281 16.8143L6.60846 11.0947Z"
      fill="#323544"
    />
    <svg:path
      d="M6.60846 6.59467C6.31556 6.30178 5.84069 6.30178 5.54779 6.59467C5.2549 6.88756 5.2549 7.36244 5.54779 7.65533L11.7978 13.9053C12.0907 14.1982 12.5656 14.1982 12.8585 13.9053L19.1085 7.65533C19.4013 7.36244 19.4013 6.88756 19.1085 6.59467C18.8156 6.30178 18.3407 6.30178 18.0478 6.59467L12.3281 12.3143L6.60846 6.59467Z"
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
export class SiAngleDoubleDownIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
