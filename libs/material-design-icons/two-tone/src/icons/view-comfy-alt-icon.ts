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
  selector: 'svg[si-view-comfy-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 18h16V6H4v12zm9-11h4v4h-4V7zm0 6h4v4h-4v-4zM7 7h4v4H7V7zm0 6h4v4H7v-4z"
      opacity=".3"
    />
    <svg:path d="M7 7h4v4H7zm6 0h4v4h-4zm-6 6h4v4H7zm6 0h4v4h-4z" />
    <svg:path
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiViewComfyAltIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
