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
  selector: 'svg[si-php-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13 9h1.5v6H13v-2.5h-2V15H9.5V9H11v2h2V9zm-5 1.5v1c0 .8-.7 1.5-1.5 1.5h-2v2H3V9h3.5c.8 0 1.5.7 1.5 1.5zm-1.5 0h-2v1h2v-1zm15 0v1c0 .8-.7 1.5-1.5 1.5h-2v2h-1.5V9H20c.8 0 1.5.7 1.5 1.5zm-1.5 0h-2v1h2v-1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPhpIcon implements OnInit {
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
