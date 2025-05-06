import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-exit-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M335.69 272h-161v-32h161V92a12 12 0 0 0-12-12h-280a12 12 0 0 0-12 12v328a12 12 0 0 0 12 12h280a12 12 0 0 0 12-12ZM419.06 272l-64 64 22.63 22.63L480.31 256 377.69 153.37 355.06 176l64 64h-83.37v32z"
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
export class SiExitSharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
