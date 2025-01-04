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
  selector: 'svg[si-pixabay-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Pixabay</svg:title>
    <svg:path
      d="M5.627 10.234a.888.888 0 01-.887-.888H1.7c0 .49-.398.888-.888.888H0v9.447h15.56v-9.447H5.64zm-.886 2.796h-3.04v-1.323h3.04v1.323zm5.344 5.234a3.271 3.271 0 01-3.267-3.269c0-1.802 1.466-3.193 3.267-3.193s3.267 1.39 3.267 3.193a3.271 3.271 0 01-3.267 3.269zm1.756-3.269c0 .969-.788 1.757-1.756 1.757a1.759 1.759 0 01-1.756-1.757c0-.969.788-1.757 1.756-1.757s1.756.788 1.756 1.757zM24 9.501l-3.93 10.156-3.164-1.226V16.7l2.242.869 2.765-7.146L11.55 6.407l-.96 2.482h-1.73l1.769-4.57L24 9.501Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPixabayIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
