import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-bing-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.0731 8.30711C11.7045 8.34994 11.4234 8.64931 11.3972 9.02685C11.386 9.18953 11.3895 9.20056 11.7582 10.1494C12.5971 12.3082 12.8004 12.8278 12.8345 12.9009C12.9174 13.078 13.0338 13.2446 13.1793 13.3941C13.2909 13.5089 13.3646 13.5706 13.4891 13.6537C13.708 13.7999 13.8166 13.8403 14.6682 14.0925C15.4978 14.3381 15.9511 14.5014 16.3417 14.6952C16.8476 14.9464 17.2007 15.232 17.424 15.571C17.5842 15.8142 17.7261 16.2503 17.7878 16.6893C17.8119 16.8609 17.8121 17.2402 17.7881 17.3954C17.736 17.7321 17.632 18.0142 17.4728 18.2503C17.3882 18.3759 17.4176 18.3549 17.5407 18.2019C17.889 17.7688 18.2437 17.0287 18.4248 16.3576C18.6439 15.5454 18.6737 14.6732 18.5105 13.8476C18.1929 12.24 17.178 10.8527 15.7487 10.072C15.6589 10.023 15.3168 9.84369 14.853 9.60257C14.7827 9.56597 14.6867 9.51588 14.6398 9.49125C14.5929 9.4666 14.4969 9.4165 14.4266 9.37992C14.3562 9.34334 14.1536 9.23779 13.9764 9.14539C13.7992 9.05297 13.6009 8.94957 13.5357 8.9156C13.3371 8.81205 13.2038 8.74248 13.1045 8.69047C12.6449 8.4499 12.4504 8.35265 12.395 8.33578C12.3368 8.31808 12.1891 8.29537 12.152 8.29842C12.1442 8.29906 12.1087 8.30297 12.0731 8.30711Z"
      fill="#323544"
    />
    <svg:path
      d="M13.0749 16.3661C13.0495 16.3812 13.0137 16.403 12.9955 16.4146C12.9772 16.4262 12.9367 16.4514 12.9055 16.4706C12.7907 16.541 12.4854 16.7291 12.2231 16.8911C12.0507 16.9975 12.0251 17.0133 11.8061 17.1493C11.7279 17.1978 11.6447 17.2489 11.6213 17.2629C11.5978 17.2769 11.4976 17.3386 11.3985 17.4C11.2995 17.4615 11.1268 17.5681 11.0147 17.637C10.9026 17.7059 10.7022 17.8295 10.5693 17.9118C10.4364 17.994 10.2615 18.1018 10.1807 18.1514C10.0999 18.2009 10.0253 18.2487 10.0149 18.2577C9.99936 18.271 9.28077 18.7161 8.9202 18.9358C8.64636 19.1026 8.32956 19.2142 8.00526 19.258C7.85429 19.2784 7.56858 19.2785 7.41804 19.2581C7.00982 19.203 6.63375 19.0508 6.31168 18.8103C6.18535 18.716 5.9475 18.4783 5.85658 18.3555C5.6423 18.0662 5.50369 17.756 5.4319 17.4049C5.41538 17.3241 5.39975 17.2558 5.39718 17.2532C5.39047 17.2464 5.40259 17.3685 5.42446 17.5281C5.44719 17.694 5.49564 17.9341 5.54782 18.1394C5.95164 19.7281 7.1007 21.0203 8.65626 21.6352C9.10419 21.8121 9.5562 21.9236 10.048 21.9783C10.2328 21.999 10.7559 22.0072 10.9488 21.9926C11.8333 21.9256 12.6035 21.6652 13.3935 21.1659C13.4639 21.1214 13.5961 21.0381 13.6873 20.9806C13.7786 20.9232 13.8937 20.8502 13.9432 20.8184C13.9927 20.7866 14.0524 20.7491 14.0759 20.735C14.0994 20.7209 14.1463 20.6914 14.1802 20.6694C14.214 20.6475 14.359 20.5558 14.5024 20.4656L15.9572 19.5468C16.5953 19.1458 16.7855 19.005 17.082 18.7146C17.2056 18.5936 17.3919 18.387 17.4012 18.3607C17.403 18.3554 17.4362 18.3043 17.4747 18.2472C17.6316 18.0151 17.7362 17.7307 17.7881 17.3954C17.8121 17.2402 17.8119 16.8609 17.7878 16.6893C17.7411 16.3575 17.6351 15.9812 17.5208 15.7416C17.3334 15.3487 16.9341 14.9916 16.3605 14.7041C16.2021 14.6247 16.0386 14.552 16.0203 14.553C16.0116 14.5534 15.4779 14.8797 14.8341 15.2781C14.1904 15.6764 13.6316 16.0222 13.5926 16.0464C13.5535 16.0707 13.4863 16.1118 13.4433 16.1376L13.0749 16.3661Z"
      fill="#323544"
    />
    <svg:path
      d="M5.39028 17.2295L5.42619 17.3906C5.53848 17.8944 5.73303 18.2575 6.07125 18.5949C6.23034 18.7535 6.35199 18.8492 6.52438 18.9512C6.88918 19.1671 7.28179 19.2736 7.71183 19.2734C8.16224 19.2732 8.55187 19.1608 8.95338 18.9154C9.02113 18.874 9.28662 18.7106 9.54334 18.5522L10.0101 18.2642L10.01 8.66908C10.0099 6.74783 10.0063 5.60683 10.0003 5.51732C9.96199 4.9548 9.72674 4.43767 9.33115 4.04652C9.20974 3.92648 9.10601 3.8463 8.79699 3.63365C8.64322 3.52782 8.36174 3.33396 8.17148 3.20285C7.98123 3.07173 7.66777 2.85573 7.4749 2.72284C7.28203 2.58996 7.00695 2.40036 6.86361 2.30153C6.56498 2.09564 6.54161 2.08132 6.45134 2.04902C6.33393 2.00701 6.2095 1.99158 6.0912 2.00436C5.74641 2.0416 5.4704 2.29054 5.39866 2.62899C5.38749 2.68164 5.38544 3.38241 5.3853 7.18586L5.38513 11.6805H5.38477L5.39028 17.2295Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBingIcon implements OnInit {
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
