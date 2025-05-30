import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-watch-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect
      width="288"
      height="288"
      x="112"
      y="112"
      rx="64"
      ry="64"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:path
      d="M176 112V40a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v72M336 400v72a8 8 0 0 1-8 8H184a8 8 0 0 1-8-8v-72"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32px"
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
export class SiWatchOutlineIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
