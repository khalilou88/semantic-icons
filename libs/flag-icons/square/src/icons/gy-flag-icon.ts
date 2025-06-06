import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-gy-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:g fill-rule="evenodd">
      <svg:path fill="#399408" d="M2 0h510v512H2z" />
      <svg:path fill="#fff" d="M.1 0c-.6 0 495.7 257.6 495.7 257.6L0 511.7z" />
      <svg:path
        fill="#ffde08"
        d="M.2 21.5C3 21.5 447.5 254 445 256.2L1.5 494.2.2 21.4z"
      />
      <svg:path
        fill="#000001"
        d="M1.5.8c1.5 0 232.8 257 232.8 257L1.5 508.8z"
      />
      <svg:path
        fill="#de2110"
        d="M.2 36.2C1.6 20.2 209 258.5 209 258.5L.2 481.8z"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGyFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
