import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as r,a as i,b as s,d as n,e as l,r as a}from"./app.37ebd3ca.js";const v={},c={id:"_169-\u591A\u6570\u5143\u7D20",tabindex:"-1"},m=i("a",{class:"header-anchor",href:"#_169-\u591A\u6570\u5143\u7D20","aria-hidden":"true"},"#",-1),o=n(),u={href:"https://leetcode.cn/problems/majority-element/",target:"_blank",rel:"noopener noreferrer"},b=n("169. \u591A\u6570\u5143\u7D20"),_=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6295\u7968\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int majorityElement(int[] nums) {
        int r = 0, c = 0;
        for (int x : nums) {
            if (c == 0) {
                r = x;
                c = 1;
            } else if (r == x) {
                c ++ ;
            } else {
                c -- ;
            }
        }
        return r;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),h={id:"_350-\u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6-ii",tabindex:"-1"},g=i("a",{class:"header-anchor",href:"#_350-\u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6-ii","aria-hidden":"true"},"#",-1),p=n(),x={href:"https://leetcode.cn/problems/intersection-of-two-arrays-ii/",target:"_blank",rel:"noopener noreferrer"},f=n("350. \u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6 II"),y=l(`<p><strong>\u89E3\u6CD51\uFF1A\u6392\u5E8F\u9884\u5904\u7406</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int[] intersect(int[] a, int[] b) {
        Arrays.sort(a);
        Arrays.sort(b);
        List&lt;Integer&gt; list = new ArrayList&lt;&gt;();
        for (int i = 0, j = 0; i &lt; a.length &amp;&amp; j &lt; b.length; ) {
            if (j &lt; b.length &amp;&amp; a[i] &gt; b[j]) j ++ ;
            else if (i &lt; a.length &amp;&amp; a[i] &lt; b[j]) i ++ ;
            else {
                list.add(a[i]);
                i ++ ;
                j ++ ;
            }
        }
        int[] res = new int[list.size()];
        for (int i = 0; i &lt; list.size(); i ++ )
            res[i] = list.get(i);
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u89E3\u6CD52\uFF1A\u54C8\u5E0C\u6620\u5C04</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        int[] map = new int[1010];
        List&lt;Integer&gt; list = new ArrayList&lt;&gt;();
        for (int x : nums1) map[x] ++ ;
        for (int x : nums2) {
            if (map[x] &gt; 0) list.add(x);
            map[x] -- ;
        } 
        int[] res = new int[list.size()];
        for (int i = 0; i &lt; list.size(); i ++ )
            res[i] = list.get(i);
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),j={id:"_152-\u4E58\u79EF\u6700\u5927\u5B50\u6570\u7EC4",tabindex:"-1"},w=i("a",{class:"header-anchor",href:"#_152-\u4E58\u79EF\u6700\u5927\u5B50\u6570\u7EC4","aria-hidden":"true"},"#",-1),L=n(),k={href:"https://leetcode.cn/problems/maximum-product-subarray/",target:"_blank",rel:"noopener noreferrer"},I=n("152. \u4E58\u79EF\u6700\u5927\u5B50\u6570\u7EC4"),S=l(`<p><strong>\u89E3\u6CD5\uFF1A\u52A8\u6001\u89C4\u5212</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int maxProduct(int[] nums) {
        int res = nums[0];
        int f = nums[0], g = nums[0];
        for (int i = 1; i &lt; nums.length; i ++ ) {
            int a = nums[i], fa = a * f, ga = a * g;
            f = Math.max(a, Math.max(fa, ga));
            g = Math.min(a, Math.min(fa, ga));
            res = Math.max(res, f);
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),A={id:"_54-\u87BA\u65CB\u77E9\u9635",tabindex:"-1"},M=i("a",{class:"header-anchor",href:"#_54-\u87BA\u65CB\u77E9\u9635","aria-hidden":"true"},"#",-1),z=n(),E={href:"https://leetcode.cn/problems/spiral-matrix/",target:"_blank",rel:"noopener noreferrer"},N=n("54. \u87BA\u65CB\u77E9\u9635"),V=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public List&lt;Integer&gt; spiralOrder(int[][] matrix) {
        int n = matrix.length, m = matrix[0].length;
        List&lt;Integer&gt; res = new ArrayList&lt;&gt;();
        int[][] dirs = new int[][]{{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        boolean[][] st = new boolean[n][m];
        for (int i = 0, x = 0, y = 0, d = 0; i &lt; m * n; i ++ ) {
            res.add(matrix[x][y]);
            st[x][y] = true;
            int a = x + dirs[d][0], b = y + dirs[d][1];
            if (a &lt; 0 || a &gt;= n || b &lt; 0 || b &gt;= m || st[a][b]) {
                d = (d + 1) % 4;
                a = x + dirs[d][0];
                b = y + dirs[d][1];
            }
            x = a;
            y = b;
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function B(C,O){const e=a("ExternalLinkIcon");return t(),r("div",null,[i("h2",c,[m,o,i("a",u,[b,s(e)])]),_,i("h2",h,[g,p,i("a",x,[f,s(e)])]),y,i("h2",j,[w,L,i("a",k,[I,s(e)])]),S,i("h2",A,[M,z,i("a",E,[N,s(e)])]),V])}var q=d(v,[["render",B],["__file","720-721.html.vue"]]);export{q as default};
