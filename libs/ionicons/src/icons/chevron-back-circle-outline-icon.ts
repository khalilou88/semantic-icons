import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-chevron-back-circle-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64Z"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32px"
    />
    <svg:path
      d="m296 352-96-96 96-96"
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
export class SiChevronBackCircleOutlineIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
