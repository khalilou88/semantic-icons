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
  selector: 'svg[si-toggles2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2s-.195-1.412-.535-2"
    />
    <svg:path
      d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8m.535-10a4 4 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126q.138-.534.41-1H4a2 2 0 1 0 0 4z"
    />
    <svg:path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiToggles2Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '16');
    this.render.setAttribute(svg, 'height', '16');
    this.render.setAttribute(svg, 'viewBox', '0 0 16 16');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
