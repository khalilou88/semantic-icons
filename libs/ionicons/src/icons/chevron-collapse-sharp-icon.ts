import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-chevron-collapse-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M102.145 108.514 256 241.855l153.855-133.341-31.437-36.273L256 178.337 133.582 72.241zm0 294.972L256 270.145l153.855 133.341-31.437 36.273L256 333.663 133.582 439.759z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiChevronCollapseSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');

  readonly fill = input<string>('currentColor');
}
