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
  selector: 'svg[si-1password-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>1Password</svg:title>
    <svg:path
      d="M12 .007C5.373.007 0 5.376 0 11.999c0 6.624 5.373 11.994 12 11.994S24 18.623 24 12C24 5.376 18.627.007 12 .007Zm-.895 4.857h1.788c.484 0 .729.002.914.096a.86.86 0 0 1 .377.377c.094.185.095.428.095.912v6.016c0 .12 0 .182-.015.238a.427.427 0 0 1-.067.137.923.923 0 0 1-.174.162l-.695.564c-.113.092-.17.138-.191.194a.216.216 0 0 0 0 .15c.02.055.078.101.191.193l.695.565c.094.076.14.115.174.162.03.042.053.087.067.137a.936.936 0 0 1 .015.238v2.746c0 .484-.001.727-.095.912a.86.86 0 0 1-.377.377c-.185.094-.43.096-.914.096h-1.788c-.484 0-.726-.002-.912-.096a.86.86 0 0 1-.377-.377c-.094-.185-.095-.428-.095-.912v-6.016c0-.12 0-.182.015-.238a.437.437 0 0 1 .067-.139c.034-.047.08-.083.174-.16l.695-.564c.113-.092.17-.138.191-.194a.216.216 0 0 0 0-.15c-.02-.055-.078-.101-.191-.193l-.695-.565a.92.92 0 0 1-.174-.162.437.437 0 0 1-.067-.139.92.92 0 0 1-.015-.236V6.25c0-.484.001-.727.095-.912a.86.86 0 0 1 .377-.377c.186-.094.428-.096.912-.096z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Si1passwordIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
