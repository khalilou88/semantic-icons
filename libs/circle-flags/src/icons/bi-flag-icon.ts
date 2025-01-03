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
  selector: 'svg[si-bi-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#eee"
        d="M0 0h47.2l207.5 30L464.8 0H512v47.2L477.4 256 512 464.8V512h-47.2l-209.1-35.8L47.2 512H0v-47.2l32.8-202.7L0 47.2z"
      />
      <svg:path
        fill="#d80027"
        d="M47.2 0 256 208.8 464.8 0H47.2zM256 303.2 47.2 512h417.6L256 303.2z"
      />
      <svg:path
        fill="#6da544"
        d="M0 47.2v417.6L208.8 256 0 47.2zm512 0L303.2 256 512 464.8V47.2z"
      />
      <svg:circle cx="256" cy="256" r="111.3" fill="#eee" />
      <svg:path
        fill="#d80027"
        d="m256 178 9.6 16.8H285l-9.6 16.7 9.6 16.7h-19.3l-9.6 16.7-9.6-16.7H227l9.6-16.7-9.6-16.7h19.3zm-49 78 9.6 16.7H236l-9.6 16.7 9.6 16.7h-19.3l-9.6 16.7-9.6-16.7H178l9.6-16.7-9.6-16.7h19.3zm98 0 9.6 16.7H334l-9.6 16.7 9.6 16.7h-19.3l-9.6 16.7-9.6-16.7H276l9.6-16.7-9.6-16.7h19.3z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBiFlagIcon implements OnInit {
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