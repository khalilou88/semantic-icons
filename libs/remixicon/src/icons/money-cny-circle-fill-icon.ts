import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-money-cny-circle-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM13.0049 13.0027V12.0027H16.0049V10.0027H13.4191L15.5404 7.88143L14.1262 6.46721L12.0049 8.58853L9.88356 6.46721L8.46935 7.88143L10.5907 10.0027H8.00488V12.0027H11.0049V13.0027H8.00488V15.0027H11.0049V17.0027H13.0049V15.0027H16.0049V13.0027H13.0049Z"
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
export class SiMoneyCnyCircleFillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
