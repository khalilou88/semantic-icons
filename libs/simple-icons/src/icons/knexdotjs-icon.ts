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
  selector: 'svg[si-knexdotjs-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Knex.js</title>
    <svg:path
      d="M24 10.288v.126l-.095.249q-.02.052-.071.076l-2.847 1.29a.024.024 0 0 0 0 .044L24 13.444v.638q-.264.444-.722.655-.05.023-.1.002l-2.224-.902q-.05-.02-.1-.004l-.909.283a.086.087 59.4 0 1-.089-.023l-.822-.86q-.066-.067-.082.025-.3 1.698-1.343 3.057a.019.019 0 0 0 .015.03l1.364-.024q.049 0 .072.043l.416.795a.204.207 88 0 0 .104.095l2.142.908a.137.137 0 0 1 .078.086c.139.475.157 1.172-.426 1.334q-.05.014-.097-.004l-2.9-1.094a.028.028 0 0 0-.035.036l1.068 2.845q.019.05.002.1c-.183.563-.846.543-1.312.414a.176.175 86.1 0 1-.113-.1l-.901-2.137q-.023-.053-.074-.08l-.813-.415q-.047-.025-.047-.079l.018-1.148a.04.04 0 0 1 .004-.018q.024-.052.018-.107-.007-.075-.07-.031-1.44 1.026-3.137 1.247a.033.033 0 0 0-.019.056l.957.912q.045.043.027.102l-.263.826a.28.28 0 0 0 .008.19l.867 2.135q.018.043-.002.085-.19.403-.552.645h-.745l-1.3-2.866a.023.022 44.7 0 0-.04 0l-1.31 2.866h-.604q-.436-.246-.652-.7-.024-.05-.003-.1l.881-2.17q.02-.05.003-.101l-.28-.878a.093.093 0 0 1 .026-.098l.916-.861a.032.032 0 0 0-.016-.056q-1.623-.288-2.937-1.216-.051-.036-.05.026l.023 1.225q0 .055-.047.08l-.837.448a.15.149 87.5 0 0-.067.074l-.938 2.213q-.024.058-.084.075c-.488.144-1.19.164-1.376-.434q-.012-.043.003-.084l1.111-2.955q.037-.096-.06-.06l-2.867 1.08q-.057.021-.116.005c-.59-.162-.56-.902-.416-1.375q.018-.056.072-.08l2.208-.935q.055-.024.083-.077l.433-.83a.107.108 14.6 0 1 .098-.057l1.111.038q.091.003.039-.07a6.912 6.912 0 0 1-1.185-2.876.026.026 0 0 0-.044-.014l-.853.9q-.033.033-.078.019l-.904-.28a.19.184 41.8 0 0-.126.005l-2.222.9q-.048.02-.095-.002-.552-.26-.763-.797v-.327l.07-.15a.133.133 0 0 1 .065-.066l2.928-1.327a.023.023 0 0 0 0-.042L.2 10.734q-.051-.024-.074-.076c-.246-.56.232-1.032.696-1.259a.125.127 43.2 0 1 .105-.004l2.227.906q.05.02.103.004l.909-.287a.087.085 58.8 0 1 .086.023l.783.817q.052.056.066-.02.252-1.493 1.136-2.776.035-.05-.027-.05l-1.158.026a.09.089 75.4 0 1-.08-.047l-.416-.798a.273.272 87.6 0 0-.137-.126l-2.168-.918a.116.112 2.4 0 1-.061-.064c-.177-.475-.193-1.2.402-1.395q.045-.015.09.002L5.585 5.78q.085.032.053-.053L4.516 2.747a.13.13 0 0 1 0-.087c.206-.578.901-.573 1.389-.408a.133.132 88.3 0 1 .077.074l.934 2.21a.158.158 0 0 0 .07.075l.82.43q.049.024.05.079.028.584-.019 1.212-.006.08.058.032 1.21-.894 2.798-1.226.103-.02.027-.093l-.787-.748q-.044-.04-.026-.099l.288-.9q.016-.053-.004-.103L9.285.965q-.02-.05.003-.097c.22-.461.725-.976 1.261-.698q.055.029.081.085l1.282 2.824a.034.035 45.2 0 0 .063 0l1.313-2.9q.025-.056.08-.078c.568-.233 1.028.223 1.257.69q.028.058.004.115l-.906 2.23a.133.13 47.8 0 0-.003.09l.284.903a.106.103 60 0 1-.028.107l-.86.82a.028.029 28.1 0 0 .015.05 6.85 6.85 0 0 1 2.934 1.2q.058.042.057-.03l-.015-1.157q0-.047.041-.067l.827-.428q.058-.03.084-.09l.939-2.22q.02-.05.072-.066c.505-.153 1.192-.163 1.382.421q.014.042-.002.082l-1.094 2.924q-.028.073.045.046l2.961-1.114q.062-.024.125-.002c.577.192.553.888.408 1.377a.123.124 86.7 0 1-.07.078l-2.217.933q-.054.023-.081.075l-.434.832q-.03.059-.095.057l-1.202-.037q-.094-.003-.04.074.895 1.235 1.202 2.844.012.068.06.017l.779-.822q.028-.03.068-.018l.923.289q.053.016.103-.004l2.213-.897q.05-.02.1 0 .624.253.796.885zM10.04 9.025c.344-.205.719-.38 1.113-.461a.09.09 0 0 0 .072-.088V7.099q0-.075-.075-.061-1.2.22-2.162.94-.048.034-.006.076l.96.959q.045.045.1.012zm2.707-.469c.425.104.81.263 1.156.493q.058.037.105-.012l1.035-1.034a.032.032 0 0 0-.004-.049q-1.032-.744-2.278-.933-.062-.009-.062.053v1.42a.064.063 7.7 0 0 .048.062zm4.302 2.716a5.158 5.158 0 0 0-.9-2.192.055.055 0 0 0-.084-.007l-1.034 1.033q-.043.044-.01.096.314.5.442 1.079.013.06.075.06h1.45q.07 0 .06-.069zm-8.598.011c.089-.402.24-.773.462-1.12q.034-.053-.01-.097l-.966-.967a.03.03 0 0 0-.047.004q-.69.953-.89 2.171a.058.058 0 0 0 .058.067h1.32q.06 0 .073-.058zm5.15.785a1.644 1.644 0 0 0-1.643-1.644 1.644 1.644 0 0 0-1.644 1.644 1.644 1.644 0 0 0 1.644 1.643 1.644 1.644 0 0 0 1.644-1.643zm-6.592.807a5.07 5.07 0 0 0 .905 2.168q.037.051.083.007l.932-.933q.047-.048.01-.104-.342-.52-.48-1.136-.014-.062-.08-.062H7.062q-.061 0-.052.06zm9.067 2.246c.5-.66.824-1.425.962-2.248q.01-.059-.05-.059l-1.452.001a.08.08 0 0 0-.078.064q-.129.592-.481 1.144-.02.03.005.056l1.045 1.046q.026.026.049-.004zm-3.344 1.958a5.167 5.167 0 0 0 2.247-.885.048.048 0 0 0 .006-.072l-1.011-1.012q-.042-.041-.091-.01-.537.341-1.145.477-.066.014-.066.08v1.371q0 .06.06.05zm-3.68-.9a5.1 5.1 0 0 0 2.131.88q.067.012.067-.055l.001-1.351q0-.064-.063-.078-.61-.132-1.114-.45a.057.057 0 0 0-.07.007l-.958.96q-.048.048.006.087z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiKnexdotjsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}