import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-indiansuperleague-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Indian Super League</svg:title>
    <svg:path
      d="M10.59766.10938C8.95434.10104 7.5554.58357 6.94336.88086c-.11273.0545-.22433.1126-.35156.18164C4.78218 3.766 4.33554 6.69795 4.0957 7.8789c.26408.30678.52699.58814.80078.84962-1.07275.03838-2.03204-.00761-2.80859-.1543-.33058.63514-.61723 1.20155-.86719 1.73047C.99935 9.7809.8152 9.28492.75195 8.56445c-.3342.39607-.49852.77729-.55664 1.11524v.03125c-.09448.49055-.14861.97195-.17773 1.48437-.03625.67942-.01414 1.35171.0586 2.00586 0 .04657.03052.28815.03905.32227.06.41695.13848.8315.23829 1.23828.00803.03241-.0082-.01544.0371.1504.00014.00053.0699.25394.07227.2461.83843 2.8787 2.3119 4.76328 4.35742 6.38086.10029.01877.20602.03355.31446.04688.31308.28653.6532.56117 1.11328.88086.71513.30126 1.60352.67465 2.77539.99414.0836-.13436.19644-.2729.3418-.42188-.81711-.50461-1.3046-.81155-1.97462-1.44726.9546-.06846 1.9968-.1977 3.0332-.32813v-.0039c.07814-.66713.18119-1.26748.34766-2.02343.5766.48578 1.14455.91864 1.84766 1.4336-.04942.273-.07803.51066-.11523.85546.39197.21598.68197.37125.93945.50195-.47944.09048-.95232.17008-1.41211.23828-.0073.58867.00029.61018.13477 1.11524.85762.29796 1.03607.33892 1.77734.50976.3452-.0691.95215-.2225 1.35547-.3496h.0039c.07636-.30533.1012-.31144.2793-.76563a96.46696 96.46696 0 0 1-.33594-.18555c.61706-.11713 1.24963-.26233 1.87695-.42969 0 0 .32307-.53391 1.06445-1.89648-.18245-.15612-.61101-.51041-1.15234-.95508.3126-.82414.5334-1.42238.70898-1.92187a29.32447 29.32447 0 0 1 .7793-.16797c.47606-1.37368.65186-1.87142 1.50586-4.03711-.24974-.4401-.46855-.81353-.68945-1.16797.2034.17544.42375.36465.70117.60547.13448-.05449.26798-.1079.40234-.16602 1.02473-.4288 1.94057-.86248 2.73633-1.29492v-.002c.31259-1.56614.34283-2.41444.38282-3.59178-.923-.83938-1.5409-1.29324-2.47852-1.97265-.7449.40332-1.59923.81124-2.55859 1.21093-.12349.05087-.24777.1051-.375.15235-.16097 1.09869-.3181 1.83647-.52148 2.6875-.05766-.07247-.10876-.13865-.16993-.21485-1.47166.30159-2.98648.6827-4.47265 1.14063-.20145 1.05256-.33834 1.84446-.43555 2.63477-.60046.12875-1.1954.24428-1.78125.3457-.76223-.87702-1.36607-1.63645-1.86719-2.33594.21567.09574.42651.18967.66211.28906 1.3355-1.03594 2.35838-1.86542 3.28907-2.67968.33263.1617.68196.33024 1.0918.52539.9178-.7365 1.81918-1.51219 2.67187-2.30664-.58867-1.72975-.92008-2.41288-1.46875-3.54297a237.94319 237.94319 0 0 1-.97657-.27344C13.43207 1.4266 12.93946.52017 12.93946.48828c-.79715-.27026-1.59483-.37512-2.3418-.3789Zm6.88086.7832c-.87955.28476-1.62698.67187-1.64648.67187.25083.68316.41743 1.3906.5664 2.01563.9775.50143 1.67304.97418 2.23633 1.35937.58866-.28346 1.14003-.51649 1.65234-.6836-.14898-.9121-.35539-1.51436-.53711-2.04491-.84663-.61772-1.63557-1.00586-2.27148-1.31836ZM3.46094 3.38086l.00195.00195.00195-.00195zm.00195.00195c-.42072.41375-.8214.85235-1.1914 1.32031 0 0-.00225.012-.00587.01563-.22534.54867-.48457 1.3216-.66992 1.88477.14898.14535.33448.28349.54883.41796.33433-.46518.79364-1.06087 1.14258-1.5078.17073-.54143.43548-1.2525.64258-1.7793-.1844-.11215-.33993-.2322-.4668-.35157Zm11.31836.52734c.4485.92496.77407 1.66902 1.23633 2.98633-.6919.635-1.40973 1.25594-2.14453 1.85352a115.7121 115.7121 0 0 1-.60938-.29297c.70758-.63443 1.38006-1.27556 2.11719-2.01562-.35197-1.01946-.67735-1.88363-.97656-2.63672-.0004-.0004.01565.0047.37695.10546zM2.41406 9.0625c.86184.12732 1.86338.15634 2.9668.0996.72448.6061 1.55666 1.12022 2.66602 1.65821.58175.87448 1.2899 1.80434 2.23828 2.9082-.38338 1.3918-.64943 2.4489-.98243 4.17774.38721.37202.73084.68634 1.06055.97656-.1579.71876-.26302 1.30403-.3418 1.90235-1.17492.1452-2.34363.27701-3.33789.3164-.632-.35033-1.3539-.7714-2.11328-1.31054-.16764.16503-.30908.32691-.42383.48437-1.52965-1.4295-2.63206-3.1043-3.29101-5.55664-.02458-.09153-.04463-.18145-.0625-.27148.11145-.1633.245-.3306.39062-.50196-.03164-.76196-.06062-1.45003.00977-2.32226.29063-.7321.71661-1.58413 1.2207-2.56055Zm14.83203.93555c.08038.10142.15203.19551.22657.29101-.01035.0423-.0187.07781-.0293.1211.1479.12316.22428.18808.34765.29101.68221.89958 1.13217 1.59025 1.67969 2.54688-.67878 1.72765-.93478 2.43437-1.32226 3.55078-.07204.0152-.14459.03303-.2168.04883.09074-.26703.1829-.54496.29101-.8711-1.6134-1.5734-1.87347-1.8424-3.33789-3.33593-.59952.16079-1.2005.30816-1.79687.44336.0851-.64947.19884-1.3142.3496-2.11524 2.16083-.64889 3.79153-.95932 3.8086-.9707zM3.15625 13.0039c-.30533 1.12658-.38373 1.92205-.44922 2.62695.64316 1.1447 1.34364 2.0049 1.91406 2.69531.66758.07264 1.4184.09774 2.23438.07617.06911-.91212.24807-1.80775.4043-2.60351-.85389-1.07923-1.41037-1.98807-1.85743-2.71485-.81751.01812-1.57393-.00371-2.24609-.08007Zm19.29297 1.04297c-.69777.4288-1.42251.84293-2.16016 1.25-.21446.79576-.24948.91586-.68554 2.34765.3998.24218.89073.55728 1.4746.94727.64317-.34883 1.19204-.72708 1.79883-1.09766.06186-.03637.11571-.07273.17383-.10547.01206 0 .01952-.0156.02343-.02734-.01315-.01315.03383-.02245.22852-.47655.26522-.55955.48625-1.1407.66797-1.74024.01088-.02912.01843-.05888.0293-.08789-.3852-.37794-.39231-.3737-1.35156-1.13672-.06626.0425-.13282.08463-.19922.12695zm-3.07813 6.28125c-.32707.35607-.78398.80239-1.1328 1.13671.10078.15118.17596.29508.23046.43555.47184-.16336.93866-.35904 1.38867-.58398 0 0 .0039-.0042.0039-.0078.37432-.34158.85011-.83969 1.19532-1.20313-.06175-.1671-.14772-.33793-.26758-.51953-.46474.26217-.94274.4998-1.41797.74218zm-2.52343-.52344c.29259.24078.5342.43964.69921.57812-.41402.74796-.70587 1.26414-.75 1.3379-.63406.16403-1.26896.30608-1.88476.416-.71425-.30196-1.1466-.51623-1.8457-.89452.01997-.16895.04622-.33773.07813-.51758 1.19164-.20783 2.4245-.47919 3.66015-.8086.0143-.03711.02864-.07421.04296-.11132z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiIndiansuperleagueIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#ED2F21');
}
