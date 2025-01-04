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
  selector: 'svg[si-samsclub-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Sam's Club</svg:title>
    <svg:path
      d="m14.275 1.71 9.403 9.504a1.119 1.119 0 0 1 .001 1.569l-9.401 9.507-1.624-1.64a1.136 1.136 0 0 1 0-1.596L19.631 12l-6.917-6.99a1.225 1.225 0 0 1 0-1.72l1.56-1.579zm-3.026 1.572L9.695 1.71.34 11.17a1.186 1.186 0 0 0 0 1.663l9.356 9.457 1.553-1.57a1.237 1.237 0 0 0 0-1.737L4.341 12l6.909-6.985a1.235 1.235 0 0 0-.001-1.734z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSamsclubIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
