import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as r,a as n,b as s,d as e,e as d,r as a}from"./app.a69613ae.js";const c={},v={id:"_26-\u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879",tabindex:"-1"},o=n("a",{class:"header-anchor",href:"#_26-\u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879","aria-hidden":"true"},"#",-1),u=e(),m={href:"https://leetcode.cn/problems/remove-duplicates-from-sorted-array/",target:"_blank",rel:"noopener noreferrer"},b=e("26. \u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879"),_=d(`<p><strong>\u89E3\u6CD5\uFF1A\u53CC\u6307\u9488</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 1) return nums.length;
        int j = 0;
        for (int i = 1; i &lt; nums.length; i ++ ) {
            if (nums[i] == nums[j]) continue;
            else nums[ ++ j] = nums[i];
        }
        return j + 1;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),h={id:"_88-\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4",tabindex:"-1"},p=n("a",{class:"header-anchor",href:"#_88-\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4","aria-hidden":"true"},"#",-1),g=e(),f={href:"https://leetcode.cn/problems/merge-sorted-array/",target:"_blank",rel:"noopener noreferrer"},x=e("88. \u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4"),k=d(`<p>\u89E3\u6CD5\uFF1A\u53CC\u6307\u9488</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public void merge(int[] a, int m, int[] b, int n) {
        int i = m - 1, j = n - 1, k = m + n - 1;
        while (i &gt;= 0 &amp;&amp; j &gt;= 0) {
            if (a[i] &gt; b[j]) a[k -- ] = a[i -- ];
            else a[k -- ] = b[j -- ];
        }
        
        while (j &gt;= 0) a[k -- ] = b[j -- ];
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),j={id:"_283-\u79FB\u52A8\u96F6",tabindex:"-1"},S=n("a",{class:"header-anchor",href:"#_283-\u79FB\u52A8\u96F6","aria-hidden":"true"},"#",-1),N=e(),V={href:"https://leetcode.cn/problems/move-zeroes/",target:"_blank",rel:"noopener noreferrer"},w=e("283. \u79FB\u52A8\u96F6"),y=d(`<p>\u89E3\u6CD5\uFF1A\u53CC\u6307\u9488</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public void moveZeroes(int[] nums) {
        int j = 0;
        for (int i = 0; i &lt; nums.length; i ++ ) {
            if (nums[i] != 0) {
                nums[j ++ ] = nums[i];
            }
        }
        while (j &lt; nums.length) nums[j ++ ] = 0;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),B={id:"_189-\u8F6E\u8F6C\u6570\u7EC4",tabindex:"-1"},E=n("a",{class:"header-anchor",href:"#_189-\u8F6E\u8F6C\u6570\u7EC4","aria-hidden":"true"},"#",-1),I=e(),L={href:"https://leetcode.cn/problems/rotate-array/",target:"_blank",rel:"noopener noreferrer"},z=e("189. \u8F6E\u8F6C\u6570\u7EC4"),C=d(`<p>\u89E3\u6CD5\uFF1A\u53CC\u6307\u9488</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public void rotate(int[] nums, int k) {
        //\u5148\u6574\u4F53\u53CD\u8F6C\u4E00\u6B21
        int n = nums.length;
        k %= n;
        for (int i = 0; i &lt; n / 2; i ++ ) {
            int t = nums[i];
            nums[i] = nums[n - 1 - i];
            nums[n - 1 - i] = t;
        }
        //\u53CD\u8F6C\u524Dk\u4E2A\u6570\u5B57
        for (int i = 0; i &lt; k / 2; i ++ ) {
            int t = nums[i];
            nums[i] = nums[k - 1 - i];
            nums[k - 1 - i] = t;
        }
        //\u53CD\u8F6C\u5176\u4F59\u6570\u5B57
        for (int i = k; i &lt; (n + k) / 2; i ++ ) {
            int t = nums[i];
            nums[i] = nums[n + k - 1 - i];
            nums[n + k - 1 - i] = t;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function D(T,Z){const i=a("ExternalLinkIcon");return t(),r("div",null,[n("h2",v,[o,u,n("a",m,[b,s(i)])]),_,n("h2",h,[p,g,n("a",f,[x,s(i)])]),k,n("h2",j,[S,N,n("a",V,[w,s(i)])]),y,n("h2",B,[E,I,n("a",L,[z,s(i)])]),C])}var F=l(c,[["render",D],["__file","718-719.html.vue"]]);export{F as default};
