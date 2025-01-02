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
  selector: 'svg[si-arrow-right-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.0791 12.519C21.0744 12.7044 21.0013 12.8884 20.8599 13.0299L14.8639 19.0301C14.5711 19.3231 14.0962 19.3233 13.8032 19.0305C13.5103 18.7377 13.5101 18.2629 13.8029 17.9699L18.5233 13.2461L4.32813 13.2461C3.91391 13.2461 3.57813 12.9103 3.57812 12.4961C3.57812 12.0819 3.91391 11.7461 4.32812 11.7461L18.5158 11.7461L13.8029 7.03016C13.5101 6.73718 13.5102 6.2623 13.8032 5.9695C14.0962 5.6767 14.5711 5.67685 14.8639 5.96984L20.813 11.9228C20.976 12.0603 21.0795 12.2661 21.0795 12.4961C21.0795 12.5038 21.0794 12.5114 21.0791 12.519Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiArrowRightIcon implements OnInit {
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
