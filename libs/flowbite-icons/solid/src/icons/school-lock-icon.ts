import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-school-lock-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      d="M11.4453 3.16795c.3359-.22393.7735-.22393 1.1094 0l6 4c.4595.30635.5837.92722.2773 1.38675-.1925.28877-.5092.44511-.832.44541-.1748.00016-.3515-.04546-.5112-.1406-.0146-.00873-.0292-.01789-.0435-.02746L16 7.86853v1.66242c-1.0832.13507-2.0319.70325-2.6673 1.52575C13.2286 11.02 13.1166 11 13 11h-2c-.5523 0-1 .4477-1 1s.4477 1 1 1h1.5309c-.0204.1638-.0309.3307-.0309.5v.3368c-1.1825.5617-2 1.767-2 3.1632v2c0 .7436.2319 1.4331.6273 2H8V7.86853l-1.44532.96352c-.45952.30635-1.08039.18218-1.38675-.27735-.30635-.45953-.18217-1.0804.27735-1.38675l6.00002-4ZM10 9c0-.55228.4477-1 1-1h2c.5523 0 1 .44772 1 1s-.4477 1-1 1h-2c-.5523 0-1-.44772-1-1Z"
      clip-rule="evenodd"
    />
    <svg:path
      fill-rule="evenodd"
      d="M16.5 11c.5628 0 1.0822.186 1.5.4998.0306.023.0607.0467.0902.0711.5557.4585.9098 1.1524.9098 1.9291V15c1.1046 0 2 .8954 2 2v2c0 1.1016-.8907 1.9952-1.9912 2H14c-1.1046 0-2-.8954-2-2v-2c0-1.1046.8954-2 2-2v-1.5c0-1.2081.857-2.2161 1.9962-2.4492L16 11.05c.1616-.0328.3288-.05.5-.05Zm0 2c-.2761 0-.5.2239-.5.5V15h1v-1.5c0-.2761-.2239-.5-.5-.5Z"
      clip-rule="evenodd"
    />
    <svg:path
      d="M3.72925 11.1623 6 10.5237V21H4c-.55228 0-1-.4477-1-1v-7.875c0-.448.29797-.8414.72925-.9627Z"
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
export class SiSchoolLockIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
