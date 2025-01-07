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
  selector: 'svg[si-radio-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 6H8.3l8.26-3.34L15.88 1 3.24 6.15C2.51 6.43 2 7.17 2 8v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-1.11-.89-2-2-2zm0 2v3h-2V9h-2v2H4V8h16zM4 20v-7h16v7H4z"
    />
    <svg:circle cx="8" cy="16.48" r="2.5" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRadioIcon implements OnInit {
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
