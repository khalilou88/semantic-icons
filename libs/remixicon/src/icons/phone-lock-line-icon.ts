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
  selector: 'svg[si-phone-lock-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18 2C18.5523 2 19 2.44772 19 3V10H17V4H7V20H12V22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2H18ZM18 12C19.6569 12 21 13.3431 21 15V16H22V21C22 21.5523 21.5523 22 21 22H15C14.4477 22 14 21.5523 14 21V16H15V15C15 13.3431 16.3431 12 18 12ZM20 18H16V20H20V18ZM18 14C17.4919 14 17 14.45 17 15V16H19V15C19 14.4477 18.5523 14 18 14Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPhoneLockLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
