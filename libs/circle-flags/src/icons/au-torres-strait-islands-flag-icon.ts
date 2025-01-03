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
  selector: 'svg[si-au-torres-strait-islands-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#0052b4" d="m0 128 256-32 256 32v256l-256 32L0 384Z" />
      <svg:path fill="#333" d="m0 96 256-32 256 32v32H0Z" />
      <svg:path fill="#6da544" d="M0 0h512v96H0Z" />
      <svg:path fill="#333" d="m0 416 256 32 256-32v-32H0Z" />
      <svg:path fill="#6da544" d="M0 512h512v-96H0Z" />
      <svg:path
        fill="#eee"
        d="M245 144c-106 32-101 112-67 186l-40 38 73-27v-98c24-35 66-35 90 0v98l73 27-40-38c34-74 39-154-67-186l-11 46-11-46zm11 83-9 27h-28l23 17-9 28 23-17 23 17-9-28 24-17h-29l-9-27z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAuTorresStraitIslandsFlagIcon implements OnInit {
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
