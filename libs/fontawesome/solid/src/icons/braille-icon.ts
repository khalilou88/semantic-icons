import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-braille-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M0 96a64 64 0 1 1 128 0A64 64 0 1 1 0 96zM224 272a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM80 416a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zm240 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-80 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM64 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM224 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM352 96a64 64 0 1 1 128 0A64 64 0 1 1 352 96zm240 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-80 0a64 64 0 1 1 128 0A64 64 0 1 1 512 96zm64 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm16 224a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-80 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM416 272a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm16 224a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-80 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"
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
export class SiBrailleIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 512');
}
