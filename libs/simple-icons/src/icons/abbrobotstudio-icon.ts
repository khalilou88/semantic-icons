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
  selector: 'svg[si-abbrobotstudio-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>ABB RobotStudio</title>
    <svg:path
      d="M23.999 12.465a9.601 9.601 0 01-19.203 0h1.07a8.53 8.53 0 108.533-8.53v-1.07A9.6 9.6 0 0124 12.463zm-9.6-3.2a3.2 3.2 0 103.2 3.2 3.2 3.2 0 00-3.2-3.2zm-2 0l-.6-6.672-2.462 1.92-1.46-1.44a4.67 4.67 0 00-5.62-.37l-2.02 1.3a.54.54 0 00-.15.74.54.54 0 00.74.15l2-1.31a3.64 3.64 0 014.29.22l1.37 1.38-2.29 1.821z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiAbbrobotstudioIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}