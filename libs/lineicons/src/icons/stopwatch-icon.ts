import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-stopwatch-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.74902 2.75C9.74902 2.33579 10.0848 2 10.499 2H13.499C13.9132 2 14.249 2.33579 14.249 2.75C14.249 3.16421 13.9132 3.5 13.499 3.5H10.499C10.0848 3.5 9.74902 3.16421 9.74902 2.75Z"
      fill="#323544"
    />
    <svg:path
      d="M11.2485 13.2507C11.2485 13.6649 11.5843 14.0007 11.9985 14.0007C12.4128 14.0007 12.7485 13.6649 12.7485 13.2507V8.49454C12.7485 8.08033 12.4128 7.74454 11.9985 7.74454C11.5843 7.74454 11.2485 8.08033 11.2485 8.49454V13.2507Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.999 4.50192C7.16707 4.50192 3.25 8.41899 3.25 13.2509C3.25 18.0829 7.16707 22 11.999 22C16.831 22 20.748 18.0829 20.748 13.2509C20.748 11.1048 19.9753 9.13916 18.6929 7.61704L20.0316 6.27838C20.3244 5.98548 20.3244 5.51061 20.0316 5.21772C19.7387 4.92482 19.2638 4.92482 18.9709 5.21772L17.6322 6.55644C16.1102 5.2744 14.1448 4.50192 11.999 4.50192ZM4.75 13.2509C4.75 9.24742 7.99549 6.00192 11.999 6.00192C16.0025 6.00192 19.248 9.24742 19.248 13.2509C19.248 17.2545 16.0025 20.5 11.999 20.5C7.99549 20.5 4.75 17.2545 4.75 13.2509Z"
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
export class SiStopwatchIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
