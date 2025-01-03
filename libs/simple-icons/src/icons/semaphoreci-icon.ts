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
  selector: 'svg[si-semaphoreci-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Semaphore CI</title>
    <svg:path
      d="m21.50314 13.2549-4.15781-4.22828a3.03814 3.03814 0 0 0-4.3591 0L9.6943 12.374a1.20701 1.20701 0 0 1-1.7213 0l-1.63096-1.6587 4.1578-4.22866a6.53247 6.53247 0 0 1 9.34234 0L24 10.71531zM8.82879 19.47925a6.52947 6.52947 0 0 1-4.67098-1.9657L0 13.295l2.48674-2.52872 4.15744 4.21816a3.05613 3.05613 0 0 0 4.3591 0l3.29191-3.34814a1.20701 1.20701 0 0 1 1.7213 0l1.63097 1.6587-4.14732 4.22866a6.5186 6.5186 0 0 1-4.67135 1.95558z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSemaphoreciIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}