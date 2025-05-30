import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pie-chart-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11.2499 3.53264V11.6893L5.48252 17.4567C4.24507 15.9803 3.5 14.0772 3.5 12C3.5 7.55834 6.90681 3.91238 11.2499 3.53264ZM6.54318 18.5174L12.1988 12.8618L19.7626 15.4682C18.4356 18.4338 15.4591 20.5 12 20.5C9.9228 20.5 8.01963 19.7549 6.54318 18.5174ZM20.2512 14.05L12.7499 11.4652V3.53263C17.0931 3.91228 20.5 7.55828 20.5 12C20.5 12.7068 20.4137 13.3935 20.2512 14.05Z"
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
export class SiPieChart2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
