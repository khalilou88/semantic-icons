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
  selector: 'svg[si-calculator-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M416 48a16 16 0 00-16-16H112a16 16 0 00-16 16v416a16 16 0 0016 16h288a16 16 0 0016-16zM192 432h-48v-48h48zm0-80h-48v-48h48zm0-80h-48v-48h48zm88 160h-48v-48h48zm0-80h-48v-48h48zm0-80h-48v-48h48zm88 160h-48V304h48zm0-160h-48v-48h48zm0-96H144V80h224z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCalculatorSharpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
