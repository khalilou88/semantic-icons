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
  selector: 'svg[si-wpengine-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>WP Engine</title>
    <svg:path
      d="M8.145 0v5.867L9.99 7.71h4.022l1.845-1.844V0zm8.145 0v5.867l1.845 1.844h5.864V.001zM1.845 0L0 1.845v5.866h7.712V0zM0 8.146v7.71h5.866l1.845-1.844V8.145zm18.133 0L16.29 9.989v4.022l1.845 1.845H24V8.145zm-6.147 2.75a1.105 1.105 0 00.014 2.21A1.105 1.105 0 0013.105 12a1.105 1.105 0 00-1.118-1.104zM0 16.29v7.71h5.866l1.845-1.842v-4.023l-1.845-1.845zm9.988 0l-1.843 1.845V24h7.71v-5.866L14.01 16.29zm6.3 0V24H24v-5.865l-1.842-1.845z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWpengineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
