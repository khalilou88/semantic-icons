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
  selector: 'svg[si-playstationportable-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>PlayStation Portable</title>
    <svg:path
      d="M0 9.93v.296h7.182v1.626H.001v2.217h.295v-1.921h7.182V9.93zm11.29 0v3.844H7.478v.296h4.124v-3.844h3.813V9.93zm5.233 0v.296h7.182v1.626h-7.182v2.217h.296v-1.921H24V9.93z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiPlaystationportableIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
