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
  selector: 'svg[si-wpexplorer-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>WPExplorer</title>
    <svg:path
      d="M24 12A12 12 0 1 1 12 0a12.008 12.008 0 0 1 12 12Zm-1.5 0A10.5 10.5 0 1 0 12 22.5 10.516 10.516 0 0 0 22.5 12ZM7.542 5.841l4.074 1.739-1.739 4.073L5.8 9.914l1.742-4.073Zm5.158 7.926 2.185 4.406H14.2l-2.343-4.687-2.295 4.687h-.656l2.4-5.01-1.046-.441.282-.656 3.215 1.364-.281.67Zm-.553-5.451 3.216 1.378-1.378 3.2-3.2-1.364 1.364-3.215Zm3.764 2.011 2.56 1.082-1.1 2.546-2.545-1.083 1.082-2.545Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiWpexplorerIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}