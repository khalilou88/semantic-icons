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
  selector: 'svg[si-greatlearning-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Great Learning</title>
    <svg:path
      d="M14.373 0c-6.617 0-12 5.383-12 12s5.383 12 12 12h.856c.958-1.175 1.911-2.354 2.867-3.531h-3.723c-4.669 0-8.469-3.8-8.469-8.469 0-4.67 3.8-8.469 8.469-8.469h4.375L21.615 0Zm3.723 20.469 3.531-4.354v-6.013h-7.502l-2.861 3.533h6.832z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiGreatlearningIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}