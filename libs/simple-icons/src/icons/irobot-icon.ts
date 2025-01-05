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
  selector: 'svg[si-irobot-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>iRobot</svg:title>
    <svg:path
      d="M23.848 8.166c.75-3.536-1.287-7.264-5.747-7.264h-6.955l-1.152 5.4h5.246c1.076 0 1.748.884 1.517 1.941-.23 1.076-1.267 1.903-2.344 1.903H9.11l7.111 13.143h7.437l-4.806-8.82c1.288-.692 4.21-2.632 4.997-6.303zM1.23 17.505 0 23.31h6.342l2.767-13.145c-3.863.135-6.9 2.71-7.88 7.34zM5.4 6.648a2.985 2.985 0 0 0 2.997-2.98A2.986 2.986 0 0 0 5.4.69a2.986 2.986 0 0 0-2.998 2.98c0 1.633 1.346 2.978 2.998 2.978z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiIrobotIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#6CB86A');
  }
}
