import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-git-commit-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M480 224H380a128 128 0 00-247.9 0H32v64h100.05A128 128 0 00380 288h100zm-224 96a64 64 0 1164-64 64.07 64.07 0 01-64 64z"
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
export class SiGitCommitSharpIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
