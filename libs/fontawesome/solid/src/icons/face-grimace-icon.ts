import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-face-grimace-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm96-112l-8 0 0-40 55.3 0c-3.8 22.7-23.6 40-47.3 40zm47.3-56L344 344l0-40 8 0c23.8 0 43.5 17.3 47.3 40zM328 344l-64 0 0-40 64 0 0 40zm0 56l-64 0 0-40 64 0 0 40zm-80-96l0 40-64 0 0-40 64 0zm0 56l0 40-64 0 0-40 64 0zm-80-16l-55.3 0c3.8-22.7 23.6-40 47.3-40l8 0 0 40zm0 56l-8 0c-23.8 0-43.5-17.3-47.3-40l55.3 0 0 40zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
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
export class SiFaceGrimaceIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
