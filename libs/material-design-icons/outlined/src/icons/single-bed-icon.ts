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
  selector: 'svg[si-single-bed-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L6 19h1l.67-2h8.67l.66 2h1l.67-2H20v-5zm-4-2h-3V7h3v3zM8 7h3v3H8V7zm-2 5h12v3H6v-3z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSingleBedIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
