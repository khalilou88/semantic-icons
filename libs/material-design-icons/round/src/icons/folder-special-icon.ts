import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-folder-special-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-3.06 10.41L15 15.28l-1.94 1.13a.502.502 0 0 1-.74-.55l.51-2.2-1.69-1.46c-.33-.29-.16-.84.28-.88l2.23-.19.88-2.06c.17-.4.75-.4.92 0l.88 2.06 2.23.19a.5.5 0 0 1 .28.88l-1.69 1.46.51 2.2a.49.49 0 0 1-.72.55z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFolderSpecialIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
