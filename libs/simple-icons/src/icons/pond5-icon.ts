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
  selector: 'svg[si-pond5-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Pond5</svg:title>
    <svg:path
      d="M21.504 11.385h.755c.92 0 1.747.286 1.741 1.388 0 1.047-.932 1.412-1.717 1.412-.993 0-1.75-.359-1.754-1.37v-.14h.944v.14c0 .384.442.53.798.53.233 0 .784-.085.784-.572.006-.475-.508-.572-.797-.572h-1.644V9.875h3.146v.853h-2.256Zm-4.167 2.745h-1.76V9.87h1.76c1.478 0 2.134.985 2.134 2.1 0 1.113-.632 2.16-2.134 2.16zm0-3.402h-.816v2.526h.816c.932 0 1.19-.682 1.19-1.297 0-.615-.295-1.23-1.19-1.23zm-6.055 1.14v2.262h-.955V9.81l.134-.023 2.598 2.33V9.869h.957v4.333l-.1.017-2.634-2.351zm-4.431 2.367c-1.374 0-2.319-.848-2.319-2.235 0-1.388.945-2.235 2.319-2.235 1.373 0 2.318.847 2.318 2.235 0 1.387-.944 2.234-2.318 2.234zm0-3.618c-.816 0-1.38.61-1.38 1.382 0 .798.564 1.376 1.38 1.376.834 0 1.38-.584 1.38-1.376 0-.779-.546-1.382-1.38-1.382zm-4.827 2.308h-.587v-.87h.587c.46 0 .686-.299.686-.64 0-.34-.232-.645-.686-.645H.957v3.36H0V9.87h2.024c1.097 0 1.642.705 1.642 1.527 0 .852-.552 1.516-1.643 1.528z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPond5Icon implements OnInit {
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
