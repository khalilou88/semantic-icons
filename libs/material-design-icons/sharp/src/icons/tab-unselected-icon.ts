import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-tab-unselected-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm8 8h2v-2H9v2zm-8-4h2v-2H1v2zm0 4h2v-2H1v2zM23 3H13v6h10V3zm-2 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zM1 5h2V3H1v2zm20 8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2z"
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
export class SiTabUnselectedIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
