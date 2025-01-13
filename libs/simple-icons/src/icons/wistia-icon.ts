import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-wistia-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Wistia</svg:title>
    <svg:path
      d="M23.69 6.605c.507-3.094-1.24-3.944-1.24-3.944s.073 2.519-4.555 3.053C13.787 6.188 0 5.83 0 5.83l4.43 5.081c1.2 1.378 1.838 1.537 3.187 1.633 1.349.09 4.327.058 6.345-.096 2.206-.169 5.35-.888 7.477-2.535 1.09-.843 2.039-2.016 2.25-3.308m.284 3.205s-.556 1.105-3.33 2.853c-1.182.744-3.637 1.535-6.793 1.84-1.705.166-4.842.031-6.188.031-1.354 0-1.974.285-3.187 1.652L0 21.23s1.55.008 2.72.008c1.17 0 8.488.425 11.735-.468 10.546-2.899 9.518-10.96 9.518-10.96Z"
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
export class SiWistiaIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#58B7FE');
}
