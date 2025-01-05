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
  selector: 'svg[si-drone-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Drone</svg:title>
    <svg:path
      d="M15.07 13.633a3.07 3.07 0 1 1-6.14 0 3.07 3.07 0 0 1 6.14 0zM12 1.856c5.359.042 11.452 3.82 12 10.94h-7.256S15.809 8.863 12 8.889s-4.744 3.907-4.744 3.907H0C.353 5.802 6.344 1.812 12 1.856zM12.05 22.144c-3.996.011-7.729-3.005-9.259-7.674h4.465s.963 3.889 4.773 3.863 4.716-3.863 4.716-3.863h4.465c-.995 4.94-5.164 7.664-9.159 7.674z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDroneIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '212121');
  }
}
