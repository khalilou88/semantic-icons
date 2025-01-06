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
  selector: 'svg[si-openbase-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.0001 2.76001L21.9992 5.996L21.1001 15.464L12.0001 22.3235L2.90012 15.46L2.01074 6.00001L12.0001 2.76001ZM12.0001 3.58535L3.18898 6.43501L12.0001 20.7932L20.8058 6.43501L12.0001 3.58535Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiOpenbaseFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
