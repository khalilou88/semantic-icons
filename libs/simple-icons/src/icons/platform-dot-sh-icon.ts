import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-platform-dot-sh-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Platform.sh</svg:title>
    <svg:path
      d="M24 0H0v9.541h24V0zM24 20.755H0V24h24v-3.245zM0 12.618h24v4.892H0v-4.892z"
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
export class SiPlatformDotShIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#1A182A');
}
