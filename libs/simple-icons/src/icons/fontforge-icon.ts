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
  selector: 'svg[si-fontforge-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>FontForge</svg:title>
    <svg:path
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12S18.628 0 12 0Zm6.32 7.04c-.602 0-.305-1.375-1.156-1.375-.696 0-1.274 1.836-1.563 3.437h1.5c.172 0 .203.125.203.258 0 .359-.164.664-.46.664h-1.477s-.679 3.212-1.18 5.218c-.201.806-.527 1.439-.92 1.93l.02.01 2.461-2.272-.383-.016a.003.003 0 0 1-.002 0v-.003l.013-.337c0-.001.001-.002.003-.002l.614.024.024-.614.001-.002h.002l.337.013c.002 0 .003.002.003.003l-.025.614.614.024.002.001v.002l-.013.337a.003.003 0 0 1-.003.003l-.614-.024-.024.613v.002l-.003.001-.332-.013h-.005a.003.003 0 0 1-.002-.001.003.003 0 0 1 0-.002l.014-.36-2.448 2.26a.633.633 0 0 1-.268.854.631.631 0 0 1-.485.044.631.631 0 0 1-.147-.067l-2.389 2.205.34.013c.001 0 .003.002.003.004l-.014.337a.003.003 0 0 1-.003.002l-.614-.024-.024.613a.003.003 0 0 1-.003.003h-.001l-.336-.013a.003.003 0 0 1-.003-.003l.024-.614-.613-.024a.003.003 0 0 1-.003-.003l.013-.337c0-.002.002-.003.003-.003l.614.024.024-.613a.003.003 0 0 1 .001-.002l.002-.001.338.013.002.001v.002l-.016.403 2.424-2.237-.008-.016c-.758.515-1.59.7-2.233.7-.617 0-1.274-.218-1.711-.671-.586.601-1.476 1.078-2.43 1.078-.468 0-1.25-.313-1.25-.906 0-.336.337-.844.696-.844.633 0 .71.687 1.422.687.343 0 .582-.094.867-1.124.625-2.258 1.57-6.89 1.57-6.89H8.196c-.18 0-.203-.11-.203-.227 0-.312.117-.695.515-.695h1.04c.57-1.96 1.835-3.796 4.163-3.796.75 0 1.437.25 1.78.68.844-.852 1.633-1.087 2.313-1.087 1.094 0 1.437.696 1.437 1.156 0 .578-.367.985-.921.985zm-8.415 7.975c-.247.953-.454 1.488-.67 1.938.445.523 1.023.788 1.523.788.61 0 1.094-.203 1.39-1.265.703-2.53 1.485-6.452 1.485-6.452h-2.578c-.375 1.728-.787 3.591-1.15 4.991zm3.196-8.928c-1.101 0-1.601 1.827-1.843 3.015h2.609a9.07 9.07 0 0 1 .836-2.055c-.375-.593-1.024-.96-1.602-.96Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFontforgeIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'F2712B');
  }
}
