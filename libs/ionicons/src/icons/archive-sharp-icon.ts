import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-archive-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect x="32" y="48" width="448" height="80" rx="12" ry="12" />
    <svg:path
      d="M64 160v280a24 24 0 0024 24h336a24 24 0 0024-24V160zm192 230.63L169.32 304 192 281.32l48 48.05V208h32v121.37l48.07-48.07 22.61 22.64z"
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
export class SiArchiveSharpIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
