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
  selector: 'svg[si-w3schools-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>W3Schools</svg:title>
    <svg:path
      d="M20.228 5.464s.605.648 1.45.648c.666 0 1.151-.403 1.151-.955 0-.677-.619-.989-1.368-.989h-.441l-.264-.595 1.17-1.387c.25-.298.462-.485.462-.485s-.188.01-.567.01h-1.905V.713h3.902v.73L22.253 3.25c.883.125 1.747.754 1.747 1.862 0 1.09-.825 2.098-2.25 2.098-1.359 0-2.112-.855-2.112-.855l.59-.892zm-7.611 1.348 5.154 9.176 2.543-4.535-4.866-8.662H9.785L7.438 6.97 5.092 2.79H0l7.41 13.197.028-.048.03.048 5.149-9.176zM.053 22.208h.753c0 .22.192.431.533.431.317 0 .528-.158.528-.37 0-.181-.14-.263-.38-.316l-.431-.11c-.73-.192-.917-.58-.917-.994 0-.504.5-.964 1.205-.964.576 0 1.228.293 1.219 1.012H1.8c0-.22-.202-.36-.432-.36-.25 0-.423.144-.423.346 0 .168.159.264.346.307l.518.14c.73.186.86.642.86.94 0 .657-.658 1.017-1.316 1.017-.638 0-1.286-.388-1.3-1.08zm3.282-.624c0-1.027.826-1.7 1.762-1.7.561 0 1.017.25 1.315.625l-.567.45a.96.96 0 0 0-.734-.326c-.561 0-.965.404-.965.95 0 .543.404.956.965.956a.96.96 0 0 0 .734-.327l.567.451a1.647 1.647 0 0 1-1.315.624c-.936 0-1.762-.676-1.762-1.703zm6.954-.197V23.2h-.806v-1.756c0-.519-.312-.797-.672-.797-.37 0-.825.216-.825.845v1.713h-.807v-5h.811v2.25c.159-.394.682-.576 1.003-.576.835.005 1.296.566 1.296 1.507zm.845.197c0-1.027.796-1.7 1.718-1.7.921 0 1.727.673 1.727 1.7s-.806 1.703-1.727 1.703c-.922 0-1.718-.676-1.718-1.703zm2.634 0c0-.557-.417-.95-.916-.95-.5 0-.907.393-.907.95 0 .566.408.955.907.955.499 0 .916-.39.916-.955zm1.498 0c0-1.027.796-1.7 1.718-1.7.921 0 1.727.673 1.727 1.7s-.806 1.703-1.727 1.703c-.917 0-1.718-.676-1.718-1.703zm2.634 0c0-.557-.417-.95-.916-.95-.5 0-.907.393-.907.95 0 .566.408.955.907.955.504 0 .916-.39.916-.955zm1.704 1.622v-5h.806v5h-.806zm1.685-.998h.753c0 .22.192.431.533.431.316 0 .528-.158.528-.37 0-.181-.14-.263-.38-.316l-.431-.11c-.73-.192-.917-.58-.917-.994 0-.504.499-.964 1.205-.964.575 0 1.228.293 1.219 1.012h-.768c0-.22-.202-.36-.432-.36-.25 0-.423.144-.423.346 0 .168.159.264.346.307l.518.14c.73.186.86.642.86.94 0 .657-.658 1.017-1.316 1.017-.638 0-1.281-.388-1.295-1.08z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiW3schoolsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
