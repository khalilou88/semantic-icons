import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sign-post-left-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.1519 2.5957C12.7377 2.5957 12.4019 2.93149 12.4019 3.3457V4.3457H7.46876C6.9177 4.3457 6.38581 4.54793 5.97394 4.91403L3.16143 7.41403C2.15452 8.30906 2.15452 9.88235 3.16143 10.7774L5.97392 13.2774C6.38579 13.6435 6.91768 13.8457 7.46874 13.8457H12.4019V21.8457C12.4019 22.2599 12.7377 22.5957 13.1519 22.5957C13.5661 22.5957 13.9019 22.2599 13.9019 21.8457V13.8457H20.1519C21.3945 13.8457 22.4019 12.8383 22.4019 11.5957V6.5957C22.4019 5.35306 21.3945 4.3457 20.1519 4.3457H13.9019V3.3457C13.9019 2.93149 13.5661 2.5957 13.1519 2.5957ZM20.1519 12.3457H7.46874C7.28506 12.3457 7.10776 12.2783 6.97047 12.1563L4.15798 9.65626C3.82234 9.35792 3.82234 8.83349 4.15798 8.53515L6.97049 6.03515C7.10778 5.91311 7.28508 5.8457 7.46876 5.8457H20.1519C20.5661 5.8457 20.9019 6.18149 20.9019 6.5957V11.5957C20.9019 12.0099 20.5661 12.3457 20.1519 12.3457Z"
      fill="#323544"
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
export class SiSignPostLeftIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
