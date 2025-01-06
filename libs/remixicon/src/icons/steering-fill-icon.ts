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
  selector: 'svg[si-steering-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.7992 14.001C20.9633 18.1168 17.5995 21.3145 13.399 21.9028L13.3992 19.878C16.4926 19.3321 18.9729 17.0086 19.7473 14.0004L21.7992 14.001ZM4.25157 14.0004C5.01757 16.9759 7.45244 19.2814 10.4989 19.8595V21.8882C6.3456 21.2632 3.02888 18.0838 2.19968 14.001L4.25157 14.0004ZM17.9994 11V13H16.9994C14.8572 13 13.1084 14.684 13.0043 16.8004L12.9994 17V18H10.9994V17C10.9994 14.8578 9.31547 13.1089 7.19908 13.0049L6.99944 13H5.99944V11H17.9994ZM11.9994 2C17.1848 2 21.4483 5.94662 21.9501 10.9999L19.9376 11C19.4455 7.05371 16.0791 4 11.9994 4C7.91981 4 4.55341 7.05371 4.06133 11L2.04883 10.9999C2.5506 5.94662 6.81413 2 11.9994 2Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSteeringFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
