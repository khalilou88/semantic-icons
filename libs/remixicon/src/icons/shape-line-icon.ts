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
  selector: 'svg[si-shape-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7.82929 20C7.41746 21.1652 6.30622 22 5 22C3.34315 22 2 20.6569 2 19C2 17.6938 2.83481 16.5825 4 16.1707V7.82929C2.83481 7.41746 2 6.30622 2 5C2 3.34315 3.34315 2 5 2C6.30622 2 7.41746 2.83481 7.82929 4H16.1707C16.5825 2.83481 17.6938 2 19 2C20.6569 2 22 3.34315 22 5C22 6.30622 21.1652 7.41746 20 7.82929V16.1707C21.1652 16.5825 22 17.6938 22 19C22 20.6569 20.6569 22 19 22C17.6938 22 16.5825 21.1652 16.1707 20H7.82929ZM7.82929 18H16.1707C16.472 17.1476 17.1476 16.472 18 16.1707V7.82929C17.1476 7.52801 16.472 6.85241 16.1707 6H7.82929C7.52801 6.85241 6.85241 7.52801 6 7.82929V16.1707C6.85241 16.472 7.52801 17.1476 7.82929 18ZM5 6C5.55228 6 6 5.55228 6 5C6 4.44772 5.55228 4 5 4C4.44772 4 4 4.44772 4 5C4 5.55228 4.44772 6 5 6ZM19 6C19.5523 6 20 5.55228 20 5C20 4.44772 19.5523 4 19 4C18.4477 4 18 4.44772 18 5C18 5.55228 18.4477 6 19 6ZM19 20C19.5523 20 20 19.5523 20 19C20 18.4477 19.5523 18 19 18C18.4477 18 18 18.4477 18 19C18 19.5523 18.4477 20 19 20ZM5 20C5.55228 20 6 19.5523 6 19C6 18.4477 5.55228 18 5 18C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiShapeLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
