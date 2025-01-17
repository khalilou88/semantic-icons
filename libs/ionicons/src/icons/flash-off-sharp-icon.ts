import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-flash-off-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M63.998 86.004l21.998-21.998L448 426.01l-21.998 21.998zM80 304h144l-32 192 108.18-129.82-148.36-148.36L80 304zM432 208H288l32-192-108.18 129.82 148.36 148.36L432 208z"
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
export class SiFlashOffSharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
