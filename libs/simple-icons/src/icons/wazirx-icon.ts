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
  selector: 'svg[si-wazirx-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>WazirX</title>
    <svg:path
      d="M.965 21.964h21.924v-2.485H.965v2.485Zm6.752-3.81h15.195L24 6.343 7.717 18.155Zm9.384-8.704L5.205 18.072H1.93l6.045-9.814 3.858-6.22 5.269 7.412Zm-11.693.223L0 6.067l.994 10.762 4.414-7.156Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWazirxIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
