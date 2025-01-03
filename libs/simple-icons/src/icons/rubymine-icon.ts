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
  selector: 'svg[si-rubymine-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>RubyMine</title>
    <svg:path
      d="M0 0v24h24V0Zm3.056 3H6.92q.945 0 1.665.347t1.106.977c.262.42.392.902.392 1.46q0 .835-.399 1.478a2.6 2.6 0 0 1-1.125.99 2 2 0 0 1-.297.103q-.066.02-.13.04L10.276 12H8.264l-1.94-3.4H4.811V12H3.056Zm8.51 0h2.444l1.851 5.907.154.773.136-.773L17.937 3h2.482v9h-1.736V5.578l.026-.47L16.613 12H15.34l-2.07-6.846.026.424V12h-1.73ZM4.812 4.459V7.14h1.993q.444-.001.771-.161.335-.167.515-.47c.12-.205.18-.439.18-.713q0-.411-.18-.707a1.17 1.17 0 0 0-.515-.462 1.7 1.7 0 0 0-.77-.168ZM2.996 19.2h9.6V21h-9.6z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRubymineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
