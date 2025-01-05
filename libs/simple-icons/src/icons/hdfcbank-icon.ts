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
  selector: 'svg[si-hdfcbank-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>HDFC Bank</svg:title>
    <svg:path
      d="M.572 0v10.842h3.712V4.485h6.381V0Zm12.413 0v4.485h6.383v6.357h4.06V0Zm-4.64 8.53v6.938h6.963V8.53ZM.572 13.153V24h10.093v-4.486h-6.38v-6.361zm18.796 0v6.361h-6.383V24h10.443V13.153Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHdfcbankIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '004B8D');
  }
}
