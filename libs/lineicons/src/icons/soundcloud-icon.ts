import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-soundcloud-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2.2265 11.4946C2.18477 11.4946 2.15165 11.5269 2.14625 11.5729L2 12.6838L2.14625 13.7756C2.15165 13.8216 2.18475 13.8537 2.2265 13.8537C2.26692 13.8537 2.29984 13.8219 2.30629 13.7761L2.47964 12.6838L2.30629 11.5727C2.30005 11.5269 2.26672 11.4946 2.2265 11.4946ZM3.04899 10.8876C3.0421 10.8399 3.00791 10.807 2.96575 10.807C2.92337 10.807 2.88831 10.841 2.88251 10.8876L2.68592 12.6838L2.88251 14.4403C2.88811 14.4874 2.92317 14.5214 2.96575 14.5214C3.00768 14.5214 3.0419 14.4882 3.04877 14.4407L3.27244 12.6838L3.04899 10.8876ZM6.14713 9.23084C6.06648 9.23084 5.99977 9.29684 5.9959 9.38074L5.83932 12.6854L5.9959 14.821C6 14.9044 6.06648 14.9702 6.14713 14.9702C6.22735 14.9702 6.29381 14.9042 6.29855 14.8205V14.8212L6.47555 12.6854L6.29855 9.38074C6.29381 9.29684 6.22732 9.23084 6.14713 9.23084ZM4.54364 10.3794C4.48169 10.3794 4.43115 10.4289 4.42618 10.4949L4.24982 12.6845L4.42618 14.8029C4.43091 14.8685 4.48167 14.9179 4.54364 14.9179C4.60493 14.9179 4.65547 14.8685 4.66087 14.8029L4.86132 12.6845L4.66087 10.4945C4.65547 10.4289 4.60493 10.3794 4.54364 10.3794ZM7.77665 14.97C7.87665 14.97 7.95797 14.8894 7.96203 14.7861L8.11561 12.6864L7.96226 8.28677C7.95816 8.18355 7.87687 8.10287 7.77687 8.10287C7.67597 8.10287 7.59448 8.18374 7.59123 8.287L7.45506 12.6862L7.59123 14.7867C7.59445 14.8891 7.67597 14.97 7.77665 14.97ZM11.1126 14.9799C11.2503 14.9799 11.3639 14.8666 11.3665 14.7272L11.4736 12.6877L11.3665 7.60645C11.3641 7.46729 11.2503 7.35374 11.1126 7.35374C10.9748 7.35374 10.861 7.4671 10.8588 7.60668L10.7631 12.686C10.7631 12.6892 10.8588 14.7285 10.8588 14.7285C10.861 14.8665 10.975 14.9799 11.1126 14.9799ZM9.43194 14.972C9.55177 14.972 9.64832 14.8758 9.65155 14.7532V14.7547L9.78187 12.6869L9.65132 8.25539C9.6481 8.13277 9.55155 8.03687 9.43171 8.03687C9.31106 8.03687 9.21448 8.1328 9.2119 8.25539L9.096 12.6871L9.21213 14.7545C9.21471 14.8758 9.31129 14.972 9.43194 14.972ZM5.34226 14.9526C5.41345 14.9526 5.4711 14.8956 5.47648 14.8205L5.66532 12.6845L5.47648 10.6525C5.47132 10.5775 5.41371 10.5209 5.34226 10.5209C5.27 10.5209 5.21235 10.5779 5.20784 10.6534L5.04158 12.6845L5.20784 14.8203C5.21258 14.8956 5.27 14.9526 5.34226 14.9526ZM3.75148 14.8356C3.80352 14.8356 3.84567 14.7945 3.8517 14.7377L4.06377 12.6841L3.8519 10.553C3.84565 10.496 3.8035 10.4549 3.75146 10.4549C3.69875 10.4549 3.6566 10.4962 3.65122 10.553L3.46453 12.6841L3.65122 14.7373C3.6564 14.7943 3.69855 14.8356 3.75148 14.8356ZM10.2691 8.18161C10.139 8.18161 10.0346 8.2851 10.0321 8.41758L9.92623 12.6873L10.0321 14.7418C10.0346 14.8726 10.1387 14.976 10.2691 14.976C10.399 14.976 10.5027 14.8728 10.5057 14.7403V14.742L10.6244 12.6875L10.5057 8.41713C10.5026 8.2851 10.399 8.18161 10.2691 8.18161ZM6.95887 14.9743C7.04877 14.9743 7.12297 14.901 7.12729 14.8074L7.29248 12.686L7.12729 8.62555C7.12274 8.53174 7.04877 8.45864 6.95887 8.45864C6.8681 8.45864 6.79413 8.53197 6.79023 8.62555L6.64397 12.686L6.79045 14.8083C6.7941 14.901 6.86806 14.9743 6.95887 14.9743ZM8.80345 14.773L8.94542 12.6866L8.80345 8.1388C8.8 8.0259 8.71097 7.93729 8.60106 7.93729C8.49048 7.93729 8.40145 8.02568 8.39845 8.1388L8.27242 12.6864L8.39865 14.7738C8.40168 14.8857 8.49074 14.9741 8.60106 14.9741C8.71119 14.9741 8.79977 14.8855 8.80345 14.773ZM19.5402 10.0651C19.2032 10.0651 18.8816 10.1333 18.5887 10.2561C18.3929 8.03903 16.5337 6.2998 14.2658 6.2998C13.7109 6.2998 13.17 6.40906 12.6923 6.59384C12.5066 6.66568 12.4572 6.73964 12.4555 6.88313V14.6908C12.4574 14.8414 12.5742 14.9668 12.7211 14.9816C12.7273 14.9823 19.4961 14.9857 19.54 14.9857C20.8985 14.9857 22 13.8842 22 12.5255C22 11.1668 20.8987 10.0651 19.5402 10.0651ZM11.9525 6.87626C11.8048 6.87626 11.6835 6.99758 11.6813 7.14661L11.5704 12.6884L11.6815 14.6996C11.6835 14.8465 11.8048 14.9676 11.9525 14.9676C12.0999 14.9676 12.2212 14.8465 12.2234 14.6975V14.6999L12.344 12.6884L12.2234 7.14619C12.2212 6.99758 12.0999 6.87626 11.9525 6.87626ZM3.98657 16.5496C3.69556 16.4812 3.61683 16.4446 3.61683 16.3294C3.61683 16.2481 3.68243 16.164 3.87902 16.164C4.047 16.164 4.17821 16.2321 4.29609 16.3528L4.56087 16.096C4.38774 15.9151 4.17801 15.8075 3.89238 15.8075C3.53017 15.8075 3.23657 16.0121 3.23657 16.3453C3.23657 16.7071 3.47275 16.8146 3.81087 16.8931C4.15693 16.9716 4.21996 17.0243 4.21996 17.1424C4.21996 17.2814 4.11736 17.3418 3.90012 17.3418C3.7244 17.3418 3.55921 17.2815 3.4306 17.1316L3.16578 17.3678C3.30472 17.5724 3.57251 17.7008 3.879 17.7008C4.38016 17.7008 4.6004 17.4648 4.6004 17.1162C4.60042 16.7174 4.27778 16.6178 3.98657 16.5496ZM5.67584 15.8075C5.17513 15.8075 4.87894 16.1956 4.87894 16.7542C4.87894 17.3128 5.1751 17.7006 5.67584 17.7006C6.17658 17.7006 6.47316 17.3128 6.47316 16.7542C6.47316 16.1956 6.17658 15.8075 5.67584 15.8075ZM5.67584 17.3364C5.37968 17.3364 5.25619 17.082 5.25619 16.7544C5.25619 16.4266 5.37968 16.1721 5.67584 16.1721C5.97245 16.1721 6.09548 16.4266 6.09548 16.7544C6.09548 17.082 5.97245 17.3364 5.67584 17.3364ZM7.95494 16.8671C7.95494 17.1607 7.81042 17.3418 7.57726 17.3418C7.34387 17.3418 7.20232 17.1555 7.20232 16.8619V15.8362H6.83497V16.8671C6.83497 17.4018 7.13416 17.7008 7.57723 17.7008C8.044 17.7008 8.3221 17.3939 8.3221 16.862V15.8362H7.95494V16.8671ZM9.90577 16.6126C9.90577 16.715 9.91093 16.9456 9.91093 17.0138C9.88729 16.9665 9.82706 16.8748 9.78252 16.8065L9.1319 15.836H8.78065V17.672H9.14265V16.8641C9.14265 16.7617 9.13748 16.5311 9.13748 16.4629C9.16094 16.5101 9.22158 16.6019 9.26587 16.6703L9.93997 17.672H10.2677V15.836H9.90577V16.6126ZM11.314 15.8362H10.7397V17.6722H11.2875C11.7596 17.6722 12.2266 17.3992 12.2266 16.7542C12.2266 16.0827 11.8384 15.8362 11.314 15.8362ZM11.2875 17.3155H11.1068V16.193H11.3009C11.6891 16.193 11.8491 16.3791 11.8491 16.7542C11.8491 17.0899 11.6732 17.3155 11.2875 17.3155ZM13.362 16.1719C13.5272 16.1719 13.6322 16.2455 13.6978 16.3713L14.0387 16.2141C13.9232 15.9755 13.7133 15.8075 13.3672 15.8075C12.8877 15.8075 12.5518 16.1956 12.5518 16.7542C12.5518 17.3336 12.8742 17.7006 13.354 17.7006C13.6872 17.7006 13.9075 17.5459 14.0333 17.2863L13.724 17.1026C13.627 17.2655 13.5297 17.3362 13.3646 17.3362C13.0893 17.3362 12.9293 17.0843 12.9293 16.7542C12.9291 16.4135 13.0869 16.1719 13.362 16.1719ZM14.7237 15.8362H14.3566V17.6722H15.46V17.31H14.7237V15.8362ZM16.4273 15.8075C15.9261 15.8075 15.6299 16.1956 15.6299 16.7542C15.6299 17.3128 15.9261 17.7006 16.4273 17.7006C16.928 17.7006 17.2244 17.3128 17.2244 16.7542C17.2244 16.1956 16.928 15.8075 16.4273 15.8075ZM16.4273 17.3364C16.1306 17.3364 16.0076 17.082 16.0076 16.7544C16.0076 16.4266 16.1306 16.1721 16.4273 16.1721C16.7232 16.1721 16.8465 16.4266 16.8465 16.7544C16.8465 17.082 16.7232 17.3364 16.4273 17.3364ZM18.7059 16.8671C18.7059 17.1607 18.562 17.3418 18.3286 17.3418C18.0948 17.3418 17.9535 17.1555 17.9535 16.8619V15.8362H17.5864V16.8671C17.5864 17.4018 17.8854 17.7008 18.3286 17.7008C18.7954 17.7008 19.0733 17.3939 19.0733 16.862V15.8362H18.7059V16.8671ZM20.1064 15.8362H19.5323V17.6722H20.0801C20.5524 17.6722 21.019 17.3992 21.019 16.7542C21.019 16.0827 20.6309 15.8362 20.1064 15.8362ZM20.0801 17.3155H19.8992V16.193H20.0935C20.4812 16.193 20.6413 16.3791 20.6413 16.7542C20.6413 17.0899 20.4655 17.3155 20.0801 17.3155Z"
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
export class SiSoundcloudIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
