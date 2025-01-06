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
  selector: 'svg[si-notion-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16.2852 2.95494C15.9283 2.71702 15.5011 2.60764 15.0738 2.6448L4.01455 3.60647C3.50353 3.65091 3.11133 4.0787 3.11133 4.59164L3.11133 16.1666C3.11133 16.5753 3.24389 16.973 3.48911 17.3L6.25617 20.9894C6.45903 21.2599 6.78602 21.4079 7.12313 21.382L19.9761 20.3933C20.4913 20.3537 20.8891 19.9241 20.8891 19.4074V6.52672C20.8891 6.2128 20.7322 5.91965 20.471 5.74551L16.2852 2.95494ZM15.2278 4.41589C15.2529 4.41371 15.278 4.42014 15.299 4.43414L18.0448 6.26466L7.8385 7.08117L5.97759 5.22026L15.2278 4.41589ZM19.1113 18.6768L8.38911 19.5016V8.82058L19.1113 7.9628V18.6768ZM4.88911 6.64593L6.61133 8.36815L6.61133 18.5L4.91133 16.2333C4.8969 16.2141 4.88911 16.1907 4.88911 16.1666L4.88911 6.64593ZM11.9786 10.1234L10.0022 10.2529V17.8154L11.9979 17.6846V13.3479L15.5098 17.5169L17.4861 17.3874V9.82491L15.4904 9.95571V14.2924L11.9786 10.1234Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNotionLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
