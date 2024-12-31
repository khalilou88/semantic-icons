import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-meeple-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-meeple"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c2.486 0 3.713 1.766 3.955 4.1l.01 .124l.129 .036c3.17 .928 5.754 2.487 5.9 4.556l.006 .184c0 1.427 -1.297 2.322 -2.871 2.733l-.201 .049l.026 .03c.244 .276 .532 .603 .7 .797l.057 .066c.49 .573 .884 1.073 1.216 1.56c.69 1.01 1.073 1.904 1.073 2.765a2 2 0 0 1 -2 2h-5c-1.043 0 -1.344 -.453 -2.394 -2.553c-.29 -.58 -.448 -.882 -.593 -1.118l-.013 -.022l-.013 .022c-.129 .21 -.268 .472 -.5 .935l-.093 .183c-1.05 2.1 -1.351 2.553 -2.394 2.553h-5a2 2 0 0 1 -2 -2c0 -.86 .384 -1.755 1.073 -2.765a18 18 0 0 1 1.216 -1.56c.152 -.178 .482 -.553 .757 -.863l.025 -.03l-.2 -.049c-1.506 -.393 -2.758 -1.23 -2.864 -2.55l-.007 -.183c0 -2.16 2.643 -3.785 5.906 -4.74l.128 -.036l.011 -.124c.235 -2.26 1.394 -3.99 3.726 -4.095z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgMeepleIcon {
  readonly class = input<string>('');
}
