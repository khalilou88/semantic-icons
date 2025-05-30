import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-checkmark-done-circle-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48m48.19 121.42 24.1 21.06-73.61 84.1-24.1-23.06ZM191.93 342.63 121.37 272 144 249.37 214.57 320Zm65 .79L185.55 272l22.64-22.62 47.16 47.21 111.13-127.17 24.1 21.06Z"
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
export class SiCheckmarkDoneCircleSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
