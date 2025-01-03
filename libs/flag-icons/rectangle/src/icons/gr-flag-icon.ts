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
  selector: 'svg[si-gr-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#0d5eaf" fill-rule="evenodd" d="M0 0h640v53.3H0z" />
    <svg:path fill="#fff" fill-rule="evenodd" d="M0 53.3h640v53.4H0z" />
    <svg:path fill="#0d5eaf" fill-rule="evenodd" d="M0 106.7h640V160H0z" />
    <svg:path fill="#fff" fill-rule="evenodd" d="M0 160h640v53.3H0z" />
    <svg:path fill="#0d5eaf" d="M0 0h266.7v266.7H0z" />
    <svg:path fill="#0d5eaf" fill-rule="evenodd" d="M0 213.3h640v53.4H0z" />
    <svg:path fill="#fff" fill-rule="evenodd" d="M0 266.7h640V320H0z" />
    <svg:path fill="#0d5eaf" fill-rule="evenodd" d="M0 320h640v53.3H0z" />
    <svg:path fill="#fff" fill-rule="evenodd" d="M0 373.3h640v53.4H0z" />
    <svg:g fill="#fff" fill-rule="evenodd" stroke-width="1.3">
      <svg:path d="M106.7 0H160v266.7h-53.3z" />
      <svg:path d="M0 106.7h266.7V160H0z" />
    </svg:g>
    <svg:path fill="#0d5eaf" d="M0 426.7h640V480H0z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGrFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}
