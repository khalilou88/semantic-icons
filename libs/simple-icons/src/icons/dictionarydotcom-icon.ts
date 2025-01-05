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
  selector: 'svg[si-dictionarydotcom-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Dictionary.com</svg:title>
    <svg:path
      d="M11.894.087 1.043 0a.3.3 0 0 0-.305.293V18.97a.331.331 0 0 0 .166.28l8.13 4.713a.268.268 0 0 0 .364-.092.27.27 0 0 0 .038-.138V6.275a.33.33 0 0 0-.176-.292L4.944 3.625a.173.173 0 0 1-.084-.21.173.173 0 0 1 .197-.112l7.804 1.333a.31.31 0 0 1 .252.302v15.717a.307.307 0 0 0 .309.308h.035c5.781-.645 9.72-4.693 9.804-10.308.078-6.28-4.595-10.48-11.367-10.568Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDictionarydotcomIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '0049D7');
  }
}
