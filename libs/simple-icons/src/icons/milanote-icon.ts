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
  selector: 'svg[si-milanote-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Milanote</svg:title>
    <svg:path
      d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 12.943L15.057 16H8.943Zm4-4v6.114L12.943 12Zm-8 6.114V8.943L11.057 12Zm8.917 2.227a.665.665 0 0 0 .367-.367l-.003.009a.665.665 0 0 0 .052-.26V7.334a.667.667 0 0 0-1.138-.471L12 11.057 7.805 6.862a.667.667 0 0 0-1.138.471v9.334a.667.667 0 0 0 .666.666h9.334c.092 0 .18-.018.26-.052l-.01.004z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMilanoteIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#31303A');
  }
}
