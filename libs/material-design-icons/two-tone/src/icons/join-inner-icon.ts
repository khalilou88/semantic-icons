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
  selector: 'svg[si-join-inner-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:ellipse cx="12" cy="12" rx="3" ry="5.74" />
    <svg:path
      d="M9.04 16.87c-.33.08-.68.13-1.04.13-2.76 0-5-2.24-5-5s2.24-5 5-5c.36 0 .71.05 1.04.13.39-.56.88-1.12 1.49-1.63C9.75 5.19 8.9 5 8 5c-3.86 0-7 3.14-7 7s3.14 7 7 7c.9 0 1.75-.19 2.53-.5-.61-.51-1.1-1.07-1.49-1.63zM16 5c-.9 0-1.75.19-2.53.5.61.51 1.1 1.07 1.49 1.63.33-.08.68-.13 1.04-.13 2.76 0 5 2.24 5 5s-2.24 5-5 5c-.36 0-.71-.05-1.04-.13-.39.56-.88 1.12-1.49 1.63.78.31 1.63.5 2.53.5 3.86 0 7-3.14 7-7s-3.14-7-7-7z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiJoinInnerIcon implements OnInit {
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
