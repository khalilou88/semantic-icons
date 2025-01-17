import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-microsoft-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.001 5H5.00098V11H11.001V5ZM13.001 5V11H19.001V5H13.001ZM19.001 13H13.001V19H19.001V13ZM11.001 19V13H5.00098V19H11.001ZM3.00098 3H21.001V21H3.00098V3Z"
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
export class SiMicrosoftLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
