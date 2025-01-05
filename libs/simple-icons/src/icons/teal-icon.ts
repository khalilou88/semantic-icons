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
  selector: 'svg[si-teal-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Teal</svg:title>
    <svg:path
      d="M4.069 2.334v4.129h7.897a3.168 3.168 0 0 1 2.25.947c.596.604.932 1.425.933 2.281l.008 4.244v3.61H7.253A3.17 3.17 0 0 1 5 16.598a3.251 3.251 0 0 1-.932-2.283V6.463H0v8.014c0 .944.184 1.879.541 2.752a7.193 7.193 0 0 0 1.537 2.332 7.074 7.074 0 0 0 2.301 1.558c.86.362 1.783.547 2.714.547h4.723a3.32 3.32 0 0 0 2.365-.992c.627-.636.98-1.498.98-2.397v-.732h8.824l-2.328-2.283L24 12.965h-6.309a5.802 5.802 0 0 0 2.191-2.884 5.893 5.893 0 0 0 .071-3.639 5.819 5.819 0 0 0-2.075-2.971 5.685 5.685 0 0 0-3.411-1.137H4.069Zm6.707 6.137c-1.212 0-2.194.997-2.194 2.225 0 1.229.982 2.225 2.194 2.225s2.194-.996 2.194-2.225c0-1.228-.982-2.225-2.194-2.225Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTealIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '005149');
  }
}
