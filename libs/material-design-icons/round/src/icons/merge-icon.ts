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
  selector: 'svg[si-merge-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.71 7.71a.996.996 0 0 1 0-1.41l2.59-2.59a.996.996 0 0 1 1.41 0L15.3 6.3a.996.996 0 1 1-1.41 1.41L13 6.83v5.1c0 1.06.42 2.08 1.17 2.83l4.12 4.12a.996.996 0 1 1-1.41 1.41L12 15.41l-4.88 4.88a.996.996 0 1 1-1.41-1.41l4.12-4.12c.75-.75 1.17-1.77 1.17-2.83v-5.1l-.88.88a.996.996 0 0 1-1.41 0z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMergeIcon implements OnInit {
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
