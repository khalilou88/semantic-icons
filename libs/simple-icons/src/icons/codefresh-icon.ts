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
  selector: 'svg[si-codefresh-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Codefresh</title>
    <svg:path
      d="M0 2.84c1.402 2.71 1.445 5.241 2.977 10.4 1.855 5.341 8.703 5.701 9.21 5.711.46.726 1.513 1.704 3.926 2.21l.268-1.272c-2.082-.436-2.844-1.239-3.106-1.68l-.005.006c.087-.484 1.523-5.377-1.323-9.352C7.182 3.583 0 2.84 0 2.84zm24 .84c-3.898.611-4.293-.92-11.473 3.093a11.879 11.879 0 0 1 2.625 10.05c3.723-1.486 5.166-3.976 5.606-6.466 0 0 1.27-4.716 3.242-6.677zM12.527 6.773l-.002-.002v.004l.002-.002zM2.643 5.22s5.422 1.426 8.543 11.543c-2.945-.889-4.203-3.796-4.63-5.168h.006a15.863 15.863 0 0 0-3.92-6.375z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCodefreshIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}