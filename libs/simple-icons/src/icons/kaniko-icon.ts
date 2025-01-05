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
  selector: 'svg[si-kaniko-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Kaniko</svg:title>
    <svg:path
      d="M2.783 0h18.434c1.352 0 2.478.963 2.73 2.24a17.127 17.127 0 0 1-3.2 4.42 16.918 16.918 0 0 1-8.399 4.605V3.304h-.696V11.4c-.976.169-1.965.253-2.956.252v.696c1.011 0 1.998.086 2.956.252v8.096h.696v-7.961a16.918 16.918 0 0 1 8.399 4.605 17.127 17.127 0 0 1 3.2 4.42 2.783 2.783 0 0 1-2.73 2.24H2.783A2.783 2.783 0 0 1 0 21.217V2.783A2.783 2.783 0 0 1 2.783 0Zm18.456 7.152A17.712 17.712 0 0 0 24 3.572v16.856a17.712 17.712 0 0 0-2.761-3.58 17.802 17.802 0 0 0-8.891-4.815v-.066a17.802 17.802 0 0 0 8.891-4.815Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKanikoIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#FFA600');
  }
}
