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
  selector: 'svg[si-bento-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Bento</svg:title>
    <svg:path
      d="M0 10.435c0-.256.051-.512.153-.758.233-.56.854-1.046 2.095-2.018l6.206-4.856c1.241-.972 1.862-1.458 2.577-1.64.63-.16 1.308-.16 1.938 0 .715.183 1.336.668 2.577 1.64l6.206 4.856c1.241.972 1.862 1.458 2.095 2.018.102.246.153.502.153.758v3.13c0 .256-.051.512-.153.758-.233.56-.854 1.046-2.095 2.017l-6.206 4.857c-1.241.972-1.862 1.457-2.577 1.64-.63.16-1.308.16-1.938 0-.715-.183-1.336-.668-2.577-1.64L2.248 16.34C1.007 15.37.386 14.883.153 14.323A1.971 1.971 0 0 1 0 13.565v-3.13Zm9.34-3.238.887.694c.62.485.93.728 1.289.82.315.08.653.08.968 0 .358-.092.668-.335 1.29-.82l.886-.694c.62-.486.93-.729 1.047-1.009a.975.975 0 0 0 0-.758c-.116-.28-.427-.523-1.047-1.008l-.887-.694c-.62-.486-.93-.729-1.289-.82a1.984 1.984 0 0 0-.968 0c-.358.091-.668.334-1.29.82l-.886.694c-.62.485-.93.728-1.047 1.008a.975.975 0 0 0 0 .758c.116.28.427.523 1.047 1.009Zm5.91 4.625.887.694c.62.486.931.729 1.29.82.314.08.653.08.968 0 .358-.091.668-.334 1.288-.82l.887-.694c.62-.485.931-.728 1.047-1.008a.976.976 0 0 0 0-.758c-.116-.28-.426-.523-1.047-1.009l-.887-.694c-.62-.485-.93-.728-1.288-.82a1.984 1.984 0 0 0-.969 0c-.358.092-.668.335-1.289.82l-.886.694c-.621.486-.931.729-1.047 1.009a.975.975 0 0 0 0 .758c.116.28.426.523 1.047 1.008Zm-11.82 0 6.797 5.32c.62.486.93.728 1.289.82.315.08.653.08.968 0 .358-.092.668-.334 1.29-.82l.886-.694c.62-.486.93-.729 1.047-1.009a.974.974 0 0 0 0-.758c-.116-.28-.427-.523-1.047-1.008l-6.797-5.32c-.62-.485-.931-.728-1.29-.82a1.984 1.984 0 0 0-.968 0c-.358.092-.668.335-1.288.82l-.887.694c-.62.486-.931.729-1.047 1.009a.975.975 0 0 0 0 .758c.116.28.426.523 1.047 1.008Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBentoIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#768CFF');
  }
}
