import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c as a,a as e,b as s,d as n,e as l,r as t}from"./app.c628af9c.js";const c={},v={id:"\u5251\u6307-offer-59-i-\u6ED1\u52A8\u7A97\u53E3\u7684\u6700\u5927\u503C",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#\u5251\u6307-offer-59-i-\u6ED1\u52A8\u7A97\u53E3\u7684\u6700\u5927\u503C","aria-hidden":"true"},"#",-1),m=n(),o={href:"https://leetcode.cn/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/",target:"_blank",rel:"noopener noreferrer"},b=n("\u5251\u6307 Offer 59 - I. \u6ED1\u52A8\u7A97\u53E3\u7684\u6700\u5927\u503C"),h=l(`<p><strong>\u89E3\u6CD5\uFF1A\u5355\u8C03\u961F\u5217</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        if (nums == null || nums.length &lt; 2) return nums;
        ArrayDeque&lt;Integer&gt; q = new ArrayDeque&lt;&gt;();
        int n = nums.length, idx = 0;
        int[] res = new int[n - k + 1];
        for (int i = 0; i &lt; n; i ++ ) {
            if (!q.isEmpty() &amp;&amp; i - q.peek() + 1 &gt; k) q.pollFirst();
            while (!q.isEmpty() &amp;&amp; nums[q.getLast()] &lt;= nums[i]) q.pollLast();
            q.add(i);
            if (i &gt;= k - 1) res[idx ++ ] = nums[q.peek()]; 
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p={id:"_402-\u79FB\u6389-k-\u4F4D\u6570\u5B57",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#_402-\u79FB\u6389-k-\u4F4D\u6570\u5B57","aria-hidden":"true"},"#",-1),_=n(),f={href:"https://leetcode.cn/problems/remove-k-digits/",target:"_blank",rel:"noopener noreferrer"},x=n("402. \u79FB\u6389 K \u4F4D\u6570\u5B57"),k=l(`<p><strong>\u89E3\u6CD5\uFF1A\u5355\u8C03\u6808</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    //\u5C3D\u53EF\u80FD\u8BA9\u6700\u9AD8\u4F4D\u5C0F\uFF0C\u6700\u9AD8\u4F4D\u76F8\u540C\u7684\u60C5\u51B5\u4E0B\u5C3D\u53EF\u80FD\u8BA9\u6B21\u9AD8\u4F4D\u5C0F
    public String removeKdigits(String num, int k) {
        StringBuilder res = new StringBuilder();
        for (char c : num.toCharArray()) {
            while (k &gt; 0 &amp;&amp; res.length() &gt; 0 &amp;&amp; res.charAt(res.length() - 1) &gt; c) {
                k -- ;
                res.delete(res.length() - 1, res.length());
            }
            res.append(c);
        }
        while (k -- &gt; 0) res.delete(res.length() - 1, res.length());
        k = 0;
        //\u5220\u9664\u524D\u5BFC0
        while (k &lt; res.length() &amp;&amp; res.charAt(k) == &#39;0&#39;) k ++ ;
        return k == res.length() ? &quot;0&quot; : res.substring(k, res.length());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),q={id:"_84-\u67F1\u72B6\u56FE\u4E2D\u6700\u5927\u7684\u77E9\u5F62",tabindex:"-1"},y=e("a",{class:"header-anchor",href:"#_84-\u67F1\u72B6\u56FE\u4E2D\u6700\u5927\u7684\u77E9\u5F62","aria-hidden":"true"},"#",-1),A=n(),w={href:"https://leetcode.cn/problems/largest-rectangle-in-histogram/",target:"_blank",rel:"noopener noreferrer"},S=n("84. \u67F1\u72B6\u56FE\u4E2D\u6700\u5927\u7684\u77E9\u5F62"),D=l(`<p><strong>\u89E3\u6CD51\uFF1A\u679A\u4E3E\u5DE6\u53F3\u8FB9\u754C</strong></p><p>O\uFF08N * N\uFF09\u8D85\u65F6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int largestRectangleArea(int[] heights) {
        int n = heights.length;
        int res = 0;
        for (int l = 0; l &lt; n; l ++ ) {
            int h = 100010;
            for (int r = l; r &lt; n; r ++ ) {
                h = Math.min(h, heights[r]);
                res = Math.max(res, h * (r - l + 1));
            }
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u89E3\u6CD52\uFF1A\u679A\u4E3E\u9AD8\u5EA6</strong></p><p>O\uFF08N * N\uFF09\u8D85\u65F6</p><p><strong>\u89E3\u6CD53\uFF1A\u5355\u8C03\u6808</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    //\u627E\u5230\u6BCF\u4E2A\u67F1\u5F62\u6761\u5DE6\u8FB9\u548C\u53F3\u8FB9\u6700\u8FD1\u7684\u6BD4\u81EA\u5DF1\u4F4E\u7684\u77E9\u5F62\u6761\uFF0C\u7136\u540E\u7528\u5BBD\u5EA6\u4E58\u4E0A\u5F53\u524D\u67F1\u5F62\u6761\u7684\u9AD8\u5EA6
    public int largestRectangleArea(int[] heights) {
        int n = heights.length;
        int res = 0;
        ArrayDeque&lt;Integer&gt; s = new ArrayDeque&lt;&gt;();
        for (int i = 0; i &lt; n; i ++ ) {
            while (!s.isEmpty() &amp;&amp; heights[s.peek()] &gt; heights[i]) {
            	//\u77E9\u5F62\u7684\u9AD8\u5EA6\u4E3Ah[cur], \u5BBD\u5EA6\u7531cur\u4E24\u8FB9\u6700\u8FD1\u7684\u6BD4h[cur]\u4F4E\u7684\u51B3\u5B9A
                int cur = s.pop();
                if (s.isEmpty()) 
                    res = Math.max(res, heights[cur] * i);
                else
                    res = Math.max(res, heights[cur] * (i - s.peek() - 1));
            }
            s.push(i);
        }
        //\u5904\u7406\u6808\u4E2D\u5176\u4ED6\u7684\u6570\u636E      
        while (!s.isEmpty()) {
            int cur = s.pop();
            if (s.isEmpty()) 
                res = Math.max(res, heights[cur] * n);
            else
                res = Math.max(res, heights[cur] * (n - s.peek() - 1));
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),E={id:"_224-\u57FA\u672C\u8BA1\u7B97\u5668",tabindex:"-1"},I=e("a",{class:"header-anchor",href:"#_224-\u57FA\u672C\u8BA1\u7B97\u5668","aria-hidden":"true"},"#",-1),N=n(),j={href:"https://leetcode.cn/problems/basic-calculator/",target:"_blank",rel:"noopener noreferrer"},M=n("224. \u57FA\u672C\u8BA1\u7B97\u5668"),B=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6808</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public void calc(ArrayDeque&lt;Integer&gt; num, ArrayDeque&lt;Character&gt; op) {
        var b = num.pop();
        var a = num.pop();
        if (op.peek() == &#39;+&#39;) num.push(a + b);
        else num.push(a - b);
        op.pop();
    }

    public int calculate(String s) {
        ArrayDeque&lt;Integer&gt; num = new ArrayDeque&lt;&gt;();
        ArrayDeque&lt;Character&gt; op = new ArrayDeque&lt;&gt;();
        for (int i = 0; i &lt; s.length(); i ++ ) {
            char c = s.charAt(i);
            if (c == &#39; &#39;) continue;
            if (c == &#39;(&#39;) op.push(c);
            else if (c == &#39;)&#39;) {
                op.pop();
                if (!op.isEmpty() &amp;&amp; op.peek() != &#39;(&#39;) calc(num, op);
            }
            else if (c == &#39;+&#39; || c == &#39;-&#39;) {
                //\u7279\u6B8A\u7B26\u53F7\u5904\u7406
                if (i == 0 || s.charAt(i - 1) == &#39;-&#39; || s.charAt(i - 1) == &#39;(&#39;) 
                    num.push(0);
                op.push(c);
            }
             else {
                int j = i;
                while (j &lt; s.length() &amp;&amp; Character.isDigit(s.charAt(j))) j ++ ;
                num.push(Integer.parseInt(s.substring(i, j)));
                i = j - 1;
                if (!op.isEmpty() &amp;&amp; op.peek() != &#39;(&#39;) calc(num, op);
            }
        }
        return num.pop();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function C(L,V){const i=t("ExternalLinkIcon");return d(),a("div",null,[e("h2",v,[u,m,e("a",o,[b,s(i)])]),h,e("h2",p,[g,_,e("a",f,[x,s(i)])]),k,e("h2",q,[y,A,e("a",w,[S,s(i)])]),D,e("h2",E,[I,N,e("a",j,[M,s(i)])]),B])}var K=r(c,[["render",C],["__file","801-805.html.vue"]]);export{K as default};
