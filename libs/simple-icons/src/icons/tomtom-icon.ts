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
  selector: 'svg[si-tomtom-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>TomTom</svg:title>
    <svg:path
      d="M12 12.584a4.325 4.325 0 0 1-4.32-4.32A4.325 4.325 0 0 1 12 3.944a4.325 4.325 0 0 1 4.32 4.32 4.325 4.325 0 0 1-4.32 4.32zM12 0C7.443 0 3.736 3.707 3.736 8.264c0 4.557 3.707 8.264 8.264 8.264 4.557 0 8.264-3.707 8.264-8.264C20.264 3.707 16.557 0 12 0m0 24 3.167-5.486H8.833Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTomtomIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#DF1B12');
  }
}
