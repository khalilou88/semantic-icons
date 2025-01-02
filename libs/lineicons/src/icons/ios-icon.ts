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
  selector: 'svg[si-ios-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.64 5.39625C20.4713 4.95188 20.0663 4.3275 19.4925 3.88313C19.155 3.63 18.7725 3.3825 18.2325 3.225C17.6475 3.05625 16.9275 3 16.05 3H7.95C7.06688 3 6.3525 3.05625 5.77312 3.23063C5.23312 3.39375 4.83375 3.63563 4.5075 3.88875C3.93375 4.3275 3.52875 4.9575 3.35437 5.40187C3.00562 6.29625 3 7.30875 3 7.95V16.05C3 16.6913 3.00562 17.7038 3.35437 18.6038C3.52875 19.0481 3.93375 19.6725 4.5075 20.1169C4.83938 20.37 5.23312 20.6175 5.77312 20.775C6.3525 20.9438 7.06688 21 7.95 21H16.05C16.9331 21 17.6475 20.9438 18.2269 20.7694C18.7669 20.6063 19.1663 20.3644 19.4925 20.1113C20.0663 19.6725 20.4713 19.0425 20.6456 18.5981C21 17.7037 21 16.6856 21 16.0444V7.94437C21 7.30312 20.9944 6.29063 20.6456 5.39063L20.64 5.39625ZM6.56625 15.375H5.89688V11.3756H6.56625V15.375ZM6.23438 10.7006C6.00938 10.7006 5.81813 10.515 5.81813 10.2844C5.81813 10.0537 6.00375 9.86812 6.23438 9.86812C6.465 9.86812 6.65625 10.0537 6.65625 10.2844C6.65063 10.515 6.465 10.7006 6.23438 10.7006ZM10.2563 15.4763C8.49 15.4763 7.37625 14.2163 7.37625 12.2081C7.37625 10.2 8.49 8.93438 10.2563 8.93438C12.0225 8.93438 13.1363 10.2 13.1363 12.2081C13.1363 14.2163 12.0225 15.4763 10.2563 15.4763ZM16.0838 15.4763C14.7563 15.4763 13.8225 14.745 13.7606 13.6538H14.3625C14.43 14.4131 15.1444 14.9306 16.14 14.9306C17.0906 14.9306 17.7713 14.4131 17.7713 13.6988C17.7713 13.1081 17.3606 12.7538 16.4213 12.5175L15.6337 12.315C14.4581 12.0169 13.935 11.5219 13.935 10.6838C13.935 9.66 14.8575 8.92875 16.1063 8.92875C17.3438 8.92875 18.2438 9.66 18.2831 10.6669H17.6813C17.625 9.9525 16.9894 9.47438 16.0894 9.47438C15.2119 9.47438 14.5594 9.96375 14.5594 10.6613C14.5594 11.2069 14.9531 11.5275 15.8869 11.7637L16.5731 11.9381C17.85 12.2588 18.3844 12.7481 18.3844 13.6313C18.3844 14.745 17.49 15.4763 16.0838 15.4763ZM12.5231 12.2081C12.5231 13.8675 11.6456 14.9194 10.2563 14.9194C8.86687 14.9194 7.995 13.8675 7.995 12.2081C7.995 10.5431 8.86687 9.49125 10.2563 9.49125C11.6456 9.49125 12.5231 10.5431 12.5231 12.2081Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiIosIcon implements OnInit {
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
