import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cellular-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect
      width="64"
      height="320"
      x="416"
      y="96"
      rx="8"
      ry="8"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:rect
      width="64"
      height="240"
      x="288"
      y="176"
      rx="8"
      ry="8"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:rect
      width="64"
      height="176"
      x="160"
      y="240"
      rx="8"
      ry="8"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:rect
      width="64"
      height="112"
      x="32"
      y="304"
      rx="8"
      ry="8"
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
export class SiCellularOutlineIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
