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
  selector: 'svg[si-doctrine-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Doctrine</title>
    <svg:path
      d="M8.7912 0a2.2 2.2 0 0 0-.2543.016C7.3524.1581 6.4917 1.21 6.5867 2.399a2.215 2.215 0 0 0 .6658 1.4164l-.0029.0031L9.5845 6.02c-4.1783 1.1385-7.0612 5.115-6.7067 9.5563.3906 4.897 4.578 8.612 9.4866 8.4164s8.7873-4.2318 8.7873-9.1443l-.1159-1.4517c-.3219-2.004-1.2739-3.7555-2.6244-5.0794l.0015.0004-8.077-7.706-.0015.0014v.0002A2.22 2.22 0 0 0 8.7912 0m2.2149 8.5478a1.485 1.485 0 0 1 .9095.453l4.7471 4.7728a1.324 1.324 0 0 1 .4365.789l.0168.2108a1.326 1.326 0 0 1-.4514.998l-4.7785 4.8218a1.49 1.49 0 0 1-.999.438c-.7988.0316-1.4802-.5715-1.544-1.3666a1.481 1.481 0 0 1 .4386-1.1757l-.0006-.0006 2.4214-2.4216h-5.027v-.002c-.6961.0082-1.2837-.5247-1.3393-1.223-.0568-.711.4578-1.3402 1.166-1.4252a1.4 1.4 0 0 1 .144-.0096l.0169.0002c1.6577.0056 3.3154.0025 4.9731.0025L9.8564 11.13a1.475 1.475 0 0 1-.498-.9928c-.0633-.7922.5116-1.4933 1.3027-1.588a1.5 1.5 0 0 1 .345-.0013"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiDoctrineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}