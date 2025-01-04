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
  selector: 'svg[si-kodak-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Kodak</svg:title>
    <svg:path
      d="M20.496 9.076a.735.735 0 0 0 .84-.844c0-.51-.255-.771-.84-.771s-.835.263-.835.77a.733.733 0 0 0 .835.845zm.128 2.126h-.82v1.538h.82c.448 0 .634-.307.634-.81 0-.494-.186-.728-.634-.728zM2.406 12.848a1.448 1.448 0 0 1-.346-.753 1.058 1.058 0 0 1 .173-.603l6.739-9.138a.447.447 0 0 0 .077-.282.51.51 0 0 0-.52-.51H1.54A1.56 1.56 0 0 0 0 3.106v17.805a1.53 1.53 0 0 0 1.536 1.526h6.993a.513.513 0 0 0 .52-.505v-.005a.63.63 0 0 0-.096-.32l-6.547-8.759zM20.03 16.01h.928l-.464-1.154-.464 1.154zm2.468-14.446h-6.782a2.223 2.223 0 0 0-1.522.716L2.905 11.887c-.1.106-.1.271 0 .377l11.59 9.74c.346.279.776.432 1.22.434h6.763A1.517 1.517 0 0 0 24 20.926V3.11a1.542 1.542 0 0 0-1.502-1.546zM19.25 3.306h.643v1.166l1.157-1.166h.896l-1.295 1.272 1.345 1.268h-.918l-1.184-1.162v1.162h-.644v-2.54zm1.332 3.621c.945 0 1.47.437 1.47 1.299 0 .846-.51 1.367-1.47 1.367s-1.47-.521-1.47-1.367c0-.863.527-1.299 1.472-1.299h-.002zm1.392 5c0 .824-.367 1.317-1.272 1.317h-1.447v-2.565h1.447c.905 0 1.272.425 1.272 1.248zm-.896 8.703-1.184-1.163v1.163h-.643v-2.54h.643v1.166l1.158-1.166h.855l-1.252 1.272L22 20.63h-.922zm.325-3.692-.18-.449h-1.286l-.176.449h-.685l1.1-2.586h.848l1.096 2.586h-.717z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKodakIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
