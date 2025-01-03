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
  selector: 'svg[si-metacritic-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Metacritic</title>
    <svg:path
      d="M11.99 0A12 12 0 1 0 24 12v-.014A12 12 0 0 0 11.99 0Zm-.055 2.564a9.399 9.399 0 0 1 9.407 9.389v.01a9.399 9.399 0 1 1-9.408-9.399Zm-1.61 17.198 2.046-2.046-3.94-3.94c-.165-.166-.345-.373-.442-.608-.221-.47-.318-1.203.221-1.742.664-.664 1.548-.387 2.406.47l3.788 3.788 2.046-2.046-3.954-3.954a2.48 2.48 0 0 1-.456-.622c-.263-.539-.25-1.216.235-1.7.677-.678 1.562-.429 2.544.553l3.677 3.677 2.046-2.046-3.982-3.982c-2.018-2.018-3.912-1.949-5.212-.65-.498.499-.802 1.024-.954 1.618a4.026 4.026 0 0 0-.055 1.686l-.027.028c-.996-.414-2.13-.166-3 .705-1.162 1.161-1.12 2.392-.982 3.11l-.042.043-1.009-.816-1.77 1.77a64.1 64.1 0 0 1 2.213 2.1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiMetacriticIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}