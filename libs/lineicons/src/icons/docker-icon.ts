import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-docker-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.9881 11.3212H10.9532V9.4478H12.9881V11.3212ZM12.9881 4.95801H10.9532V6.86375H12.9881V4.95801ZM15.4429 9.5124H13.408V11.3535H15.4429V9.5124ZM10.5655 7.21905H8.53062V9.09249H10.5655V7.21905ZM12.9881 7.21905H10.9532V9.09249H12.9881V7.21905ZM21.677 10.3522C21.2248 10.0292 20.1912 9.93231 19.4159 10.0938C19.319 9.3186 18.8668 8.67258 18.1562 8.09117L17.704 7.83277L17.4456 8.28498C16.8965 9.15709 16.7027 10.6106 17.3164 11.5473C17.058 11.6765 16.5089 11.9027 15.8305 11.9027H2.07047C1.81207 13.4854 2.26428 15.5849 3.4271 17.0062C4.55763 18.3628 6.33415 19.0411 8.59519 19.0411C13.5049 19.0411 17.1872 16.7801 18.8668 12.6456C19.5129 12.6456 20.9986 12.6456 21.7416 11.2243C21.7739 11.192 21.9677 10.8044 22 10.6752L21.677 10.3522ZM5.68816 9.5124H3.62091V11.3535H5.65586V9.5124H5.68816ZM8.11068 9.5124H6.07577V11.3535H8.11068V9.5124ZM10.5655 9.5124H8.53062V11.3535H10.5655V9.5124ZM8.11068 7.21905H6.07577V9.09249H8.11068V7.21905Z"
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
export class SiDockerIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
