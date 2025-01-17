import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-evernote-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.63007 7.75444C8.41531 7.95499 8.08524 7.97086 7.88803 7.97086H5.77723C5.16722 7.97086 4.80372 7.97086 4.55721 8.00429C4.42435 8.021 4.25973 8.08785 4.177 8.12128C4.14358 8.13715 4.14358 8.12128 4.16029 8.10456L8.97602 3.16516C8.99273 3.14845 9.00944 3.14845 8.99273 3.18187C8.9593 3.2646 8.89413 3.43089 8.87741 3.56376C8.84399 3.81277 8.84399 4.17878 8.84399 4.7938V7.00571C8.84399 7.20626 8.82728 7.53884 8.63007 7.75444ZM13.3129 21.9384C12.7531 21.5724 12.4556 21.0902 12.3403 20.7911C12.2216 20.5006 12.1601 20.1899 12.1589 19.8761C12.1603 18.4916 13.2813 17.3691 14.6658 17.3658C15.0778 17.3658 15.4079 17.6984 15.4079 18.1137C15.4097 18.383 15.2641 18.6318 15.0285 18.7622C14.9458 18.8123 14.8304 18.8457 14.7477 18.8625C14.6658 18.8792 14.3525 18.9126 14.2045 19.0446C14.0391 19.1783 13.9071 19.3939 13.9071 19.6271C13.9071 19.8761 14.0057 20.1092 14.1711 20.2755C14.4678 20.5747 14.8639 20.7409 15.2925 20.7409C15.8327 20.739 16.3499 20.5224 16.7303 20.1388C17.1107 19.7553 17.3231 19.2363 17.3206 18.6962C17.3206 17.6817 16.6446 16.7834 15.7538 16.3848C15.6218 16.318 15.4079 16.2678 15.2098 16.2177C15.046 16.184 14.881 16.1564 14.7151 16.135C14.0224 16.0514 12.291 15.5032 12.1748 13.9573C12.1748 13.9573 11.6642 16.2845 10.6414 16.9163C10.5428 16.9664 10.4108 17.0165 10.2621 17.05C10.1141 17.0834 9.94953 17.1001 9.89939 17.1001C8.23398 17.1995 6.46913 16.6673 5.24911 15.4038C5.24911 15.4038 4.42435 14.7219 3.99567 12.81C3.89706 12.3437 3.69902 11.5123 3.5837 10.7309C3.53357 10.4485 3.51685 10.2321 3.50098 10.0324C3.50098 9.21762 3.99567 8.66945 4.62239 8.58672H7.98663C8.56322 8.58672 8.89413 8.43631 9.10805 8.23659C9.38882 7.97086 9.45483 7.58815 9.45483 7.13941V3.73005V3.63144C9.53589 3.01558 10.0816 2.5 10.8888 2.5H11.2849C11.4495 2.5 11.6475 2.51671 11.8289 2.53343C11.9609 2.55014 12.0762 2.58356 12.2742 2.6337C13.2803 2.88272 13.4943 3.91388 13.4943 3.91388C13.4943 3.91388 15.3911 4.24646 16.3479 4.41276C17.2546 4.57905 19.4983 4.72862 19.9261 7.00655C20.9322 12.4273 20.3222 17.6817 20.2729 17.6817C19.5634 22.8033 15.3418 22.5534 15.3418 22.5534C14.6175 22.5681 13.9072 22.3528 13.3129 21.9384ZM15.9351 11.6292C15.9017 11.7128 15.8691 11.8122 15.8858 11.8616C15.9025 11.9117 15.936 11.9284 15.9686 11.9451C16.1666 12.0454 16.4958 12.0947 16.9747 12.1448C17.4526 12.195 17.7827 12.2284 17.9966 12.195C18.0301 12.195 18.0635 12.1783 18.0961 12.1281C18.1295 12.078 18.1128 11.9777 18.1128 11.895C18.0626 11.4462 17.6507 11.1137 17.1067 11.0468C16.5619 10.9967 16.1006 11.2139 15.9351 11.6292Z"
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
export class SiEvernoteFillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
