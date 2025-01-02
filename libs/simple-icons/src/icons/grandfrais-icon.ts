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
  selector: 'svg[si-grandfrais-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Grand Frais</title>
    <svg:path
      d="M12.003 0a11.92 11.92 0 0 0-8.485 3.512A11.92 11.92 0 0 0 0 11.998c0 3.205 1.248 6.22 3.515 8.488A11.914 11.914 0 0 0 11.995 24a11.922 11.922 0 0 0 8.487-3.512A11.92 11.92 0 0 0 24 12.003c0-3.205-1.247-6.219-3.512-8.486A11.924 11.924 0 0 0 12.003 0zm0 1.336c5.879.002 10.66 4.785 10.66 10.664v.003l-.001.146H19.41c.488.15.816.594.884 1.233l.004.044-.933.103-.003-.046c-.04-.479-.313-.53-.428-.53-.258 0-.4.164-.4.463 0 .369.34.657.73.99.503.427 1.073.912 1.073 1.714 0 .845-.553 1.37-1.446 1.37-.9 0-1.341-.74-1.376-1.475l-.002-.04.933-.134.003.048c.031.469.208.738.485.738.298 0 .47-.156.47-.428 0-.443-.353-.737-.76-1.077-.489-.407-1.042-.868-1.042-1.698 0-.847.516-1.334 1.418-1.334.137 0 .266.02.386.057.627-.16.945-.667.945-1.513V8.61c.001-.545-.132-.953-.395-1.213-.237-.236-.584-.355-1.031-.355h-1.341l-.001 5.104h-.802l.002-5.104-.853-.002v.014l-.004 2.814a18946 18946 0 0 0-1.044-2.828h-.866l-.002 5.105h-.463l-.948-5.105h-1.145l-.951 5.105h-.314L9.46 9.874c.282-.136.613-.471.613-1.3 0-1.06-.47-1.533-1.525-1.534h-1.27v5.105h-.845l.001-2.589H4.93v.748h.565v.467c-.002.495-.126.679-.459.679-.263 0-.386-.162-.386-.509V8.318c0-.353.124-.53.366-.53.31 0 .479.148.479.934v.027h.898v-.353c0-.866-.532-1.427-1.355-1.427-.807 0-1.328.525-1.328 1.335v2.629c0 .576.241 1.008.645 1.21h1.1c.13-.073.239-.175.35-.303l.131.303h.451v.86H4.799v1.242h1.187v.863H4.799v2.288H3.82v-5.252H1.338l-.002-.146c0-2.85 1.11-5.527 3.126-7.541a10.591 10.591 0 0 1 7.54-3.121zm-3.785 6.48.287.001c.476 0 .628.184.628.757s-.152.757-.629.757h-.286zm10.307.003h.28c.454 0 .608.173.608.686v2.235c0 .282-.046.452-.149.554-.093.092-.235.132-.461.132h-.278zm-6.494.4.322 2.032h-.647l.056-.351.27-1.68zm2.84.884 1.073 3.04h.409v5.253h-.975v-5.25h-.507zm-6.243.985.609 2.058h-.49c1.001.03 1.45.514 1.45 1.565 0 .834-.324 1.18-.612 1.324l.76 2.361h-.997L8.72 15.26a4.527 4.527 0 0 1-.382.019v2.117h-.976v-5.253h.856v-2.037c.142 0 .303-.008.41-.018zm2.942.981h.92l.151 1.074h.635l.967 5.253h-.93l-.176-1.144h-.896l-.173 1.144h-.935l.968-5.25h-.682l.15-1.077zM8.338 12.96v1.5h.27c.47 0 .613-.175.613-.75 0-.574-.142-.75-.612-.75zm4.353.355-.328 2.151h.654z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiGrandfraisIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
