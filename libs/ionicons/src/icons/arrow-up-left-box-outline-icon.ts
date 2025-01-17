import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-arrow-up-left-box-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M242.764 123.636h178.691A42.547 42.547 0 01464 166.182v255.273A42.546 42.546 0 01421.455 464H166.182a42.542 42.542 0 01-42.546-42.545V242.764M180.364 48H48v132.364M296 296L48 48"
      stroke="currentColor"
      stroke-width="32"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiArrowUpLeftBoxOutlineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');

  readonly fill = input<string>('none');
}
