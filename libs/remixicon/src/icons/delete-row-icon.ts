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
  selector: 'svg[si-delete-row-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 5C20.5523 5 21 5.44772 21 6V12C21 12.5523 20.5523 13 20 13C20.628 13.8355 21 14.8743 21 16C21 18.7614 18.7614 21 16 21C13.2386 21 11 18.7614 11 16C11 14.8743 11.372 13.8355 11.9998 12.9998L4 13C3.44772 13 3 12.5523 3 12V6C3 5.44772 3.44772 5 4 5H20ZM13 15V17H19V15H13ZM19 7H5V11H19V7Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDeleteRowIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
