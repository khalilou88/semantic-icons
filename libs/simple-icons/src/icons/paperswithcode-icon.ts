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
  selector: 'svg[si-paperswithcode-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Papers With Code</svg:title>
    <svg:path
      d="M0 2v20h4.4v-2.4h-2V4.4h2V2H0Zm19.6 0v2.4h2v15.2h-2V22H24V2h-4.4Zm-16 3.6v12.8H6V5.6H3.6Zm7.2 0v12.8h2.4V5.6h-2.4Zm7.2 0v12.8h2.4V5.6H18Zm-10.8.8v11.2h2.4V6.4H7.2Zm7.2 0v11.2h2.4V6.4h-2.4Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPaperswithcodeIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '21CBCE');
  }
}
