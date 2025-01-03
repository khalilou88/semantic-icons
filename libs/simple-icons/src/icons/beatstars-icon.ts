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
  selector: 'svg[si-beatstars-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>BeatStars</title>
    <svg:path
      d="m17.217 11.996-3.308 1.079v3.478l-2.052-2.818-3.309 1.079 2.043-2.818-2.043-2.819 3.31 1.08 2.05-2.819v3.487zm0 0v7.277H6.854V4.584h10.363v7.412l4.585-1.49v-7.67L19.135 0H2.198v24h16.92l2.684-2.685v-7.83z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBeatstarsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
