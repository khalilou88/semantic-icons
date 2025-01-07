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
  selector: 'svg[si-auto-awesome-motion-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14 2H4a2 2 0 0 0-2 2v10h2V4h10V2zm4 4H8a2 2 0 0 0-2 2v10h2V8h10V6zm2 4h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAutoAwesomeMotionIcon implements OnInit {
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
