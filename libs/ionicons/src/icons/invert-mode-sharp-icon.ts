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
  selector: 'svg[si-invert-mode-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM256 432v-96a80 80 0 010-160V80c97.05 0 176 79 176 176s-78.95 176-176 176z"
    />
    <svg:path d="M336 256a80 80 0 00-80-80v160a80 80 0 0080-80z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiInvertModeSharpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
