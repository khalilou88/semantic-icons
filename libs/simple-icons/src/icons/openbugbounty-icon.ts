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
  selector: 'svg[si-openbugbounty-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Open Bug Bounty</svg:title>
    <svg:path
      d="M8.092 2.443a1.388 1.388 0 0 0-1.428 1.611c.42 2.567 2.11 4.115 3.58 4.998a14.12 14.12 0 0 0 .4 2.926H6.52a1.388 1.388 0 0 0 0 2.777h5.155c.39.767.85 1.475 1.37 2.108-1.816 1.36-3.516 3.734-4.34 4.983a1.388 1.388 0 1 0 2.316 1.531c1.376-2.08 3.15-4.046 4.09-4.604a8.208 8.208 0 0 0 3.757 1.416V6.492h-7.484c-.867-.588-1.753-1.506-1.979-2.886a1.388 1.388 0 0 0-1.313-1.163zM18.859 0c-2.971 0-5.501 1.967-6.577 4.765h6.577Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiOpenbugbountyIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#F67909');
  }
}
