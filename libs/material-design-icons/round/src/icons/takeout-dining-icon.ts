import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-takeout-dining-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.29 6.75a.984.984 0 0 0-1.4 0l-.89.88.03-.56-3.46-3.48c-.38-.38-.89-.59-1.42-.59h-4.3c-.53 0-1.04.21-1.42.59L4.97 7.07l.03.5-.89-.87a.98.98 0 0 0-1.39.01l-.02.02a.984.984 0 0 0 .02 1.4L4.66 10h14.69l1.92-1.84c.4-.38.41-1.02.02-1.41zm-15.5 11.4c.08 1.04.95 1.85 2 1.85h8.43c1.05 0 1.92-.81 1.99-1.85l.49-6.6H5.3l.49 6.6z"
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
export class SiTakeoutDiningIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
