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
  selector: 'svg[si-fairphone-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Fairphone</title>
    <svg:path
      d="M3.25 12.358c.124-.306.25-.612.38-.918.058.306.12.613.185.918H3.25zm.129-1.943a46.426 46.426 0 0 0-1.396 3.151h.649a.234.234 0 0 0 .216-.154c.05-.137.102-.273.155-.41h.957l.103.411a.2.2 0 0 0 .195.155h.667a38.402 38.402 0 0 1-.752-3.152l-.794-.001zm1.935 3.152h.784c.062-1.044.17-2.089.321-3.134h-.783a36.666 36.666 0 0 0-.322 3.134m3.23-2.018c-.029.25-.201.407-.467.407h-.388c.028-.273.06-.546.094-.819h.384c.262 0 .41.134.378.402v.009m.793-.04c0-.008.002-.016.003-.023.037-.318-.026-.56-.172-.734-.17-.206-.461-.318-.871-.318H6.882c-.035.234-.067.468-.096.703h.218c-.103.81-.178 1.62-.226 2.43h.78c.02-.323.043-.646.07-.97h.278c.128.285.26.57.394.856a.2.2 0 0 0 .183.115h.756a53.18 53.18 0 0 1-.542-1.137 1.11 1.11 0 0 0 .64-.922m2.093.062c-.031.264-.212.43-.487.43h-.274c.03-.293.062-.572.099-.865h.27c.283 0 .427.134.393.42l-.001.014m-.257-1.137H9.866c-.033.23-.066.473-.096.703h.217a36.478 36.478 0 0 0-.224 2.432h.78c.018-.303.04-.606.065-.909h.3c.669-.009 1.225-.367 1.31-1.12l.002-.017c.083-.703-.326-1.088-1.046-1.088m3.032 1.19h-.866c.044-.396.096-.793.154-1.19h-.784a36.105 36.105 0 0 0-.32 3.134h.784c.023-.403.053-.806.09-1.209h.867c-.037.403-.067.806-.09 1.21h.788a36.75 36.75 0 0 1 .321-3.135h-.789c-.058.397-.11.794-.154 1.19m6.068.386a52.412 52.412 0 0 1-.847-1.631l-.718.12a36.018 36.018 0 0 0-.312 3.07h.773c.031-.547.076-1.095.133-1.642.278.516.566 1.032.865 1.548a.188.188 0 0 0 .163.094h.59a36.75 36.75 0 0 1 .32-3.134h-.772c-.076.526-.142 1.051-.196 1.576M.941 11.713c.02-.185.042-.37.066-.556h1.427c.031-.24.064-.482.1-.724H.104c-.036.242-.069.483-.1.725h.218A35.93 35.93 0 0 0 0 13.568h.784c.023-.386.052-.773.087-1.16h.845a.247.247 0 0 0 .236-.221c.016-.158.032-.315.05-.473H.94zm21.461 1.147c.015-.18.03-.359.047-.538h.859a.247.247 0 0 0 .237-.221c.014-.149.03-.297.047-.446h-1.075c.02-.172.04-.343.062-.515h1.324c.03-.235.063-.471.097-.707h-2.317c-.035.236-.067.471-.097.707h.218a35.363 35.363 0 0 0-.225 2.427h2.119c.013-.236.03-.471.048-.707h-1.344zm-5.079-.795-.005.049c-.054.542-.293.782-.66.782-.36 0-.59-.332-.535-.874 0-.016.003-.033.005-.049.056-.542.349-.869.71-.869a.46.46 0 0 1 .408.225l-.11.106c.093.15.217.357.188.63m.414-1.202.108-.105c-.212-.243-.52-.383-.903-.383-.818 0-1.52.658-1.616 1.593l-.007.068c-.095.94.463 1.59 1.286 1.59.822 0 1.419-.572 1.513-1.508l.007-.067a1.545 1.545 0 0 0-.388-1.188"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFairphoneIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
