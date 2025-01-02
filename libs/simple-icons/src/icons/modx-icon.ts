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
  selector: 'svg[si-modx-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>MODX</title>
    <svg:path
      d="M19.145 9.49l4.47-7.19H12.118l-1.24 2.023zM2.92 0v11.497l2.48 1.55 13.435-3.1zm18.16 24V12.503l-1.984-1.263-5.168 8.267zM5.165 14.053l-4.78 7.648h11.497L18.6 10.953Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiModxIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
