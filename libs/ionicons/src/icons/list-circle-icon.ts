import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-list-circle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48m-88 302a24 24 0 1 1 24-24 24 24 0 0 1-24 24m0-71a24 24 0 1 1 24-24 24 24 0 0 1-24 24m0-73a24 24 0 1 1 24-24 24 24 0 0 1-24 24m184 135H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32m0-71H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32m0-72H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32"
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
export class SiListCircleIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
