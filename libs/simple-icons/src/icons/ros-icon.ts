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
  selector: 'svg[si-ros-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>ROS</svg:title>
    <svg:path
      d="M2.807 0C1.353 0 .173 1.22.173 2.722c0 1.504 1.18 2.723 2.634 2.723 1.455 0 2.635-1.22 2.635-2.723S4.262 0 2.807 0zM12 0c-1.455 0-2.634 1.22-2.634 2.722 0 1.504 1.18 2.723 2.634 2.723 1.455 0 2.634-1.22 2.634-2.723S13.454 0 12 0zm9.193 0c-1.455 0-2.635 1.22-2.635 2.722 0 1.504 1.18 2.723 2.635 2.723 1.455 0 2.634-1.22 2.634-2.723S22.647 0 21.193 0zM2.807 9.277C1.353 9.277.173 10.497.173 12s1.18 2.722 2.634 2.722c1.455 0 2.635-1.219 2.635-2.722 0-1.504-1.18-2.723-2.635-2.723zm9.193 0c-1.455 0-2.634 1.22-2.634 2.723s1.18 2.722 2.634 2.722c1.455 0 2.634-1.219 2.634-2.722 0-1.504-1.18-2.723-2.634-2.723zm9.193 0c-1.455 0-2.635 1.22-2.635 2.723s1.18 2.722 2.635 2.722c1.455 0 2.634-1.219 2.634-2.722 0-1.504-1.18-2.723-2.634-2.723zM2.807 18.555c-1.454 0-2.634 1.22-2.634 2.722C.173 22.781 1.353 24 2.807 24c1.455 0 2.635-1.22 2.635-2.723s-1.18-2.722-2.635-2.722zm9.193 0c-1.455 0-2.634 1.22-2.634 2.722C9.366 22.781 10.546 24 12 24c1.455 0 2.634-1.22 2.634-2.723s-1.18-2.722-2.634-2.722zm9.193 0c-1.455 0-2.635 1.22-2.635 2.722 0 1.504 1.18 2.723 2.635 2.723 1.455 0 2.634-1.22 2.634-2.723s-1.18-2.722-2.634-2.722z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRosIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
