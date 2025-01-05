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
  selector: 'svg[si-phosphoricons-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Phosphor Icons</svg:title>
    <svg:path
      d="M12.404.001H3.866a.618.618 0 0 0-.619.619v15.173A8.217 8.217 0 0 0 11.449 24a.617.617 0 0 0 .618-.619v-6.969h.332a8.204 8.204 0 0 0 7.715-5.031 8.216 8.216 0 0 0 0-6.349A8.214 8.214 0 0 0 12.399.001h.005Zm-1.579 22.736a6.98 6.98 0 0 1-6.317-6.317h6.317v6.317Zm0-9.562L4.869 1.238h5.967l-.011 11.937Zm1.579 2h-.331V1.238h.331a6.975 6.975 0 0 1 5.016 1.993 6.986 6.986 0 0 1 1.546 2.277 6.987 6.987 0 0 1 0 5.397 6.975 6.975 0 0 1-6.562 4.27Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPhosphoriconsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '3C402B');
  }
}
