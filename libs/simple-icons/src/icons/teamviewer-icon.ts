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
  selector: 'svg[si-teamviewer-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>TeamViewer</title>
    <svg:path
      d="m20.17 11.998-6.225-3.401.685 2.144H9.37l.684-2.145L3.829 12l6.225 3.404-.683-2.147h5.26l-.686 2.147zM20.448 0H3.553A3.553 3.553 0 0 0 .001 3.552v16.895A3.553 3.553 0 0 0 3.553 24h16.895A3.553 3.553 0 0 0 24 20.447V3.552A3.553 3.553 0 0 0 20.448 0zM12 21.646c-5.328 0-9.648-4.32-9.648-9.648 0-5.329 4.32-9.646 9.648-9.646S21.65 6.672 21.65 12s-4.32 9.648-9.649 9.648z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiTeamviewerIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
