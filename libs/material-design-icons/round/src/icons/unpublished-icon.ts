import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-unpublished-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.49 20.49 3.51 3.51A.996.996 0 1 0 2.1 4.92l1.56 1.56a9.944 9.944 0 0 0-1.59 6.7c.53 4.54 4.21 8.22 8.74 8.74 2.49.29 4.81-.34 6.7-1.59l1.56 1.56c.39.39 1.02.39 1.41 0 .4-.38.4-1.01.01-1.4zm-10.61-4.6-2.83-2.83a.996.996 0 1 1 1.41-1.41l2.12 2.12.18-.18L12.17 15l-.88.88c-.39.4-1.02.4-1.41.01zm3.71-5.13-7.1-7.1a9.944 9.944 0 0 1 6.7-1.59c4.54.53 8.22 4.21 8.74 8.74.29 2.49-.34 4.82-1.59 6.7L15 12.17l1.94-1.94a.996.996 0 1 0-1.41-1.41l-1.94 1.94z"
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
export class SiUnpublishedIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
