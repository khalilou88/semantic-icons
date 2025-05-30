import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-nuxt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.2 18.6664H20.6C20.8361 18.6664 21.0622 18.5834 21.2667 18.4664C21.4712 18.3493 21.682 18.2024 21.8 17.9997C21.918 17.797 22.0001 17.567 22 17.333C21.9999 17.0989 21.9182 16.869 21.8 16.6664L16.8 8.06636C16.682 7.86367 16.5378 7.71669 16.3333 7.59966C16.1289 7.48268 15.8361 7.39966 15.6 7.39966C15.3639 7.39966 15.1378 7.48268 14.9333 7.59966C14.7289 7.71669 14.5847 7.86367 14.4667 8.06636L13.2 10.2664L10.6667 5.99952C10.5485 5.79688 10.4045 5.58334 10.2 5.46636C9.99547 5.34933 9.76948 5.33301 9.53335 5.33301C9.29722 5.33301 9.07118 5.34933 8.86665 5.46636C8.66217 5.58334 8.45146 5.79688 8.33335 5.99952L2.13334 16.6664C2.01513 16.869 2.0001 17.0989 2 17.333C1.9999 17.567 2.01531 17.7969 2.13334 17.9997C2.25136 18.2023 2.46217 18.3493 2.66667 18.4664C2.87117 18.5834 3.09718 18.6664 3.33334 18.6664H8C9.8491 18.6664 11.195 17.8369 12.1333 16.2664L14.4 12.333L15.6 10.2664L19.2667 16.533H14.4L13.2 18.6664ZM7.93335 16.533H4.66665L9.53335 8.13301L12 12.333L10.3661 15.1813C9.74297 16.2003 9.0325 16.533 7.93335 16.533Z"
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
export class SiNuxtIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
