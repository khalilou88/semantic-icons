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
  selector: 'svg[si-underline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.5 2.75C6.5 2.33579 6.16421 2 5.75 2C5.33579 2 5 2.33579 5 2.75V11.5C5 15.6421 8.35786 19 12.5 19C16.6421 19 20 15.6421 20 11.5V2.75C20 2.33579 19.6642 2 19.25 2C18.8358 2 18.5 2.33579 18.5 2.75V11.5C18.5 14.8137 15.8137 17.5 12.5 17.5C9.18629 17.5 6.5 14.8137 6.5 11.5V2.75Z"
      fill="#323544"
    />
    <svg:path
      d="M5.75 20.5C5.33579 20.5 5 20.8358 5 21.25C5 21.6642 5.33579 22 5.75 22H19.25C19.6642 22 20 21.6642 20 21.25C20 20.8358 19.6642 20.5 19.25 20.5H5.75Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiUnderlineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '25');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 25 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}
