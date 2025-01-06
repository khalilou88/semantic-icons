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
  selector: 'svg[si-paypal-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.0673 8.47768C20.5591 9.35823 20.6237 10.4924 20.3676 11.8053C19.627 15.6107 17.0916 16.9253 13.8536 16.9253H13.3536C12.9583 16.9253 12.6216 17.214 12.5596 17.6047L12.519 17.8253L11.8896 21.818L11.857 21.988C11.795 22.3787 11.4583 22.6667 11.063 22.6667H7.72031C7.42365 22.6667 7.19698 22.402 7.24298 22.1093L7.41807 21H8.9367L9.88603 14.9793H11.2716C15.9496 14.9793 19.0209 12.7768 20.0673 8.47768ZM17.1066 3.38784C17.8693 4.25635 18.0908 5.19891 17.8597 6.67324C17.8405 6.79594 17.82 6.91391 17.7973 7.03253C17.0621 10.8057 14.7087 12.4793 10.8417 12.4793H8.95703C8.32647 12.4793 7.78368 12.8928 7.60372 13.4811L7.58913 13.4788L6.65969 19.3733H3.12169C3.08991 19.3733 3.06598 19.3454 3.07097 19.3136L5.66905 2.80233C5.74174 2.34036 6.13984 2 6.6075 2H12.583C14.7658 2 16.2998 2.46869 17.1066 3.38784Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPaypalFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
