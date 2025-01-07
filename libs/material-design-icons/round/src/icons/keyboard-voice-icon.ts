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
  selector: 'svg[si-keyboard-voice-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm6.08-3c-.42 0-.77.3-.83.71-.37 2.61-2.72 4.39-5.25 4.39s-4.88-1.77-5.25-4.39a.839.839 0 0 0-.83-.71c-.52 0-.92.46-.85.97.46 2.97 2.96 5.3 5.93 5.75V21c0 .55.45 1 1 1s1-.45 1-1v-2.28c2.96-.43 5.47-2.78 5.93-5.75a.857.857 0 0 0-.85-.97z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKeyboardVoiceIcon implements OnInit {
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
