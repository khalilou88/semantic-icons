import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-qlik-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Qlik</svg:title>
    <svg:path
      d="m23.7515 20.1367-3.13-2.6326c1.0862-1.7307 1.7303-3.7745 1.7303-5.9655 0-6.1684-5.008-11.1764-11.176-11.1764S0 5.3702 0 11.5386c0 6.168 5.008 11.176 11.1759 11.176 2.3934 0 4.6216-.7552 6.4443-2.0438l3.3324 2.7988s.4974.4236.921-.0738l1.9884-2.3568c-.0186 0 .3864-.4968-.1105-.9023zm-5.7078-8.598c0 3.7926-3.0747 6.8672-6.8678 6.8672-3.7926 0-6.8678-3.0746-6.8678-6.8673 0-3.793 3.0752-6.8678 6.8678-6.8678 3.7931 0 6.8678 3.0747 6.8678 6.8678zm-11.287 0c0-2.4304 1.9702-4.4006 4.4006-4.4006 2.4303 0 4.4005 1.9702 4.4005 4.4005 0 2.4304-1.9702 4.4006-4.4005 4.4006-2.4304 0-4.4005-1.9702-4.4005-4.4006z"
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
export class SiQlikIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#009848');
}
