import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bowling-ball-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM286 230a28 28 0 1128-28 28 28 0 01-28 28zm8-76a28 28 0 1128-28 28 28 0 01-28 28zm68 44a28 28 0 1128-28 28 28 0 01-28 28z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBowlingBallSharpIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
