import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-military-rank-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M12.555 2.168l6 4a1 1 0 0 1 .445 .832v12a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-12a1 1 0 0 1 .445 -.832l6 -4a1 1 0 0 1 1.11 0m-.108 12.938a1 1 0 0 0 -.894 0l-2 1a1 1 0 0 0 -.447 1.341l.058 .102a1 1 0 0 0 1.283 .345l1.553 -.776l1.553 .776a1 1 0 0 0 .894 -1.788zm0 -4a1 1 0 0 0 -.894 0l-2 1a1 1 0 0 0 -.447 1.341l.058 .102a1 1 0 0 0 1.283 .345l1.553 -.776l1.553 .776a1 1 0 0 0 .894 -1.788zm0 -4a1 1 0 0 0 -.894 0l-2 1a1 1 0 0 0 -.447 1.341l.058 .102a1 1 0 0 0 1.283 .345l1.553 -.776l1.553 .776a1 1 0 0 0 .894 -1.788z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMilitaryRankIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', this.width());
    this.render.setAttribute(svg, 'height', this.height());
    this.render.setAttribute(svg, 'viewBox', this.viewBox());
    this.render.setAttribute(svg, 'fill', this.fill());
  }
}
