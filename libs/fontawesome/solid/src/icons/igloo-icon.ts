import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-igloo-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M320 33.8L320 160 48.5 160C100.2 82.8 188.1 32 288 32c10.8 0 21.5 .6 32 1.8zM352 160l0-120.9C424.9 55.7 487.2 99.8 527.5 160L352 160zM29.9 192L96 192l0 128L0 320c0-46 10.8-89.4 29.9-128zM192 320l-64 0 0-128 320 0 0 128-64 0 0 32 192 0 0 80c0 26.5-21.5 48-48 48l-176 0 0-128c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 128L48 480c-26.5 0-48-21.5-48-48l0-80 192 0 0-32zm288 0l0-128 66.1 0c19.2 38.6 29.9 82 29.9 128l-96 0z"
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
export class SiIglooIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 576 512');
}
