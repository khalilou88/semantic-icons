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
  selector: 'svg[si-ne-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#0db02b" d="M0 0h512v512H0z" />
    <svg:path fill="#fff" d="M0 0h512v341.3H0z" />
    <svg:path fill="#e05206" d="M0 0h512v170.7H0z" />
    <svg:circle cx="256" cy="256" r="72.5" fill="#e05206" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNeFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
