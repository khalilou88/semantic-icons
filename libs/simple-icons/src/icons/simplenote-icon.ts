import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-simplenote-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Simplenote</svg:title>
    <svg:path
      d="M3.466 3.62c-.004.052-.014.104-.018.158-.406 4.626 2.747 8.548 8.03 9.994 2.024.553 5.374 2.018 5.06 5.599a5.063 5.063 0 0 1-1.803 3.46c-1.022.857-2.308 1.21-3.64 1.166C5.147 23.794 0 18.367 0 12.05c0-3.285 1.325-6.262 3.467-8.428zM9.82 1.032c.907-.762 2.056-1.078 3.235-1.027C18.996.27 24 5.67 24 11.936c0 2.855-1.001 5.478-2.667 7.536.332-4.908-2.94-8.897-8.59-10.441-2.337-.64-4.749-2.274-4.514-4.948A4.467 4.467 0 0 1 9.82 1.03z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSimplenoteIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#3361CC');
}
