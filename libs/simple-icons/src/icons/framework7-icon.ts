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
  selector: 'svg[si-framework7-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Framework7</title>
    <svg:path
      d="M0 12a11.95 11.95 0 012.713-7.6h18.574L8.037 23.33C3.358 21.694 0 17.24 0 12zm22.271-6.208A11.944 11.944 0 0124 12c0 6.627-5.373 12-12 12-.794 0-1.57-.077-2.32-.224zM4.295 2.8A11.952 11.952 0 0112 0c2.933 0 5.62 1.052 7.705 2.8z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFramework7Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
