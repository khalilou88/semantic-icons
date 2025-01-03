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
  selector: 'svg[si-ci-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:g fill-rule="evenodd">
      <svg:path fill="#00cd00" d="M426.8 0H640v480H426.8z" />
      <svg:path fill="#ff9a00" d="M0 0h212.9v480H0z" />
      <svg:path fill="#fff" d="M212.9 0h214v480h-214z" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCiFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}
