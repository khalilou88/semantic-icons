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
  selector: 'svg[si-coral-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19.3776 12.9431C19.1911 12.9446 19.0083 12.8897 18.8525 12.7854C18.6968 12.6811 18.5752 12.5321 18.5031 12.3573C18.431 12.1826 18.4118 11.9901 18.4478 11.8041C18.4838 11.6182 18.5734 11.4475 18.7053 11.3135C18.8372 11.1795 19.0054 11.0884 19.1885 11.0519C19.3715 11.0153 19.5611 11.0348 19.7332 11.108C19.9052 11.1812 20.0519 11.3048 20.1546 11.463C20.2573 11.6211 20.3114 11.8067 20.3098 11.9962C20.3078 12.2467 20.209 12.4863 20.0346 12.6635C19.8602 12.8406 19.6242 12.941 19.3776 12.9431ZM10.2842 8.53485C10.4704 8.53331 10.6529 8.588 10.8085 8.69193C10.964 8.7959 11.0857 8.94444 11.158 9.11874C11.2303 9.293 11.25 9.48519 11.2146 9.67087C11.1792 9.85656 11.0903 10.0274 10.9592 10.1617C10.828 10.2959 10.6606 10.3876 10.478 10.4251C10.2955 10.4625 10.1061 10.4441 9.93394 10.3721C9.76178 10.3001 9.61451 10.1777 9.51089 10.0206C9.40728 9.86344 9.35196 9.67857 9.35196 9.48945C9.35196 9.23763 9.44992 8.99597 9.62453 8.81717C9.79913 8.63837 10.0363 8.53691 10.2842 8.53485ZM4.58366 6.02808C4.76771 6.02961 4.9472 6.08646 5.09949 6.19142C5.2518 6.29639 5.37009 6.44478 5.43951 6.61792C5.50887 6.79105 5.52624 6.98118 5.48944 7.16436C5.45259 7.34751 5.36324 7.51548 5.23252 7.64713C5.10184 7.77876 4.93573 7.86817 4.7551 7.90409C4.57447 7.94 4.38742 7.92079 4.21752 7.8489C4.04761 7.77703 3.90246 7.65568 3.80036 7.50012C3.69825 7.3446 3.64377 7.16186 3.64376 6.97492C3.64375 6.84993 3.66812 6.72617 3.71545 6.61078C3.76277 6.4954 3.83213 6.39069 3.91951 6.30265C4.00688 6.21464 4.11056 6.14506 4.22455 6.09791C4.33855 6.05079 4.46059 6.02708 4.58366 6.02808ZM15.2206 3.5291C15.4069 3.52756 15.5893 3.58223 15.7449 3.68619C15.9004 3.79014 16.0221 3.93868 16.0944 4.11297C16.1667 4.28726 16.1864 4.47943 16.151 4.66511C16.1156 4.85079 16.0267 5.02161 15.8956 5.15589C15.7644 5.29017 15.597 5.38184 15.4145 5.41932C15.2319 5.45677 15.0426 5.43834 14.8704 5.36632C14.6982 5.2943 14.5509 5.17197 14.4473 5.01482C14.3437 4.85768 14.2883 4.67281 14.2883 4.48369C14.2883 4.23185 14.3863 3.99022 14.5609 3.81142C14.7355 3.63262 14.9726 3.53114 15.2206 3.5291ZM21.8305 11.9962C21.8319 11.5357 21.7076 11.0838 21.4714 10.6907C21.2351 10.2976 20.8962 9.97867 20.4923 9.76939C20.0884 9.56009 19.6353 9.46861 19.1833 9.50509C18.7312 9.54157 18.2981 9.7046 17.9318 9.97604C17.5655 10.2475 17.2804 10.6167 17.1083 11.0428C16.9361 11.4689 16.8837 11.935 16.9567 12.3895C17.0297 12.8441 17.2253 13.2692 17.5218 13.6176C17.8183 13.966 18.2041 14.2241 18.6364 14.3633V15.6361C18.6364 15.8644 18.5921 16.0904 18.5061 16.3013C18.42 16.5123 18.294 16.7039 18.135 16.8653C17.9761 17.0268 17.7874 17.1548 17.5797 17.2422C17.372 17.3296 17.1494 17.3745 16.9247 17.3745H16.0153C15.0402 17.373 14.0978 17.7316 13.3637 18.3834C13.1525 17.5132 12.7264 16.7119 12.1258 16.0551C13.1637 16.0249 14.1491 15.5847 14.8725 14.8282C15.596 14.0717 16.0005 13.0585 16 12.004V6.85851C16.5545 6.67389 17.026 6.29458 17.3299 5.78871C17.6338 5.28281 17.7501 4.68347 17.6581 4.09828C17.5661 3.51309 17.2716 2.98039 16.8277 2.59582C16.3838 2.21125 15.8194 2 15.2359 2C14.6524 2 14.088 2.21125 13.6441 2.59582C13.2001 2.98039 12.9057 3.51309 12.8137 4.09828C12.7217 4.68347 12.838 5.28281 13.1419 5.78871C13.4458 6.29458 13.9173 6.67389 14.4718 6.85851V11.9807C14.4718 12.6476 14.2109 13.2872 13.7466 13.7587C13.2823 14.2303 12.6525 14.4952 11.9959 14.4952H10.5517C10.8745 13.9778 11.0443 13.3771 11.0407 12.7645V11.8565C11.5952 11.6719 12.0667 11.2926 12.3706 10.7867C12.6744 10.2808 12.7908 9.68148 12.6988 9.09627C12.6067 8.5111 12.3123 7.97839 11.8684 7.59382C11.4244 7.20925 10.86 6.99801 10.2766 6.99801C9.69307 6.99801 9.1287 7.20925 8.68475 7.59382C8.24084 7.97839 7.9464 8.5111 7.85436 9.09627C7.76232 9.68148 7.87867 10.2808 8.18258 10.7867C8.48646 11.2926 8.95794 11.6719 9.5124 11.8565V12.7645C9.51271 13.213 9.34161 13.6441 9.03513 13.9669C8.72865 14.2897 8.31079 14.4791 7.8695 14.4952C7.20946 14.4911 6.57779 14.2219 6.11248 13.7465C5.64716 13.271 5.38598 12.6278 5.38601 11.9574V9.342C5.94046 9.15738 6.41198 8.77806 6.71586 8.27217C7.01974 7.76627 7.13612 7.16692 7.04408 6.58175C6.95204 5.99658 6.6576 5.46387 6.21369 5.0793C5.76974 4.69473 5.20534 4.48348 4.62187 4.48348C4.03838 4.48348 3.474 4.69473 3.03006 5.0793C2.58612 5.46387 2.2917 5.99658 2.19966 6.58175C2.10762 7.16692 2.22399 7.76627 2.52788 8.27217C2.83177 8.77806 3.30326 9.15738 3.85772 9.342V11.9497C3.85968 13.0263 4.2796 14.0588 5.02638 14.8231C5.77312 15.5873 6.7865 16.0217 7.84657 16.0319H8.7559C9.19059 16.0373 9.61927 16.1355 10.0142 16.32C10.4091 16.5045 10.7615 16.7712 11.0484 17.1029C11.6702 17.7708 12.022 18.6517 12.0341 19.5708V22H13.5624V21.449C13.5624 20.7738 13.8265 20.1264 14.2965 19.649C14.7665 19.1716 15.4041 18.9034 16.0688 18.9034H16.9782C17.8334 18.9034 18.6536 18.5583 19.2584 17.9441C19.8631 17.33 20.2029 16.4969 20.2029 15.6283V14.3555C20.6864 14.1928 21.1081 13.8812 21.4094 13.4639C21.7106 13.0467 21.823 12.5136 21.8305 11.9962Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCoralIcon implements OnInit {
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