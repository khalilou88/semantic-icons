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
  selector: 'svg[si-box-align-left-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M10.002 3.003h-5a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h5a1 1 0 0 0 1 -1v-16a1 1 0 0 0 -1 -1z"
    />
    <svg:path
      d="M15.002 19.003a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993l.127 -.007z"
    />
    <svg:path
      d="M20.003 19.003a1 1 0 0 1 .117 1.993l-.128 .007a1 1 0 0 1 -.117 -1.993l.128 -.007z"
    />
    <svg:path
      d="M20.003 14.002a1 1 0 0 1 .117 1.993l-.128 .007a1 1 0 0 1 -.117 -1.993l.128 -.007z"
    />
    <svg:path
      d="M20.003 8.002a1 1 0 0 1 .117 1.993l-.128 .007a1 1 0 0 1 -.117 -1.993l.128 -.007z"
    />
    <svg:path
      d="M20.003 3.002a1 1 0 0 1 .117 1.993l-.128 .007a1 1 0 0 1 -.117 -1.993l.128 -.007z"
    />
    <svg:path
      d="M15.002 3.002a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993l.127 -.007z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBoxAlignLeftIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
