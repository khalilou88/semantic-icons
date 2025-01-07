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
  selector: 'svg[si-scoreboard-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18 9h-2.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1H18c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-.5 4.5H16v-3h1.5v3zm-8 1.5H5v-2.5c0-.55.45-1 1-1h2v-1H5V9h3.5c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1h-2v1h3V15zm3.25-4h-1.5V9.5h1.5V11zm0 3.5h-1.5V13h1.5v1.5zM22 6v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3V2h2v2h6V2h2v2h3c1.1 0 2 .9 2 2zm-2 12V6h-7.25v1.5h-1.5V6H4v12h7.25v-1.5h1.5V18H20z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiScoreboardIcon implements OnInit {
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
