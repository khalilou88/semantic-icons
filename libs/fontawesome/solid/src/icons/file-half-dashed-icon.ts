import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-file-half-dashed-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M64 0C28.7 0 0 28.7 0 64L0 320l384 0 0-160-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM0 416l64 0 0-64L0 352l0 64zm288 32l-80 0 0 64 80 0 0-64zm-112 0l-80 0 0 64 80 0 0-64zM64 448L0 448c0 35.3 28.7 64 64 64l0-64zm256 0l0 64c35.3 0 64-28.7 64-64l-64 0zm64-32l0-64-64 0 0 64 64 0z"
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
export class SiFileHalfDashedIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 384 512');
}
