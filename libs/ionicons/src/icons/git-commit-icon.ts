import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-git-commit-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M448 224h-68a128 128 0 0 0-247.9 0H64a32 32 0 0 0 0 64h68.05A128 128 0 0 0 380 288h68a32 32 0 0 0 0-64m-192 96a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64"
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
export class SiGitCommitIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
