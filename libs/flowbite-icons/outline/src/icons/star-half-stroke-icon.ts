import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-star-half-stroke-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-width="2"
      d="M12 4.392v14.832M8.476 9.38l-4.553.36c-.888.07-1.248 1.165-.572 1.737l3.47 2.934a.98.98 0 0 1 .322.98l-1.06 4.388c-.206.855.736 1.531 1.497 1.073l3.898-2.351c.32-.193.723-.193 1.044 0l3.898 2.351c.76.458 1.703-.218 1.497-1.073l-1.06-4.388a.982.982 0 0 1 .322-.98l3.47-2.934c.676-.572.316-1.667-.572-1.737l-4.553-.36a1 1 0 0 1-.845-.606l-1.754-4.165c-.342-.812-1.508-.812-1.85 0L9.321 8.774a1 1 0 0 1-.845.606Z"
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
export class SiStarHalfStrokeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
