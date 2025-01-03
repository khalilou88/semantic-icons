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
  selector: 'svg[si-htc-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>HTC</title>
    <svg:path
      d="M22 14.75h-2.8c-.7-.05-1.15-.5-1.2-1.15v-1.15c.05-.65.6-1.25 1.2-1.25H24V9.95h-4.85c-.65.05-1.25.25-1.7.7-.4.4-.65 1.1-.7 1.75 0 .35-.05.85 0 1.15.05.75.3 1.3.7 1.7.4.45 1.05.7 1.7.7H24V14.7c0 .05-1.3.05-2 .05M8.5 10v1.25h2.95v4.7h1.25v-4.7h2.95V10Zm-1.3 2.35c0-.65-.25-1.25-.7-1.7-.5-.5-1.2-.7-1.7-.7H2.35c-.55 0-.95.2-1.15.35V8H0v8h1.25v-3.6c.05-.65.55-1.15 1.15-1.2.5-.05 1.95-.05 2.4 0 .65.05 1.1.55 1.15 1.2V16H7.2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiHtcIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}