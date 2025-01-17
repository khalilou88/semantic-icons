import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-square-nfi-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm75.7 64.6C68.8 162.5 64 168.8 64 176l0 160c0 8.8 7.2 16 16 16s16-7.2 16-16l0-102.2 66.3 110.5c3.7 6.2 11.1 9.1 18 7.2s11.7-8.2 11.7-15.4l0-160c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 102.2L93.7 167.8c-3.7-6.2-11.1-9.1-18-7.2zM224 176l0 64 0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-32 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zm160 0c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 160c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160z"
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
export class SiSquareNfiIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 448 512');
}
