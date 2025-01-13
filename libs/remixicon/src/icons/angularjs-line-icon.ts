import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-angularjs-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.5235 16.6507L18.0126 16.3795L19.1315 6.66941L12.0002 4.12362L4.86892 6.66941L5.98781 16.3795L6.46166 16.6422L12.0002 4.21L17.5235 16.6507ZM16.4246 17.26H15.6263L14.4576 14.34H9.52286L8.35412 17.26H7.57582L12.0002 19.7131L16.4246 17.26ZM12.0002 2L21.3002 5.32L19.8817 17.63L12.0002 22L4.11867 17.63L2.7002 5.32L12.0002 2ZM13.6984 12.54L12.0002 8.45L10.302 12.54H13.6984Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAngularjsLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
