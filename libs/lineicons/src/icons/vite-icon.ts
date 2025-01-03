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
  selector: 'svg[si-vite-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.52508 4.63075L3.39263 3.71547C2.9077 3.62913 2.47942 3.84119 2.22936 4.18313C1.97378 4.53404 1.90608 5.02173 2.1589 5.46313L11.0602 21.0429C11.5161 21.8407 12.6683 21.8352 13.1173 21.0346L21.846 5.45692C22.3364 4.5824 21.5835 3.54002 20.604 3.71824L16.0297 4.53059L15.8238 5.28491L20.7297 4.41385C21.1248 4.3427 21.4232 4.762 21.2284 5.11084L12.4998 20.6885C12.3934 20.8785 12.1876 20.9572 11.9997 20.9227C11.8698 20.8992 11.7482 20.8225 11.6736 20.6919L2.77231 5.11222C2.57337 4.76407 2.87178 4.34131 3.26829 4.41177L8.40074 5.32774L8.47534 5.34087L8.52508 4.63075Z"
      fill="#323544"
    />
    <svg:path
      d="M15.0971 5.26074L15.2588 4.66736L14.6592 4.77374L15.0971 5.26074Z"
      fill="#323544"
    />
    <svg:path
      d="M9.21724 4.75371L9.72979 4.8442L9.18822 5.2711L9.21724 4.75371Z"
      fill="#323544"
    />
    <svg:path
      d="M15.5485 2.36687L9.4485 3.62774C9.39991 3.6378 9.35563 3.66464 9.3228 3.7041C9.29034 3.74356 9.2711 3.79338 9.26791 3.84567L8.89302 10.5307C8.89075 10.5674 8.8967 10.604 8.91063 10.6378C8.92421 10.6716 8.94536 10.7014 8.97189 10.7252C8.99841 10.7489 9.02996 10.7657 9.0637 10.7744C9.09744 10.783 9.13281 10.7833 9.1669 10.775L10.8651 10.3615C11.0242 10.3229 11.1674 10.4705 11.135 10.639L10.6303 13.2454C10.5965 13.4208 10.7524 13.5709 10.915 13.5187L11.9638 13.1826C12.1264 13.1306 12.2827 13.2809 12.2483 13.4565L11.4466 17.5505C11.3963 17.8066 11.7192 17.9463 11.854 17.7267L11.944 17.5801L16.9144 7.11608C16.9977 6.94084 16.8541 6.7411 16.6717 6.77823L14.9236 7.13416C14.7592 7.16756 14.6197 7.00615 14.6658 6.83671L15.8068 2.66428C15.8532 2.49434 15.713 2.33289 15.5485 2.36687Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiViteIcon implements OnInit {
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
