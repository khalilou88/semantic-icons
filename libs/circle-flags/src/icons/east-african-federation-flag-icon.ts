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
  selector: 'svg[si-east-african-federation-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#338af3"
        d="M0 0h512v141l-64 115 64 115v141H0V371l64-115L0 141Z"
      />
      <svg:path fill="#eee" d="M0 141h512v23l-256 16L0 164Z" />
      <svg:path fill="#333" d="M0 164h512v38l-256 16L0 202Z" />
      <svg:path fill="#6da544" d="m0 220 256 16 256-16v-18H0Z" />
      <svg:path fill="#eee" d="M0 371h512v-23l-256-16L0 348Z" />
      <svg:path fill="#ff9811" d="M0 348h512v-38l-256-16L0 310Z" />
      <svg:path fill="#6da544" d="m0 292 256-16 256 16v18H0Z" />
      <svg:path fill="#ffda44" d="M0 220h512v72H0z" />
      <svg:circle cx="256" cy="248" r="64" fill="#eee" />
      <svg:path fill="#eee" d="m178 301 78-29 78 29v27H178Z" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiEastAfricanFederationFlagIcon implements OnInit {
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