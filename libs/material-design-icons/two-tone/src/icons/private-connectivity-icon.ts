import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-private-connectivity-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm3 7.5c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1v-1a2 2 0 0 1 2.34-1.97c.98.16 1.66 1.08 1.66 2.08v.89c.55 0 1 .45 1 1v3zM12.75 13c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75zM13 9.5v1h-2v-1c0-.55.45-1 1-1s1 .45 1 1z"
      opacity=".3"
    />
    <svg:path
      d="M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm-6.93 6c.49 3.39 3.4 6 6.93 6s6.44-2.61 6.93-6H22v-2h-3.07c-.49-3.39-3.4-6-6.93-6s-6.44 2.61-6.93 6H2v2h3.07zM14 10.5v-.89c0-1-.68-1.92-1.66-2.08A2 2 0 0 0 10 9.5v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-2 3.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zm1-3.25h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z"
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
export class SiPrivateConnectivityIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
