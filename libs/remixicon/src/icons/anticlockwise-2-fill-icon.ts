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
  selector: 'svg[si-anticlockwise-2-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14 4H16C18.7614 4 21 6.23858 21 9V13H19V9C19 7.34315 17.6569 6 16 6H14V9L9 5L14 1V4ZM15 11V21C15 21.5523 14.5523 22 14 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H14C14.5523 10 15 10.4477 15 11Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAnticlockwise2FillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
