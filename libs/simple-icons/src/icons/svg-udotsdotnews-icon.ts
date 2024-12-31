import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-udotsdotnews-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>U.S. News</title>
      <path
        d="M0 9.12v4.70543h1.98926c-.48065-.1604-.79078-.50119-.79078-1.07684v-2.48285h.79359v2.41442c0 .38135.28474.60562.80344.60562.45426 0 .77554-.22432.77554-.60094v-2.4191h.79383v2.5288c0 .1311-.01976.25046-.05636.35882h.56566v.67207h.80812c-.42491-.1347-.62706-.37592-.72164-.67277-.03732-.11904-.05109-.29835-.05109-.37149h.81703c0 .06444.02297.17462.05063.22946.10104.2112.33963.30257.82125.30257.55121 0 .7439-.15096.7439-.38976 0-.29856-.15189-.40383-.73875-.51399-.10572-.01854-.37194-.06939-.5325-.10125-.7071-.13302-1.14281-.45881-1.14281-1.0602 0-.61547.49548-1.02831 1.56024-1.02831.90887 0 1.33591.31678 1.51921.77566.0462.11952.08273.25653.08273.34863h-.81703c0-.04122-.02296-.12339-.05063-.1787-.0963-.20203-.2937-.3075-.75258-.3075-.6012 0-.7207.13279-.7207.33949 0 .26627.21587.37185.80813.49113.18305.0366.42186.08722.5046.10101.7209.13782 1.09711.43618 1.09711 1.05621 0 .10908-.01562.21156-.0443.30774h.57164v.67207h.24329v-3.55969h.9225l1.39524 2.33614v-2.33614h.75727v3.55969h1.04344c-.2635-.0927-.4786-.24559-.62227-.47356-.1317-.20903-.2046-.47646-.2046-.81234 0-.30642.08295-.57858.23343-.79254.25782-.37452.7198-.5932 1.3036-.5932.6126 0 1.0313.2234 1.26913.56894.19944.29178.27226.67616.22864 1.0793h-2.2663c0 .12234.05369.21446.14579.31664.1125.12162.33095.19922.62273.19922.21888 0 .37923-.03894.49149-.08766.14064-.06324.20884-.15044.22312-.20906h.7636c-.06282.25776-.21845.5006-.48563.67148-.0824.05306-.18074.09567-.28676.13278h1.5975l-.9334-2.60836h.81211l.64196 1.98879.58828-1.9888h.86531l.60328 1.9888.62695-1.9888h.7643l-.9437 2.60837h1.44245c-.28682-.09717-.45222-.25848-.51469-.50262-.02412-.10686-.02883-.18-.02883-.26766h.7731a.403.403 0 0 0 .02413.1364c.04878.12637.25287.16032.67617.16032.4425 0 .5788-.0778.5788-.2332 0-.1512-.16082-.1849-.55477-.24328-.10176-.01452-.4228-.0633-.58313-.08766-.58854-.0825-.87058-.34011-.87059-.85137 0-.47598.4276-.78727 1.28872-.78727.7338 0 1.19646.18964 1.33242.57352.03396.10266.04863.2674.04863.32086h-.75363c0-.0291-.01034-.11159-.03422-.14555-.05364-.07266-.19455-.1364-.5639-.1364-.42823 0-.555.06865-.555.19476 0 .1167.08321.16029.46241.2189.15564.02365.53017.0776.62227.09212.6417.09738.92414.33578.92414.8366 0 .35043-.16832.59123-.52465.72152H24V9.12Zm14.87356 1.13098c.27491 0 .38835.12747.38835.37101 0 .2559-.12166.3818-.38836.3818-.26742 0-.38888-.1301-.38882-.3791 0-.2325.1193-.37371.38882-.37371m5.91257 0c.27444 0 .38813.12747.38813.37101 0 .2559-.12185.3818-.38813.3818-.2679 0-.38935-.1301-.3893-.3791 0-.2325.1193-.37371.3893-.37371m-8.10808.0056c.13872 0 .2196.08037.22476.16875.00096.0065 0 .02672 0 .03164-.0023.09234-.07324.15656-.1459.20156.03282.02676.07478.06423.11672.09867.02388-.03024.03727-.06893.03937-.11063h.20438c-.0035.09144-.04053.17038-.09891.22594a5.9 5.9 0 0 1 .15633.12023h-.27727c-.01218-.0087-.0239-.01877-.03422-.02789-.05628.02346-.13126.03516-.20062.03516-.17322 0-.32927-.03162-.33551-.16523-.00072-.01146 0-.02837 0-.03773.0019-.08298.0806-.13452.16687-.17508-.04242-.06-.05857-.10994-.05977-.15398v-.03703c.004-.08952.0919-.17438.24375-.17438zm.67558.0075h.23836s.11133.44998.11133.47296c0-.02298.10781-.47296.10781-.47296h.22922s.11063.44998.11063.47296c0-.02298.10945-.47296.10945-.47296h.21621l-.20437.72867h-.24364s-.10897-.41998-.1118-.44344c-.0012.02442-.11273.44344-.11273.44344h-.24187zm2.86149 0h.22547v.54843h.34992v.18023h-.5754zm.68672 0h.39984c.1317 0 .21375.03234.25875.09492.04476.06186.05344.12257.05344.25523 0 .1554-.01101.21233-.05133.27281-.0438.06726-.11904.1057-.25008.1057h-.41062zm1.94625 0h.61945v.17155h-.40008v.1057h.38531v.17321h-.3853v.10828h.40405v.16992h-.62343zm.76628 0h.44836c.0879 0 .15048.01959.19032.06106.04266.03678.06563.0996.06563.19007 0 .08082-.01761.1379-.05391.1766-.04194.04897-.1117.0722-.20121.07407-.02742.00042-.22453-.0012-.22453-.0012h-.00013v.22816h-.22453zm2.42731 0h.69117v.1753h-.23297v.55336h-.2271v-.55336h-.2311Zm-6.68086.00012h.46125c.09702 0 .1601.02787.19688.0764.02831.03679.04194.08566.04194.15387 0 .05862-.01267.105-.0321.13735-.02299.03888-.05582.06164-.08954.06914l.1704.2918h-.25031l-.12797-.24657h-.1507v.24668h-.21985Zm2.62406 0h.46102c.09702 0 .1601.02787.19687.0764.02832.03679.04195.08566.04195.15387 0 .05862-.0129.105-.0321.13735-.02275.03888-.05623.06164-.08977.06914l.17063.2918h-.24985l-.12867-.24657h-.15047v.24668h-.2196zm3.29063 0h.46101c.09654 0 .16033.02787.19735.0764.0279.03679.04219.08566.04219.15387 0 .05862-.01315.105-.03187.13735-.02346.03888-.05603.06164-.09023.06914l.17015.2918h-.2496l-.12845-.24657h-.1507v.24668h-.21985zm-8.59969.14823c-.03234 0-.04592.02201-.04898.04781a.072.072 0 0 0 0 .0197c.0011.02015.01147.04332.02953.06702.03726-.02202.06329-.04615.06563-.07453v-.01477c-.0012-.02412-.01263-.04523-.04617-.04523zm2.19773.01078c-.11886 0-.1613.05745-.16125.20391 0 .1545.0558.20578.16243.20578.10242 0 .16195-.04336.16195-.20578 0-.14436-.03958-.2039-.16313-.2039m5.91258 0c-.11958 0-.16154.05745-.16148.20391 0 .1545.05534.20578.16172.20578.1029 0 .16242-.04336.16242-.20578 0-.14436-.03912-.2039-.16266-.2039m-.9498.01031v.16805h.17508c.04242 0 .06327-.01406.07383-.03422.0073-.01314.009-.02675.009-.04805 0-.02268-.0031-.04149-.0098-.05133-.01242-.02316-.03353-.03445-.07031-.03445zm-2.71278.00094v.38625h.14063c.05694 0 .08695-.01197.11203-.04148.01902-.02322.0211-.10572.0211-.165 0-.05226-.0051-.11975-.02298-.14039-.02838-.03114-.05508-.03937-.11015-.03937zm-1.54078.0012v.1486h.1929c.02741 0 .05083-.0063.05905-.02439.0056-.0129.0084-.03235.0084-.04687 0-.01638-.0017-.03607-.008-.04687-.01074-.02346-.0321-.03047-.06445-.03047zm2.62383 0v.1486h.19242c.02718 0 .05131-.0063.05953-.02439.0056-.0129.008-.03235.008-.04687 0-.01638-.0014-.03607-.007-.04687-.01128-.02346-.03329-.03047-.06539-.03047zm3.29063 0v.1486h.19242c.02742 0 .05179-.0063.05977-.02439.0054-.0129.008-.03235.008-.04687 0-.01638-.0016-.03607-.0073-.04687-.01104-.02346-.03306-.03047-.06492-.03047zm-8.89688.30844c-.0333.01878-.05654.03872-.05649.0593 0 .03516.03256.04852.10852.04852.02058 0 .04569-.0026.06375-.0073-.04176-.03588-.08506-.0696-.11578-.10055zm-2.91305.69188v2.38945h1.4202Zm4.07602.34476c-.27678 0-.4812.07338-.61266.19008-.0923.0827-.1654.24264-.16546.32086h1.49742c0-.07812-.0333-.20415-.13031-.30633-.11226-.11178-.29697-.2046-.58899-.2046zm3.81094.2939s-.0286.15846-.03352.18774c-.0045.08875-.46674 1.44291-.50777 1.56305h1.08855c-.0411-.12023-.50361-1.47408-.51258-1.55812-.0052-.0342-.03469-.19266-.03469-.19266zM4.16613 13.42208c-.14058.18484-.35177.31803-.61195.40336h.61195zm3.81282.0068c-.1263.17355-.32144.30817-.58137.39656h.58137ZM0 14.08289V14.88h24v-.7971z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgUdotsdotnewsIcon {
  readonly class = input<string>('');
}
