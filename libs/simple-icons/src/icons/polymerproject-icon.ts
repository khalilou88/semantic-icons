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
  selector: 'svg[si-polymerproject-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Polymer Project</svg:title>
    <svg:path
      d="M14.4 3.686L7.2 16.16 4.8 12l4.8-8.314H4.8L0 12l2.4 4.159 2.4 4.155h4.8l7.2-12.469L19.2 12l-4.8 8.314h4.8l2.4-4.155L24 12l-2.4-4.155-2.4-4.159Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPolymerprojectIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#FF4470');
  }
}
