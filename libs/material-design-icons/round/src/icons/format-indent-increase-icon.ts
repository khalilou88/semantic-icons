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
  selector: 'svg[si-format-indent-increase-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 21h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 9.21v5.59c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.8a.5.5 0 0 0-.85.36zM12 17h8c.55 0 1-.45 1-1s-.45-1-1-1h-8c-.55 0-1 .45-1 1s.45 1 1 1zM3 4c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm9 5h8c.55 0 1-.45 1-1s-.45-1-1-1h-8c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h8c.55 0 1-.45 1-1s-.45-1-1-1h-8c-.55 0-1 .45-1 1s.45 1 1 1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFormatIndentIncreaseIcon implements OnInit {
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
