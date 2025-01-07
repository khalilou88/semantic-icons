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
  selector: 'svg[si-meeting-room-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M7 19h6V5H7v14zm3-8h2v2h-2v-2z" opacity=".3" />
    <svg:path
      d="M19 19V4h-4V3H5v16H3v2h12V6h2v15h4v-2h-2zm-6 0H7V5h6v14zm-3-8h2v2h-2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMeetingRoomIcon implements OnInit {
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
