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
      d="m12.49 13-.93-1.86c-.37-.74-.07-1.64.67-2.01a.41.41 0 0 1 .47.07l5.53 5.26c.5.47.78 1.13.78 1.81v5.23a2.5 2.5 0 0 1-2.5 2.5h-11c-.55 0-1-.45-1-1s.45-1 1-1H10v-1H4c-.55 0-1-.45-1-1s.45-1 1-1h6v-1H3c-.55 0-1-.45-1-1s.45-1 1-1h7v-1H4.5c-.55 0-1-.45-1-1s.45-1 1-1h7.99zm-.71-5.88c-.84.4-1.17.62-1.63 1.19l-2.7-2.85A.996.996 0 1 1 8.9 4.09l2.88 3.03zM9.64 9.21a3.46 3.46 0 0 0-.2 1.79h-.86L6.31 8.61a.987.987 0 0 1 .04-1.41.996.996 0 0 1 1.41.04l1.88 1.97zm10.69 4.7.88-.83c.5-.47.79-1.13.79-1.82V3.64c0-.17-.11-.33-.27-.39-.78-.28-1.64.12-1.92.9l-.71 1.96-5.5-5.8a.996.996 0 1 0-1.45 1.37l3.79 3.99-.73.69-4.82-5.08a.996.996 0 1 0-1.45 1.37l3.78 3.98L15.38 9l3.61 3.43.61.58c.29.27.53.57.73.9z"
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
