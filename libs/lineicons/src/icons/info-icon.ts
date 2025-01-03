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
  selector: 'svg[si-info-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.3144 6.18984C12.7562 6.18984 13.1144 5.83167 13.1144 5.38984C13.1144 4.94802 12.7562 4.58984 12.3144 4.58984C11.8726 4.58984 11.5134 4.94802 11.5134 5.38984C11.5134 5.83167 11.8716 6.18984 12.3134 6.18984H12.3144Z"
      fill="#323544"
    />
    <svg:path
      d="M11.5625 18.8896C11.5625 19.3039 11.8983 19.6396 12.3125 19.6396C12.7267 19.6396 13.0625 19.3039 13.0625 18.8896L13.0625 8.39014C13.0625 7.97592 12.7267 7.64014 12.3125 7.64014L10.8125 7.64014C10.3983 7.64014 10.0625 7.97592 10.0625 8.39014C10.0625 8.80435 10.3983 9.14014 10.8125 9.14014H11.5625L11.5625 18.8896Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiInfoIcon implements OnInit {
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