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
  selector: 'svg[si-turn-right-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16.29 13.29c.39.39 1.02.39 1.41 0l2.59-2.59a.996.996 0 0 0 0-1.41L17.7 6.7a.996.996 0 1 0-1.41 1.41l.88.89H9c-1.1 0-2 .9-2 2v8c0 .55.45 1 1 1s1-.45 1-1v-8h8.17l-.88.88a.996.996 0 0 0 0 1.41z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTurnRightIcon implements OnInit {
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
