import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-git-branch-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M352 96a64 64 0 0 0-58.86 89.11l-101.14 88V151.39a64 64 0 1 0-64 0v209.22a64 64 0 1 0 64 0V358l154.25-134.27c1.9.17 3.81.27 5.75.27a64 64 0 0 0 0-128M160 64a32 32 0 1 1-32 32 32 32 0 0 1 32-32m0 384a32 32 0 1 1 32-32 32 32 0 0 1-32 32m192-256a32 32 0 1 1 32-32 32 32 0 0 1-32 32"
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
export class SiGitBranchSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
