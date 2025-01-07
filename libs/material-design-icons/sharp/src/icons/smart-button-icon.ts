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
  selector: 'svg[si-smart-button-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 17h-3v-2h1V9H4v6h6v2H2V7h20v10zm-7.5 2 1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09L14.5 19zm2.5-5 .62-1.38L19 12l-1.38-.62L17 10l-.62 1.38L15 12l1.38.62L17 14z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSmartButtonIcon implements OnInit {
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
