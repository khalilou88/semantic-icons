import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-battery-full-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M17 384h432V128H17Zm32-224h368v192H49Z" />
    <svg:path
      d="M70.69 182.94h324.63v146.13H70.69zM465 202.67h32v106.67h-32z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBatteryFullSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
