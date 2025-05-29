import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-keypad-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M256 400a48 48 0 1 0 48 48 48 48 0 0 0-48-48M256 272a48 48 0 1 0 48 48 48 48 0 0 0-48-48M256 144a48 48 0 1 0 48 48 48 48 0 0 0-48-48M256 16a48 48 0 1 0 48 48 48 48 0 0 0-48-48M384 272a48 48 0 1 0 48 48 48 48 0 0 0-48-48M384 144a48 48 0 1 0 48 48 48 48 0 0 0-48-48M384 16a48 48 0 1 0 48 48 48 48 0 0 0-48-48M128 272a48 48 0 1 0 48 48 48 48 0 0 0-48-48M128 144a48 48 0 1 0 48 48 48 48 0 0 0-48-48M128 16a48 48 0 1 0 48 48 48 48 0 0 0-48-48"
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
export class SiKeypadIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
