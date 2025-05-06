import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-git-merge-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M384 224a63.66 63.66 0 0 0-37.95 12.5L160 153.36v-2a64 64 0 1 0-64 0v209.25a64 64 0 1 0 64 0V223.46l160.41 71.69A64 64 0 1 0 384 224M128 64a32 32 0 1 1-32 32 32 32 0 0 1 32-32m0 384a32 32 0 1 1 32-32 32 32 0 0 1-32 32m256-128a32 32 0 1 1 32-32 32 32 0 0 1-32 32"
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
export class SiGitMergeSharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
