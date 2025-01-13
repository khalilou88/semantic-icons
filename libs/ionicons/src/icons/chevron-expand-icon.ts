import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-chevron-expand-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M136 208l120-104 120 104M136 304l120 104 120-104"
      fill="none"
      stroke="currentColor"
      stroke-width="48"
      stroke-linecap="round"
      stroke-linejoin="round"
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
export class SiChevronExpandIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
