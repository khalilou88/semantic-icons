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
  selector: 'svg[si-iberia-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Iberia</svg:title>
    <svg:path
      d="M9.356 11.563c4.53-3.254 9.047-5.217 13.547-5.723L24 2.978c-6.662 0-7.57 1.457-9.873 3.752M0 21.021c14.719 0 18.189-3.46 20.213-8.17l1.7-4.434c-4.958.143-12.441 3.066-17.673 8.324"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiIberiaIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'D7192D');
  }
}
