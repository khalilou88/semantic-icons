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
  selector: 'svg[si-cloud-rain-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.41032 9.23329C6.48046 6.19302 8.96698 3.75 12.0241 3.75C15.0813 3.75 17.5678 6.19308 17.6379 9.23338C20.0922 9.42706 22.0235 11.4801 22.0235 13.9842C22.0235 16.0917 20.6556 17.8797 18.7591 18.5087C18.8505 18.0617 18.8984 17.599 18.8984 17.125C18.8984 17.0203 18.8961 16.9162 18.8915 16.8126C19.8672 16.2478 20.5235 15.1927 20.5235 13.9842C20.5235 12.1806 19.0614 10.7184 17.2578 10.7184H16.8894C16.4752 10.7184 16.1394 10.3827 16.1394 9.96844V9.3653C16.1394 7.09248 14.2969 5.25 12.0241 5.25C9.75128 5.25 7.9088 7.09248 7.9088 9.3653V9.96844C7.9088 10.3827 7.57301 10.7184 7.1588 10.7184H6.78922C4.98558 10.7184 3.52344 12.1806 3.52344 13.9842C3.52344 15.1926 4.17977 16.2478 5.15541 16.8126C5.15078 16.9161 5.14844 17.0203 5.14844 17.125C5.14844 17.599 5.1964 18.0617 5.28773 18.5087C3.39135 17.8796 2.02344 16.0917 2.02344 13.9842C2.02344 11.4797 3.95539 9.42638 6.41032 9.23329Z"
      fill="#323544"
    />
    <svg:path
      d="M8.81847 14.67C8.81847 14.2558 8.48268 13.92 8.06847 13.92C7.65425 13.92 7.31847 14.2558 7.31847 14.67L7.31847 21.08C7.31847 21.4942 7.65425 21.83 8.06847 21.83C8.48268 21.83 8.81847 21.4942 8.81847 21.08L8.81847 14.67Z"
      fill="#323544"
    />
    <svg:path
      d="M15.9785 13.17C16.3927 13.17 16.7285 13.5058 16.7285 13.92V20.33C16.7285 20.7442 16.3927 21.08 15.9785 21.08C15.5643 21.08 15.2285 20.7442 15.2285 20.33V13.92C15.2285 13.5058 15.5643 13.17 15.9785 13.17Z"
      fill="#323544"
    />
    <svg:path
      d="M12.7735 13.17C12.7735 12.7558 12.4377 12.42 12.0235 12.42C11.6092 12.42 11.2735 12.7558 11.2735 13.17V19.58C11.2735 19.9942 11.6092 20.33 12.0235 20.33C12.4377 20.33 12.7735 19.9942 12.7735 19.58V13.17Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCloudRainIcon implements OnInit {
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
