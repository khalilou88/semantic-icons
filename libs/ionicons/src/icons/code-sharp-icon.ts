import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-code-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M161.98 397.63 0 256l161.98-141.63 27.65 31.61L64 256l125.63 110.02zM350.02 397.63l-27.65-31.61L448 256 322.37 145.98l27.65-31.61L512 256z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCodeSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
