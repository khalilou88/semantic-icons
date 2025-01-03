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
  selector: 'svg[si-digitalocean-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.0018 18.1446V22C18.4441 22 23.4683 15.6726 21.3581 8.81218C20.4426 5.81857 18.0868 3.43727 15.1392 2.4961C8.38438 0.352934 2.1543 5.45571 2.1543 11.9986H5.96156C5.96156 7.89368 9.96981 4.71864 14.2237 6.2835C15.798 6.86179 17.0596 8.14314 17.629 9.73068C19.1796 14.047 16.0493 18.1144 12.013 18.1219V14.2778H8.20574V18.1446H12.0018ZM8.20574 21.1042H5.29167V18.1446H8.20574V21.1042ZM2.84652 18.1446H5.29167V15.6612H2.84652V18.1446Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiDigitaloceanIcon implements OnInit {
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