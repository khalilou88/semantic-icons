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
  selector: 'svg[si-spectrum-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.3885 2.00146L13.1997 2.00596L14.0434 2.0199C21.2046 2.18454 21.982 3.53205 22.0003 11.6871L21.9948 13.1991L21.9808 14.0429C21.8162 21.204 20.4687 21.9814 12.3136 21.9997L10.8016 21.9942L9.91389 21.9792C3.06016 21.8164 2.08615 20.5515 2.00651 13.1991L2.00098 11.6908L2.00651 10.801L2.02094 9.9364C2.18566 2.88296 3.50725 2.03889 11.3885 2.00146ZM14.1204 4.00883L10.8829 4.00079L9.561 4.01053C4.07209 4.09335 4.01663 4.83194 4.0016 11.414L4.00259 13.5888L4.0132 14.6296C4.10138 19.6115 4.80564 19.9723 10.4119 19.9981L13.8667 19.9965L14.6429 19.9873C19.7508 19.8957 19.9894 19.1505 20.0002 13.1103L19.998 10.3675L19.9859 9.31193C19.892 4.51568 19.201 4.06256 14.1204 4.00883ZM8.25064 7.00009C13.0831 7.00009 17.0006 10.9176 17.0006 15.7501V16.3334C17.0006 16.7018 16.7021 17.0001 16.334 17.0001H12.6673C12.2992 17.0001 12.0006 16.7018 12.0006 16.3334V15.7501C12.0006 13.679 10.3217 12.0001 8.25064 12.0001H7.66731C7.29918 12.0001 7.00064 11.7018 7.00064 11.3334V7.66675C7.00064 7.29863 7.29918 7.00009 7.66731 7.00009H8.25064Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSpectrumLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
