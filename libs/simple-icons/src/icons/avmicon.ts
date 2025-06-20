import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-avmicon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>AVM</svg:title>
    <svg:path
      d="m19.501 11.786-.003-4.823-10.9 11.925h3.172l5.481-6.07v4.864l4.321-4.783v3.657H24V6.86zm-2.643-6.675-5.267 5.87V7.443H9.345v9.38L20.049 5.111zM0 16.556h3.148l2.924-3.25v3.25H8.41v-9.21z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAVMIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#E2001A');
}
