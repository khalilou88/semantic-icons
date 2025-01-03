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
  selector: 'svg[si-baserow-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Baserow</title>
    <svg:path
      d="M1.291.068A1.29 1.29 0 0 0 0 1.36v3.352a1.29 1.29 0 0 0 1.291 1.291h3.354a1.29 1.29 0 0 0 1.289-1.291V1.359A1.29 1.29 0 0 0 4.644.07Zm9.033 0a1.29 1.29 0 0 0-1.29 1.291v3.352a1.29 1.29 0 0 0 1.29 1.291H22.71A1.29 1.29 0 0 0 24 4.711V1.359A1.29 1.29 0 0 0 22.709.07ZM1.291 9.033A1.29 1.29 0 0 0 0 10.323v3.353a1.29 1.29 0 0 0 1.291 1.29h21.418A1.29 1.29 0 0 0 24 13.677v-3.354a1.29 1.29 0 0 0-1.291-1.289Zm0 8.965A1.29 1.29 0 0 0 0 19.289v3.352a1.29 1.29 0 0 0 1.291 1.29h12.385a1.29 1.29 0 0 0 1.29-1.29v-3.352a1.29 1.29 0 0 0-1.29-1.291zm18.064 0a1.29 1.29 0 0 0-1.289 1.291v3.352a1.29 1.29 0 0 0 1.29 1.29h3.353A1.29 1.29 0 0 0 24 22.642v-3.352a1.29 1.29 0 0 0-1.291-1.291z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBaserowIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}