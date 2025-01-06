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
  selector: 'svg[si-card-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M32 376a56 56 0 0056 56h336a56 56 0 0056-56V222H32zm66-76a30 30 0 0130-30h48a30 30 0 0130 30v20a30 30 0 01-30 30h-48a30 30 0 01-30-30zM424 80H88a56 56 0 00-56 56v26h448v-26a56 56 0 00-56-56z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCardIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
