import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-backstage-casting-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Backstage</svg:title>
    <svg:path
      d="M10.2 0v.056a5.997 5.997 0 0 1 0 11.886v.113a5.997 5.997 0 0 1 0 11.886v.056h12.552V0ZM1.248 0v24H9.54V0Z"
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
export class SiBackstageCastingIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#9BF0E1');
}
