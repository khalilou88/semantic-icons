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
  selector: 'svg[si-ice-skating-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.87 17c-.47 0-.85.34-.98.8A2.997 2.997 0 0 1 18 20h-2v-2h1c1.1 0 2-.9 2-2v-.88c0-2.1-1.55-3.53-3.03-3.88l-2.7-.67c-.87-.22-1.57-.81-1.95-1.57H8.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2.52L11 7H8.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H11V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h1v2H3c-.55 0-1 .45-1 1s.45 1 1 1h15c2.33 0 4.29-1.6 4.84-3.75.17-.63-.32-1.25-.97-1.25zM14 20H8v-2h6v2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiIceSkatingIcon implements OnInit {
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
