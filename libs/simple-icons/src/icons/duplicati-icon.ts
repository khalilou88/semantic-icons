import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-duplicati-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Duplicati</title>
    <svg:path
      d="M8.571 1.286A1.72 1.72 0 0 0 6.857 3v10.286c0 .634.353 1.183.868 1.48.251.144.538.234.846.234h13.715A1.72 1.72 0 0 0 24 13.286V3a1.72 1.72 0 0 0-1.714-1.714Zm.56 12.087zm3.166 0zm-10.583-.087A1.72 1.72 0 0 0 0 15v6a1.72 1.72 0 0 0 1.714 1.714h8.572a1.715 1.715 0 0 0 1.473-.857c.148-.253.241-.544.241-.857v-4.286H8.571c-.296 0-.582-.042-.857-.114a3.439 3.439 0 0 1-2.571-3.314Zm18 3.428h-6V21H18a1.72 1.72 0 0 0 1.714-1.714z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiDuplicatiIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}