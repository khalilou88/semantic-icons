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
  selector: 'svg[si-ramp-left-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 21c-.55 0-1-.45-1-1V6.83l-.88.88A.996.996 0 1 1 8.71 6.3l2.59-2.59a.996.996 0 0 1 1.41 0L15.3 6.3a.996.996 0 1 1-1.41 1.41L13 6.83V9c0 3.62 2.89 6.22 4.97 7.62a.99.99 0 0 1 .14 1.53c-.33.33-.87.4-1.26.13-1.59-1.06-2.89-2.28-3.85-3.59v5.3c0 .56-.45 1.01-1 1.01z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRampLeftIcon implements OnInit {
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
