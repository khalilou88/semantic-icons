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
  selector: 'svg[si-datastax-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>DataStax</title>
    <svg:path
      d="M10.863 8.818v6.364l-2.181 1.683H0v-9.73h8.682l2.181 1.683Zm-9.18 6.366h7.498V8.818H1.683v6.366Zm13.243-6.296v2.26h6.919L24 12.793v2.318l-2.155 1.646h-8.153v-1.646h8.645v-2.318h-6.919l-2.155-1.645v-2.26l2.155-1.645h7.939v1.645h-8.431Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiDatastaxIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}