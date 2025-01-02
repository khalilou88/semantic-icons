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
  selector: 'svg[si-mu-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <g fill-rule="evenodd">
      <svg:path fill="#00a04d" d="M0 360h640v120H0z" />
      <svg:path fill="#151f6d" d="M0 120h640v120H0z" />
      <svg:path fill="#ee2737" d="M0 0h640v120H0z" />
      <svg:path fill="#ffcd00" d="M0 240h640v120H0z" />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiMuFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}
