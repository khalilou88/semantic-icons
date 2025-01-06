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
  selector: 'svg[si-virus-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.7163 1.94745L17.4506 3.38092L16.7339 5.24808L15.8003 4.88947L15.0539 6.83436C15.8328 7.29585 16.4983 7.92847 16.9986 8.68044L18.9014 7.83255L18.4947 6.919L20.3218 6.10553L21.9487 9.75971L20.1216 10.5732L19.7149 9.65964L17.8126 10.5071C17.9348 10.9844 17.9998 11.4846 17.9998 12C17.9998 12.4062 17.9594 12.8031 17.8825 13.1867L19.8265 13.9327L20.1852 12.9998L22.0523 13.7165L20.6189 17.4508L18.7517 16.7341L19.1094 15.8009L17.1654 15.0541C16.7039 15.833 16.0713 16.4985 15.3194 16.9988L16.1672 18.9016L17.0808 18.4949L17.8943 20.322L14.2401 21.9489L13.4266 20.1218L14.3402 19.7151L13.4927 17.8128C13.0154 17.935 12.5152 18 11.9998 18C11.5932 18 11.196 17.9595 10.8121 17.8825L10.0662 19.8271L11 20.1854L10.2833 22.0525L6.54897 20.6191L7.2657 18.7519L8.19803 19.11L8.9457 17.1656C8.16683 16.7041 7.50133 16.0715 7.00097 15.3195L5.09818 16.1674L5.50492 17.081L3.67782 17.8944L2.05088 14.2403L3.87797 13.4268L4.28379 14.3407L6.18702 13.4929C6.06479 13.0156 5.99981 12.5154 5.99981 12C5.99981 11.5937 6.04018 11.1969 6.11714 10.8133L4.17174 10.0668L3.81443 11.0002L1.94727 10.2835L3.38074 6.54915L5.2479 7.26588L4.88888 8.19862L6.83418 8.94588C7.29566 8.16702 7.92829 7.50151 8.68026 7.00115L7.83237 5.09836L6.91882 5.5051L6.10535 3.67801L9.75953 2.05106L10.573 3.87815L9.65946 4.28489L10.5069 6.1872C10.9842 6.06497 11.4844 5.99999 11.9998 5.99999C12.4061 5.99999 12.8029 6.04037 13.1865 6.11732L13.9321 4.17233L12.9996 3.81461L13.7163 1.94745ZM11.9998 7.99999C9.79067 7.99999 7.99981 9.79085 7.99981 12C7.99981 14.2091 9.79067 16 11.9998 16C14.2089 16 15.9998 14.2091 15.9998 12C15.9998 9.79085 14.2089 7.99999 11.9998 7.99999ZM11.4998 12.866C11.9781 13.1422 12.142 13.7537 11.8658 14.232C11.5897 14.7103 10.9781 14.8742 10.4998 14.5981C10.0215 14.3219 9.85764 13.7103 10.1338 13.232C10.4099 12.7537 11.0215 12.5899 11.4998 12.866ZM13.9998 11C14.5521 11 14.9998 11.4477 14.9998 12C14.9998 12.5523 14.5521 13 13.9998 13C13.4475 13 12.9998 12.5523 12.9998 12C12.9998 11.4477 13.4475 11 13.9998 11ZM11.8658 9.76794C12.142 10.2462 11.9781 10.8578 11.4998 11.134C11.0215 11.4101 10.4099 11.2462 10.1338 10.7679C9.85764 10.2896 10.0215 9.67806 10.4998 9.40191C10.9781 9.12577 11.5897 9.28965 11.8658 9.76794Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiVirusLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
