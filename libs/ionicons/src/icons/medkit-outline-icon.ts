import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-medkit-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect
      width="448"
      height="352"
      x="32"
      y="112"
      rx="48"
      ry="48"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:path
      d="M144 112V80a32 32 0 0 1 32-32h160a32 32 0 0 1 32 32v32M256 208v160M336 288H176"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
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
export class SiMedkitOutlineIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
