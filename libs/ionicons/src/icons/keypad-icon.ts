import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-keypad-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M256 400a48 48 0 1048 48 48 48 0 00-48-48zM256 272a48 48 0 1048 48 48 48 0 00-48-48zM256 144a48 48 0 1048 48 48 48 0 00-48-48zM256 16a48 48 0 1048 48 48 48 0 00-48-48zM384 272a48 48 0 1048 48 48 48 0 00-48-48zM384 144a48 48 0 1048 48 48 48 0 00-48-48zM384 16a48 48 0 1048 48 48 48 0 00-48-48zM128 272a48 48 0 1048 48 48 48 0 00-48-48zM128 144a48 48 0 1048 48 48 48 0 00-48-48zM128 16a48 48 0 1048 48 48 48 0 00-48-48z"
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
export class SiKeypadIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
