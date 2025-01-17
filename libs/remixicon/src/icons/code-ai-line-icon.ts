import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-code-ai-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.7134 10.1281L17.4668 10.6938C17.2864 11.1079 16.7136 11.1079 16.5331 10.6938L16.2866 10.1281C15.8471 9.11947 15.0555 8.31641 14.0677 7.87708L13.308 7.53922C12.8973 7.35653 12.8973 6.75881 13.308 6.57612L14.0252 6.25714C15.0384 5.80651 15.8442 4.97373 16.2761 3.93083L16.5293 3.31953C16.7058 2.89349 17.2942 2.89349 17.4706 3.31953L17.7238 3.93083C18.1558 4.97373 18.9616 5.80651 19.9748 6.25714L20.6919 6.57612C21.1027 6.75881 21.1027 7.35653 20.6919 7.53922L19.9323 7.87708C18.9445 8.31641 18.1529 9.11947 17.7134 10.1281ZM2.82843 12.0001L7.07107 16.2428L5.65685 17.657L0 12.0001L5.65685 6.34326L7.07107 7.75748L2.82843 12.0001ZM18.3429 17.6572L23.9998 12.0003L21.1714 9.17188L19.7571 10.5861L21.1714 12.0003L16.9287 16.2429L18.3429 17.6572Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCodeAiLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
