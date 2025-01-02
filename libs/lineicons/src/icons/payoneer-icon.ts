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
  selector: 'svg[si-payoneer-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.63609 21.2626V20.2988H4.05218C4.82641 20.2988 5.28989 19.8669 5.28989 19.2244C5.28989 18.6187 4.82114 18.2658 4.14171 18.2658H3.13574V21.2626H3.63609ZM4.11538 18.7135C4.51039 18.7135 4.779 18.8978 4.779 19.2823C4.779 19.6404 4.47879 19.8511 4.08904 19.8511H3.63609V18.7082H4.11538V18.7135ZM12.2158 20.2145C12.2158 19.593 11.7471 19.1243 11.1256 19.1243C10.5304 19.1243 10.0406 19.6036 10.0406 20.2198C10.0406 20.8466 10.4936 21.2995 11.1256 21.2995C11.7313 21.3048 12.2158 20.8413 12.2158 20.2145ZM10.5146 20.2145C10.5146 19.8564 10.778 19.5825 11.1256 19.5825C11.4732 19.5825 11.7418 19.8617 11.7418 20.2145C11.7418 20.5727 11.4732 20.8466 11.1256 20.8466C10.778 20.8518 10.5146 20.5727 10.5146 20.2145ZM16.9139 20.3409C16.9297 20.2777 16.9297 20.1829 16.9297 20.125C16.9297 19.5404 16.482 19.1296 15.9184 19.1296C15.318 19.1296 14.8387 19.5983 14.8387 20.2093C14.8387 20.8466 15.2601 21.3048 15.9026 21.3048C16.3345 21.3048 16.6979 21.0994 16.8507 20.815L16.482 20.6095C16.3819 20.7676 16.1765 20.8834 15.9395 20.8834C15.6077 20.8834 15.3759 20.6833 15.3285 20.3462H16.9139V20.3409ZM15.3496 19.9775C15.4128 19.6984 15.6182 19.5298 15.9026 19.5298C16.1923 19.5298 16.4135 19.7142 16.4398 19.9775H15.3496ZM9.51918 19.1664L8.93983 20.6622L8.42368 19.1664H7.88645L8.66068 21.2626L8.3394 22H8.85029L10.0301 19.1664H9.51918ZM20.864 19.177C20.8166 19.1612 20.7218 19.1506 20.6586 19.1506C20.4532 19.1506 20.2215 19.2665 20.1214 19.4666V19.1664H19.6474V21.2626H20.1214V20.1408C20.1214 19.751 20.3795 19.593 20.6481 19.593C20.7218 19.593 20.785 19.5983 20.8587 19.6141L20.864 19.177ZM19.305 20.3409C19.3208 20.2777 19.3208 20.1829 19.3208 20.125C19.3208 19.5404 18.8731 19.1296 18.3096 19.1296C17.7092 19.1296 17.2299 19.5983 17.2299 20.2093C17.2299 20.8466 17.6512 21.3048 18.2938 21.3048C18.7257 21.3048 19.0891 21.0994 19.2418 20.815L18.8731 20.6095C18.7731 20.7676 18.5677 20.8834 18.3306 20.8834C17.9988 20.8834 17.7671 20.6833 17.7197 20.3462H19.305V20.3409ZM17.7355 19.9775C17.7987 19.6984 18.0041 19.5298 18.2885 19.5298C18.5782 19.5298 18.7994 19.7142 18.8257 19.9775H17.7355ZM7.13329 20.2093C7.13329 20.5937 6.84362 20.8729 6.46967 20.8729C6.10625 20.8729 5.85871 20.5885 5.85871 20.2093C5.85871 19.8511 6.15892 19.5509 6.5118 19.5509C6.88575 19.5509 7.13329 19.8353 7.13329 20.2093ZM14.5174 20.0671C14.5174 19.4824 14.233 19.1243 13.6958 19.1243C13.4167 19.1243 13.1586 19.2454 13.0111 19.435V19.1612H12.5318V21.2574H13.0111V20.125C13.0111 19.7721 13.2639 19.5509 13.5694 19.5509C13.8749 19.5509 14.0329 19.7563 14.0329 20.1039V21.2626H14.5122V20.0671H14.5174ZM7.13329 19.1664V19.4403C6.99635 19.256 6.76988 19.1296 6.43807 19.1296C5.85871 19.1296 5.37416 19.6404 5.37416 20.2461C5.37416 20.8518 5.79024 21.31 6.34853 21.31C6.71194 21.31 6.98055 21.1784 7.13329 20.9677V21.2732H7.60204V19.177H7.13329V19.1664Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.9998 15.3183C15.3285 15.3183 18.0269 12.6199 18.0269 9.29119C18.0269 5.96249 15.3285 3.26405 11.9998 3.26405C8.67109 3.26405 5.97265 5.96249 5.97265 9.29119C5.97265 12.6199 8.67109 15.3183 11.9998 15.3183ZM11.9998 16.5824C16.0266 16.5824 19.291 13.318 19.291 9.29119C19.291 5.26438 16.0266 2 11.9998 2C7.97298 2 4.7086 5.26438 4.7086 9.29119C4.7086 13.318 7.97298 16.5824 11.9998 16.5824Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiPayoneerIcon implements OnInit {
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
