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
  selector: 'svg[si-bootstrap-5-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.15407 4.06543C5.01289 4.06543 4.16848 5.0603 4.20629 6.13921C4.24258 7.17578 4.19543 8.51825 3.85613 9.61303C3.51562 10.7109 2.94016 11.4066 2 11.4959V12.5041C2.94016 12.5936 3.51563 13.289 3.85609 14.387C4.19543 15.4817 4.24254 16.8242 4.20625 17.8608C4.16844 18.9395 5.01285 19.9346 6.15422 19.9346H17.8474C18.9886 19.9346 19.8329 18.9397 19.7951 17.8608C19.7588 16.8242 19.8059 15.4817 20.1452 14.387C20.4857 13.289 21.0598 12.5933 22 12.5041V11.4959C21.0598 11.4064 20.4858 10.711 20.1452 9.61303C19.8059 8.5184 19.7588 7.17578 19.7951 6.13921C19.8329 5.06046 18.9886 4.06543 17.8474 4.06543H6.15407ZM15.5593 13.8339C15.5593 15.3195 14.4468 16.2205 12.6005 16.2205H9.45761C9.36772 16.2205 9.28149 16.185 9.21792 16.1216C9.15435 16.0583 9.11864 15.9724 9.11864 15.8829V8.11714C9.11864 8.0276 9.15435 7.94172 9.21792 7.8784C9.28149 7.81508 9.36772 7.77951 9.45761 7.77951H12.5826C14.1221 7.77951 15.1324 8.6101 15.1324 9.88534C15.1324 10.7804 14.4528 11.5818 13.5869 11.7221V11.7688C14.7656 11.8976 15.5593 12.7108 15.5593 13.8339ZM12.2578 8.84981H10.4658V11.371H11.9751C13.1419 11.371 13.7852 10.9031 13.7852 10.0666C13.7852 9.28266 13.232 8.84981 12.2578 8.84981ZM10.4658 12.3714V15.1499H12.3238C13.5386 15.1499 14.1821 14.6643 14.1821 13.7519C14.1821 12.8394 13.5205 12.3713 12.2456 12.3713L10.4658 12.3714Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBootstrap5Icon implements OnInit {
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
