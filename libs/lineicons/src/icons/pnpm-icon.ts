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
  selector: 'svg[si-pnpm-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M21 8.62565H15.3753V3.00098H21V8.62565Z" fill="#323544" />
    <svg:path
      d="M14.8118 8.62565H9.1871V3.00098H14.8118V8.62565Z"
      fill="#323544"
    />
    <svg:path d="M8.62467 8.62565H3V3.00098H8.62467V8.62565Z" fill="#323544" />
    <svg:path d="M21 14.8129H15.3753V9.18819H21V14.8129Z" fill="#323544" />
    <svg:path
      d="M14.8118 14.8129H9.1871V9.18819H14.8118V14.8129Z"
      fill="#323544"
    />
    <svg:path d="M14.8118 21H9.1871V15.3753H14.8118V21Z" fill="#323544" />
    <svg:path d="M21 21H15.3753V15.3753H21V21Z" fill="#323544" />
    <svg:path d="M8.62467 21H3V15.3753H8.62467V21Z" fill="#323544" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPnpmIcon implements OnInit {
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
