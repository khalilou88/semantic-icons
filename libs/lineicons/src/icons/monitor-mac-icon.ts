import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-monitor-mac-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2 5.70117C2 4.45853 3.00736 3.45117 4.25 3.45117H19.75C20.9926 3.45117 22 4.45853 22 5.70117V12.6921L22.0001 12.7012L22 12.7102V15.2868C22 16.5294 20.9926 17.5368 19.75 17.5368H14.25V19.0488H15.25C15.6642 19.0488 16 19.3846 16 19.7988C16 20.213 15.6642 20.5488 15.25 20.5488H8.75C8.33579 20.5488 8 20.213 8 19.7988C8 19.3846 8.33579 19.0488 8.75 19.0488H9.75V17.5368H4.25C3.00736 17.5368 2 16.5294 2 15.2868V5.70117ZM12.75 19.0488V17.5368H11.25V19.0488H12.75ZM14.25 16.0368H19.75C20.1642 16.0368 20.5 15.701 20.5 15.2868V13.4512H3.5V15.2868C3.5 15.701 3.83579 16.0368 4.25 16.0368H9.75V16.0264H11.25V16.0368H12.75V16.0264H14.25V16.0368ZM20.5 5.70117C20.5 5.28696 20.1642 4.95117 19.75 4.95117H4.25C3.83579 4.95117 3.5 5.28696 3.5 5.70117V11.9512H20.5V5.70117Z"
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
export class SiMonitorMacIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
