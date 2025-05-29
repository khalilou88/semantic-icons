import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-packer-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Packer</svg:title>
    <svg:path
      d="M7.844 0v3.38l5.75 3.32v10.148l2.705 1.552c1.676.967 3.045.388 3.045-1.285V9.668c-.014-1.687-1.382-3.832-3.059-4.799L7.844 0zM4.656 2.932v16.574L12.436 24V7.426l-7.78-4.494Z"
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
export class SiPackerIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#02A8EF');
}
