import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-share-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M376 176H272v145a16 16 0 01-32 0V176H136a56.06 56.06 0 00-56 56v192a56.06 56.06 0 0056 56h240a56.06 56.06 0 0056-56V232a56.06 56.06 0 00-56-56zM272 86.63l52.69 52.68a16 16 0 0022.62-22.62l-80-80a16 16 0 00-22.62 0l-80 80a16 16 0 0022.62 22.62L240 86.63V176h32z"
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
export class SiShareIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
