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
  selector: 'svg[si-no-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#ed2939" d="M0 0h512v512H0z" />
    <svg:path fill="#fff" d="M128 0h128v512H128z" />
    <svg:path fill="#fff" d="M0 192h512v128H0z" />
    <svg:path fill="#002664" d="M160 0h64v512h-64z" />
    <svg:path fill="#002664" d="M0 224h512v64H0z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiNoFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}