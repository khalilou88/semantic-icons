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
  selector: 'svg[si-backup-table-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M11 11h5v5h-5zm-7 0h5v5H4zm0-7h12v5H4z" opacity=".3" />
    <svg:path d="M20 6v14H6v2h14c1.1 0 2-.9 2-2V6h-2z" />
    <svg:path
      d="M18 16V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zM4 4h12v5H4V4zm5 12H4v-5h5v5zm2-5h5v5h-5v-5z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBackupTableIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
