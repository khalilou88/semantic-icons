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
  selector: 'svg[si-slides-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Slides</svg:title>
    <svg:path
      d="M4.695.395 4.578.97l5.7.552zm-2.443.851-.04.406H6.44ZM0 2.152V21.85h19.697V2.152Zm20.197.836V20.24l1.66-17.092zm2.084.965-1.65 17.002L24 4.301ZM9.928 7.361c.595 0 1.127.075 1.593.227.467.152.7.321.7.508 0 .151-.068.347-.201.586-.135.239-.255.359-.36.359-.012 0-.086-.035-.226-.105a2.82 2.82 0 0 0-1.34-.315c-.496 0-.88.103-1.155.307a.95.95 0 0 0-.412.797c0 .326.103.583.307.77.204.186.55.355 1.041.507 1.097.339 1.841.709 2.232 1.111.391.403.586 1.01.586 1.82 0 .812-.289 1.481-.867 2.006-.578.526-1.269.788-2.074.788-.805 0-1.499-.12-2.082-.36-.584-.239-.875-.47-.875-.691 0-.117.073-.292.219-.526.145-.233.275-.35.392-.35.012 0 .106.056.281.167.176.11.426.223.752.334.327.11.72.166 1.182.166.461 0 .841-.132 1.139-.395.297-.262.445-.619.445-1.068 0-.45-.13-.8-.393-1.05-.262-.252-.786-.488-1.568-.71-.782-.221-1.347-.503-1.697-.848-.35-.344-.526-.866-.526-1.566 0-.7.268-1.287.805-1.76.537-.472 1.238-.709 2.102-.709Zm5.86 14.989 4.165.404.04-.404zm1.126.613 3.18.642.066-.328z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSlidesIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#E4637C');
  }
}
