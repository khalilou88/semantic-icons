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
  selector: 'svg[si-rstudioide-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>RStudio IDE</title>
    <svg:path
      d="M12.178.002a12.002 12.002 0 0 0-8.662 3.515 12.002 12.002 0 0 0 0 16.97 12.002 12.002 0 0 0 16.97 0 12.002 12.002 0 0 0 0-16.97A12.002 12.002 0 0 0 12.179.002zM7.77 5.995c.562.128 1.05.217 1.663.217.921 0 1.863-.217 2.786-.217 1.79 0 3.45.814 3.45 2.8 0 1.54-.921 2.517-2.35 2.93l2.788 4.107h1.301v1.01h-1.986l-3.293-4.934h-1.757v3.924h1.718v1.01H7.77v-1.01h1.483V7.134L7.77 6.951v-.957zm4.466 1.012c-.596 0-1.213.053-1.864.127v3.798l.941.02c2.298.034 3.183-.85 3.183-2.026 0-1.376-.997-1.919-2.26-1.919z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiRstudioideIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
