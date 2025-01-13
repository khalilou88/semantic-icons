import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-box-tissue-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M92.5 0L208 0c40 0 52 24 64 48s24 48 64 48l85.2 0C436 96 448 108 448 122.8c0 3.4-.7 6.8-1.9 10L409.6 224 384 288l-256 0-16-64L64.9 35.4c-.6-2.3-.9-4.6-.9-6.9C64 12.8 76.8 0 92.5 0zM79 224l16 64-15 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 256 0 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-13.5 0 25.6-64 19.9 0c26.5 0 48 21.5 48 48l0 112L0 384 0 272c0-26.5 21.5-48 48-48l31 0zM0 416l512 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48l0-48z"
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
export class SiBoxTissueIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
