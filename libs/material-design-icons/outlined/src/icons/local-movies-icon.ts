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
  selector: 'svg[si-local-movies-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14 5v14h-4V5h4m6-2h-2v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3zm-4 6V7h2v2h-2zM6 9V7h2v2H6zm10 4v-2h2v2h-2zM6 13v-2h2v2H6zm10 4v-2h2v2h-2zM6 17v-2h2v2H6z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLocalMoviesIcon implements OnInit {
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
