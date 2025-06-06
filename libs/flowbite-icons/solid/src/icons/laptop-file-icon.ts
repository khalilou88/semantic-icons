import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-laptop-file-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 5.78571C4 4.80909 4.78639 4 5.77778 4H18.2222C19.2136 4 20 4.80909 20 5.78571v1.34031C19.6804 7.04375 19.3453 7 19 7h-3.566c-1.1074 0-2.1653.45912-2.9217 1.26802l-2.434 2.60308C9.38544 11.612 9 12.5886 9 13.603V19c0 .3453.04375.6804.12602 1H4c-1.10457 0-2-.8954-2-2v-1c0-1.1046.89543-2 2-2V5.78571Z"
    />
    <svg:path
      d="M15 9.04765V13h-3.9069c.0892-.282.2406-.5432.4461-.763l2.434-2.60299c.2776-.29692.6365-.49959 1.0268-.58636Z"
    />
    <svg:path
      d="M17 9v4c0 1.1046-.8954 2-2 2h-4v4c0 1.1046.8954 2 2 2h6c1.1046 0 2-.8954 2-2v-8c0-1.10457-.8954-2-2-2h-2Z"
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
export class SiLaptopFileIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
