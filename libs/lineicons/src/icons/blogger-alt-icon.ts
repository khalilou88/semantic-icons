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
  selector: 'svg[si-blogger-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15.1043 14.2745C15.5376 14.2745 15.8986 14.443 16.1874 14.78C16.4762 15.0687 16.6206 15.4297 16.6206 15.8629C16.6206 16.2962 16.4761 16.6572 16.1872 16.946C15.8985 17.2348 15.5376 17.3792 15.1043 17.3792H8.82281C8.38947 17.3792 8.02845 17.2347 7.73976 16.9458C7.45086 16.6571 7.30641 16.2962 7.30641 15.8629C7.30641 15.4297 7.45086 15.0687 7.73976 14.7799C8.02855 14.4429 8.38957 14.2745 8.82281 14.2745H15.1043ZM8.82281 9.65363C8.38947 9.65363 8.02845 9.50918 7.73976 9.22028C7.45086 8.93149 7.30641 8.57047 7.30641 8.13723C7.30641 7.70409 7.45086 7.34312 7.73976 7.05432C8.02855 6.76542 8.38957 6.62098 8.82281 6.62098H12.866C13.2993 6.62098 13.6604 6.76542 13.9491 7.05432C14.238 7.34312 14.3824 7.70409 14.3824 8.13723C14.3824 8.57057 14.238 8.93159 13.9491 9.22028C13.6603 9.50918 13.2992 9.65363 12.866 9.65363H8.82281ZM18.1367 9.65363V6.62098C18.1367 5.36939 17.6795 4.28634 16.765 3.3718C15.8504 2.45727 14.7673 2 13.5159 2H7.37864C6.12716 2 5.04415 2.45727 4.12961 3.3718C3.21508 4.28634 2.75781 5.36939 2.75781 6.62098V17.379C2.75781 18.6305 3.21508 19.7135 4.12961 20.628C5.04415 21.5427 6.12716 22 7.37864 22H16.6206C17.8721 22 18.9551 21.5427 19.8696 20.628C20.7842 19.7135 21.2416 18.6305 21.2416 17.379V12.7582C21.2416 12.3249 21.0971 11.9638 20.8082 11.675C20.5194 11.3862 20.1585 11.2418 19.7253 11.2418C19.2921 11.2418 18.907 11.0974 18.57 10.8086C18.2811 10.4717 18.1367 10.0869 18.1367 9.65363Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBloggerAltIcon implements OnInit {
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
