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
  selector: 'svg[si-fork-left-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15 20c0 .55-.45 1-1 1s-1-.45-1-1v-3c-.73-2.58-3.07-3.47-5.17-3l.88.88a.996.996 0 1 1-1.41 1.41L4.71 13.7a.996.996 0 0 1 0-1.41L7.3 9.7a.996.996 0 1 1 1.41 1.41l-.88.89c1.51-.33 3.73.08 5.17 1.36V6.83l-.88.88a.996.996 0 1 1-1.41-1.41l2.59-2.59a.996.996 0 0 1 1.41 0L17.3 6.3a.996.996 0 1 1-1.41 1.41L15 6.83V20z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiForkLeftIcon implements OnInit {
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
