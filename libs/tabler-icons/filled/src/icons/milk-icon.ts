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
  selector: 'svg[si-milk-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M17.799 7l.144 .23a7 7 0 0 1 1.057 3.7v8.07a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-8.071a7 7 0 0 1 1.057 -3.698l.142 -.231zm-5.799 6a3 3 0 0 0 -2.995 2.824l-.005 .176a3 3 0 1 0 3 -3m0 2a1 1 0 1 1 0 2a1 1 0 0 1 0 -2m2 -6h-4a1 1 0 1 0 0 2h4a1 1 0 0 0 0 -2m1 -7a2 2 0 0 1 2 2v1h-10v-1a2 2 0 0 1 2 -2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiMilkIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
