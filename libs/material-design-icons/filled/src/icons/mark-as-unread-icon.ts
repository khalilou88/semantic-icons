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
  selector: 'svg[si-mark-as-unread-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.83 7h-2.6L10.5 4 4 7.4V17c-1.1 0-2-.9-2-2V7.17c0-.53.32-1.09.8-1.34L10.5 2l7.54 3.83c.43.23.73.7.79 1.17zM20 8H7c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm0 3.67L13.5 15 7 11.67V10l6.5 3.33L20 10v1.67z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMarkAsUnreadIcon implements OnInit {
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
