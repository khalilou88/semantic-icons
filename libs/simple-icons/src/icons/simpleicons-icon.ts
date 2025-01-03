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
  selector: 'svg[si-simpleicons-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Simple Icons</title>
    <svg:path
      d="M12 0C8.688 0 6 2.688 6 6s2.688 6 6 6c4.64-.001 7.526 5.039 5.176 9.04h1.68A7.507 7.507 0 0 0 12 10.5 4.502 4.502 0 0 1 7.5 6c0-2.484 2.016-4.5 4.5-4.5s4.5 2.016 4.5 4.5H18c0-3.312-2.688-6-6-6Zm0 3a3 3 0 0 0 0 6c4 0 4-6 0-6Zm0 1.5A1.5 1.5 0 0 1 13.5 6v.002c-.002 1.336-1.617 2.003-2.561 1.058C9.995 6.115 10.664 4.5 12 4.5ZM7.5 15v1.5H9v6H4.5V24h15v-1.5H15v-6h1.5V15Zm3 1.5h3v6h-3zm-6 1.47c0 1.09.216 2.109.644 3.069h1.684A5.957 5.957 0 0 1 6 17.97Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSimpleiconsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
