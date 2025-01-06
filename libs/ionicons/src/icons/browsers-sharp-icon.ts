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
  selector: 'svg[si-browsers-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M32 64v384a16 16 0 0016 16h416a16 16 0 0016-16V64a16 16 0 00-16-16H48a16 16 0 00-16 16zm408 364H72a4 4 0 01-4-4V152a4 4 0 014-4h368a4 4 0 014 4v272a4 4 0 01-4 4z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBrowsersSharpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
