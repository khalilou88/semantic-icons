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
  selector: 'svg[si-firebase-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5.32091 15.0573L7.26764 2.38775C7.33474 1.95596 7.90536 1.85369 8.10674 2.24003L10.1989 6.21703L5.32091 15.0573ZM19.1605 18.1366L17.3033 6.467C17.2474 6.10338 16.7998 5.95569 16.5425 6.21703L4.83984 18.1366L11.3177 21.8295C11.7205 22.0568 12.2239 22.0568 12.6267 21.8295L19.1605 18.1366ZM13.9021 7.95555L12.4029 5.058C12.2351 4.72848 11.7764 4.72848 11.6086 5.058L5.01884 16.989L13.9021 7.95555Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiFirebaseIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}