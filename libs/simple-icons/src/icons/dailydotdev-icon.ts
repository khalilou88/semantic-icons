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
  selector: 'svg[si-dailydotdev-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>daily.dev</title>
    <svg:path
      d="M18.29 5.706a1.405 1.405 0 0 0-1.987 0L4.716 17.296l1.324-2.65-2.65-2.649 3.312-3.311 2.65 2.65 1.986-1.988-3.642-3.642a1.405 1.405 0 0 0-1.987 0L.411 11.004a1.404 1.404 0 0 0 0 1.987l4.305 4.304.993.993a1.405 1.405 0 0 0 1.987 0L19.285 6.7l-.993-.994Zm-.332 3.647 2.65 2.65-4.306 4.305a1.404 1.404 0 1 0 1.986 1.986l5.299-5.298a1.404 1.404 0 0 0 0-1.987l-4.305-4.304-1.324 2.648Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiDailydotdevIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}