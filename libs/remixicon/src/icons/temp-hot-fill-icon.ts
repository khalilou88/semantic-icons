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
  selector: 'svg[si-temp-hot-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8 10.2547V5C8 2.79086 9.79086 1 12 1C14.2091 1 16 2.79086 16 5V10.2547C17.8135 11.5196 19 13.6213 19 16C19 19.866 15.866 23 12 23C8.13401 23 5 19.866 5 16C5 13.6213 6.18652 11.5196 8 10.2547ZM11 12.126C9.27477 12.5701 8 14.1362 8 16C8 18.2091 9.79086 20 12 20C14.2091 20 16 18.2091 16 16C16 14.1362 14.7252 12.5701 13 12.126V5H11V12.126Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTempHotFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
