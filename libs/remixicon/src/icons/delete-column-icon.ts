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
  selector: 'svg[si-delete-column-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 3C12.5523 3 13 3.44772 13 4L12.9998 11.9998C13.8355 11.372 14.8743 11 16 11C18.7614 11 21 13.2386 21 16C21 18.7614 18.7614 21 16 21C14.9681 21 14.0092 20.6874 13.2129 20.1518L13 20C13 20.5523 12.5523 21 12 21H6C5.44772 21 5 20.5523 5 20V4C5 3.44772 5.44772 3 6 3H12ZM11 5H7V19H11V5ZM19 15H13V17H19V15Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDeleteColumnIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
