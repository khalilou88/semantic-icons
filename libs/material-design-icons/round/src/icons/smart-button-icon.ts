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
  selector: 'svg[si-smart-button-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 9v6c0 1.1-.9 2-2 2h-1v-2h1V9H4v6h6v2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-7.96 8.99a.5.5 0 0 0 .91 0l.63-1.4 1.4-.63a.5.5 0 0 0 0-.91l-1.4-.63-.63-1.4a.5.5 0 0 0-.91 0l-.63 1.4-1.4.63a.5.5 0 0 0 0 .91l1.4.63.63 1.4zm2.7-4.56c.1.22.42.22.52 0l.36-.8.8-.36c.22-.1.22-.42 0-.52l-.8-.36-.36-.8a.287.287 0 0 0-.52 0l-.36.8-.8.36c-.22.1-.22.42 0 .52l.8.36.36.8z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSmartButtonIcon implements OnInit {
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
