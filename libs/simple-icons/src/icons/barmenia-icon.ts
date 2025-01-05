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
  selector: 'svg[si-barmenia-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Barmenia</svg:title>
    <svg:path
      d="M7.046 13.427v6.395h5.709a5.41 5.41 0 0 0 2.377-.422c1.021-.537 1.532-1.537 1.532-2.999a2.591 2.591 0 0 0-1.492-2.571 5.834 5.834 0 0 0-2.347-.403zm0-9.26v5.287h5.714a4.722 4.722 0 0 0 2.486-.592c.637-.398.955-1.101.955-2.109 0-1.117-.421-1.855-1.263-2.213a8.63 8.63 0 0 0-2.78-.368zm12.761-1.611a6.19 6.19 0 0 1 1.079 3.66 5.433 5.433 0 0 1-1.089 3.531 5.617 5.617 0 0 1-1.791 1.388 5.232 5.232 0 0 1 2.716 2.113 6.474 6.474 0 0 1 .915 3.481 7.069 7.069 0 0 1-1.05 3.854 6.467 6.467 0 0 1-4.316 3.093c-1.093.222-2.207.33-3.322.324H2.361V0H13.72c2.864.046 4.893.899 6.087 2.556"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBarmeniaIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#009FE3');
  }
}
