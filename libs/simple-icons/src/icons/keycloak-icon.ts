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
  selector: 'svg[si-keycloak-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Keycloak</svg:title>
    <svg:path
      d="m18.742 1.182-12.493.002C4.155 4.784 2.079 8.393 0 12.002c2.071 3.612 4.162 7.214 6.252 10.816l12.49-.004 3.089-5.404h2.158v-.002H24L23.996 6.59h-2.168zM8.327 4.792h2.081l1.04 1.8-3.12 5.413 3.117 5.403-1.035 1.81H8.327a2047.566 2047.566 0 0 0-4.168-7.204C5.547 9.606 6.937 7.2 8.327 4.792Zm6.241 0 2.086.003c1.393 2.405 2.78 4.813 4.166 7.222l-4.167 7.2h-2.08c-.382-.562-1.038-1.808-1.038-1.808l3.123-5.405-3.124-5.413z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKeycloakIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#4D4D4D');
  }
}
