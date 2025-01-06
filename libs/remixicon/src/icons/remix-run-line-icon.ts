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
  selector: 'svg[si-remix-run-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 2H14.5C17.8137 2 20.5 4.68629 20.5 8C20.5 10.1984 19.3177 12.1206 17.5543 13.1655C19.0376 14.2579 20 16.0166 20 18V21H18V18C18 15.7909 16.2091 14 14 14H4V12H14.5C16.7091 12 18.5 10.2091 18.5 8C18.5 5.79086 16.7091 4 14.5 4H4V2ZM11 21H4V19H11V21Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRemixRunLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
