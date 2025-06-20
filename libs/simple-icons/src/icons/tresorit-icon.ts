import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-tresorit-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Tresorit</svg:title>
    <svg:path
      d="M12 0 1.636 6v12L12 24l10.364-6V6zM3.818 7.258 12 2.521l3.574 2.069-11.756 6.753zm16.364 9.484L12 21.48 3.82 16.742V13.86l13.938-8.006 2.425 1.404z"
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
export class SiTresoritIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#00A9E2');
}
