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
  selector: 'svg[si-bentoml-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>BentoML</title>
    <svg:path
      d="M16.3 11a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2zm-4.4 0a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2zM5.67 0a1.2 1.2 0 0 0-.815.318L.386 4.444A1.2 1.2 0 0 0 0 5.325V22.4A1.6 1.6 0 0 0 1.6 24h17.048a1.2 1.2 0 0 0 .911-.42l4.152-4.843a1.2 1.2 0 0 0 .289-.781V1.6A1.6 1.6 0 0 0 22.4 0ZM6 .6h16.2a1.2 1.2 0 0 1 1.2 1.2v15.8a1.6 1.6 0 0 1-1.6 1.6H6A1.2 1.2 0 0 1 4.8 18V1.8A1.2 1.2 0 0 1 6 .6Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBentomlIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}