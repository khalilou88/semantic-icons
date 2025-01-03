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
  selector: 'svg[si-share-1-circle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.0793 2.44821C16.8648 2.23371 16.5422 2.16954 16.262 2.28563C15.9817 2.40171 15.799 2.67519 15.799 2.97854V5.53518C11.1868 5.91625 7.5625 9.78029 7.5625 14.4908C7.5625 15.1402 7.63151 15.7744 7.76287 16.386C7.8371 16.7317 8.14262 16.9785 8.49615 16.9785C8.84967 16.9785 9.1552 16.7317 9.22943 16.386C9.90335 13.248 12.5452 10.8406 15.799 10.5169V13.0056C15.799 13.3089 15.9817 13.5824 16.262 13.6985C16.5422 13.8146 16.8648 13.7504 17.0793 13.5359L22.0929 8.52239C22.2335 8.38173 22.3125 8.19097 22.3125 7.99206C22.3125 7.79314 22.2335 7.60238 22.0929 7.46173L17.0793 2.44821ZM17.299 6.25432V4.7892L20.5019 7.99206L17.299 11.1949V9.72976C17.299 9.31555 16.9632 8.97976 16.549 8.97976C13.563 8.97976 10.9179 10.4357 9.28391 12.6763C10.095 9.41837 13.0401 7.00432 16.549 7.00432C16.9632 7.00432 17.299 6.66854 17.299 6.25432Z"
      fill="#323544"
    />
    <svg:path
      d="M12.3125 2.22854C13.0158 2.22854 13.7022 2.30115 14.3645 2.43927C14.3215 2.61324 14.299 2.79408 14.299 2.9786V3.96192C13.6617 3.80934 12.9965 3.72854 12.3125 3.72854C7.61808 3.72854 3.8125 7.53412 3.8125 12.2285C3.8125 16.923 7.61808 20.7285 12.3125 20.7285C17.0069 20.7285 20.8125 16.923 20.8125 12.2285C20.8125 12.1284 20.8108 12.0286 20.8073 11.9293L22.1743 10.5623C22.2652 11.1042 22.3125 11.6608 22.3125 12.2285C22.3125 17.7514 17.8353 22.2285 12.3125 22.2285C6.78965 22.2285 2.3125 17.7514 2.3125 12.2285C2.3125 6.70569 6.78965 2.22854 12.3125 2.22854Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiShare1CircleIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '25');
    this.render.setAttribute(svg, 'height', '25');
    this.render.setAttribute(svg, 'viewBox', '0 0 25 25');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}