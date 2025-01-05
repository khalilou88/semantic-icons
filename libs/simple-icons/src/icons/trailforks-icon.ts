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
  selector: 'svg[si-trailforks-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Trailforks</svg:title>
    <svg:path
      d="M12 1.608 0 22.392h24zm-1.292 5.698h2.584v5.885l2.664 1.917v5.587h-2.204V16.05L12 14.788l-1.752 1.262v4.645H8.044v-5.587l2.664-1.917z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTrailforksIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'FFCD00');
  }
}
