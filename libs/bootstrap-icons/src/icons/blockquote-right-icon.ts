import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-blockquote-right-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm10.113-5.373a7 7 0 0 0-.445-.275l.21-.352q.183.111.452.287.27.176.51.428.234.246.398.562.164.31.164.692 0 .54-.216.873-.217.328-.721.328-.322 0-.504-.211a.7.7 0 0 1-.188-.463q0-.345.211-.521.205-.182.569-.182h.281a1.7 1.7 0 0 0-.123-.498 1.4 1.4 0 0 0-.252-.37 2 2 0 0 0-.346-.298m-2.168 0A7 7 0 0 0 10 6.352L10.21 6q.183.111.452.287.27.176.51.428.234.246.398.562.164.31.164.692 0 .54-.216.873-.217.328-.721.328-.322 0-.504-.211a.7.7 0 0 1-.188-.463q0-.345.211-.521.206-.182.569-.182h.281a1.8 1.8 0 0 0-.117-.492 1.4 1.4 0 0 0-.258-.375 2 2 0 0 0-.346-.3z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBlockquoteRightIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('16');

  readonly height = input<string | number>('16');

  readonly viewBox = input<string>('0 0 16 16');

  readonly fill = input<string>('currentColor');
}
