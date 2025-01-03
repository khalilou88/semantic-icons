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
  selector: 'svg[si-hashnode-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.38751 8.69123C1.5375 10.524 1.5375 13.4805 3.38751 15.3132L8.69548 20.6212C10.5282 22.4539 13.5021 22.4539 15.3348 20.6212L20.6255 15.3132C22.4582 13.4805 22.4582 10.5067 20.6255 8.67394L15.3175 3.36597C13.4848 1.55054 10.5282 1.55054 8.69548 3.36597L3.38751 8.69123ZM14.332 14.3277C13.0525 15.6072 10.9605 15.6072 9.681 14.3277C8.40156 13.031 8.40156 10.9562 9.681 9.67675C10.9777 8.39731 13.0525 8.39731 14.332 9.67675C15.6114 10.9735 15.6114 13.0483 14.332 14.3277Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiHashnodeIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}