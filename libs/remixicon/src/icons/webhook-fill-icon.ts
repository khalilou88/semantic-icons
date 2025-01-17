import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-webhook-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.5011 4.39885C14.7217 5.10357 15.2612 6.53847 14.8826 7.83501L16.8025 8.3956C17.4334 6.23483 16.5385 3.8431 14.5011 2.6668C12.1096 1.28609 9.05169 2.10547 7.67098 4.49693C6.4615 6.59181 6.94024 9.19811 8.68509 10.7404L6.80304 14.0002L6.7998 14.0002C5.69524 14.0002 4.7998 14.8957 4.7998 16.0002C4.7998 17.1048 5.69524 18.0002 6.7998 18.0002C7.90437 18.0002 8.7998 17.1048 8.7998 16.0002C8.7998 15.8408 8.78115 15.6857 8.7459 15.537C8.66351 15.1896 8.64362 14.8123 8.82215 14.503L11.3671 10.095L10.5011 9.59501C9.06623 8.76658 8.5746 6.93181 9.40303 5.49693C10.2315 4.06205 12.0662 3.57043 13.5011 4.39885ZM15.0313 18.0802C15.9648 19.0563 17.4772 19.3066 18.6978 18.6018C20.1327 17.7734 20.6243 15.9387 19.7959 14.5038C18.9675 13.0689 17.1327 12.5773 15.6978 13.4057L14.8318 13.9057L12.2864 9.49688C12.1079 9.18768 11.7711 9.01623 11.4291 8.91386C11.2827 8.87005 11.1391 8.80868 11.0011 8.72897C10.0445 8.17668 9.71673 6.9535 10.269 5.99692C10.8213 5.04033 12.0445 4.71258 13.0011 5.26487C13.9577 5.81715 14.2854 7.04033 13.7331 7.99692L13.7314 7.99981L15.6139 11.2603C17.822 10.5203 20.3185 11.4089 21.528 13.5038C22.9087 15.8952 22.0893 18.9532 19.6978 20.3339C17.6604 21.5102 15.1417 21.0893 13.5859 19.4625L15.0313 18.0802ZM3.7998 16.0005C3.7998 14.5911 4.77271 13.4064 6.08484 13.086L5.61041 11.1431C3.42366 11.677 1.7998 13.6479 1.7998 16.0005C1.7998 18.7619 4.03838 21.0005 6.7998 21.0005C9.21876 21.0005 11.2365 19.2827 11.6998 17.0005H15.4641L15.4658 17.0036C16.0181 17.9602 17.2413 18.2879 18.1979 17.7356C19.1545 17.1833 19.4822 15.9602 18.9299 15.0036C18.3776 14.047 17.1545 13.7192 16.1979 14.2715C16.0598 14.3512 15.9349 14.4449 15.8238 14.5497C15.5642 14.7947 15.2474 15.0005 14.8904 15.0005H9.7998V16.0005C9.7998 17.6574 8.45666 19.0005 6.7998 19.0005C5.14295 19.0005 3.7998 17.6574 3.7998 16.0005Z"
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
export class SiWebhookFillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
