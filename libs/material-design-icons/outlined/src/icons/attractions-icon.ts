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
  selector: 'svg[si-attractions-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.15 14.42c.23-.77.35-1.58.35-2.42s-.12-1.65-.35-2.42c.78-.6 1.02-1.7.51-2.58s-1.58-1.23-2.49-.85a8.53 8.53 0 0 0-4.18-2.42C13.85 2.75 13.01 2 12 2s-1.85.75-1.98 1.73a8.561 8.561 0 0 0-4.19 2.42c-.91-.38-1.98-.03-2.49.85s-.27 1.98.51 2.58c-.23.77-.35 1.58-.35 2.42s.12 1.65.35 2.42c-.78.6-1.02 1.7-.51 2.58s1.58 1.23 2.49.85c.4.42.83.79 1.3 1.12L5.78 22h1.88l.98-2.19c.44.19.9.34 1.38.46.13.98.97 1.73 1.98 1.73s1.85-.75 1.98-1.73c.46-.11.91-.26 1.34-.44L16.3 22h1.88l-1.34-3c.48-.34.93-.72 1.34-1.15.91.38 1.99.03 2.49-.85.5-.88.26-1.98-.52-2.58zm-6.59 4.33c-.37-.46-.93-.75-1.56-.75s-1.2.29-1.57.75c-.4-.09-.79-.21-1.16-.37l1.43-3.19a3.522 3.522 0 0 0 2.56.02l1.42 3.18c-.36.15-.73.27-1.12.36zm-3.08-6.73c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm8.23 1.99c-.61.07-1.18.41-1.52.99-.32.56-.34 1.2-.12 1.75-.28.29-.58.55-.9.79l-1.5-3.35c.49-.59.78-1.34.78-2.16 0-1.89-1.55-3.41-3.46-3.41s-3.46 1.53-3.46 3.41c0 .8.28 1.54.75 2.13l-1.52 3.39c-.31-.23-.6-.48-.87-.76.26-.56.24-1.22-.09-1.79-.34-.59-.93-.94-1.56-.99-.22-.68-.33-1.4-.33-2.15 0-.64.09-1.26.25-1.85.66-.03 1.3-.38 1.65-1 .37-.63.35-1.38.01-1.98.92-.98 2.11-1.69 3.45-2.03.34.59.99 1 1.73 1s1.39-.4 1.73-1c1.34.34 2.53 1.07 3.44 2.05-.32.59-.33 1.33.03 1.95.35.6.96.95 1.6 1 .16.59.25 1.21.25 1.86 0 .75-.12 1.47-.34 2.15z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAttractionsIcon implements OnInit {
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
