import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-burger-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="currentColor"
      d="M15 3.00009H9.00003c-2.76143 0-5 2.23858-5 5v1c0 .55229.44771 1.00001 1 1.00001H19c.5523 0 1-.44773 1-1.00001v-1c0-2.76142-2.2386-5-5-5Z"
    />
    <svg:path
      fill="currentColor"
      d="m4.35115 12.9364 2.31554-.8683 2.31555.8683c.22638.0849.47586.0849.70224 0L12 12.0681l2.3156.8683c.2264.0849.4758.0849.7022 0l2.3156-.8683 2.3155.8683c.5171.1939 1.0935-.0681 1.2875-.5852.1939-.5171-.0681-1.0935-.5852-1.2874l-2.6667-1c-.2264-.08493-.4759-.08493-.7023 0l-2.3155.8683-2.3155-.8683c-.2264-.08493-.4759-.08493-.7023 0l-2.31554.8683-2.31554-.8683c-.22639-.08493-.47586-.08493-.70225 0l-2.66667 1c-.51712.1939-.77912.7703-.5852 1.2874.19392.5171.77033.7791 1.28745.5852Z"
    />
    <svg:path
      fill="currentColor"
      d="M21 15.5001c0 .8179-.3927 1.5441-1 2.0002v.4998c0 1.6568-1.3431 3-3 3H7.00003c-1.65686 0-3-1.3432-3-3v-.4998c-.60723-.4561-1-1.1823-1-2.0002 0-1.3807 1.11928-2.5 2.5-2.5H18.5c1.3807 0 2.5 1.1193 2.5 2.5Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBurgerIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
