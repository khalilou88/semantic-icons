import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-guangzhoumetro-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Guangzhou Metro</svg:title>
    <svg:path
      d="M16.433 12.329A16.188 16.188 0 0 1 22.118.009L17.684 0a16.2 16.2 0 0 0-4.776 11.374V24h3.525zm-8.869 0A16.174 16.174 0 0 0 1.882.009L6.319 0a16.238 16.238 0 0 1 4.773 11.374V24H7.564z"
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
export class SiGuangzhoumetroIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#C51935');
}
