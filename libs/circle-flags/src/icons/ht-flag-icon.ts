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
  selector: 'svg[si-ht-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#a2001d" d="m0 256 254.8-41.8L512 256v256H0z" />
      <svg:path fill="#0052b4" d="M0 0h512v256H0z" />
      <svg:path fill="#eee" d="m345 322.8-89-11.1-89 11V189.3h178z" />
      <svg:circle cx="256" cy="267.1" r="44.5" fill="#0052b4" />
      <svg:circle cx="256" cy="267.1" r="22.3" fill="#a2001d" />
      <svg:path fill="#6da544" d="M222.6 211.5h66.8L256 244.9z" />
      <svg:path fill="#ffda44" d="M244.9 233.7H267v66.8h-22z" />
      <svg:path fill="#6da544" d="M291.6 293.8h-71.2l-53.4 29h178z" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiHtFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '512');
    this.render.setAttribute(svg, 'height', '512');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
