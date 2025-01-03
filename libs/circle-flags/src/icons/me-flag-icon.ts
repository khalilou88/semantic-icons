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
  selector: 'svg[si-me-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#ffda44"
        d="M0 0h512v44.5l-43.6 209.7L512 467.5V512H0v-44.5l46.6-212L0 44.5z"
      />
      <svg:path fill="#a2001d" d="M0 44.5h512v423H0z" />
      <svg:path
        fill="#ffda44"
        d="M200.3 189.2h111.4v-44.5l-22.3 11.1-33.4-33.4-33.4 33.4-22.3-11.1zM356.2 256h-55.7a25.5 25.5 0 0 0 3.5-12.8 25.7 25.7 0 0 0-48.3-12.1 25.7 25.7 0 1 0-45 24.9h-54.9c0 17 14.9 30.8 31.9 30.8h-1c0 14 9.2 25.8 22 29.6l-25 25 23.6 23.6 33.5-33.5c1.3.5 2.6.9 4 1.1l-20.2 45.7a83.2 83.2 0 0 0 31.4 6.2 83.2 83.2 0 0 0 31.4-6.2l-20.2-45.7a25.4 25.4 0 0 0 4-1.1l33.5 33.5 23.6-23.6-25-25a30.8 30.8 0 0 0 22-29.6h-1c17 0 31.9-13.8 31.9-30.8z"
      />
      <svg:path
        fill="#6da544"
        d="m256 272.7-36.2 16.7v33.4L256 345l36.2-22.2v-33.4z"
      />
      <svg:path fill="#0052b4" d="M219.8 256h72.4v44.5h-72.4z" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiMeFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '512');
    this.render.setAttribute(svg, 'height', '512');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}