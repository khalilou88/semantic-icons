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
  selector: 'svg[si-lens-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Lens</svg:title>
    <svg:path
      d="M9.255 3.5H3.5v4.255l3.75 4.715ZM3.5 8.955v7.125h5.665ZM19.545 3.5H10.02L8.87 8.635Zm-.9 17H20.5v-8.4l-4.32-2.105Zm-5.79-12.95 7.645 3.72v-7.4ZM3.5 16.825V20.5h6.88l2.875-3.675zm7.83 3.675h6.545l-1.51-6.435zM0 0h24v24H0Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLensIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#3D90CE');
  }
}
