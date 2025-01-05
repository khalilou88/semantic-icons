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
  selector: 'svg[si-capacitor-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Capacitor</svg:title>
    <svg:path
      d="M24 3.7l-5.766 5.766 5.725 5.736-3.713 3.712L5.073 3.742 8.786.03l5.736 5.726L20.284 0 24 3.7zM.029 8.785l3.713-3.713 15.173 15.173-3.713 3.714-5.732-5.726L3.7 24 0 20.285l5.754-5.764L.029 8.785z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCapacitorIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '119EFF');
  }
}
