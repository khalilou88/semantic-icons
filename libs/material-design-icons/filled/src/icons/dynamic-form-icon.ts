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
  selector: 'svg[si-dynamic-form-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17 20v-9h-2V4h7l-2 5h2l-5 11zm-2-7v7H4c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h11zm-8.75 2.75h-1.5v1.5h1.5v-1.5zM13 4v7H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h9zM6.25 6.75h-1.5v1.5h1.5v-1.5z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDynamicFormIcon implements OnInit {
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
