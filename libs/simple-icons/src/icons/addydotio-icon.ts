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
  selector: 'svg[si-addydotio-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>addy.io</title>
    <svg:path
      d="M18 6.81V6c0-.305-.033-.605-.075-.9C17.489 2.217 15 0 12 0S6.51 2.217 6.075 5.1A5.733 5.733 0 0 0 6 6v.81A5.987 5.987 0 0 0 3 12v6a6 6 0 0 0 6 6h6c0-1.655-1.345-3-3-3H9c-1.655 0-3-1.345-3-3v-6c0-1.655 1.345-3 3-3h6c1.655 0 3 1.345 3 3v1.5a3 3 0 0 1-1.5 2.597V12c0-.83-.67-1.5-1.5-1.5H9c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5h6c1.055 0 2.04-.272 2.902-.75A5.996 5.996 0 0 0 21 13.5V12a5.987 5.987 0 0 0-3-5.19Zm-4.5 9.69h-3v-3h3zM9 6c0-.548.15-1.06.408-1.5A2.998 2.998 0 0 1 12 3c1.106 0 2.077.605 2.592 1.5.258.44.408.952.408 1.5Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiAddydotioIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}