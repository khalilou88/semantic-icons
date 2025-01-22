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
  selector: 'svg[si-exposure-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm0 2h-14a1 1 0 0 0 -1 1v14c0 .29 .123 .55 .321 .732l1.61 -1.584a973 973 0 0 0 6.69 -6.675l7.094 -7.173a1 1 0 0 0 -.715 -.3m-1 11h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0 -2m-10 -10a1 1 0 0 1 1 1v1h1a1 1 0 0 1 .993 .883l.007 .117a1 1 0 0 1 -1 1h-1v1a1 1 0 0 1 -.883 .993l-.117 .007a1 1 0 0 1 -1 -1v-1h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 1 -1h1v-1a1 1 0 0 1 .883 -.993z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiExposureIcon implements OnInit {
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
