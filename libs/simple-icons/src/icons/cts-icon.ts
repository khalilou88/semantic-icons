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
  selector: 'svg[si-cts-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>CTS</svg:title>
    <svg:path
      d="M19.489 15.344c.05 0 .09.04.09.09v3.776c0 .05-.04.09-.09.09H16.44a.09.09 0 0 1-.075-.04.09.09 0 0 1-.007-.086l1.603-3.776a.09.09 0 0 1 .083-.055h1.444zm.97-7.892c1.083 0 2.183.358 3.272 1.065a.09.09 0 0 1 .03.12l-.86 1.537a.09.09 0 0 1-.13.033c-.803-.522-1.615-.786-2.412-.786-.6 0-1.312.13-1.312.746 0 .188.074.454.427.647.27.147.704.314 1.326.51.61.19 1.047.338 1.302.439.255.1.564.26.918.472.66.402.98 1.053.98 1.994 0 .944-.337 1.68-1.03 2.25-.604.494-1.36.776-2.253.838a.09.09 0 0 1-.097-.09v-1.762a.09.09 0 0 1 .078-.09c.22-.03.404-.097.55-.195a.694.694 0 0 0 .333-.6c0-.248-.15-.477-.45-.68-.286-.195-.703-.38-1.24-.548a14.265 14.265 0 0 1-1.22-.43 6.806 6.806 0 0 1-.956-.519c-.72-.448-1.07-1.094-1.07-1.975 0-.884.346-1.585 1.058-2.143.707-.553 1.633-.833 2.755-.833zm-15.786 0a.09.09 0 0 1 .096.09v2.106a.09.09 0 0 1-.076.09 2.662 2.662 0 0 0-1.38.668c-.52.471-.785 1.134-.785 1.971 0 .837.264 1.498.786 1.963.5.458 1.155.708 1.832.7.87 0 1.666-.416 2.368-1.238a.09.09 0 0 1 .068-.032.09.09 0 0 1 .068.03l1.393 1.566a.09.09 0 0 1-.004.124c-1.204 1.212-2.52 1.826-3.91 1.826-1.43 0-2.658-.459-3.644-1.362C.5 15.05 0 13.854 0 12.395S.506 9.733 1.503 8.82a5.097 5.097 0 0 1 3.17-1.367ZM16.831 4.7c.05 0 .09.04.09.09v2.13c0 .05-.04.09-.09.09h-3.417a.06.06 0 0 0-.06.06v8.545c0 .05-.04.09-.09.09h-2.51a.09.09 0 0 1-.09-.09V7.072a.06.06 0 0 0-.06-.06H7.186a.09.09 0 0 1-.09-.09V4.79a.09.09 0 0 1 .09-.09z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCtsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#E53236');
  }
}
