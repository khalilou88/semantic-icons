import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-gauge-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.5 14.3105C20.5 13.1943 20.2801 12.089 19.853 11.0577C19.8068 10.9462 19.7583 10.8358 19.7075 10.7266L18.6527 11.3356C18.294 11.5427 17.8353 11.4198 17.6282 11.061C17.4211 10.7023 17.544 10.2436 17.9027 10.0365L18.9575 9.42755C18.6757 9.02601 18.3589 8.64867 18.0104 8.30014C17.2211 7.51084 16.2841 6.88474 15.2528 6.45757C14.4532 6.12638 13.6092 5.91981 12.75 5.8437V7.06055C12.75 7.47476 12.4142 7.81055 12 7.81055C11.5858 7.81055 11.25 7.47476 11.25 7.06055V5.8437C10.3908 5.91981 9.54676 6.12638 8.74719 6.45757C7.71592 6.88474 6.77889 7.51084 5.98959 8.30014C5.64116 8.64857 5.32453 9.0258 5.04277 9.42721L6.09729 10.036C6.45601 10.2431 6.57891 10.7018 6.3718 11.0605C6.1647 11.4193 5.70601 11.5422 5.34729 11.3351L4.2927 10.7262C4.24184 10.8356 4.19327 10.9461 4.14702 11.0577C3.71986 12.089 3.5 13.1943 3.5 14.3105C3.5 15.4268 3.71986 16.5321 4.14702 17.5634C4.1932 17.6748 4.24169 17.7852 4.29247 17.8944L5.34533 17.2865C5.70405 17.0794 6.16274 17.2023 6.36985 17.561C6.57696 17.9198 6.45405 18.3784 6.09533 18.5856L4.36328 19.5856C4.00456 19.7927 3.54587 19.6698 3.33876 19.311C3.33162 19.2987 3.32488 19.2862 3.31852 19.2736C3.10938 18.9078 2.92314 18.5283 2.76121 18.1374C2.25866 16.9241 2 15.6238 2 14.3105C2 12.9973 2.25866 11.697 2.76121 10.4837C3.26375 9.27046 4.00035 8.16806 4.92893 7.23948C5.85752 6.31089 6.95991 5.5743 8.17317 5.07175C9.38642 4.5692 10.6868 4.31055 12 4.31055C13.3132 4.31055 14.6136 4.5692 15.8268 5.07175C17.0401 5.5743 18.1425 6.31089 19.0711 7.23948C19.9997 8.16807 20.7362 9.27046 21.2388 10.4837C21.7413 11.697 22 12.9973 22 14.3105C22 15.6238 21.7413 16.9241 21.2388 18.1374C21.071 18.5425 20.8771 18.9352 20.6587 19.3133C20.4515 19.6719 19.9927 19.7947 19.6341 19.5875C19.6165 19.5773 19.5995 19.5665 19.5831 19.5552L17.9027 18.5851C17.544 18.378 17.4211 17.9193 17.6282 17.5605C17.8353 17.2018 18.294 17.0789 18.6527 17.286L19.7073 17.8949C19.7582 17.7855 19.8067 17.675 19.853 17.5634C20.2801 16.5321 20.5 15.4268 20.5 14.3105Z"
      fill="#323544"
    />
    <svg:path
      d="M12.0003 10.186L12.6636 9.83595C12.5338 9.58997 12.2785 9.43604 12.0003 9.43604C11.7222 9.43604 11.4669 9.58997 11.337 9.83595L12.0003 10.186Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.0003 10.186C11.337 9.83595 11.3371 9.83589 11.337 9.83595L11.3356 9.83873L11.3319 9.84572L11.3182 9.87189L11.2673 9.96985C11.2237 10.0542 11.1617 10.175 11.0874 10.3226C10.9391 10.6172 10.7407 11.0205 10.5416 11.4527C10.3435 11.8828 10.1399 12.3519 9.98425 12.7757C9.84213 13.1627 9.69531 13.6255 9.69531 13.991C9.69531 15.2641 10.7273 16.296 12.0003 16.296C13.2733 16.296 14.3053 15.2641 14.3053 13.991C14.3053 13.6255 14.1585 13.1627 14.0164 12.7757C13.8608 12.3519 13.6571 11.8828 13.459 11.4527C13.2599 11.0205 13.0615 10.6172 12.9132 10.3226C12.8389 10.175 12.7769 10.0542 12.7334 9.96985L12.6825 9.87189L12.6687 9.84572L12.6651 9.83873L12.6636 9.83595C12.6636 9.83589 12.6636 9.83595 12.0003 10.186ZM11.904 12.0803C11.9362 12.0105 11.9684 11.9414 12.0003 11.8734C12.0323 11.9414 12.0645 12.0105 12.0966 12.0803C12.2872 12.4941 12.4724 12.9225 12.6083 13.2927C12.6764 13.478 12.7285 13.6391 12.7629 13.7705C12.7799 13.8358 12.7912 13.8885 12.7979 13.9293C12.8013 13.9494 12.8032 13.9648 12.8043 13.976C12.8053 13.9863 12.8053 13.9912 12.8053 13.9912C12.8053 14.4357 12.4449 14.796 12.0003 14.796C11.5558 14.796 11.1954 14.4357 11.1953 13.9912C11.1953 13.9912 11.1954 13.9863 11.1964 13.976C11.1974 13.9648 11.1994 13.9494 11.2027 13.9293C11.2095 13.8885 11.2207 13.8358 11.2378 13.7705C11.2721 13.6391 11.3243 13.478 11.3923 13.2927C11.5283 12.9225 11.7134 12.4941 11.904 12.0803Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiGauge1Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}