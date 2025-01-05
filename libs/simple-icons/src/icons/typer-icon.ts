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
  selector: 'svg[si-typer-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Typer</svg:title>
    <svg:path
      d="M21.818 3.646H2.182C.982 3.646 0 4.483 0 5.505v3.707h2.182V5.486h19.636v13.036H2.182v-3.735H0v3.726c0 1.022.982 1.84 2.182 1.84h19.636c1.2 0 2.182-.818 2.182-1.84V5.505c0-1.032-.982-1.859-2.182-1.859Zm-10.909 12.07L15.273 12l-4.364-3.717v2.787H0v1.859h10.909v2.787Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTyperIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#000000');
  }
}
