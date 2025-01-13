import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-git-pull-request-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M192 96a64 64 0 10-96 55.39v209.22a64 64 0 1064 0V151.39A64 64 0 00192 96zm-64-32a32 32 0 11-32 32 32 32 0 0132-32zm0 384a32 32 0 1132-32 32 32 0 01-32 32zM416 360.61V156a92.1 92.1 0 00-92-92h-20V32a16 16 0 00-27.31-11.31l-64 64a16 16 0 000 22.62l64 64A16 16 0 00304 160v-32h20a28 28 0 0128 28v204.61a64 64 0 1064 0zM384 448a32 32 0 1132-32 32 32 0 01-32 32z"
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
export class SiGitPullRequestIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
