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
  selector: 'svg[si-briefcase-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.0234 3C8.7808 3 7.77344 4.00736 7.77344 5.25V6H4.77344C3.5308 6 2.52344 7.00736 2.52344 8.25V17.25C2.52344 18.4926 3.5308 19.5 4.77344 19.5H19.2736C20.5163 19.5 21.5236 18.4926 21.5236 17.25V8.25C21.5236 7.00736 20.5163 6 19.2736 6H16.2734V5.25C16.2734 4.00736 15.2661 3 14.0234 3H10.0234ZM14.7734 6H9.27344V5.25C9.27344 4.83579 9.60922 4.5 10.0234 4.5H14.0234C14.4377 4.5 14.7734 4.83579 14.7734 5.25V6ZM4.77344 7.5H19.2736C19.6879 7.5 20.0236 7.83579 20.0236 8.25V17.25C20.0236 17.6642 19.6879 18 19.2736 18H4.77344C4.35922 18 4.02344 17.6642 4.02344 17.25V8.25C4.02344 7.83579 4.35922 7.5 4.77344 7.5Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBriefcase1Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '25');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 25 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}