import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-solar-power-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.44 20H11v-2H4.84zm13.92-6H13v2h5.76zM13 18v2h6.56l-.4-2zm-7.76-2H11v-2H5.64z"
      opacity=".3"
    />
    <svg:path
      d="M20 12H4L2 22h20l-2-10zm-7 2h5.36l.4 2H13v-2zm-2 6H4.44l.4-2H11v2zm0-4H5.24l.4-2H11v2zm2 4v-2h6.16l.4 2H13zM11 8h2v3h-2zm4.764-.795 1.415-1.414L19.3 7.912l-1.414 1.414zm-11.059.708L6.826 5.79 8.24 7.206 6.12 9.327zM3 2h3v2H3zm15 0h3v2h-3zm-6 5c2.76 0 5-2.24 5-5h-2c0 1.65-1.35 3-3 3S9 3.65 9 2H7c0 2.76 2.24 5 5 5z"
    />
    <svg:path d="M15 2c0 1.66-1.34 3-3 3S9 3.66 9 2h6z" opacity=".3" />
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
export class SiSolarPowerIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
