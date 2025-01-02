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
  selector: 'svg[si-victoriametrics-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>VictoriaMetrics</title>
    <svg:path
      d="M1.893 3.078C.239 1.537 4.846.009 11.963 0h.076c7.116.009 11.723 1.537 10.067 3.078 0 0-6.168 5.655-8.301 7.473-.404.346-1.084.607-1.766.616h-.076c-.682-.009-1.362-.271-1.767-.616-2.132-1.818-8.301-7.473-8.303-7.473Zm20.549 2.771V8.58c0 .3-.115.698-.319.885-1.332 1.222-6.47 5.925-8.319 7.502-.405.345-1.085.606-1.767.615h-.072c-.683-.009-1.362-.27-1.767-.615-1.849-1.577-6.987-6.28-8.32-7.502-.204-.187-.318-.585-.318-.885V5.849c1.96 1.788 7.163 6.505 8.638 7.764.404.346 1.084.607 1.767.616h.072c.682-.009 1.362-.271 1.767-.616 1.474-1.258 6.678-5.973 8.638-7.764Zm0 6.418v2.73c0 .301-.115.698-.319.885-1.332 1.222-6.47 5.926-8.319 7.502-.405.346-1.085.607-1.767.616h-.072c-.683-.009-1.362-.271-1.767-.616-1.849-1.576-6.987-6.28-8.32-7.502-.204-.187-.318-.585-.318-.885v-2.73c1.96 1.788 7.163 6.505 8.638 7.764.404.346 1.084.606 1.767.615h.072c.682-.009 1.362-.27 1.767-.615 1.474-1.258 6.678-5.976 8.638-7.764Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiVictoriametricsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
