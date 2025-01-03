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
  selector: 'svg[si-pt-br-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#6da544" d="M512 0v512H0l224-288Z" />
      <svg:path fill="#ffda44" d="m346 166-122 58-58 122 90 66 212-156Z" />
      <svg:path
        fill="#0052b4"
        d="m319 193-95 31-31 95a89 89 0 0 0 136-12l14-34a89 89 0 0 0-24-80z"
      />
      <svg:path
        fill="#eee"
        d="M255 257c29 9 55 26 74 50 7-10 12-22 14-34-17-18-38-32-62-42l-57-7Z"
      />
      <svg:path fill="#fff" d="M0 512 512 0H0Z" />
      <svg:path fill="#496e2d" d="M0 0v512l167-167 32-172L167 0Z" />
      <svg:path fill="#d80027" d="M167 0v167l89 89L512 0Z" />
      <svg:path
        fill="#ffda44"
        d="M167 167a89 89 0 0 0-89 89 89 89 0 0 0 89 89l89-89a89 89 0 0 0-89-89z"
      />
      <svg:path fill="#d80027" d="M117 212v55a50 50 0 1 0 100 0v-56H117Z" />
      <svg:path
        fill="#eee"
        d="M167 284c-9 0-17-8-17-17v-22h34v22c0 9-8 17-17 17z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPtBrFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '512');
    this.render.setAttribute(svg, 'height', '512');
  }
}
