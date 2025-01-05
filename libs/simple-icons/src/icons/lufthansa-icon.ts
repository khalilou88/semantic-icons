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
  selector: 'svg[si-lufthansa-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Lufthansa</svg:title>
    <svg:path
      d="M24,12c0-6.648-5.352-12-12-12C5.376,0,0,5.352,0,12c0,6.624,5.376,12,12,12C18.648,24,24,18.624,24,12z M23.136,12c0,6.12-4.992,11.136-11.136,11.136C5.88,23.136,0.864,18.121,0.864,12C0.864,5.856,5.88,0.864,12,0.864 C18.144,0.864,23.136,5.856,23.136,12z M16.248,11.28c-0.264,0-0.6,0-1.032,0.024l0.312-0.528h0.504c1.8,0,3.144,0.096,4.368,0.312 l0.552-0.528c-1.368-0.24-3.024-0.384-4.704-0.384H15.84l0.264-0.504h0.456c1.752,0,3.336,0.144,4.872,0.432l0.576-0.552 c-1.728-0.336-3.576-0.503-5.568-0.503c-0.849,0.003-1.698,0.043-2.544,0.12c-0.96,2.063-2.496,3.264-4.224,3.24 C9,12.384,8.159,12.097,7.08,11.52l-1.008-0.576l0.312-0.288l2.328,1.008l0.504-0.384L4.512,9.144l-0.72,0.552L2.112,9l0.024,0.696 c2.256,1.032,3.192,1.608,5.568,3.312c3.096,2.208,5.856,3.408,9.696,4.176l1.008-0.96h-0.24c-2.544,0-4.824-0.84-6.144-2.256 c1.104-0.672,2.471-0.983,4.368-0.983c0.504,0,1.224,0.047,1.896,0.119l0.576-0.552c-0.9-0.11-1.805-0.166-2.712-0.168 c-0.609-0.001-1.217,0.023-1.824,0.072l0.432-0.528c0.511-0.03,1.024-0.046,1.536-0.048c1.272,0,2.112,0.048,3.072,0.192 l0.552-0.528C18.912,11.377,17.52,11.28,16.248,11.28z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLufthansaIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#05164D');
  }
}
