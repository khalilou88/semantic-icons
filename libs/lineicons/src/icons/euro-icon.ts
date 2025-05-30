import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-euro-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16.0431 5C13.0125 5 10.4161 6.85959 9.33288 9.5H14.0353C14.4495 9.5 14.7853 9.83579 14.7853 10.25C14.7853 10.6642 14.4495 11 14.0353 11H8.90051C8.82993 11.4061 8.79315 11.8237 8.79315 12.25C8.79315 12.6763 8.82993 13.0939 8.90051 13.5H14.0353C14.4495 13.5 14.7853 13.8358 14.7853 14.25C14.7853 14.6642 14.4495 15 14.0353 15H9.33288C10.4161 17.6404 13.0125 19.5 16.0431 19.5C16.965 19.5 17.845 19.3283 18.6541 19.0159C19.0405 18.8666 19.4747 19.0589 19.6239 19.4453C19.7731 19.8317 19.5808 20.2659 19.1944 20.4151C18.2157 20.7931 17.1527 21 16.0431 21C12.1713 21 8.8869 18.4853 7.73403 15H5.57812C5.16391 15 4.82812 14.6642 4.82812 14.25C4.82812 13.8358 5.16391 13.5 5.57812 13.5H7.38176C7.32336 13.0917 7.29315 12.6744 7.29315 12.25C7.29315 11.8256 7.32336 11.4083 7.38176 11H5.57912C5.1649 11 4.82912 10.6642 4.82912 10.25C4.82912 9.83579 5.1649 9.5 5.57912 9.5H7.73403C8.8869 6.01474 12.1713 3.5 16.0431 3.5C17.1527 3.5 18.2157 3.70688 19.1944 4.08485C19.5808 4.23407 19.7731 4.66828 19.6239 5.05468C19.4747 5.44108 19.0405 5.63335 18.6541 5.48414C17.845 5.17168 16.965 5 16.0431 5Z"
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
export class SiEuroIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
