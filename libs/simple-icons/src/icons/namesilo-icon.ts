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
  selector: 'svg[si-namesilo-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>NameSilo</title>
    <svg:path
      d="M4.65 0A4.65 4.65 0 0 0 0 4.65v14.7A4.65 4.65 0 0 0 4.65 24h14.7A4.65 4.65 0 0 0 24 19.35V4.65A4.65 4.65 0 0 0 19.35 0Zm7.21 4.2 4.64 3.048V8.86h-.006c-.124.4-2.156.718-4.644.718S7.33 9.26 7.206 8.86H7.2V7.248ZM7.2 9.384c0 .5 2.082.906 4.65.906 2.568 0 4.65-.406 4.65-.906v2.587c0 .5-2.082.905-4.65.905-2.568 0-4.65-.405-4.65-.905zm0 3.3c0 .5 2.082.906 4.65.906 2.568 0 4.65-.405 4.65-.905v2.586c0 .5-2.082.906-4.65.906-2.568 0-4.65-.406-4.65-.906zm0 3.301c0 .5 2.082.906 4.65.906 2.568 0 4.65-.406 4.65-.906v2.587c0 .5-2.082.906-4.65.906-2.568 0-4.65-.406-4.65-.906z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNamesiloIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
