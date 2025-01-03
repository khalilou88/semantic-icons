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
  selector: 'svg[si-az-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#3f9c35" d="M0 0h512v512H0z" />
    <svg:path fill="#ed2939" d="M0 0h512v341.3H0z" />
    <svg:path fill="#00b9e4" d="M0 0h512v170.7H0z" />
    <svg:circle cx="238.8" cy="256" r="76.8" fill="#fff" />
    <svg:circle cx="255.9" cy="256" r="64" fill="#ed2939" />
    <svg:path
      fill="#fff"
      d="m324.2 213.3 8.1 23 22-10.5-10.4 22 23 8.2-23 8.2 10.4 22-22-10.5-8.1 23-8.2-23-22 10.5 10.5-22-23-8.2 23-8.2-10.5-22 22 10.5z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiAzFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}