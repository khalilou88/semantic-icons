import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-code-slash-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M161.98 397.63L0 256l161.98-141.63 27.65 31.61L64 256l125.63 110.02-27.65 31.61zM350.02 397.63l-27.65-31.61L448 256 322.37 145.98l27.65-31.61L512 256 350.02 397.63zM222.15 442L182 430.08 289.85 70 330 81.92 222.15 442z"
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
export class SiCodeSlashSharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
