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
  selector: 'svg[si-qa-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#8d1b3d" d="M0 0h512v512H0z" />
    <svg:path
      fill="#fff"
      d="M0 0v512h113l104.2-28.4L113 455l104.2-28.4L113 398.2l104.2-28.4L113 341.3 217.2 313 113 284.4 217.2 256 113 227.6 217.2 199 113 170.7l104.2-28.5L113 113.8l104.2-28.5L113 57l104.2-28.4L113 0z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiQaFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
