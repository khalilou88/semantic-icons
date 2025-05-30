import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-signs-post-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.1523 3.3457C13.1523 2.93149 12.8166 2.5957 12.4023 2.5957C11.9881 2.5957 11.6523 2.93149 11.6523 3.3457V9.3457L6.56249 9.3457C6.13389 9.3457 5.7202 9.50299 5.39986 9.78774L3.71236 11.2877C2.92921 11.9839 2.92921 13.2075 3.71237 13.9037L5.39987 15.4037C5.72021 15.6884 6.13391 15.8457 6.56251 15.8457L11.6523 15.8457V21.8457C11.6523 22.2599 11.9881 22.5957 12.4023 22.5957C12.8166 22.5957 13.1523 22.2599 13.1523 21.8457V15.1312C13.1529 15.1194 13.1532 15.1076 13.1532 15.0957V10.8457H18.244C18.6726 10.8457 19.0863 10.6884 19.4067 10.4037L21.0941 8.90367C21.8773 8.20753 21.8773 6.98387 21.0941 6.28774L19.4066 4.78774C19.0863 4.50299 18.6726 4.3457 18.244 4.3457H13.1523V3.3457ZM11.6523 10.8457L11.6523 14.3457L6.56251 14.3457C6.50128 14.3457 6.44218 14.3232 6.39642 14.2826L4.70891 12.7826C4.59703 12.6831 4.59703 12.5083 4.70891 12.4088L6.3964 10.9089C6.44217 10.8682 6.50127 10.8457 6.56249 10.8457H11.6523ZM13.1533 5.8457H18.244C18.3052 5.8457 18.3643 5.86817 18.4101 5.90885L20.0976 7.40885C20.2095 7.5083 20.2095 7.68311 20.0976 7.78256L18.4101 9.28256C18.3643 9.32323 18.3052 9.3457 18.244 9.3457H13.1533V5.8457Z"
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
export class SiSignsPost2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
