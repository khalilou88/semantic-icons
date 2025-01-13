import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-life-guard-tube-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.89751 7.53696C3.18221 6.65334 3.23544 5.35408 4.05721 4.53231L4.39496 4.19456C5.2032 3.38632 6.47336 3.32153 7.35566 4.00019C10.1918 2.35112 13.7172 2.33601 16.566 3.95486C17.445 3.32497 18.6758 3.4049 19.4655 4.19465L19.8033 4.5324C20.5928 5.32189 20.6729 6.55211 20.0437 7.43107C21.6647 10.2808 21.6501 13.8084 19.9997 16.6459C20.6726 17.5279 20.606 18.7934 19.7999 19.5995L19.4622 19.9373C18.6425 20.7569 17.3479 20.812 16.4644 20.1025C13.6662 21.646 10.238 21.6304 7.45253 20.0559C6.56854 20.8149 5.23503 20.7757 4.39752 19.9382L4.05977 19.6004C3.222 18.7626 3.183 17.4286 3.94274 16.5446C2.37025 13.76 2.35517 10.3339 3.89751 7.53696ZM5.04942 15.4288L7.98745 12.4907C7.95277 12.2056 7.94846 11.9175 7.9745 11.6316L5.00539 8.66248C3.98634 10.7981 4.00102 13.3038 5.04942 15.4288ZM8.56827 18.9494C10.694 19.9995 13.2012 20.0147 15.338 18.9951L12.3661 16.0232C12.0803 16.0492 11.7924 16.0449 11.5074 16.0103L8.56827 18.9494ZM13.9834 15.5192L17.3408 18.8766C17.6337 19.1695 18.1086 19.1695 18.4015 18.8766L18.7392 18.5389C19.0321 18.246 19.0321 17.7711 18.7392 17.4782L15.4157 14.1546C15.2583 14.4038 15.071 14.6396 14.8539 14.8567C14.5884 15.1222 14.2951 15.3431 13.9834 15.5192ZM15.9912 12.6089L18.9043 15.522C20.0147 13.3462 20.0298 10.7553 18.9494 8.56827L16.0074 11.5102C16.0518 11.8752 16.0464 12.2451 15.9912 12.6089ZM15.467 9.92934L18.7426 6.65372C19.0355 6.36083 19.0355 5.88595 18.7426 5.59306L18.4049 5.25531C18.112 4.96242 17.6371 4.96242 17.3442 5.25531L14.0686 8.53087C14.3486 8.6983 14.6127 8.90261 14.8539 9.14378C15.0952 9.38505 15.2995 9.64924 15.467 9.92934ZM12.4879 7.9903L15.4288 5.04942C13.2425 3.97077 10.6532 3.98635 8.47855 5.09618L11.3888 8.00643C11.7527 7.95127 12.1228 7.94589 12.4879 7.9903ZM9.84303 8.58198L6.51628 5.25522C6.22338 4.96233 5.74851 4.96233 5.45562 5.25522L5.11787 5.59297C4.82497 5.88587 4.82497 6.36074 5.11787 6.65363L8.47847 10.0142C8.65461 9.70256 8.87543 9.40929 9.14094 9.14378C9.3581 8.92662 9.59383 8.73935 9.84303 8.58198ZM8.52802 14.0715L5.12043 17.4791C4.82754 17.772 4.82754 18.2468 5.12043 18.5397L5.45818 18.8775C5.75107 19.1704 6.22595 19.1704 6.51884 18.8775L9.9265 15.4698C9.64639 15.3024 9.3822 15.098 9.14094 14.8567C8.89976 14.6156 8.69546 14.3515 8.52802 14.0715ZM10.2016 10.2044C9.2098 11.1962 9.2098 12.8043 10.2016 13.7961C11.1934 14.7879 12.8014 14.7879 13.7932 13.7961C14.785 12.8043 14.785 11.1962 13.7932 10.2044C12.8014 9.21264 11.1934 9.21264 10.2016 10.2044Z"
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
export class SiLifeGuardTube1Icon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
