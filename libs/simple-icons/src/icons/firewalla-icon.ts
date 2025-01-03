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
  selector: 'svg[si-firewalla-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Firewalla</title>
    <svg:path
      d="M12.156 0c-3.602 4.89.391 7.768 2.61 11.893-.751 1.527-1.745 3.08-2.733 4.836l-.072.025c-.849-.983-1.99-1.85-3.033-2.967 2.606-5.783-.809-9.812-.809-9.812a12.555 12.555 0 0 0-1.916 2.021c-2.296 3.06-2.027 5.897-2.027 5.897C4.176 19.07 12.125 24 12.125 24a21.738 21.738 0 0 0 2.139-1.594c5.864-4.974 5.564-10.513 5.564-10.513.122-4.308-1.622-5.905-4.82-9.014A83.864 83.864 0 0 1 12.156 0zm.281 17.37zm.397.687a4.298 4.298 0 0 1 .14.328 4.463 4.463 0 0 0-.14-.328zm.266.718a4.289 4.289 0 0 1 .14.791c.024.286.023.588-.006.91a5.23 5.23 0 0 0 .006-.91 4.513 4.513 0 0 0-.14-.79z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiFirewallaIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}