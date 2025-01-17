import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-teeth-open-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M96 32C43 32 0 75 0 128l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-53-43-96-96-96L96 32zM224 96c26.5 0 48 21.5 48 48l0 56c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-56c0-26.5 21.5-48 48-48zm80 48c0-26.5 21.5-48 48-48s48 21.5 48 48l0 56c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-56zM96 128c26.5 0 48 21.5 48 48l0 24c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-24c0-26.5 21.5-48 48-48zm336 48c0-26.5 21.5-48 48-48s48 21.5 48 48l0 24c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-24zM96 480l384 0c53 0 96-43 96-96l0-32c0-35.3-28.7-64-64-64L64 288c-35.3 0-64 28.7-64 64l0 32c0 53 43 96 96 96zm0-64c-26.5 0-48-21.5-48-48l0-24c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 24c0 26.5-21.5 48-48 48zm80-48l0-24c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 24c0 26.5-21.5 48-48 48s-48-21.5-48-48zm176 48c-26.5 0-48-21.5-48-48l0-24c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 24c0 26.5-21.5 48-48 48zm80-48l0-24c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 24c0 26.5-21.5 48-48 48s-48-21.5-48-48z"
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
export class SiTeethOpenIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 576 512');
}
