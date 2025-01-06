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
  selector: 'svg[si-firefox-browser-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.2827 8.26012C20.8473 7.213 19.9656 6.08244 19.2733 5.72516C19.7521 6.6637 20.1656 7.72752 20.2895 8.78174C19.1569 5.95869 17.2363 4.82021 15.6678 2.34173C15.4719 2.03155 15.2431 1.61425 15.1225 1.32928C12.8952 2.63386 11.972 4.91762 11.7347 6.37128C11.0465 6.41037 10.3724 6.58239 9.7497 6.87781C9.63641 6.93386 9.57928 7.07722 9.62296 7.19583C9.67063 7.33373 9.83148 7.40294 9.9644 7.34275C10.599 7.0433 11.2978 6.8858 11.9991 6.87856C13.8038 6.86599 15.517 7.86963 16.4149 9.43745C15.88 9.06171 14.9224 8.69063 13.9997 8.8511C17.6025 10.6522 16.6353 16.8547 11.6429 16.6205C9.62869 16.5384 7.69791 14.9706 7.51696 12.8904C7.51696 12.8904 7.97932 11.1676 10.8277 11.1676C11.1356 11.1676 12.0159 10.3084 12.0323 10.0592C12.0285 9.97778 10.2852 9.28436 9.60553 8.61473C9.30353 8.3172 9.01156 7.99714 8.65778 7.75909C8.42944 6.96033 8.41973 6.11491 8.62964 5.31111C7.6007 5.77968 6.7957 6.52028 6.21389 7.1742C5.81676 6.67125 5.84482 5.01215 5.86745 4.66575C4.9941 5.13081 4.22465 5.9396 3.6187 6.80337C2.59006 8.26122 1.99707 10.1738 1.99707 11.9845C1.99707 17.5158 6.46835 21.9997 12.0002 21.9997C16.9545 21.9997 21.0815 18.4032 21.8869 13.6792C22.128 11.8573 21.9935 9.97004 21.2827 8.26012Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFirefoxBrowserFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
