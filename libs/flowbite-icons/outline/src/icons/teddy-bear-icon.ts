import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-teddy-bear-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M7.5 15C6.11929 15 5 16.1193 5 17.5S6.11929 20 7.5 20s2.5-1.1193 2.5-2.5S8.88071 15 7.5 15Zm0 0 1.67693-4.1693m6.69787-3.82761C17.0117 7.00309 18 6.10457 18 5c0-1.10457-.9217-2-2.0586-2-.8963 0-1.6853.74312-1.9679 1.51992M8.12719 6.99544C7.00181 6.99544 6 6.10457 6 5s.9123-2 2.03768-2c.93446 0 1.70666.67806 1.94698 1.51992M14 18h-4m6-3-1.4578-3.8912m-6.63506 2.8789-.44889.1929C6.24889 14.5837 5 13.6836 5 12.4088c0-.8339.55278-1.5667 1.35457-1.7958L8.5 10m7.1055 3.9877.4133.1446c1.2127.4242 2.4812-.476 2.4812-1.7607 0-.8159-.5302-1.5371-1.309-1.7805l-1.7458-.5575M12 9.06243v-.01m-1.3779-1.55397v-.01m3.0337.01v-.01M16 8c0 2.2091-1.7909 4-4 4-2.20914 0-4-1.7909-4-4 0-2.20914 1.79086-4 4-4 2.2091 0 4 1.79086 4 4Zm3 9.5c0 1.3807-1.1193 2.5-2.5 2.5S14 18.8807 14 17.5s1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5Z"
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
export class SiTeddyBearIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
