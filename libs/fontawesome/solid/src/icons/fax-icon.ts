import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-fax-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M128 64l0 96 64 0 0-96 194.7 0L416 93.3l0 66.7 64 0 0-66.7c0-17-6.7-33.3-18.7-45.3L432 18.7C420 6.7 403.7 0 386.7 0L192 0c-35.3 0-64 28.7-64 64zM0 160L0 480c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32zm480 32l-352 0 0 288c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32zM256 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM224 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
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
export class SiFaxIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
