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
  selector: 'svg[si-arrow-all-direction-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2.57111 11.948C2.42175 12.0851 2.32812 12.282 2.32812 12.5007C2.32812 12.7194 2.42175 12.9162 2.57111 13.0533L4.86116 15.3434C5.15405 15.6363 5.62892 15.6363 5.92182 15.3434C6.21471 15.0505 6.21471 14.5756 5.92182 14.2827L4.88976 13.2507H9.20279C9.617 13.2507 9.95279 12.9149 9.95279 12.5007C9.95279 12.0865 9.617 11.7507 9.20279 11.7507H4.88976L5.92161 10.7188C6.2145 10.4259 6.2145 9.95106 5.92161 9.65817C5.62871 9.36527 5.15384 9.36527 4.86095 9.65817L2.57111 11.948Z"
      fill="#323544"
    />
    <svg:path
      d="M12.8974 2.76095C12.7599 2.60117 12.5562 2.5 12.3288 2.5C12.1101 2.5 11.9132 2.59362 11.7761 2.74297L9.48529 5.03382C9.1924 5.32671 9.1924 5.80159 9.48529 6.09448C9.77819 6.38737 10.2531 6.38737 10.546 6.09448L11.5788 5.06164V9.37466C11.5788 9.78888 11.9146 10.1247 12.3288 10.1247C12.743 10.1247 13.0788 9.78888 13.0788 9.37466V5.06363L14.1099 6.09469C14.4027 6.38758 14.8776 6.38758 15.1705 6.09469C15.4634 5.80179 15.4634 5.32692 15.1705 5.03403L12.8974 2.76095Z"
      fill="#323544"
    />
    <svg:path
      d="M13.0788 15.624C13.0788 15.2098 12.743 14.874 12.3288 14.874C11.9146 14.874 11.5788 15.2098 11.5788 15.624V19.9397L10.5466 18.9075C10.2537 18.6146 9.77882 18.6146 9.48593 18.9075C9.19303 19.2004 9.19303 19.6753 9.48593 19.9682L11.7983 22.2805C12.0912 22.5734 12.5661 22.5734 12.859 22.2805L15.1711 19.9684C15.464 19.6755 15.464 19.2006 15.1711 18.9077C14.8783 18.6148 14.4034 18.6148 14.1105 18.9077L13.0788 19.9394L13.0788 15.624Z"
      fill="#323544"
    />
    <svg:path
      d="M15.4521 11.7507C15.0379 11.7507 14.7021 12.0865 14.7021 12.5007C14.7021 12.9149 15.0379 13.2507 15.4521 13.2507H19.7675L18.7348 14.2834C18.4419 14.5762 18.4419 15.0511 18.7348 15.344C19.0277 15.6369 19.5026 15.6369 19.7955 15.344L22.1077 13.0318C22.2483 12.8912 22.3274 12.7004 22.3274 12.5015C22.3274 12.3994 22.3065 12.2995 22.2673 12.2074C22.2271 12.1129 22.1681 12.0284 22.095 11.9585L19.7953 9.65879C19.5024 9.3659 19.0275 9.3659 18.7346 9.65879C18.4417 9.95169 18.4417 10.4266 18.7346 10.7195L19.7659 11.7507H15.4521Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiArrowAllDirectionIcon implements OnInit {
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
