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
  selector: 'svg[si-fonoma-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Fonoma</title>
    <svg:path
      d="M19.706 21.919a4.295 4.295 0 0 0 4.293-4.296 4.295 4.295 0 1 0-4.293 4.296zM4.296 10.672a4.295 4.295 0 0 0 4.293-4.295 4.295 4.295 0 1 0-4.294 4.295zm10.412 0h4.975a4.277 4.277 0 0 0 4.293-4.295 4.277 4.277 0 0 0-4.293-4.296h-4.975a4.277 4.277 0 0 0-4.294 4.296 4.277 4.277 0 0 0 4.294 4.295zM4.295 21.92h4.976a4.277 4.277 0 0 0 4.293-4.296 4.277 4.277 0 0 0-4.293-4.295H4.295a4.277 4.277 0 0 0-4.293 4.295c.068 2.318 1.976 4.296 4.293 4.296z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiFonomaIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
