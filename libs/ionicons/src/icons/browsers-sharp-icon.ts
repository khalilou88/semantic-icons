import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-browsers-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M32 64v384a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16m408 364H72a4 4 0 0 1-4-4V152a4 4 0 0 1 4-4h368a4 4 0 0 1 4 4v272a4 4 0 0 1-4 4"
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
export class SiBrowsersSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
