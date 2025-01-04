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
  selector: 'svg[si-gitlfs-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Git LFS</svg:title>
    <svg:path
      d="M11.967.304L0 7.215v9.68l11.79 6.802V14.02l11.96-6.91-4.383-2.53-11.959 6.905v3.887l-2.775-1.601V9.886l11.965-6.91zM24 7.545L12.29 14.31v9.387L24 16.929V7.547z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGitlfsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
