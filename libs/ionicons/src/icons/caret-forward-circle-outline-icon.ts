import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-caret-forward-circle-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m238.23 342.43 89.09-74.13a16 16 0 0 0 0-24.6l-89.09-74.13A16 16 0 0 0 212 181.86v148.28a16 16 0 0 0 26.23 12.29"
    />
    <svg:path
      d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
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
export class SiCaretForwardCircleOutlineIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
