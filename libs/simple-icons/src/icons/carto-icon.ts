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
  selector: 'svg[si-carto-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Carto</svg:title>
    <svg:path
      d="M19.138 7.138C21.823 7.138 24 9.3147 24 12s-2.1769 4.862-4.862 4.862c-1.9046 0-3.5532-1.0949-4.351-2.6896h.4683c.7615 1.358 2.215 2.2759 3.8826 2.2759 2.4567 0 4.4483-1.9916 4.4483-4.4483 0-2.4567-1.9916-4.4483-4.4483-4.4483-1.6677 0-3.1211.9178-3.8826 2.2759h-.4683c.7978-1.5947 2.4464-2.6897 4.351-2.6897zm0 3.3103c.8569 0 1.5517.6947 1.5517 1.5517 0 .857-.6948 1.5517-1.5518 1.5517-.857 0-1.5517-.6947-1.5517-1.5517 0-.857.6948-1.5517 1.5517-1.5517zm-17.5772.0109c.6066 0 .9968.2545 1.2597.615l-.6192.4793c-.1697-.2079-.3648-.3478-.649-.3478-.4156 0-.7083.3562-.7083.7889v.008c0 .4453.2927.793.7083.793.3096 0 .492-.144.6702-.3604l.6192.4411c-.2799.386-.6574.6701-1.3105.6701C.6829 13.547 0 12.898 0 12.0116v-.008c0-.8652.6617-1.5439 1.5608-1.5439zm4.7346.0382l1.264 2.9902h-.8822l-.212-.5344H5.3156l-.212.5344h-.861l1.2596-2.9902zm4.27.0212c.454 0 .7678.1187.9671.318.174.174.263.3988.263.6914v.008c0 .458-.2418.7592-.6108.9162l.7083 1.0349h-.9458l-.598-.8992h-.3648v.8992h-.8228v-2.969zm5.3983 0v.721h-.8907v2.248h-.8228v-2.248h-.8864v-.721zm-10.0712.9543l-.335.8398h.6658zm4.6348-.246h-.5429v.7168h.5472c.2756 0 .441-.1357.441-.352v-.008c0-.2375-.1738-.3563-.4453-.3563z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCartoIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#EB1510');
  }
}
