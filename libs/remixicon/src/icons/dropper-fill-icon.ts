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
  selector: 'svg[si-dropper-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15.5355 2.80744C17.0976 1.24534 19.6303 1.24534 21.1924 2.80744C22.7545 4.36953 22.7545 6.90219 21.1924 8.46429L18.3638 11.2929L18.7175 11.6466C19.108 12.0371 19.108 12.6703 18.7175 13.0608C18.327 13.4513 17.6938 13.4513 17.3033 13.0608L16.9498 12.7073L10.7351 18.922C10.1767 19.4804 9.46547 19.861 8.6911 20.0159L6.93694 20.3667C6.54976 20.4442 6.19416 20.6345 5.91496 20.9137L4.92894 21.8997C4.53841 22.2902 3.90525 22.2902 3.51472 21.8997L2.10051 20.4855C1.70999 20.095 1.70999 19.4618 2.10051 19.0713L3.08653 18.0852C3.36574 17.806 3.55605 17.4504 3.63348 17.0633L3.98431 15.3091C4.13919 14.5347 4.51981 13.8235 5.07821 13.2651L11.2929 7.05045L10.9393 6.69686C10.5488 6.30634 10.5488 5.67317 10.9393 5.28265C11.3299 4.89212 11.963 4.89212 12.3535 5.28265L12.7069 5.63604L15.5355 2.80744ZM12.7071 8.46466L6.49242 14.6794C6.21322 14.9586 6.02291 15.3142 5.94548 15.7013L5.59464 17.4555C5.43977 18.2299 5.05915 18.9411 4.50075 19.4995C5.05915 18.9411 5.77035 18.5604 6.54471 18.4056L8.29887 18.0547C8.68605 17.9773 9.04165 17.787 9.32085 17.5078L15.5355 11.2931L12.7071 8.46466Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDropperFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
