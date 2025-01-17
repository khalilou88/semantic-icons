import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-signpost-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 5H17.4142L21.7071 9.29289C22.0976 9.68342 22.0976 10.3166 21.7071 10.7071L17.4142 15H12V22H10V15H4C3.44772 15 3 14.5523 3 14V6C3 5.44772 3.44772 5 4 5H10V2H12V5ZM16.5858 13L19.5858 10L16.5858 7H5V13H16.5858Z"
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
export class SiSignpostLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
