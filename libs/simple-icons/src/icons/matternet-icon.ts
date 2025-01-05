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
  selector: 'svg[si-matternet-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Matternet</svg:title>
    <svg:path
      d="M19.229 4.18l-4.066 2.327V1.826L11.993 0 8.827 1.83v4.677L4.78 4.17 1.606 6v3.664L5.657 12l-4.054 2.343V18l3.165 1.831 4.044-2.338v4.681L11.983 24l3.174-1.831v-4.676l4.052 2.327 3.173-1.829v-3.646L18.339 12l4.058-2.336V6l-3.164-1.82h-.004zm.373 3.429V5.715l1.639.942v1.905l-1.636-.953h-.003zm1.638 9.286l-6.075-3.504 1.65-.945L21.239 15v1.896l.001-.001zm-6.827-3.95L12.763 12l6.452-3.726 1.641.944-6.446 3.727h.003zM3.134 9.219l1.641-.944L11.228 12l-1.639.945-6.455-3.726zm5.69 4.17l-6.075 3.508V15l4.435-2.555 1.641.945v-.001zM2.749 8.564V6.66l1.64-.945v1.898l-1.64.951zm9.627 0V1.55l1.641.937V7.61l-1.641.953v.001zm-2.402-.96V2.493l1.64-.944v7.004l-1.64-.949zm8.866-1.889v1.898l-6.456 3.734V9.442l6.456-3.727zm-7.228 3.724v1.897L5.153 7.609V5.715l6.46 3.721-.001.003zm-2.403 6.513l-4.435 2.555-1.64-.944 6.074-3.508v1.897zm.765-2.343l1.64-.945v7.453l-1.64.959v-7.467zm3.656 8.115l-1.639.954-1.64-.951 1.64-.946 1.639.946v-.003zm.394-.657l-1.648-.95v-7.441l1.648.944zm6.831-3.504l-1.641.944-4.425-2.555v-1.897l6.075 3.508h-.009z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMatternetIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#261C29');
  }
}
