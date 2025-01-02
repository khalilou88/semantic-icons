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
  selector: 'svg[si-cairographics-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Cairo Graphics</title>
    <svg:path
      d="M10.58008 0v2.8457h2.83984V0h-2.83984zm.0918.0918h.82421v.82617h-.82422V.0918zm.91601 0h.82422v.82617h-.82422V.0918zm.91602 0h.82422v.82617h-.82422V.0918zM12 .1836a.32052.32137 0 0 0-.32031.3203A.32052.32137 0 0 0 12 .82618a.32052.32137 0 0 0 .32031-.32226A.32052.32137 0 0 0 12 .18359zm-1.32813.82617h.82422v.82617h-.82422v-.82617zm.91602 0h.82422v.82617h-.82422v-.82617zm.91602 0h.82422v.82617h-.82422v-.82617zm.4121.0918a.32052.32137 0 0 0-.3203.3203.32052.32137 0 0 0 .3203.32227.32052.32137 0 0 0 .32032-.32227.32052.32137 0 0 0-.32031-.3203zm-5.41992.3203c-.36366.09009-.18301.4514-.24218.64844-.15085.5019-.93845.6611-1.33204 1.00196-.38502.3332-.61479.72302-.9121 1.08984-.25081.30867-.56287.61108-.61329.96484-.05719.40115-.03739.85443.14454 1.23828.22584.47548.49133 1.07827.86914 1.50196.29019.3254.33045.43387.81836.60547.15466.0704.19392.10477.4043.14843l.041-.2578.18165-.21485c-.24324-.29816-.6114-.32556-.82422-.54297-.35521-.36269-.47236-.73316-.6836-1.14844-.20182-.39793-.4647-.70243-.48632-1.125-.0092-.18098-.08882-.50478.00586-.66797.06289-.10834.36304-.24605.46484-.3496.31544-.32066.17403-.7262.53906-1.02344.3247-.26455.873-.46884 1.25782-.71094.26674-.16772.43279-.22881.49023-.46485.06319-.26005-.14167-.45345-.12305-.69335zm6.84375 0a2.3402 2.34639 0 0 1-.68554 1.66016A2.3402 2.34639 0 0 1 12 3.76953a2.3402 2.34639 0 0 1-1.6543-.6875l-.14453.14453A2.54395 2.55069 0 0 0 12 3.97266c.67461 0 1.3218-.2678 1.79883-.7461a2.54395 2.55069 0 0 0 .74414-1.80469h-.20313zm2.16407 0c.01863.2399-.1862.43331-.12305.69336.05754.23604.22154.29713.48828.46485.38478.2421.93518.4464 1.25977.71094.36477.29724.22162.70278.5371 1.02343.10181.10356.40187.24127.46485.34961.09458.16319.01507.48699.00586.66797-.02157.42257-.2846.72707-.48633 1.125-.21124.41528-.32688.78575-.68164 1.14844-.21287.2174-.58094.2448-.82422.54297l.18164.21484.04102.25781c.21032-.04366.24768-.07803.40234-.14843.48755-.1716.52827-.28007.81836-.60547.3779-.4237.6445-1.02648.8711-1.50196.18183-.38385.20166-.83713.14453-1.23828-.05048-.35376-.36246-.65617-.61329-.96484-.29726-.36682-.52734-.75664-.9121-1.08984-.39353-.34086-1.18119-.50006-1.33204-1.00196-.05906-.19704.12153-.55835-.24218-.64844zm-5.83204.50586h.82422v.82618h-.82422v-.82618zm.91602 0h.82422v.82618h-.82422v-.82618zm.91602 0h.82422v.82618h-.82422v-.82618zm-1.41993.0918a.32052.32137 0 0 0-.3203.32227.32052.32137 0 0 0 .3203.3203.32052.32137 0 0 0 .32032-.3203.32052.32137 0 0 0-.32032-.32227zm.91602 0a.32052.32137 0 0 0-.32031.32227A.32052.32137 0 0 0 12 2.6621a.32052.32137 0 0 0 .32031-.3203A.32052.32137 0 0 0 12 2.01953zm.91602 0a.32052.32137 0 0 0-.32032.32227.32052.32137 0 0 0 .32032.3203.32052.32137 0 0 0 .3203-.3203.32052.32137 0 0 0-.3203-.32227zm-.91797 3.14844c-1.56307 0-2.83008.48287-2.83008 1.07812 0 .52046 1.267.375 2.83008.375 1.5626 0 2.83008.11807 2.83008-.375 0-.5952-1.26748-1.07812-2.83008-1.07812zm-1.41016 1.58008c-1.61506 0-3.0237.66482-3.79492 1.65234a9.49127 9.51641 0 0 0-.11719.93555c.20157-.0019 4.26982-.03274 4.63281.32617l.68946.68164c.11507-.11385.68945-.68164.68945-.68164.363-.3589 4.4316-.32801 4.63281-.32617-.02385-.32127-.0627-.6349-.11718-.94336-.77246-.98344-2.17958-1.64453-3.79102-1.64453h-2.82422zM6.67383 9.36523a9.32897 9.35368 0 0 0-.01758.33008c-.00386.11258.5293.23922.5293.3418 0 .1183-.53233.2607-.52735.39062.15228 3.7416 2.46954 6.71506 5.31055 6.73633l-.45898-5.67773.00195-.00781.45117-1.08594-.69726-.68946c-.28745-.28428-3.41224-.31765-4.5918-.30664v-.03125zm10.64844 0v.03125c-1.17961-.01102-4.30426.0224-4.5918.30664l-.69531.68946.45312 1.09375-.45898 5.67578c2.84162-.02127 5.15817-2.9927 5.31054-6.73438.0049-.12971-.52734-.27238-.52734-.39062 0-.10258.53122-.22911.52734-.3418a9.11348 9.13762 0 0 0-.01757-.33008zm-12.20704.77344c-.78161-.02976-.65792.7332-.39843 1.4082.28877.75119.41972 1.54219.73047 2.28516.1427.34117.3531.67385.72851.77149.01892-.43028-.04815-.54354-.3125-.86329-.2236-.26999-.16888-.63953-.3086-.94336-.18217-.39808-.21227-.79847-.36913-1.19921-.06934-.17747-.42563-.71147-.33008-.91016.16193-.33682.46842-.00468.6211.10547.21459.15487.32847.114.59374.14844.03017.004.18039.10998.5332.27148l-.04101-.375c-.48363-.23358-.52563-.49735-1.05469-.63476-.1509-.03923-.28092-.0602-.39258-.06446zm13.76954 0c-.11172.00425-.2416.02523-.39258.06446-.5286.13741-.57102.40118-1.05469.63476l-.04297.375c.35272-.1615.50489-.26748.53516-.27148.26527-.03444.3792.00643.59375-.14844.15273-.11015.45715-.44229.61914-.10547.09549.19869-.25878.73269-.32813.91016-.15674.40074-.18895.80113-.3711 1.19922-.13975.30382-.08524.67336-.30858.94335-.2643.31975-.32942.433-.31055.86329.37546-.09764.58586-.43032.72851-.77149.3108-.74297.43975-1.53397.72852-2.28515.25998-.67501.38556-1.43797-.39648-1.4082zm-6.88672.32617a7434.7739 7454.4686 0 0 1-.42774 1.03125c.001.01214.32573 4.02957.42774 5.29102.102-1.26145.42677-5.27887.42773-5.29102-.0046-.01117-.3297-.79476-.42773-1.03125zm-4.41992 3.82422c-.33986.45543-.3559.82826-.51172 1.1914-.26848.62555-.00933 1.47171.5 1.92188.3079.27419.81067.49046 1.17773.66993.51055.24953 1.02277.57594 1.59375.68359.12627.02377.44694.06603.33984-.17969-.0496-.1141-.41107-.23466-.51562-.29297-.42288-.23582-.83346-.53785-1.22852-.82617-.48322-.35003-1.0595-.57018-1.43945-1.05469-.15538-.19817-.18157-.2506-.14453-.47851.03526-.21746.0696-.46799.11523-.68555.0515-.2452.12342-.48301.25391-.70312l-.14063-.2461zm8.84375 0-.14063.2461c.1304.2201.20237.45791.2539.70312.0457.21756.07983.4681.11524.68555.03688.22792.0109.28034-.14453.47851-.37989.4845-.95623.70466-1.43945 1.0547-.39496.2883-.80564.59034-1.22852.82616-.1045.0583-.46792.17886-.51758.29297-.10673.24572.21557.20346.3418.17969.57103-.10765 1.08326-.43406 1.59375-.6836.36702-.17946.86967-.39573 1.17773-.66992.50914-.45017.76832-1.29633.5-1.92187-.15599-.36315-.17192-.73598-.51171-1.1914zm-4.54102 4.1504a.38505.38607 0 0 0-.26563.36718.38505.38607 0 1 0 .76954 0 .38505.38607 0 0 0-.50391-.36719zm-5.74024 1.51757c-1.1778 0-1.96289.84814-1.96289 2.02149 0 1.10522.8002 2.02148 1.9629 2.02148.2567 0 .59617-.0239.89062-.16016l-.05273-.63476c-.21895.14383-.52012.21875-.76172.21875-.91355 0-1.2832-.75644-1.2832-1.44531 0-.7343.44553-1.44532 1.23827-1.44532.2265 0 .49774.05247.76954.16602l.06054-.58985c-.20385-.08326-.57443-.15234-.86132-.15234zm2.98829 0c-.49075 0-.91273.15132-1.26758.36328l.0371.60547c.2869-.24224.71705-.39258 1.1172-.39258.7097 0 .95117.3397.95117 1.00586-.27935-.01514-.47456-.01562-.7539-.01562-.73236 0-1.79102.30448-1.79102 1.27343 0 .84027.5816 1.20313 1.4121 1.20313.6493 0 1.02726-.35517 1.19336-.58984h.01563v.49804h.66406c-.0151-.11355-.0293-.3168-.0293-.75586V21.5547c0-1.05223-.44653-1.59766-1.54882-1.59766zm5.87695 0c-.4077 0-.81516.28824-1.0039.68945h-.01368v-.59765h-.66601v3.85937h.71093v-1.75586c0-.96895.41463-1.57421 1.04883-1.57421.1208 0 .26423.01536.39258.06835v-.63671c-.151-.03028-.25735-.05274-.46875-.05274zm2.86133 0c-1.1778 0-1.96485.84814-1.96485 2.02149 0 1.10522.80215 2.02148 1.96485 2.02148 1.15515 0 1.95508-.91626 1.95508-2.02148 0-1.17335-.78483-2.02149-1.95508-2.02149zm-6.22266.0918v3.85937h.71094v-3.85937h-.71094zm6.22266.48437c.755 0 1.19922.71103 1.19922 1.44532 0 .68886-.36872 1.4453-1.19922 1.4453-.83805 0-1.20899-.75643-1.20899-1.4453 0-.7343.44644-1.44532 1.20899-1.44532zM9.51367 22.0547c.151 0 .30213.01562.45313.01562v.33985c0 .57532-.37012 1.01367-1.07227 1.01367-.32465 0-.7168-.21817-.7168-.62695 0-.6813.9509-.7422 1.33594-.7422z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCairographicsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
