import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cnes-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>CNES</svg:title>
    <svg:path
      d="M10.173 0h.9531V13.7978c0 2.8809 3.6823 8.7293 9.7256 4.8304l.1227-.0684C19.6214 21.7444 16.2555 24 12.3174 24 7.1854 24 3.025 20.1694 3.025 15.444c0-4.0457 3.0498-7.4356 7.148-8.327V0Zm10.3989 11.5108c-1.5249-2.7076-4.5751-4.5697-8.1029-4.6216-.0643 1.1076.8245 7.1347 4.9603 7.4718 1.0779.0879 3.84-.5495 3.1426-2.8502Z"
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
export class SiCnesIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#204F8C');
}
