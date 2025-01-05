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
  selector: 'svg[si-rtl-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>RTL</svg:title>
    <svg:path
      d="M0 9.889v4.222h7.498V9.89H0zm8.25 0v4.222h7.5V9.89h-7.5zm8.252 0v4.222H24V9.89h-7.498zm-14.365.966H4.12c.61 0 .945.275.945.733 0 .397-.254.662-.691.723l.977.824h-.754l-.926-.795H2.656v.795h-.52v-2.28zm8.281 0h3.164v.448H12.26v1.832h-.52v-1.832h-1.322v-.448zm8.414 0h.518v1.832h2.32v.448h-2.838v-2.28zm-16.176.428v.631H4.06c.325 0 .478-.103.478-.316 0-.214-.153-.315-.478-.315H2.656z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRtlIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#FA002E');
  }
}
