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
  selector: 'svg[si-no-meals-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16 14V6c0-1.76 2.24-4 5-4v16.17l-2-2V14h-3zm4.49 9.31L10.02 12.85c-.33.09-.66.15-1.02.15v9H7v-9c-2.21 0-4-1.79-4-4V5.83L.69 3.51 2.1 2.1l19.8 19.8-1.41 1.41zM6.17 9 5 7.83V9h1.17zM9 2H7v2.17l2 2V2zm4 7V2h-2v6.17l1.85 1.85c.09-.33.15-.66.15-1.02z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNoMealsIcon implements OnInit {
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
