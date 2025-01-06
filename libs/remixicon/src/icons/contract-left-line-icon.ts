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
  selector: 'svg[si-contract-left-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15.0712 4.92883L16.4854 6.34305L11.8286 10.9999L21.0004 11L21.0004 13L11.8286 12.9999L16.4854 17.6568L15.0712 19.071L8.00016 11.9999L15.0712 4.92883ZM4.00037 18.9998L4.00037 4.99985H6.00037L6.00037 18.9998H4.00037Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiContractLeftLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
