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
  selector: 'svg[si-googlechronicle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Google Chronicle</svg:title>
    <svg:path
      d="m2.719 4.812 4.812 3v4l-4.812 3Zm0 10 4.812-3v9.375l-3.914-2.389a1.875 1.875 0 0 1-.898-1.6ZM2.719 0h18.562v4.812H2.719Zm4.812 21.188 13.75-8.594v4.618c0 .626-.323 1.208-.854 1.539L12 24Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGooglechronicleIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '4285F4');
  }
}
