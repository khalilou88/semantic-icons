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
  selector: 'svg[si-zcool-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>ZCOOL</svg:title>
    <svg:path
      d="M15.467.438c-.096-.011-.162.03-.2.12-.58 1.397-1.603 2.45-3.067 3.157-.687.333-1.326.556-1.916.67-1.049.203-1.97.413-2.762.631C3.442 6.135.197 9.2.01 13.59c-.092 2.153.46 4.103 1.657 5.85 2.826 4.127 8.452 5.384 12.722 2.732 2.281-1.417 3.734-3.479 4.359-6.186a.146.148 84 0 1 .084-.103c.282-.128.582-.226.857-.368 2.081-1.072 3.515-2.725 4.301-4.96a.181.183 13.8 0 0-.144-.24.253.253 0 0 0-.127.011c-.937.327-1.907.549-2.909.666a.03.03 0 0 1-.028-.047c1.979-2.682 2.912-5.72 2.799-9.112-.003-.1-.052-.162-.148-.188a.175.17 28.9 0 0-.174.048c-2.14 2.292-4.711 3.686-7.715 4.185-.077.012-.098-.016-.063-.086.805-1.595.766-3.625.145-5.23a.196.196 0 0 0-.158-.123zm-2.151 13.195c.097-.013.115.057.053.209a6.621 6.621 0 0 1-1.258 2.003c-.88.963-1.967 1.343-3.265 1.139a2.952 2.952 0 0 1-1.856-1.111.088.088 0 0 1 .001-.109.15.15 0 0 1 .109-.058c2.184-.205 4.073-1.122 6.092-2.033a.462.462 0 0 1 .124-.04zm-12.231.618c.04.005.1.04.182.11.739.624 1.679 1.212 2.644 1.296a.119.119 0 0 1 .095.171c-.556 1.113-1.661.87-2.283.025a4.223 4.223 0 0 1-.665-1.358c-.049-.17-.04-.252.027-.244z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiZcoolIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'FFF200');
  }
}
