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
  selector: 'svg[si-swap-2-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.2073 2.29291L15.793 3.70712L18.0859 6.00002H13.0002V8.00001H18.0859L15.793 10.2929L17.2073 11.7071L21.9144 7.00001L17.2073 2.29291ZM9.50015 7.00001C9.50015 5.6193 8.38086 4.50001 7.00015 4.50001C5.61944 4.50001 4.50015 5.6193 4.50015 7.00001C4.50015 8.38073 5.61944 9.50001 7.00015 9.50001C8.38086 9.50001 9.50015 8.38073 9.50015 7.00001ZM11.5002 7.00001C11.5002 9.4853 9.48543 11.5 7.00015 11.5C4.51487 11.5 2.50015 9.4853 2.50015 7.00001C2.50015 4.51473 4.51487 2.50001 7.00015 2.50001C9.48543 2.50001 11.5002 4.51473 11.5002 7.00001ZM5.91436 18L8.20726 20.2929L6.79304 21.7071L2.08594 17L6.79304 12.2929L8.20726 13.7071L5.91436 16H11.0002V18H5.91436ZM15.0002 19H19.0002V15H15.0002V19ZM13.0002 14C13.0002 13.4477 13.4479 13 14.0002 13H20.0002C20.5524 13 21.0002 13.4477 21.0002 14V20C21.0002 20.5523 20.5524 21 20.0002 21H14.0002C13.4479 21 13.0002 20.5523 13.0002 20V14Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSwap2LineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
