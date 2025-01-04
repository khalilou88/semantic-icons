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
  selector: 'svg[si-bt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>BT</svg:title>
    <svg:path
      d="M12.589 7.91h5.977v1.753H16.56v6.41h-1.97v-6.41h-2zM12 22.523C6.193 22.523 1.477 17.807 1.477 12 1.477 6.193 6.193 1.477 12 1.477c5.807 0 10.523 4.716 10.523 10.523 0 5.807-4.716 10.523-10.523 10.523M12 24c6.626 0 12-5.374 12-12S18.626 0 12 0C5.379 0 0 5.374 0 12s5.379 12 12 12M9.97 13.574c0-.516-.321-.865-.873-.865h-1.32v1.702h1.32c.552 0 .874-.345.874-.837m-.24-3.276c0-.433-.275-.732-.745-.732h-1.21v1.486h1.21c.47 0 .746-.299.746-.754m2.231 3.372c0 1.546-1.09 2.402-2.65 2.402H5.834V7.91h3.249c1.573 0 2.64.805 2.64 2.277 0 .672-.298 1.27-.781 1.634.552.326 1.021.947 1.021 1.85Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBtIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
