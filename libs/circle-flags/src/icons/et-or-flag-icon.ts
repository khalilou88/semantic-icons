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
  selector: 'svg[si-et-or-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#eee" d="m0 160 256-32 256 32v192l-256 32L0 352Z" />
      <svg:path fill="#d80027" d="M0 0h512v160H0Z" />
      <svg:path fill="#333" d="M0 352h512v160H0Z" />
      <svg:path fill="#6da544" d="M233 294c0 25-26 42-26 42h98s-26-17-26-42z" />
      <svg:path
        fill="#496e2d"
        d="M256 176c-9 0-17 4-23 10a32 32 0 0 0-48 24 32 32 0 0 0 2 59 32 32 0 0 0 46 25c6 6 14 10 23 10s17-4 23-10c4 3 9 4 14 4 17 0 31-13 32-29a32 32 0 0 0 2-59 32 32 0 0 0-48-24c-6-6-14-10-23-10z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiEtOrFlagIcon implements OnInit {
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
