import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-stumbleupon-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 12.4034V15.1775C22 17.6292 20 19.6292 17.5484 19.6292C15.0968 19.6292 13.0968 17.6614 13.0968 15.1775V12.4356L14.4516 13.0808L16.4839 12.5001V15.3066C16.4839 15.8872 16.9355 16.3388 17.5161 16.3388C18.0968 16.3388 18.5484 15.8872 18.5484 15.3066V12.4356C18.5806 12.4034 22 12.4034 22 12.4034ZM14.3871 10.7259L16.4194 10.1453V8.72594C16.4194 6.30658 14.3871 4.37109 11.9677 4.37109C9.54839 4.37109 7.51613 6.27432 7.51613 8.69368V15.1453C7.51613 15.7259 7.06452 16.1775 6.48387 16.1775C5.90323 16.1775 5.45161 15.7259 5.45161 15.1453V12.4034H2V15.1775C2 17.6292 4 19.6292 6.45161 19.6292C8.90323 19.6292 10.9032 17.6614 10.9032 15.2098V8.85497C10.9032 8.27432 11.3548 7.82271 11.9355 7.82271C12.5161 7.82271 12.9677 8.27432 12.9677 8.85497V10.0457L14.3871 10.7259Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiStumbleuponIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
