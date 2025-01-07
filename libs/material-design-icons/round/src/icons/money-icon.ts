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
  selector: 'svg[si-money-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15 16h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1zm1-6h1v4h-1v-4zm-7 6h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1zm1-6h1v4h-1v-4zM6 8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1V9c0-.55-.45-1-1-1zM2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2zm17 12H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMoneyIcon implements OnInit {
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
