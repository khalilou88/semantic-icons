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
  selector: 'svg[si-facebook-square-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.625 3H6.375C4.51105 3 3 4.51105 3 6.375V17.625C3 19.4889 4.51105 21 6.375 21H17.625C19.4889 21 21 19.4889 21 17.625V6.375C21 4.51105 19.4889 3 17.625 3ZM17.1679 12.6939H15.4839V18.9276H12.6703V12.6939H11.5784V10.5932H12.6703V9.255C12.6703 7.50237 13.3997 6.46026 15.465 6.46026H17.5587V8.55158H16.3413C15.5361 8.55158 15.4839 8.85237 15.4839 9.41132L15.4816 10.5908H17.3953L17.1655 12.6916L17.1679 12.6939Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiFacebookSquareIcon implements OnInit {
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
