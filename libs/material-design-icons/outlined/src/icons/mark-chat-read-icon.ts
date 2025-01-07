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
  selector: 'svg[si-mark-chat-read-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 18H6l-4 4V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v7h-2V4H4v12h8v2zm11-3.66-1.41-1.41-4.24 4.24-2.12-2.12-1.41 1.41L17.34 20 23 14.34z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMarkChatReadIcon implements OnInit {
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
