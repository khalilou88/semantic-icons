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
  selector: 'svg[si-xmark-circle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.78362 8.78412C8.49073 9.07702 8.49073 9.55189 8.78362 9.84478L10.9388 12L8.78362 14.1552C8.49073 14.4481 8.49073 14.923 8.78362 15.2159C9.07652 15.5088 9.55139 15.5088 9.84428 15.2159L11.9995 13.0607L14.1546 15.2158C14.4475 15.5087 14.9224 15.5087 15.2153 15.2158C15.5082 14.9229 15.5082 14.448 15.2153 14.1551L13.0602 12L15.2153 9.84485C15.5082 9.55196 15.5082 9.07708 15.2153 8.78419C14.9224 8.4913 14.4475 8.4913 14.1546 8.78419L11.9995 10.9393L9.84428 8.78412C9.55139 8.49123 9.07652 8.49123 8.78362 8.78412Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiXmarkCircleIcon implements OnInit {
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