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
  selector: 'svg[si-square-foot-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m17.66 17.66-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06L9.7 9.7l-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06L4 4v16h16l-2.34-2.34zM7 17v-5.76L12.76 17H7z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSquareFootIcon implements OnInit {
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
