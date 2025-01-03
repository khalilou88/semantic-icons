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
  selector: 'svg[si-semanticui-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Semantic UI</title>
    <svg:path
      d="M0 0v24h24V0Zm12.086 3.648a7.762 7.762 0 0 1 5.51 2.141l-1.818 2.232c-.488-.302-2.51-1.465-4.122-1.136-1.223.25-1.35 1.088-1.356 1.162-.031.373.364.963.718 1.148 1.656.858 3.761 1.561 4.617 2.024 2.452 1.325 2.638 3.322 2.295 4.873-.902 4.092-6.821 4.835-10.516 2.638a7.119 7.119 0 0 1-1.424-1.097l2.037-2.442c.319.189.45.408 1.485.955 2.47 1.308 4.132.398 4.29.292.528-.356.547-.957.538-1.155-.03-.627-.502-.97-1.115-1.236-1.01-.438-2.7-1.108-3.87-1.647-1.687-.777-2.757-2.046-2.76-3.982-.003-3.209 2.827-4.261 3.91-4.547a6.916 6.916 0 0 1 1.58-.223Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSemanticuiIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}