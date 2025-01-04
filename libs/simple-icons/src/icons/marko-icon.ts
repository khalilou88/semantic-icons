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
  selector: 'svg[si-marko-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Marko</svg:title>
    <svg:path
      d="M15.4 5.46h-3.39l-2.3 3.77L7.4 5.46H4l-4 6.55 4 6.53h3.39l-4-6.54L5.7 8.23 8.01 12h3.39l2.31-3.78L16.03 12l-4.01 6.54h3.39l4-6.54zm4.6 0h-3.39l4 6.54-4.01 6.54h3.39L24 12z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMarkoIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
