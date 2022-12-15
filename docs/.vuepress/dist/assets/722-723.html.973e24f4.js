import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as t,a as n,b as s,d as e,e as l,r as a}from"./app.aebf164a.js";const v={},c={id:"_35-\u641C\u7D22\u63D2\u5165\u4F4D\u7F6E",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#_35-\u641C\u7D22\u63D2\u5165\u4F4D\u7F6E","aria-hidden":"true"},"#",-1),m=e(),o={href:"https://leetcode.cn/problems/search-insert-position/",target:"_blank",rel:"noopener noreferrer"},b=e("35. \u641C\u7D22\u63D2\u5165\u4F4D\u7F6E"),h=l(`<p><strong>\u89E3\u6CD5\uFF1A\u4E8C\u5206</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int searchInsert(int[] nums, int target) {
        int l = 0, r = nums.length;
        while (l &lt; r) {
            int mid = l + r &gt;&gt; 1;
            if (nums[mid] &gt;= target) r = mid;
            else l = mid + 1;
        }
        return l;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),g={id:"_344-\u53CD\u8F6C\u5B57\u7B26\u4E32",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_344-\u53CD\u8F6C\u5B57\u7B26\u4E32","aria-hidden":"true"},"#",-1),p=e(),x={href:"https://leetcode.cn/problems/reverse-string/",target:"_blank",rel:"noopener noreferrer"},f=e("344. \u53CD\u8F6C\u5B57\u7B26\u4E32"),L=l(`<p><strong>\u89E3\u6CD5\uFF1A\u53CC\u6307\u9488</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public void reverseString(char[] s) {
        int l = 0, r = s.length - 1;
        while (l &lt; r) {
            char t = s[l];
            s[l] = s[r];
            s[r] = t;
            l ++ ;
            r -- ;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),S={id:"_448-\u627E\u5230\u6240\u6709\u6570\u7EC4\u4E2D\u6D88\u5931\u7684\u6570\u5B57",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#_448-\u627E\u5230\u6240\u6709\u6570\u7EC4\u4E2D\u6D88\u5931\u7684\u6570\u5B57","aria-hidden":"true"},"#",-1),w=e(),I={href:"https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/",target:"_blank",rel:"noopener noreferrer"},y=e("448. \u627E\u5230\u6240\u6709\u6570\u7EC4\u4E2D\u6D88\u5931\u7684\u6570\u5B57"),N=l(`<p><strong>\u89E3\u6CD5\uFF1A\u539F\u5730\u54C8\u5E0C</strong></p><p><strong>\u5199\u6CD51</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public List&lt;Integer&gt; findDisappearedNumbers(int[] nums) {
        List&lt;Integer&gt; res = new ArrayList&lt;&gt;();
        for (int x : nums) {
            x = Math.abs(x);
            if (nums[x - 1] &gt; 0) nums[x - 1] *= -1;
        }
        for (int i = 0; i &lt; nums.length; i ++ )
            if (nums[i] &gt; 0)
                res.add(i + 1);
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5199\u6CD52</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public List&lt;Integer&gt; findDisappearedNumbers(int[] nums) {
        List&lt;Integer&gt; res = new ArrayList&lt;&gt;();
        for (int x : nums) 
            nums[(x - 1) % nums.length] += nums.length;      
        
        for (int i = 0; i &lt; nums.length; i ++ )
            if (nums[i] &lt;= nums.length)
                res.add(i + 1);
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),A={id:"_209-\u957F\u5EA6\u6700\u5C0F\u7684\u5B50\u6570\u7EC4",tabindex:"-1"},V=n("a",{class:"header-anchor",href:"#_209-\u957F\u5EA6\u6700\u5C0F\u7684\u5B50\u6570\u7EC4","aria-hidden":"true"},"#",-1),j=e(),B={href:"https://leetcode.cn/problems/minimum-size-subarray-sum/",target:"_blank",rel:"noopener noreferrer"},E=e("209. \u957F\u5EA6\u6700\u5C0F\u7684\u5B50\u6570\u7EC4"),M=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6ED1\u52A8\u7A97\u53E3</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int ans = (int) 1e5 + 10;
        int n = nums.length;
        for (int i = 0, j = 0, cnt = 0; i &lt; n; i ++ ) {
            cnt += nums[i];
            while (cnt &gt;= target) {
                ans = Math.min(ans, i - j + 1);
                cnt -= nums[j ++ ];
            }
        }
        return ans == (int) 1e5 + 10 ? 0 : ans;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u89E3\u6CD52\uFF1A\u4E8C\u5206</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int n = nums.length;
        int res = n + 10;
        int[] s = new int[n + 1];
        for (int i = 0; i &lt; n; i ++ ) 
            s[i + 1] = nums[i] + s[i];
        
        for (int i = 0; i &lt; n; i ++ ) {
            int l = i + 1, r = n;
            while (l &lt; r) {
                int mid = l + r &gt;&gt; 1;
                if (s[mid] - s[i] &gt;= target) r = mid;
                else l = mid + 1;
            }
            if (s[r] - s[i] &gt;= target) res = Math.min(res, r - i);
        }
        return res == n + 10 ? 0 : res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function D(z,C){const i=a("ExternalLinkIcon");return r(),t("div",null,[n("h2",c,[u,m,n("a",o,[b,s(i)])]),h,n("h2",g,[_,p,n("a",x,[f,s(i)])]),L,n("h2",S,[k,w,n("a",I,[y,s(i)])]),N,n("h2",A,[V,j,n("a",B,[E,s(i)])]),M])}var F=d(v,[["render",D],["__file","722-723.html.vue"]]);export{F as default};
