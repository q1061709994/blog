import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as t,a as n,b as s,d as i,e as d,r as a}from"./app.37ebd3ca.js";const v={},c={id:"_136-\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#_136-\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57","aria-hidden":"true"},"#",-1),m=i(),o={href:"https://leetcode.cn/problems/single-number/",target:"_blank",rel:"noopener noreferrer"},b=i("136. \u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57"),_=d(`<p><strong>\u89E3\u6CD5\uFF1A\u4F4D\u8FD0\u7B97</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int singleNumber(int[] nums) {
        for (int i = 1; i &lt; nums.length; i ++ ) 
            nums[0] ^= nums[i];
        return nums[0];
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),g={id:"_75-\u989C\u8272\u5206\u7C7B",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_75-\u989C\u8272\u5206\u7C7B","aria-hidden":"true"},"#",-1),p=i(),x={href:"https://leetcode.cn/problems/sort-colors/",target:"_blank",rel:"noopener noreferrer"},f=i("75. \u989C\u8272\u5206\u7C7B"),k=d(`<p><strong>\u89E3\u6CD51\uFF1A\u5E38\u89C4\u6392\u5E8F</strong></p><p><strong>\u89E3\u6CD52\uFF1A\u4E09\u6307\u9488\u6392\u5E8F</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public void swap(int[] nums, int i, int j) {
        int t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
    }
    //j\u6307\u54110\u7684\u90E8\u5206\uFF0Ck\u6307\u54112\u7684\u90E8\u5206
    public void sortColors(int[] nums) {
        for (int i = 0, j = 0, k = nums.length - 1; i &lt;= k; ) {
            if (nums[i] == 2) swap(nums, i ++ , k -- );
            else if (nums[i] == 0) swap(nums, i ++ , j ++ );
            else i ++ ;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),j={id:"_15-\u4E09\u6570\u4E4B\u548C",tabindex:"-1"},w=n("a",{class:"header-anchor",href:"#_15-\u4E09\u6570\u4E4B\u548C","aria-hidden":"true"},"#",-1),L=i(),S={href:"https://leetcode.cn/problems/3sum/",target:"_blank",rel:"noopener noreferrer"},y=i("15. \u4E09\u6570\u4E4B\u548C"),A=d(`<p><strong>\u89E3\u6CD5\uFF1A\u6392\u5E8F + \u53CC\u6307\u9488</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public List&lt;List&lt;Integer&gt;&gt; threeSum(int[] nums) {
        List&lt;List&lt;Integer&gt;&gt; ans = new ArrayList&lt;&gt;();
        Arrays.sort(nums);
        int n = nums.length;
        for (int i = 0; i &lt; n - 2; i ++ ) {
            //nums[i]\u5982\u679C\u5927\u4E8E0\u5219\u4E09\u6570\u4E4B\u548C\u5FC5\u5927\u4E8E0
            if (nums[i] &gt; 0) break;
            //\u53BB\u91CD
            if (i &gt; 0 &amp;&amp; nums[i] == nums[i - 1]) continue;
            for (int j = i + 1, k = n - 1; j &lt; k; j ++ ) {
                List&lt;Integer&gt; tem = new ArrayList&lt;&gt;();
                //\u53BB\u91CD
                if (j &gt; i + 1 &amp;&amp; nums[j] == nums[j - 1]) continue;
                while (k &gt; j &amp;&amp; nums[i] + nums[j] + nums[k] &gt; 0) k -- ;
                //\u6CA1\u6709\u5408\u9002\u7684\u7B54\u6848
                if (k == j) continue;
                if (nums[i] + nums[j] + nums[k] == 0) {
                    tem.add(nums[i]);tem.add(nums[j]);tem.add(nums[k]);
                    ans.add(tem);
                }
            }
        }
        return ans;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),B={id:"_56-\u5408\u5E76\u533A\u95F4",tabindex:"-1"},I=n("a",{class:"header-anchor",href:"#_56-\u5408\u5E76\u533A\u95F4","aria-hidden":"true"},"#",-1),N=i(),C={href:"https://leetcode.cn/problems/merge-intervals/",target:"_blank",rel:"noopener noreferrer"},V=i("56. \u5408\u5E76\u533A\u95F4"),E=d(`<p><strong>\u89E3\u6CD51\uFF1A\u6392\u5E8F</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int[][] merge(int[][] arr) {
        if (arr.length == 0 || arr == null) return arr;
        List&lt;int[]&gt; res = new ArrayList&lt;&gt;();
        Arrays.sort(arr, (a, b) -&gt; a[0] - b[0]);
        int st = arr[0][0], end = arr[0][1];
        for (int i = 1; i &lt; arr.length; i ++ ) {
            int a = arr[i][0], b = arr[i][1];
            //\u5F53\u524D\u533A\u95F4\u4E0D\u80FD\u5408\u5E76
            if (a &gt; end) {
                res.add(new int[]{st, end});
                st = a;
                end = b;
            } else {
                //\u80FD\u5408\u5E76\u9700\u8981\u66F4\u65B0\u6709\u7AEF\u70B9
                end = Math.max(end, b);
            }
        }
        res.add(new int[]{st, end});
        return res.toArray(new int[res.size()][2]);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u89E3\u6CD52\uFF1A\u4F4D\u56FE</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    boolean[] bitSet = new boolean[20010];
    //\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u8BBE\u7F6E\u4E3A true \u7684\u4F4D\u7684\u7D22\u5F15\uFF0C\u8FD9\u53D1\u751F\u5728\u6307\u5B9A\u7684\u8D77\u59CB\u7D22\u5F15\u6216\u4E4B\u540E\u7684\u7D22\u5F15\u4E0A\u3002
    public int nextSetBit(int i) {
        while (bitSet[i] == false) i ++ ;
        return i;
    }
    //\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u8BBE\u7F6E\u4E3A false \u7684\u4F4D\u7684\u7D22\u5F15\uFF0C\u8FD9\u53D1\u751F\u5728\u6307\u5B9A\u7684\u8D77\u59CB\u7D22\u5F15\u6216\u4E4B\u540E\u7684\u7D22\u5F15\u4E0A\u3002
    public int nextClearBit(int i) {
        while (bitSet[i] == true) i ++ ;
        return i;
    }
    public int[][] merge(int[][] arr) {
        int max = 0;
        for (int[] ss : arr) {
            int begin = ss[0] * 2;
            int end = ss[1] * 2 + 1;
            for (int i = begin; i &lt; end; i ++ ) bitSet[i] = true;
            max = Math.max(max, end);
        }

        ArrayList&lt;int[]&gt; res = new ArrayList&lt;&gt;();
        int index = 0;
        //\u5408\u5E76\u533A\u95F4
        while (index &lt; max) {
            int begin = nextSetBit(index);
            int end = nextClearBit(begin);
 
            res.add(new int[]{begin / 2, (end - 1) / 2};);
            index = end;
        }

        return res.toArray(new int[res.size()][2]);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function z(M,T){const e=a("ExternalLinkIcon");return r(),t("div",null,[n("h2",c,[u,m,n("a",o,[b,s(e)])]),_,n("h2",g,[h,p,n("a",x,[f,s(e)])]),k,n("h2",j,[w,L,n("a",S,[y,s(e)])]),A,n("h2",B,[I,N,n("a",C,[V,s(e)])]),E])}var F=l(v,[["render",z],["__file","716-717.html.vue"]]);export{F as default};
