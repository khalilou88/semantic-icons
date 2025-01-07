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
  selector: 'svg[si-keyboard-option-key-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15 6c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1zM9.58 6c-.36-.62-1.02-1-1.73-1H4c-.55 0-1 .45-1 1s.45 1 1 1h3.85l6.35 11c.36.62 1.02 1 1.73 1H20c.55 0 1-.45 1-1s-.45-1-1-1h-4.07L9.58 6z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKeyboardOptionKeyIcon implements OnInit {
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
