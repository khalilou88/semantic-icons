import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-better-auth-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Better Auth</svg:title>
    <svg:path
      d="M0 3.39v17.22h5.783V15.06h6.434V8.939H5.783V3.39ZM12.217 8.94h5.638v6.122h-5.638v5.548H24V3.391H12.217Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBetterAuthIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FFFFFF');
}
