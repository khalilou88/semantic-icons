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
  selector: 'svg[si-expand-vertical-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.9995 0.499512L16.9492 5.44926L12.9995 5.44827V9.99951H10.9995V5.44777L7.05222 5.44678L11.9995 0.499512ZM10.9995 13.9995L10.9995 18.5496L7.05026 18.5496L12 23.4995L16.9497 18.5498L12.9995 18.5497V13.9995H10.9995Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiExpandVerticalFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
