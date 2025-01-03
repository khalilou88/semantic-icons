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
  selector: 'svg[si-sifive-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>SiFive</title>
    <svg:path
      d="M2.9056 12.4076 6.0245 2.737h11.9511l1.2129 3.7623H8.6317l-.6751 2.1342h11.92l1.792 5.5583L12 21.319l-9.1888-6.7771h6.2049l2.9565 2.1805 5.8505-4.3125-14.9175-.0023zM19.4166.4426H4.5835L0 14.7306l12 8.8268 12-8.8298L19.4165.4427z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSifiveIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
