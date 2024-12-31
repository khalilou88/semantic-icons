import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mysql-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.4221 17.3372C19.3341 17.3069 18.4901 17.4184 17.7827 17.716C17.579 17.7978 17.2522 17.7978 17.2253 18.0541C17.3342 18.1617 17.3473 18.3378 17.4427 18.4869C17.6058 18.7575 17.8918 19.122 18.1501 19.3111L19.0207 19.9332C19.5512 20.2575 20.1498 20.4469 20.6666 20.7714C20.966 20.9608 21.2652 21.2041 21.5646 21.4071C21.717 21.5153 21.8094 21.6914 22 21.7587V21.7178C21.9049 21.5965 21.8774 21.4208 21.7826 21.285L21.374 20.8932C20.9797 20.366 20.4897 19.906 19.9592 19.5278C19.5238 19.2302 18.5718 18.8247 18.395 18.3248L18.3681 18.2945C18.6669 18.2641 19.0207 18.159 19.3067 18.0778C19.7695 17.9566 20.1909 17.9833 20.6666 17.8617L21.32 17.6723V17.5511C21.0752 17.3078 20.8983 16.9832 20.6401 16.7536C19.9464 16.1587 19.1841 15.5772 18.395 15.0906C17.9733 14.8203 17.429 14.6442 16.9801 14.4148C16.8164 14.3336 16.5447 14.293 16.4496 14.1578C16.2041 13.8609 16.0685 13.4684 15.8916 13.1166L14.7762 10.7642C14.5314 10.237 14.3813 9.7097 14.0825 9.22305C12.6811 6.92458 11.1571 5.53219 8.81722 4.16644C8.3141 3.8825 7.71557 3.76038 7.07918 3.6119L6.05895 3.55735C5.84091 3.46281 5.6235 3.20584 5.43294 3.08403C4.65753 2.59737 2.65758 1.54283 2.08586 2.93251C1.71844 3.81129 2.63014 4.67643 2.93963 5.12278C3.17137 5.43371 3.47018 5.7852 3.63393 6.13673C3.7254 6.36642 3.75589 6.61006 3.85133 6.85338C4.06874 7.44823 4.27303 8.11093 4.55874 8.66549C4.7112 8.94941 4.87128 9.24728 5.06186 9.50394C5.17071 9.65547 5.3613 9.72032 5.40184 9.96365C5.21128 10.2343 5.19815 10.6394 5.0893 10.9779C4.59929 12.5057 4.78987 14.3984 5.48357 15.5233C5.70158 15.8612 6.21535 16.6051 6.9124 16.3209C7.52466 16.0775 7.38808 15.3069 7.56492 14.6309C7.60608 14.4687 7.57864 14.3606 7.66006 14.2521V14.2824L8.21806 15.4045C8.63975 16.0669 9.37459 16.7566 9.98657 17.2166C10.3128 17.4599 10.5714 17.8793 10.9794 18.0278V17.9869H10.9525C10.8708 17.8657 10.7483 17.8111 10.6394 17.7166C10.3945 17.4733 10.1226 17.1757 9.932 16.9054C9.36087 16.1484 8.85776 15.3099 8.40862 14.4448C8.19061 14.0257 8.00005 13.566 7.8238 13.147C7.74148 12.9845 7.74148 12.7409 7.6058 12.6603C7.40148 12.9572 7.10268 13.2148 6.95235 13.5797C6.69377 14.1609 6.66696 14.8775 6.57182 15.6211C6.51693 15.6348 6.54131 15.6211 6.51693 15.6515C6.08211 15.5436 5.93208 15.0969 5.76896 14.7187C5.36099 13.7587 5.29267 12.2176 5.64638 11.1088C5.74152 10.8249 6.15012 9.93242 5.98697 9.66213C5.90464 9.40518 5.63328 9.25668 5.48326 9.05365C5.30639 8.7967 5.11643 8.47246 4.99386 8.18851C4.6676 7.43094 4.50447 6.59309 4.15046 5.8358C3.98671 5.48431 3.70131 5.11915 3.46988 4.79492C3.21131 4.42977 2.92622 4.1728 2.72192 3.74038C2.65392 3.58887 2.55879 3.34827 2.66765 3.18585C2.69448 3.07766 2.74936 3.03433 2.85761 3.01009C3.03446 2.85858 3.53818 3.0507 3.71503 3.1313C4.21815 3.33433 4.63985 3.52342 5.06155 3.80705C5.25213 3.9422 5.45641 4.19917 5.70126 4.26704H5.98728C6.4227 4.36159 6.91209 4.29735 7.31978 4.41856C8.0409 4.64886 8.69373 4.98644 9.27917 5.35188C11.0611 6.47397 12.5308 8.06943 13.5236 9.97609C13.6867 10.287 13.7547 10.5709 13.9048 10.8955C14.1908 11.5582 14.5445 12.2339 14.8296 12.8833C15.1156 13.5188 15.3876 14.1682 15.7955 14.6954C15.9998 14.9794 16.8158 15.1278 17.1829 15.2766C17.4552 15.3978 17.8766 15.5069 18.1221 15.6554C18.5843 15.9393 19.0469 16.2639 19.482 16.5748C19.6994 16.7366 20.38 17.0748 20.4205 17.3445L20.4221 17.3372ZM6.54834 5.58823C6.36037 5.58658 6.173 5.6093 5.99094 5.65581V5.68612H6.01779C6.12662 5.90247 6.31721 6.05128 6.4532 6.24065L6.76635 6.88973L6.79316 6.85944C6.98376 6.7243 7.07918 6.50792 7.07918 6.18367C6.99748 6.08916 6.98407 5.9943 6.91606 5.89975C6.83433 5.76461 6.65749 5.69672 6.54834 5.58886V5.58823Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgMysqlIcon {
  readonly class = input<string>('');
}
