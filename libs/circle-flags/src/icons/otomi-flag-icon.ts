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
  selector: 'svg[si-otomi-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#ff9811" d="m0 160 256-32 256 32v192l-256 32L0 352Z" />
      <svg:path fill="#eee" d="m0 160 256-32 256 32v32H0Z" />
      <svg:path fill="#338af3" d="M0 0h512v160H0Z" />
      <svg:path fill="#eee" d="m0 352 256 32 256-32v-32H0Z" />
      <svg:path fill="#6da544" d="M0 352h512v160H0Z" />
      <svg:circle cx="256" cy="256" r="160" fill="#eee" />
      <svg:circle cx="256" cy="256" r="128" fill="#338af3" />
      <svg:path
        fill="#ff9811"
        d="M207 139v68h-68l49 49-49 49h68v68l49-49 49 49v-68h68l-49-49 49-49h-68v-68l-49 49z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiOtomiFlagIcon implements OnInit {
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