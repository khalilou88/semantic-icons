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
  selector: 'svg[si-done-all-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.3 6.3a.996.996 0 0 0-1.41 0l-5.64 5.64 1.41 1.41L17.3 7.7c.38-.38.38-1.02 0-1.4zm4.24-.01-9.88 9.88-3.48-3.47a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L22.95 7.71a.996.996 0 0 0 0-1.41h-.01a.975.975 0 0 0-1.4-.01zM1.12 14.12 5.3 18.3c.39.39 1.02.39 1.41 0l.7-.7-4.88-4.9a.996.996 0 0 0-1.41 0c-.39.39-.39 1.03 0 1.42z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDoneAllIcon implements OnInit {
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
