import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-school-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M288 0L400 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-79.3 0 89.6 64L512 160c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-176 0 0-112c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 112L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64l101.7 0L256 95.5 256 32c0-17.7 14.3-32 32-32zm48 240a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM80 224c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-32 0zm368 16l0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM80 352c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-32 0zm384 0c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-32 0z"
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
export class SiSchoolFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 576 512');
}
