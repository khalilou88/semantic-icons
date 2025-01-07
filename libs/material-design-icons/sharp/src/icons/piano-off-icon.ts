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
  selector: 'svg[si-piano-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V21h15.17l1.61 1.61 1.41-1.42zM8.25 19H5V7.83l2 2v4.67h1.25V19zm1.5 0v-4.5H11v-.67l3.25 3.25V19h-4.5zM5.83 3H21v15.17l-2-2V5h-2v9.17l-4-4V5h-2v3.17L5.83 3z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPianoOffIcon implements OnInit {
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
