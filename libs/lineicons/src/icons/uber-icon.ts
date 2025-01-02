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
  selector: 'svg[si-uber-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2.98845 12.7189V8.63672H2V12.7702C2 14.3235 3.09114 15.3505 4.50321 15.3505C5.19641 15.3505 5.79974 15.0809 6.24904 14.6187V15.2349H7.22465V8.63672H6.2362V12.7189C6.2362 13.7715 5.53017 14.4775 4.61874 14.4775C3.69448 14.4647 2.98845 13.7843 2.98845 12.7189ZM8.20026 15.2478H9.13736V14.6444C9.57381 15.0937 10.19 15.3633 10.8575 15.3633C12.2696 15.3633 13.3864 14.2465 13.3864 12.8472C13.3864 11.448 12.2696 10.3312 10.8575 10.3312C10.19 10.3312 9.58665 10.6008 9.15019 11.0501V8.63672H8.20026V15.2478ZM9.13736 12.8472C9.13736 11.9101 9.8819 11.1784 10.7933 11.1784C11.7047 11.1784 12.4493 11.9101 12.4493 12.8472C12.4493 13.7715 11.7047 14.5161 10.7933 14.5161C9.86906 14.5161 9.13736 13.7715 9.13736 12.8472ZM13.9512 12.8344C13.9512 14.2721 15.068 15.3505 16.5058 15.3505C17.3787 15.3505 18.0976 14.9653 18.5854 14.3235L17.8922 13.81C17.5327 14.285 17.0578 14.5161 16.5058 14.5161C15.697 14.5161 15.0424 13.9256 14.914 13.1425H18.8293V12.8344C18.8293 11.3967 17.8151 10.3312 16.4288 10.3312C15.0167 10.3312 13.9512 11.4737 13.9512 12.8344ZM16.4031 11.1656C17.1091 11.1656 17.6996 11.6534 17.8665 12.398H14.9268C15.1065 11.6534 15.697 11.1656 16.4031 11.1656ZM22 11.2811V10.3954H21.6662C21.1399 10.3954 20.7548 10.6393 20.5109 11.0244V10.4339H19.5866V15.2478H20.5366V12.5006C20.5366 11.7561 20.9859 11.2683 21.6149 11.2683H22V11.2811Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiUberIcon implements OnInit {
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
