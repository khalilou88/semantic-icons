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
  selector: 'svg[si-certificate-badge-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2 6.75C2 5.50736 3.00736 4.5 4.25 4.5H19.75C20.9926 4.5 22 5.50736 22 6.75V12.338C21.5725 11.8027 21.0667 11.3327 20.5 10.9453V6.75C20.5 6.33579 20.1642 6 19.75 6H4.25C3.83579 6 3.5 6.33579 3.5 6.75V17.25C3.5 17.6642 3.83579 18 4.25 18H9.88753C9.99392 18.5241 10.1599 19.0266 10.3782 19.5H4.25C3.00736 19.5 2 18.4926 2 17.25V6.75Z"
      fill="#323544"
    />
    <svg:path
      d="M18.25 9.75H5.75C5.33579 9.75 5 9.41421 5 9C5 8.58579 5.33579 8.25 5.75 8.25H18.25C18.6642 8.25 19 8.58579 19 9C19 9.41421 18.6642 9.75 18.25 9.75Z"
      fill="#323544"
    />
    <svg:path
      d="M10.9453 12.75C11.3172 12.2059 11.7652 11.718 12.2741 11.3017C12.1892 11.2683 12.0967 11.25 12 11.25H5.75C5.33579 11.25 5 11.5858 5 12C5 12.4142 5.33579 12.75 5.75 12.75H10.9453Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.6565 15.2815C20.6565 16.4983 20.1173 17.5893 19.2649 18.3285V21.25C19.2649 21.5473 19.0893 21.8165 18.8172 21.9363C18.5452 22.0562 18.228 22.004 18.0087 21.8034L16.6265 20.5392L15.2443 21.8034C15.0249 22.004 14.7077 22.0562 14.4357 21.9363C14.1637 21.8165 13.9881 21.5473 13.9881 21.25V18.331C13.1339 17.5918 12.5935 16.4997 12.5935 15.2815C12.5935 13.0549 14.3985 11.25 16.625 11.25C18.8515 11.25 20.6565 13.0549 20.6565 15.2815ZM16.625 12.75C15.2269 12.75 14.0935 13.8834 14.0935 15.2815C14.0935 16.6795 15.2269 17.8129 16.625 17.8129C18.0231 17.8129 19.1565 16.6795 19.1565 15.2815C19.1565 13.8834 18.0231 12.75 16.625 12.75Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCertificateBadge1Icon implements OnInit {
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
