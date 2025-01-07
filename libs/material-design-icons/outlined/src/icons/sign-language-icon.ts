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
  selector: 'svg[si-sign-language-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m12.49 13-.93-1.86c-.37-.74-.07-1.64.67-2.01l.26-.13 5.73 5.46c.5.47.78 1.13.78 1.81v5.23a2.5 2.5 0 0 1-2.5 2.5h-11c-.55 0-1-.45-1-1s.45-1 1-1H10v-1H4c-.55 0-1-.45-1-1s.45-1 1-1h6v-1H3c-.55 0-1-.45-1-1s.45-1 1-1h7v-1H4.5c-.55 0-1-.45-1-1s.45-1 1-1h7.99zm1.51.2V15h-2v7h4c.55 0 1-.45 1-1v-4.53c0-.27-.11-.54-.31-.73L14 13.2zm-2.22-6.08c-.84.4-1.17.62-1.63 1.19l-2.7-2.85A.996.996 0 1 1 8.9 4.09l2.88 3.03zM9.64 9.21a3.46 3.46 0 0 0-.2 1.79h-.86L6.31 8.61a.987.987 0 0 1 .04-1.41.996.996 0 0 1 1.41.04l1.88 1.97zm10.69 4.7.88-.83c.5-.47.79-1.13.79-1.82V3.35l-.27-.1c-.78-.28-1.64.12-1.92.9l-.71 1.96-5.5-5.8a.996.996 0 1 0-1.45 1.37l3.79 3.99-.73.69-4.82-5.08a.996.996 0 1 0-1.45 1.37l3.78 3.98L15.38 9l1.93-1.87 1.38 1.45L20 7.34v3.7c0 .28-.11.54-.31.73l-.7.66.61.58c.29.27.53.57.73.9z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSignLanguageIcon implements OnInit {
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
