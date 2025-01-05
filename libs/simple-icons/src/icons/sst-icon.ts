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
  selector: 'svg[si-sst-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>SST</svg:title>
    <svg:path
      d="M22.68 7.205h-3.776a.263.263 0 0 1-.223-.403l1.666-2.664a.897.897 0 0 0-.76-1.372H4.092c-.54 0-1.04.29-1.31.758C2.09 4.734.758 7.054.23 7.974a1.688 1.688 0 0 0-.223.839L0 15.77a1.499 1.499 0 0 0 1.499 1.5h4.78a.082.082 0 0 1 .067.127l-1.648 2.43a.9.9 0 0 0 .745 1.406h14.542a2.07 2.07 0 0 0 1.81-1.068c.465-.842 1.201-2.008 1.656-2.831.36-.653.549-1.387.549-2.133V8.526c0-.73-.591-1.32-1.32-1.32zm-18.65-1.9a1.43 1.43 0 0 1 1.43-1.43h13.278a.339.339 0 0 1 .284.525l-1.744 2.67a.299.299 0 0 1-.25.135H9.363c-.514 0-.993.26-1.274.69-.833 1.278-2.342 3.882-2.347 3.923h-.187a1.456 1.456 0 0 1-1.526-1.455V5.306zM2.255 16.35a.521.521 0 0 1-.41-.843l1.606-2.055a1.664 1.664 0 0 1 1.308-.64l14.028-.049a.321.321 0 0 1 .275.49l-1.233 2.015c-.194.316-.538.51-.91.51H7.854a1 1 0 0 0-.905.572H2.256zm19.934 1.113c-.366.635-.975 1.532-1.33 2.15-.25.433-.71.7-1.21.7H6.075a.27.27 0 0 1-.221-.425l1.968-2.793a.936.936 0 0 1 .765-.396h13.16a.51.51 0 0 1 .442.764zm.795-2.451a.766.766 0 0 1-.766.765h-2.631a.49.49 0 0 1-.416-.75l1.086-1.746a.968.968 0 0 0-.822-1.48H7.782a.389.389 0 0 1-.329-.597c.43-.675.936-1.767 1.371-2.452a1.346 1.346 0 0 1 1.136-.624h12.274a.75.75 0 0 1 .75.75v6.134z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSstIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'E27152');
  }
}
