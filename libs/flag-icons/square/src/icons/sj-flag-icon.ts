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
  selector: 'svg[si-sj-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#ef2b2d" d="M0 0h512v512H0z" />
    <svg:path fill="#fff" d="M128 0h128v512H128z" />
    <svg:path fill="#fff" d="M0 192h512v128H0z" />
    <svg:path fill="#002868" d="M160 0h64v512h-64z" />
    <svg:path fill="#002868" d="M0 224h512v64H0z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSjFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
