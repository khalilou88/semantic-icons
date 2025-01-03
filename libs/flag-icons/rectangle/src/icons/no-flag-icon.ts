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
  selector: 'svg[si-no-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#ed2939" d="M0 0h640v480H0z" />
    <svg:path fill="#fff" d="M180 0h120v480H180z" />
    <svg:path fill="#fff" d="M0 180h640v120H0z" />
    <svg:path fill="#002664" d="M210 0h60v480h-60z" />
    <svg:path fill="#002664" d="M0 210h640v60H0z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNoFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}
