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
  selector: 'svg[si-nunjucks-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Nunjucks</svg:title>
    <svg:path
      d="M0 12v12h24V0H0v12zm8.2-1.9V3h3v17.3h-3c-.7-2.5-1.4-5-2.2-7.5v7.5H3V3h3c.8 2.3 1.5 4.7 2.2 7.1zM20.9 7v11.6c0 .2-.1.7-.5 1.1-.4.4-.8.5-.9.6h-5.1c-.2 0-.7-.1-1-.5-.4-.4-.5-.9-.6-1.2v-3.8c1-.2 2-.5 3-.7v3.1h2.1V7h3zM0 24"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNunjucksIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '1C4913');
  }
}
