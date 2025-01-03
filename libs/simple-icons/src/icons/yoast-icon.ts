import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-yoast-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Yoast</title>
    <svg:path
      d="M16.61 0 11.4 14.477 8.806 6.36H5.941l3.804 9.77a4.017 4.017 0 0 1 0 2.925c-.387.993-1.073 2.158-2.96 2.505V24c1.512-.06 2.692-.562 3.694-1.57 1.032-1.036 1.919-2.655 2.79-5.091L19.739 0ZM5.357 3.274a3.706 3.706 0 0 0-3.695 3.695v10.358a3.706 3.706 0 0 0 3.695 3.694h.817l.26-.034c1.76-.237 2.37-1.224 2.733-2.158a3.4 3.4 0 0 0 0-2.475L5.035 5.738H9.26l2.174 6.81 3.339-9.274Zm13.792.08L13.853 17.55c-.502 1.403-1.015 2.54-1.559 3.47h10.044V6.97a3.706 3.706 0 0 0-3.19-3.616Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiYoastIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}