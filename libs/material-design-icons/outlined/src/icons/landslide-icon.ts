import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-landslide-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11 12 8 8H2v14h20l-6-8-5-2zm1.53 2.77L6 16.95l-2-.67v-1.89l2 .67 3.95-1.32 2.58 1.03zM7 10l1.57 2.09-2.57.86-2-.67V10h3zM4 20v-1.61l2 .67 9.03-3.01L18 20H4zM17 6V1l-5-1-3 2v4l3 2 5-2zm-6-2.93 1.42-.95 2.58.52v2.01l-2.77 1.11L11 4.93V3.07zM18.5 7 16 9v3l2.5 2 4.5-2V8l-4.5-1zm2.5 3.7-2.2.98-.8-.64V9.96l1-.8 2 .44v1.1z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLandslideIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
