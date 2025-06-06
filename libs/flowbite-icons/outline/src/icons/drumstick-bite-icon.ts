import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-drumstick-bite-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12.4427 9.88469 9.93591 7.50961c.81449-.81448.80559-2.06903-.02046-2.89511-.82608-.82607-2.08062-.83494-2.89511-.02046-.4791.47911-.71525 1.20118-.56606 1.82948-.6283-.14919-1.35037.08695-1.82948.56606-.81448.81448-.80561 2.06903.02047 2.89511.82607.82611 2.08062.83491 2.8951.02046l2.50233 2.29305m.8063-1.38c1.83-1.8299 5.1241-1.22213 7.1925.8462 2.0684 2.0684 2.3191 4.6228.2978 6.6441-1.0322 1.0321-2.1287 1.6094-3.2302 1.6518.5878-1.3405.2254-2.5874-.8127-3.2811-.918-.6135-2.1806-.7802-3.5479.179-1.10401-2.0578-1.30393-4.6355.1005-6.04Z"
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
export class SiDrumstickBiteIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
