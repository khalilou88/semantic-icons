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
    <svg:path
      d="M20 19h-1V5c0-.55-.45-1-1-1h-4c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v15H4c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1V6h3v14c0 .55.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1zm-9-6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
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
