import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-tinygrad-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>tinygrad</svg:title>
    <svg:path
      d="M1.846 7.385V9.23H0v1.846h1.846v3.692h3.692v-1.846H3.692v-1.846h1.846V9.23H3.692V7.385zm5.539 0V9.23H9.23V7.385zm3.692 1.846v5.538h1.846v-3.692h1.846V9.23h-1.846zm3.692 1.846v3.692h1.846v-3.692zm3.693-1.846v3.692h3.692v1.846H24V9.231h-1.846v1.846h-1.846V9.23Zm3.692 5.538h-3.692v1.846h3.692zm-14.77-3.692v3.692h1.847v-3.692z"
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
export class SiTinygradIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FFFFFF');
}
