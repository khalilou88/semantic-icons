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
  selector: 'svg[si-glasses-2-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.03118 10.9764C3.0702 9.49537 3.15802 8.30899 3.35562 7.32112C3.68725 5.66312 4.30954 4.66225 5.55495 3.83206L4.44563 2.16791C2.69075 3.33771 1.8129 4.83684 1.39446 6.92885C0.999908 8.90143 0.999948 11.4836 1 14.8799V14.8799L1 14.9994C1 14.9996 1 14.9998 1 15C1 17.7614 3.23858 20 6 20C8.76143 20 11 17.7614 11 15C11 14.7261 10.9779 14.4568 10.9352 14.1941C11.2657 14.0687 11.6242 14 12 14C12.3758 14 12.7344 14.0687 13.0648 14.1941C13.0221 14.4568 13 14.7261 13 15C13 17.7614 15.2386 20 18 20C20.7614 20 23 17.7614 23 15V14.8799C23.0001 11.4836 23.0001 8.90145 22.6056 6.92888C22.1873 4.83693 21.3096 3.33779 19.555 2.16796L18.4456 3.83201C19.6907 4.66217 20.3129 5.66303 20.6445 7.32108C20.842 8.30896 20.9298 9.49537 20.9688 10.9764C20.1386 10.3628 19.1117 9.99998 18 9.99998C16.2216 9.99998 14.6617 10.9281 13.7755 12.3247C13.2232 12.1149 12.6245 12 12 12C11.3755 12 10.7768 12.1149 10.2245 12.3247C9.33834 10.9281 7.77841 9.99998 6 9.99998C4.88835 9.99998 3.86143 10.3628 3.03118 10.9764Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGlasses2FillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
