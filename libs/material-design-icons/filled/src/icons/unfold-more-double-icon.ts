import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-unfold-more-double-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 7.83 15.17 11l1.41-1.41L12 5 7.41 9.59 8.83 11 12 7.83zm0-5L15.17 6l1.41-1.41L12 0 7.41 4.59 8.83 6 12 2.83zm0 18.34L8.83 18l-1.41 1.41L12 24l4.59-4.59L15.17 18 12 21.17zm0-5L8.83 13l-1.41 1.41L12 19l4.59-4.59L15.17 13 12 16.17z"
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
export class SiUnfoldMoreDoubleIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
