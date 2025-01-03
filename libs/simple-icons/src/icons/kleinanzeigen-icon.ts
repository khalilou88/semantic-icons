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
  selector: 'svg[si-kleinanzeigen-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Kleinanzeigen</title>
    <svg:path
      d="M17.064 24c-3.234 0-4.816-2.245-5.137-2.71-.955.935-2.396 2.71-4.991 2.71-2.998 0-5.524-2.254-5.524-5.908V5.907C1.412 2.245 3.942 0 6.936 0c2.993 0 5.524 2.385 5.524 5.852a5.512 5.512 0 0 1 1.842-.314c3.083 0 5.524 2.515 5.524 5.538 0 .848-.161 1.602-.513 2.324a5.539 5.539 0 0 1 3.275 5.062c0 3.053-2.478 5.538-5.524 5.538zm-3.802-4.048c.795 1.383 2.132 2.202 3.802 2.202a3.692 3.692 0 0 0 3.683-3.692 3.689 3.689 0 0 0-2.518-3.505l-4.967 4.995zM6.936 1.846c-1.832 0-3.683 1.256-3.683 4.061v12.185c0 2.806 1.85 4.062 3.683 4.062 1.456 0 2.26-.736 3.557-2.037l.575-.576c-.297-.886-.45-1.869-.45-2.926V5.908c0-2.806-1.849-4.062-3.682-4.062zm5.524 6.031v8.738c0 .495.042.966.12 1.409l4.003-4.013c1.163-1.165 1.402-2.016 1.402-2.934 0-1.962-1.573-3.692-3.683-3.692-.657 0-1.285.169-1.842.493z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiKleinanzeigenIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}