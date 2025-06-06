import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-facebook-messenger-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.9677 2.02539C6.35484 2.02539 2 6.15442 2 11.7028C2 14.6383 3.19355 17.1544 5.12903 18.8641C5.25806 18.9931 5.35484 19.2189 5.3871 19.4125L5.41935 21.1867C5.45161 21.7351 6 22.1544 6.54839 21.8964L8.54839 21.0254C8.67742 20.9931 8.90323 20.9286 9.09677 20.9931C10 21.2189 10.9677 21.4125 12 21.4125C17.6452 21.3802 22 17.2512 22 11.7351C22 6.21894 17.6129 2.02539 11.9677 2.02539ZM17.9677 9.477L15.0323 14.0899C14.5806 14.7996 13.5806 15.0576 12.9032 14.5093L10.5806 12.7351C10.3548 12.606 10.0968 12.606 9.87097 12.7351L6.70968 15.0899C6.29032 15.4125 5.74194 14.8964 6.03226 14.4447L8.96774 9.83184C9.41936 9.12216 10.4194 8.8641 11.0968 9.41248L13.4194 11.1867C13.6452 11.3157 13.9032 11.3157 14.129 11.1867L17.2581 8.76732C17.7419 8.57377 18.2258 9.05765 17.9677 9.477Z"
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
export class SiFacebookMessengerIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
