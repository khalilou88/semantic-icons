import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-candy-cane-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.29205 5.67294C10.0525 2.62382 13.9513 1.57912 17.0005 3.33953C20.0496 5.09994 21.0943 8.99882 19.3339 12.0479L17.3964 15.4038C16.7751 16.4799 15.399 16.8487 14.3228 16.2273C13.2467 15.606 12.8779 14.2299 13.4993 13.1538L15.4368 9.79794C15.9545 8.90114 15.6473 7.75441 14.7505 7.23664C13.8537 6.71887 12.7069 7.02614 12.1892 7.92294L6.50167 17.774C5.88035 18.8501 4.50427 19.2189 3.42811 18.5975C2.35195 17.9762 1.98323 16.6001 2.60455 15.524L8.29205 5.67294ZM16.2505 4.63857C13.9188 3.29237 10.9373 4.09126 9.59109 6.42294L3.90359 16.274C3.69648 16.6327 3.81939 17.0914 4.17811 17.2985C4.53683 17.5056 4.99552 17.3827 5.20263 17.024L10.8901 7.17294C11.8221 5.5587 13.8862 5.00562 15.5005 5.9376C17.1147 6.86958 17.6678 8.9337 16.7358 10.5479L14.7983 13.9038C14.5912 14.2625 14.7141 14.7212 15.0728 14.9283C15.4315 15.1354 15.8902 15.0125 16.0973 14.6538L18.0348 11.2979C19.381 8.96626 18.5821 5.98476 16.2505 4.63857Z"
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
export class SiCandyCane2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
