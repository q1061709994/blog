import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as t,a as e,b as s,d as n,e as l,r as a}from"./app.aebf164a.js";const v={},c=e("h2",{id:"_82\u573A\u53CC\u5468\u8D5B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_82\u573A\u53CC\u5468\u8D5B","aria-hidden":"true"},"#"),n(" 82\u573A\u53CC\u5468\u8D5B")],-1),o={id:"problem-a-\u8BA1\u7B97\u5E03\u5C14\u4E8C\u53C9\u6811\u7684\u503C",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#problem-a-\u8BA1\u7B97\u5E03\u5C14\u4E8C\u53C9\u6811\u7684\u503C","aria-hidden":"true"},"#",-1),m=n(" Problem A - "),b={href:"https://leetcode-cn.com/problems/evaluate-boolean-binary-tree/",target:"_blank",rel:"noopener noreferrer"},h=n("\u8BA1\u7B97\u5E03\u5C14\u4E8C\u53C9\u6811\u7684\u503C"),p=l(`<p><strong>\u89E3\u6CD5\uFF1A\u9012\u5F52&amp;\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean evaluateTree(TreeNode root) {
        boolean ans = dfs(root);
        return ans;
    }
    public boolean dfs(TreeNode root) {
        if (root.left == null &amp;&amp; root.right == null) return root.val == 1 ? true : false;
        else {
            boolean l = dfs(root.left), r = dfs(root.right);
            if (root.val == 2) return l || r;
            else return l &amp;&amp; r;
        }
    } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),g={id:"problem-b-\u5750\u4E0A\u516C\u4EA4\u7684\u6700\u665A\u65F6\u95F4",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#problem-b-\u5750\u4E0A\u516C\u4EA4\u7684\u6700\u665A\u65F6\u95F4","aria-hidden":"true"},"#",-1),f=n(" Problem B - "),x={href:"https://leetcode-cn.com/problems/the-latest-time-to-catch-a-bus/",target:"_blank",rel:"noopener noreferrer"},k=n("\u5750\u4E0A\u516C\u4EA4\u7684\u6700\u665A\u65F6\u95F4"),w=l(`<p><strong>\u89E3\u6CD5\uFF1A\u8D2A\u5FC3&amp;\u53CC\u6307\u9488</strong></p><p><strong>\u7531\u4E8E\u6C42\u7684\u662F\u6700\u665A\u5230\u8FBE\u516C\u4EA4\u7AD9\u7684\u65F6\u95F4\uFF0C\u6839\u636E\u8D2A\u5FC3\u5BB9\u6613\u5F97\u5230\uFF0C\u8FD9\u4E2A\u65F6\u95F4\u8981\u4E48\u662F\u67D0\u4E2A\u516C\u4EA4\u7684\u53D1\u8F66\u65F6\u95F4\uFF0C\u8981\u4E48\u6BD4\u67D0\u4E2A\u4E58\u5BA2\u65E9\u5230 11 \u5355\u4F4D\u65F6\u95F4\u3002\u56E0\u6B64\u6211\u4EEC\u901A\u8FC7 two pointers \u7684\u65B9\u5F0F\u6A21\u62DF\u4E0A\u8F66\u8FC7\u7A0B\uFF0C\u5E76\u679A\u4E3E\u6240\u6709\u53EF\u80FD\u7684\u7B54\u6848\uFF1A</strong></p><p><strong>1\u3001\u5F53\u4E00\u4E2A\u4E58\u5BA2\u5728 t \u65F6\u523B\u5230\u8FBE\u65F6\uFF0C\u6211\u4EEC\u5C1D\u8BD5\u62A2\u5148\u5728\u5B83\u4E4B\u524D\u4E0A\u8F66\u3002\u53EA\u8981\u4E0D\u5B58\u5728 (t - 1)(t\u22121) \u65F6\u523B\u5230\u8FBE\u7684\u4E58\u5BA2\u5373\u53EF\uFF1B</strong><strong>2\u3001\u5F53\u516C\u4EA4\u53D1\u8F66\u65F6\uFF0C\u82E5\u5F53\u524D\u516C\u4EA4\u6CA1\u6709\u5750\u6EE1\uFF0C\u4E14\u4E0D\u5B58\u5728\u53D1\u8F66\u65F6\u5230\u8FBE\u7684\u4E58\u5BA2\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u8FD9\u4E2A\u65F6\u523B\u4E0A\u8F66\u3002</strong></p><p><strong>\u5728\u6240\u6709\u53EF\u4EE5\u4E0A\u8F66\u7684\u65F6\u523B\u4E2D\u53D6\u6700\u5927\u503C\u5373\u53EF\u3002\u590D\u6742\u5EA6 O(<em>n</em>log<em>n</em>)\u3002</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int latestTimeCatchTheBus(int[] buses, int[] passengers, int capacity) {
        int n = buses.length, m = passengers.length;
        Arrays.sort(buses);
        Arrays.sort(passengers);
        Set&lt;Integer&gt; s = new HashSet&lt;&gt;();
        for (int x : passengers) s.add(x);
        int ans = 0;
        //\u53CC\u6307\u9488\u6A21\u62DF\u4E0A\u8F66 i \u8868\u793A\u8F66\uFF0C j \u8868\u793A\u4E58\u5BA2
        for(int i = 0, j = 0; i &lt; buses.length; i ++) {
            int cur = 0;
            while(cur &lt; capacity &amp;&amp; j &lt; passengers.length &amp;&amp; passengers[j] &lt;= buses[i]) {  
                // \u5982\u679C\u8F66 i \u8FD8\u6709\u4F4D\u7F6E
                if (!s.contains(passengers[j] - 1) &amp;&amp; passengers[j] - 1 &lt;= buses[i]) {  
                    // \u5982\u679C\u53EF\u4EE5\u5728\u67D0\u4E58\u5BA2\u524D\u4E0A\u8F66(passengers[j] - 1)
                    ans = Math.max(ans, passengers[j] - 1);
                }
                j ++ ;
                cur ++ ;
            }
            // \u662F\u5426\u53EF\u4EE5\u5361\u70B9\u4E0A\u8F66(\u8F66\u6765\u4E86\u518D\u4E0A\u8F66)
            if (cur &lt; capacity &amp;&amp; !s.contains(buses[i])){
                ans = Math.max(ans, buses[i]);
            }
        }
        return ans;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),S={id:"problem-c-\u6700\u5C0F\u5DEE\u503C\u5E73\u65B9\u548C",tabindex:"-1"},y=e("a",{class:"header-anchor",href:"#problem-c-\u6700\u5C0F\u5DEE\u503C\u5E73\u65B9\u548C","aria-hidden":"true"},"#",-1),j=n(" Problem C - "),q={href:"https://leetcode-cn.com/problems/minimum-sum-of-squared-difference/",target:"_blank",rel:"noopener noreferrer"},A=n("\u6700\u5C0F\u5DEE\u503C\u5E73\u65B9\u548C"),P=l(`<p><strong>\u89E3\u6CD5\uFF1A\u4E8C\u5206&amp;\u8D2A\u5FC3</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public long minSumSquareDiff(int[] a, int[] b, int k1, int k2) {
        int n = a.length, m = k1 + k2;
        for (int i = 0; i &lt; n; i ++ ) a[i] = Math.abs(a[i] - b[i]);

        //\u4E8C\u5206\u6C42\u51FA\u5207\u5272\u7EBF
        int l = 0, r = (int)1e5;
        while (l &lt; r) {
            int mid = l + r &gt;&gt; 1;
            long sum = 0;
            for (int x : a) if (x &gt; mid) sum += x - mid;
            if (sum &lt;= m) r = mid;
            else l = mid + 1;
        }

        //\u6C42\u51FA\u5269\u4F59\u7684\u64CD\u4F5C\u6570
        int sum = 0;
        for (int x : a) if (x &gt; r) sum += x - r;
        m -= sum;
        
        //\u8BA1\u7B97\u7B54\u6848
        long ans = 0;
        for (int i = 0; i &lt; n; i ++ ) {
            //\u5982\u679C\u6BD4\u5206\u5272\u7EBF\u9608\u503C\u5927
            if (a[i] &gt;= r) {
                //\u5728\u64CD\u4F5C\u6570\u5269\u4F59\u60C5\u51B5\u4E0B\u53EF\u4EE5\u8FDB\u4E00\u6B65\u5207\u5272
                if (r &gt; 0 &amp;&amp; m &gt; 0) {
                    ans += (long)(r - 1) * (r - 1);
                    m -- ;
                }
                else ans += (long)r * r; 
            } else {
                ans += (long)a[i] * a[i];
            }
        }
        return ans;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),I={id:"problem-d-\u5143\u7D20\u503C\u5927\u4E8E\u53D8\u5316\u9608\u503C\u7684\u5B50\u6570\u7EC4",tabindex:"-1"},M=e("a",{class:"header-anchor",href:"#problem-d-\u5143\u7D20\u503C\u5927\u4E8E\u53D8\u5316\u9608\u503C\u7684\u5B50\u6570\u7EC4","aria-hidden":"true"},"#",-1),L=n(" Problem D - "),T={href:"https://leetcode-cn.com/problems/subarray-with-elements-greater-than-varying-threshold/",target:"_blank",rel:"noopener noreferrer"},C=n("\u5143\u7D20\u503C\u5927\u4E8E\u53D8\u5316\u9608\u503C\u7684\u5B50\u6570\u7EC4"),D=e("p",null,[e("strong",null,"\u89E3\u6CD5\uFF1A\u679A\u4E3E & \u5E76\u67E5\u96C6 & \u53CC\u6307\u9488")],-1),N=e("h2",{id:"_301\u573A\u5468\u8D5B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_301\u573A\u5468\u8D5B","aria-hidden":"true"},"#"),n(" 301\u573A\u5468\u8D5B")],-1),B={id:"problem-a-\u88C5\u6EE1\u676F\u5B50\u9700\u8981\u7684\u6700\u77ED\u603B\u65F6\u957F",tabindex:"-1"},z=e("a",{class:"header-anchor",href:"#problem-a-\u88C5\u6EE1\u676F\u5B50\u9700\u8981\u7684\u6700\u77ED\u603B\u65F6\u957F","aria-hidden":"true"},"#",-1),O=n(" Problem A - "),H={href:"https://leetcode-cn.com/problems/minimum-amount-of-time-to-fill-cups/",target:"_blank",rel:"noopener noreferrer"},K=n("\u88C5\u6EE1\u676F\u5B50\u9700\u8981\u7684\u6700\u77ED\u603B\u65F6\u957F"),E=l(`<p><strong>\u89E3\u6CD5\uFF1A\u8D2A\u5FC3&amp;\u4F18\u5148\u961F\u5217 || \u6392\u5E8F</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int fillCups(int[] amount) {
        PriorityQueue&lt;Integer&gt; q = new PriorityQueue&lt;&gt;((a, b) -&gt; b - a);
        for (int x : amount) if (x != 0) q.add(x);
        int ans = 0;
        while (!q.isEmpty()) {
            if (q.size() == 1) {
                ans += q.poll();
                break;
            }
            int a = q.poll(), b = q.poll();
            a --; b -- ;
            if (a != 0) q.add(a);
            if (b != 0) q.add(b);
            ans ++ ;
        }
        return ans;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),R={id:"problem-b-\u65E0\u9650\u96C6\u4E2D\u7684\u6700\u5C0F\u6570\u5B57",tabindex:"-1"},F=e("a",{class:"header-anchor",href:"#problem-b-\u65E0\u9650\u96C6\u4E2D\u7684\u6700\u5C0F\u6570\u5B57","aria-hidden":"true"},"#",-1),Q=n(" Problem B - "),V={href:"https://leetcode-cn.com/problems/smallest-number-in-infinite-set/",target:"_blank",rel:"noopener noreferrer"},W=n("\u65E0\u9650\u96C6\u4E2D\u7684\u6700\u5C0F\u6570\u5B57"),G=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF&amp;\u4F18\u5148\u961F\u5217</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class SmallestInfiniteSet {
    PriorityQueue&lt;Integer&gt; q = new PriorityQueue&lt;&gt;();
    public SmallestInfiniteSet() {
        for (int i = 1; i &lt;= 1000; i ++ ) q.add(i);
    }
    
    public int popSmallest() {
        return q.poll();
    }
    
    public void addBack(int num) {
        if (!q.contains(num)) {
            q.add(num);
        }
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * SmallestInfiniteSet obj = new SmallestInfiniteSet();
 * int param_1 = obj.popSmallest();
 * obj.addBack(num);
 */

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),U={id:"problem-c-\u79FB\u52A8\u7247\u6BB5\u5F97\u5230\u5B57\u7B26\u4E32",tabindex:"-1"},Y=e("a",{class:"header-anchor",href:"#problem-c-\u79FB\u52A8\u7247\u6BB5\u5F97\u5230\u5B57\u7B26\u4E32","aria-hidden":"true"},"#",-1),X=n(" Problem C - "),J={href:"https://leetcode-cn.com/problems/move-pieces-to-obtain-a-string/",target:"_blank",rel:"noopener noreferrer"},Z=n("\u79FB\u52A8\u7247\u6BB5\u5F97\u5230\u5B57\u7B26\u4E32"),$=l(`<p><strong>\u89E3\u6CD5\uFF1A\u53CC\u6307\u9488</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public boolean canChange(String start, String target) {
        int n = start.length();
        char[] s = start.toCharArray(), t = target.toCharArray();
        int j = 0;
        for (int i = 0; i &lt; n; i ++ ) {
            if (s[i] == &#39;_&#39;) continue;
            while (j &lt; n &amp;&amp; t[j] == &#39;_&#39;) j ++ ;
            if (j == n) return false;
            if (s[i] != t[j]) return false;
            if (t[j] == &#39;L&#39; &amp;&amp; j &gt; i) return false;  
            if (t[j] == &#39;R&#39; &amp;&amp; j &lt; i) return false;
            j ++ ;
        }
        for (int i = j; i &lt; n; i ++ ) 
            if (t[i] != &#39;_&#39;) 
                return false;
        return true;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ee={id:"problem-d-\u7EDF\u8BA1\u7406\u60F3\u6570\u7EC4\u7684\u6570\u76EE",tabindex:"-1"},ne=e("a",{class:"header-anchor",href:"#problem-d-\u7EDF\u8BA1\u7406\u60F3\u6570\u7EC4\u7684\u6570\u76EE","aria-hidden":"true"},"#",-1),ie=n(" Problem D - "),se={href:"https://leetcode-cn.com/problems/count-the-number-of-ideal-arrays/",target:"_blank",rel:"noopener noreferrer"},le=n("\u7EDF\u8BA1\u7406\u60F3\u6570\u7EC4\u7684\u6570\u76EE"),de=e("p",null,[e("strong",null,"\u89E3\u6CD5\uFF1A\u6570\u5B66 & \u9012\u63A8")],-1),re=e("h2",{id:"_302\u573A\u5468\u8D5B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_302\u573A\u5468\u8D5B","aria-hidden":"true"},"#"),n(" 302\u573A\u5468\u8D5B")],-1),te={id:"problem-a-\u6570\u7EC4\u80FD\u5F62\u6210\u591A\u5C11\u6570\u5BF9",tabindex:"-1"},ae=e("a",{class:"header-anchor",href:"#problem-a-\u6570\u7EC4\u80FD\u5F62\u6210\u591A\u5C11\u6570\u5BF9","aria-hidden":"true"},"#",-1),ve=n(" Problem A - "),ce={href:"https://leetcode-cn.com/problems/maximum-number-of-pairs-in-array/",target:"_blank",rel:"noopener noreferrer"},oe=n("\u6570\u7EC4\u80FD\u5F62\u6210\u591A\u5C11\u6570\u5BF9"),ue=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int[] numberOfPairs(int[] nums) {
        Map&lt;Integer, Integer&gt; map = new HashMap&lt;&gt;();
        for (int x : nums) map.put(x, map.getOrDefault(x, 0) + 1);
        int[] res = new int[2];
        for (int k : map.keySet()) {
            res[0] += map.get(k) / 2;
            res[1] += map.get(k) % 2;
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),me={id:"problem-b-\u6570\u4F4D\u548C\u76F8\u7B49\u6570\u5BF9\u7684\u6700\u5927\u548C",tabindex:"-1"},be=e("a",{class:"header-anchor",href:"#problem-b-\u6570\u4F4D\u548C\u76F8\u7B49\u6570\u5BF9\u7684\u6700\u5927\u548C","aria-hidden":"true"},"#",-1),he=n(" Problem B - "),pe={href:"https://leetcode-cn.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/",target:"_blank",rel:"noopener noreferrer"},ge=n("\u6570\u4F4D\u548C\u76F8\u7B49\u6570\u5BF9\u7684\u6700\u5927\u548C"),_e=l(`<p><strong>\u89E3\u6CD5\uFF1A\u679A\u4E3E</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int maximumSum(int[] nums) {
        Map&lt;Integer, Integer&gt; map = new HashMap&lt;&gt;();
        int res = -1;
        for (int x : nums) {
            int s = 0, y = x;
            while (y != 0) {
                s += y % 10;
                y /= 10;
            }
            if (map.containsKey(s)) {
                res = Math.max(res, x + map.get(s));
                map.put(s, Math.max(map.get(s), x));
            } else {
                map.put(s, x);
            }
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),fe={id:"problem-c-\u88C1\u526A\u6570\u5B57\u540E\u67E5\u8BE2\u7B2C-k-\u5C0F\u7684\u6570\u5B57",tabindex:"-1"},xe=e("a",{class:"header-anchor",href:"#problem-c-\u88C1\u526A\u6570\u5B57\u540E\u67E5\u8BE2\u7B2C-k-\u5C0F\u7684\u6570\u5B57","aria-hidden":"true"},"#",-1),ke=n(" Problem C - "),we={href:"https://leetcode-cn.com/problems/query-kth-smallest-trimmed-number/",target:"_blank",rel:"noopener noreferrer"},Se=n("\u88C1\u526A\u6570\u5B57\u540E\u67E5\u8BE2\u7B2C K \u5C0F\u7684\u6570\u5B57"),ye=l(`<p><strong>\u89E3\u6CD5\uFF1A\u5B57\u7B26\u4E32\u6392\u5E8F&amp;\u7B2C\u4E8C\u5173\u952E\u5B57\u6392\u5E8F</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int[] smallestTrimmedNumbers(String[] a, int[][] b) {
        int n = a.length, m = a[0].length();
        int[] ans = new int[b.length];
        for (int i = 0; i &lt; b.length; i ++ ) {
            int k = b[i][0], trim = b[i][1];
            String[][] ss = new String[n][2];
            for (int j = 0; j &lt; n; j ++ ) {
                ss[j][0] = a[j].substring(m - trim);
                ss[j][1] = String.valueOf(j);
            }
            Arrays.sort(ss, (o1, o2) -&gt; {
                int x = o1[0].compareTo(o2[0]);
                return x == 0 ? Integer.parseInt(o1[1]) -  Integer.parseInt(o2[1]): x;
            });
            ans[i] = Integer.parseInt(ss[k - 1][1]);
        }
        return ans;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),je={id:"problem-d-\u4F7F\u6570\u7EC4\u53EF\u4EE5\u88AB\u6574\u9664\u7684\u6700\u5C11\u5220\u9664\u6B21\u6570",tabindex:"-1"},qe=e("a",{class:"header-anchor",href:"#problem-d-\u4F7F\u6570\u7EC4\u53EF\u4EE5\u88AB\u6574\u9664\u7684\u6700\u5C11\u5220\u9664\u6B21\u6570","aria-hidden":"true"},"#",-1),Ae=n(" Problem D - "),Pe={href:"https://leetcode-cn.com/problems/minimum-deletions-to-make-array-divisible/",target:"_blank",rel:"noopener noreferrer"},Ie=n("\u4F7F\u6570\u7EC4\u53EF\u4EE5\u88AB\u6574\u9664\u7684\u6700\u5C11\u5220\u9664\u6B21\u6570"),Me=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int gcd(int a, int b) {
        return b != 0 ? gcd(b, a % b) : a;
    }
    public int minOperations(int[] a, int[] b) {
        int res = 0;
        Arrays.sort(a);
        int d = 0;
        for (var x: b) d = gcd(d, x);
        for (int i = 0; i &lt; a.length; i ++ ) {
            if (d % a[i] == 0) break;
            res ++ ;
        }
        if (res == a.length) res = -1;
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_83\u573A\u53CC\u5468\u8D5B" tabindex="-1"><a class="header-anchor" href="#_83\u573A\u53CC\u5468\u8D5B" aria-hidden="true">#</a> 83\u573A\u53CC\u5468\u8D5B</h2>`,3),Le={id:"problem-a-\u6700\u597D\u7684\u6251\u514B\u624B\u724C",tabindex:"-1"},Te=e("a",{class:"header-anchor",href:"#problem-a-\u6700\u597D\u7684\u6251\u514B\u624B\u724C","aria-hidden":"true"},"#",-1),Ce=n(" Problem A - "),De={href:"https://leetcode-cn.com/problems/best-poker-hand/",target:"_blank",rel:"noopener noreferrer"},Ne=n("\u6700\u597D\u7684\u6251\u514B\u624B\u724C"),Be=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public String bestHand(int[] ranks, char[] suits) {
        // \u8BB0\u5F55\u82B1\u8272\u79CD\u7C7B\u7684 set
        Set&lt;Character&gt; st = new HashSet();
        // \u8BB0\u5F55\u6BCF\u4E2A\u6570\u5B57\u51FA\u73B0\u51E0\u6B21
        Map&lt;Integer, Integer&gt; map = new HashMap&lt;&gt;();
        for (int x : ranks) map.put(x, map.getOrDefault(x, 0) + 1);
        for (char c : suits) st.add(c);
        // \u53EA\u6709\u4E00\u79CD\u82B1\u8272
        if (st.size() == 1) return &quot;Flush&quot;;
        int mx = 0;
        for (int x : map.keySet()) mx = Math.max(mx, map.get(x));
        // \u5224\u65AD\u51FA\u73B0\u6700\u591A\u7684\u6570\u5B57\u51FA\u73B0\u4E86\u51E0\u6B21
        if (mx &gt;= 3) return &quot;Three of a Kind&quot;;
        else if (mx == 2) return &quot;Pair&quot;;
        else return &quot;High Card&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ze={id:"problem-b-\u5168-0-\u5B50\u6570\u7EC4\u7684\u6570\u76EE",tabindex:"-1"},Oe=e("a",{class:"header-anchor",href:"#problem-b-\u5168-0-\u5B50\u6570\u7EC4\u7684\u6570\u76EE","aria-hidden":"true"},"#",-1),He=n(" Problem B - "),Ke={href:"https://leetcode-cn.com/problems/number-of-zero-filled-subarrays/",target:"_blank",rel:"noopener noreferrer"},Ee=n("\u5168 0 \u5B50\u6570\u7EC4\u7684\u6570\u76EE"),Re=l(`<p><strong>\u89E3\u6CD5\uFF1A\u679A\u4E3E</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public long zeroFilledSubarray(int[] nums) {
        long res = 0;
        int n = nums.length;
        for (int i = 0; i &lt; n; i ++ ) {
            if (nums[i] != 0) continue;
            if (nums[i] == 0) res ++ ;
            int j = i;
            while (j + 1 &lt; n &amp;&amp; nums[j + 1] == 0) {
                j ++ ;
                res += j - i + 1;
            }
            i = j;
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Fe={id:"problem-c-\u8BBE\u8BA1\u6570\u5B57\u5BB9\u5668\u7CFB\u7EDF",tabindex:"-1"},Qe=e("a",{class:"header-anchor",href:"#problem-c-\u8BBE\u8BA1\u6570\u5B57\u5BB9\u5668\u7CFB\u7EDF","aria-hidden":"true"},"#",-1),Ve=n(" Problem C - "),We={href:"https://leetcode-cn.com/problems/design-a-number-container-system/",target:"_blank",rel:"noopener noreferrer"},Ge=n("\u8BBE\u8BA1\u6570\u5B57\u5BB9\u5668\u7CFB\u7EDF"),Ue=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class NumberContainers {
    Map&lt;Integer, Integer&gt; m1 = new HashMap&lt;&gt;();
    Map&lt;Integer, TreeSet&lt;Integer&gt;&gt; m2 = new HashMap&lt;&gt;();
    public NumberContainers() {
        
    }
    
    public void change(int index, int number) {
        if (m1.containsKey(index)) {
            int t = m1.get(index);
            TreeSet&lt;Integer&gt; S = m2.get(t);
            S.remove(index);
            if (S.size() &gt; 0) m2.put(t, S);
            else m2.remove(t);
        }
        m1.put(index, number);
        TreeSet&lt;Integer&gt; q = m2.getOrDefault(number, new TreeSet&lt;Integer&gt;());
        q.add(index);
        m2.put(number, q);
    }
    
    public int find(int number) {
        if (m2.containsKey(number)) return m2.get(number).first();
        else return -1;
    }
}

/**
 * Your NumberContainers object will be instantiated and called as such:
 * NumberContainers obj = new NumberContainers();
 * obj.change(index,number);
 * int param_2 = obj.find(number);
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ye={id:"problem-d-\u4E0D\u53EF\u80FD\u5F97\u5230\u7684\u6700\u77ED\u9AB0\u5B50\u5E8F\u5217",tabindex:"-1"},Xe=e("a",{class:"header-anchor",href:"#problem-d-\u4E0D\u53EF\u80FD\u5F97\u5230\u7684\u6700\u77ED\u9AB0\u5B50\u5E8F\u5217","aria-hidden":"true"},"#",-1),Je=n(" Problem D - "),Ze={href:"https://leetcode-cn.com/problems/shortest-impossible-sequence-of-rolls/",target:"_blank",rel:"noopener noreferrer"},$e=n("\u4E0D\u53EF\u80FD\u5F97\u5230\u7684\u6700\u77ED\u9AB0\u5B50\u5E8F\u5217"),en=e("p",null,[e("strong",null,"\u89E3\u6CD5\uFF1A\u8111\u7B4B\u6025\u8F6C\u5F2F")],-1),nn=e("h2",{id:"_303\u573A\u5468\u8D5B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_303\u573A\u5468\u8D5B","aria-hidden":"true"},"#"),n(" 303\u573A\u5468\u8D5B")],-1),sn={id:"problem-a-\u7B2C\u4E00\u4E2A\u51FA\u73B0\u4E24\u6B21\u7684\u5B57\u6BCD",tabindex:"-1"},ln=e("a",{class:"header-anchor",href:"#problem-a-\u7B2C\u4E00\u4E2A\u51FA\u73B0\u4E24\u6B21\u7684\u5B57\u6BCD","aria-hidden":"true"},"#",-1),dn=n(" Problem A - "),rn={href:"https://leetcode-cn.com/problems/first-letter-to-appear-twice/",target:"_blank",rel:"noopener noreferrer"},tn=n("\u7B2C\u4E00\u4E2A\u51FA\u73B0\u4E24\u6B21\u7684\u5B57\u6BCD"),an=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public char repeatedCharacter(String s) {
        int[] map = new int[128];
        for (char x : s.toCharArray()) {
            if (map[x] == 1) return x;
            map[x] ++ ;
        }
        return &#39;a&#39;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),vn={id:"problem-b-\u76F8\u7B49\u884C\u5217\u5BF9",tabindex:"-1"},cn=e("a",{class:"header-anchor",href:"#problem-b-\u76F8\u7B49\u884C\u5217\u5BF9","aria-hidden":"true"},"#",-1),on=n(" Problem B - "),un={href:"https://leetcode-cn.com/problems/equal-row-and-column-pairs/",target:"_blank",rel:"noopener noreferrer"},mn=n("\u76F8\u7B49\u884C\u5217\u5BF9"),bn=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int equalPairs(int[][] g) {
        int n = g.length, m = g[0].length;
        int res = 0;
        for (int i = 0; i &lt; n; i ++ ) {
            for (int j = 0; j &lt; m; j ++ ) {
                int t = 0;
                while (t &lt; n &amp;&amp; g[i][t] == g[t][j]) t ++ ;
                if (t == n) res ++ ;
            }
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),hn={id:"problem-c-\u8BBE\u8BA1\u98DF\u7269\u8BC4\u5206\u7CFB\u7EDF",tabindex:"-1"},pn=e("a",{class:"header-anchor",href:"#problem-c-\u8BBE\u8BA1\u98DF\u7269\u8BC4\u5206\u7CFB\u7EDF","aria-hidden":"true"},"#",-1),gn=n(" Problem C - "),_n={href:"https://leetcode-cn.com/problems/design-a-food-rating-system/",target:"_blank",rel:"noopener noreferrer"},fn=n("\u8BBE\u8BA1\u98DF\u7269\u8BC4\u5206\u7CFB\u7EDF"),xn=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class FoodRatings {
    Map&lt;String, TreeSet&lt;Pair&lt;Integer, String&gt;&gt;&gt; hash = new HashMap&lt;&gt;();
    Map&lt;String, String&gt; c = new HashMap&lt;&gt;();
    Map&lt;String, Integer&gt; r = new HashMap&lt;&gt;();
    public FoodRatings(String[] foods, String[] cuisines, int[] ratings) {
        for (int i = 0; i &lt; foods.length; i ++ ) {
            c.put(foods[i], cuisines[i]);
            r.put(foods[i], ratings[i]);
            TreeSet&lt;Pair&lt;Integer, String&gt;&gt; S = hash.getOrDefault(cuisines[i], new TreeSet&lt;&gt;((o1, o2) -&gt; {
                return o1.getKey().equals(o2.getKey()) ? o1.getValue().compareTo(o2.getValue()) : o1.getKey() - o2.getKey();
            }));
            S.add(new Pair&lt;&gt;(-ratings[i], foods[i]));
            hash.put(cuisines[i], S);
        }
    }
    
    public void changeRating(String food, int newRating) {
        String cuisine = c.get(food);
        hash.get(cuisine).remove(new Pair(-r.get(food), food));
        r.put(food, newRating);
        TreeSet&lt;Pair&lt;Integer, String&gt;&gt; S = hash.get(cuisine);
        S.add(new Pair(-newRating, food));
        hash.put(cuisine, S);
    }
    
    public String highestRated(String cuisine) {
        return hash.get(cuisine).first().getValue();
    }
}

/**
 * Your FoodRatings object will be instantiated and called as such:
 * FoodRatings obj = new FoodRatings(foods, cuisines, ratings);
 * obj.changeRating(food,newRating);
 * String param_2 = obj.highestRated(cuisine);
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),kn={id:"problem-d-\u4F18\u8D28\u6570\u5BF9\u7684\u6570\u76EE",tabindex:"-1"},wn=e("a",{class:"header-anchor",href:"#problem-d-\u4F18\u8D28\u6570\u5BF9\u7684\u6570\u76EE","aria-hidden":"true"},"#",-1),Sn=n(" Problem D - "),yn={href:"https://leetcode-cn.com/problems/number-of-excellent-pairs/",target:"_blank",rel:"noopener noreferrer"},jn=n("\u4F18\u8D28\u6570\u5BF9\u7684\u6570\u76EE"),qn=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><p>\u7B2Ci\u4F4D\u5728\u4E24\u4E2A\u6570\u91CC\u51FA\u73B0\u51E0\u6B21\u90A3\u4E48\u5B83\u5BF9\u7B54\u6848\u7684\u8D21\u732E\u5C31\u662F\u51E0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public long countExcellentPairs(int[] nums, int k) {
        TreeSet&lt;Integer&gt; set = new TreeSet&lt;&gt;();
        for (int x : nums) set.add(x);
        int[] cnt = new int[30];
        for (int x : set) {
            int t = 0;
            while (x != 0) {
                t += x &amp; 1;
                x &gt;&gt;= 1;
            }
            cnt[t] ++ ;
        }
        long res = 0;
        for (int i = 0; i &lt; 30; i ++ ) {
            for (int j = 0; j &lt; 30; j ++ ) {
                if (i + j &gt;= k) 
                    res += cnt[i] * cnt[j];
            }
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_304\u573A\u5468\u8D5B" tabindex="-1"><a class="header-anchor" href="#_304\u573A\u5468\u8D5B" aria-hidden="true">#</a> 304\u573A\u5468\u8D5B</h2>`,4),An={id:"problem-a-\u4F7F\u6570\u7EC4\u4E2D\u6240\u6709\u5143\u7D20\u90FD\u7B49\u4E8E\u96F6",tabindex:"-1"},Pn=e("a",{class:"header-anchor",href:"#problem-a-\u4F7F\u6570\u7EC4\u4E2D\u6240\u6709\u5143\u7D20\u90FD\u7B49\u4E8E\u96F6","aria-hidden":"true"},"#",-1),In=n(" Problem A - "),Mn={href:"https://leetcode-cn.com/problems/make-array-zero-by-subtracting-equal-amounts/",target:"_blank",rel:"noopener noreferrer"},Ln=n("\u4F7F\u6570\u7EC4\u4E2D\u6240\u6709\u5143\u7D20\u90FD\u7B49\u4E8E\u96F6"),Tn=l(`<p><strong>\u89E3\u6CD5\uFF1A\u8111\u7B4B\u6025\u8F6C\u5F2F</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int minimumOperations(int[] nums) {
        Set&lt;Integer&gt; set = new HashSet&lt;&gt;();
        for (int x : nums) 
            if (x &gt; 0) 
                set.add(x);
        return set.size();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Cn={id:"problem-b-\u5206\u7EC4\u7684\u6700\u5927\u6570\u91CF",tabindex:"-1"},Dn=e("a",{class:"header-anchor",href:"#problem-b-\u5206\u7EC4\u7684\u6700\u5927\u6570\u91CF","aria-hidden":"true"},"#",-1),Nn=n(" Problem B - "),Bn={href:"https://leetcode-cn.com/problems/maximum-number-of-groups-entering-a-competition/",target:"_blank",rel:"noopener noreferrer"},zn=n("\u5206\u7EC4\u7684\u6700\u5927\u6570\u91CF"),On=l(`<p><strong>\u89E3\u6CD5\uFF1A\u8D2A\u5FC3</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int maximumGroups(int[] g) {
        int res = 0, cnt = 1, n = g.length;
        while (cnt &lt;= n) {
            res ++ ;
            n -= cnt;
            cnt ++ ;
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Hn={id:"problem-c-\u627E\u5230\u79BB\u7ED9\u5B9A\u4E24\u4E2A\u8282\u70B9\u6700\u8FD1\u7684\u8282\u70B9",tabindex:"-1"},Kn=e("a",{class:"header-anchor",href:"#problem-c-\u627E\u5230\u79BB\u7ED9\u5B9A\u4E24\u4E2A\u8282\u70B9\u6700\u8FD1\u7684\u8282\u70B9","aria-hidden":"true"},"#",-1),En=n(" Problem C - "),Rn={href:"https://leetcode-cn.com/problems/find-closest-node-to-given-two-nodes/",target:"_blank",rel:"noopener noreferrer"},Fn=n("\u627E\u5230\u79BB\u7ED9\u5B9A\u4E24\u4E2A\u8282\u70B9\u6700\u8FD1\u7684\u8282\u70B9"),Qn=l(`<p><strong>\u89E3\u6CD5\uFF1Adfs</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int closestMeetingNode(int[] p, int x, int y) {
        int n = p.length;
        int[] d1 = new int[n], d2 = new int[n];
        Arrays.fill(d1, -1); Arrays.fill(d2, -1);
        d1[x] = 0; d2[y] = 0;
        //\u4E24\u6B21dfs\u6C42\u8DDD\u79BB
        while (p[x] != -1) {
            if (d1[p[x]] != -1) break;
            d1[p[x]] = d1[x] + 1;
            x = p[x];
        }
        while (p[y] != -1) {
            if (d2[p[y]] != -1) break;
            d2[p[y]] = d2[y] + 1;
            y = p[y];
        }
        int max = -1, res = -1;
        for (int i = 0; i &lt; n; i ++ ) {
            int a = d1[i], b = d2[i];
            if (a != -1 &amp;&amp; b != -1) {
                if (max == -1 || max &gt; Math.max(a, b)) {
                    max = Math.max(a, b);
                    res = i;
                }
            }
        }  
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Vn={id:"problem-d-\u56FE\u4E2D\u7684\u6700\u957F\u73AF",tabindex:"-1"},Wn=e("a",{class:"header-anchor",href:"#problem-d-\u56FE\u4E2D\u7684\u6700\u957F\u73AF","aria-hidden":"true"},"#",-1),Gn=n(" Problem D - "),Un={href:"https://leetcode-cn.com/problems/longest-cycle-in-a-graph/",target:"_blank",rel:"noopener noreferrer"},Yn=n("\u56FE\u4E2D\u7684\u6700\u957F\u73AF"),Xn=l(`<p><strong>\u89E3\u6CD5\uFF1Adfs</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    int[] p, in_stk;
    boolean[] st;
    int n, res = -1;
    public int longestCycle(int[] _p) {
        n = _p.length;
        p = _p;
        st = new boolean[n];
        in_stk = new int[n];
        for (int i = 0; i &lt; n; i ++ ) 
            if (!st[i])
                dfs(i, 1);
        return res;
    }
    //u\uFF1A\u5F53\u524D\u641C\u5230\u7684\u70B9\u7684\u4E0B\u6807
    //depth\uFF1A\u5F53\u524D\u70B9\u7684\u6DF1\u5EA6
    public void dfs(int u, int depth) {
        st[u] = true;
        in_stk[u] = depth;
        int j = p[u];
        if (j != -1) {
            if (!st[j]) 
                dfs(j, depth + 1);
            else if (in_stk[j] &gt; 0)
                // \u5F53in_stk[j]\u5927\u4E8E0\u8BF4\u660E\u641C\u5230\u4E86\u73AF\uFF0C\u5E76\u4E14in_stk[j]\u4E3A\u73AF\u7684\u8D77\u70B9\u7684\u6DF1\u5EA6
                res = Math.max(res, depth + 1 - in_stk[j]);
        }
        in_stk[u] = 0;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_84\u573A\u53CC\u5468\u8D5B" tabindex="-1"><a class="header-anchor" href="#_84\u573A\u53CC\u5468\u8D5B" aria-hidden="true">#</a> 84\u573A\u53CC\u5468\u8D5B</h2>`,3),Jn={id:"problem-a-\u5408\u5E76\u76F8\u4F3C\u7684\u7269\u54C1",tabindex:"-1"},Zn=e("a",{class:"header-anchor",href:"#problem-a-\u5408\u5E76\u76F8\u4F3C\u7684\u7269\u54C1","aria-hidden":"true"},"#",-1),$n=n(" Problem A - "),ei={href:"https://leetcode-cn.com/problems/merge-similar-items/",target:"_blank",rel:"noopener noreferrer"},ni=n("\u5408\u5E76\u76F8\u4F3C\u7684\u7269\u54C1"),ii=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public List&lt;List&lt;Integer&gt;&gt; mergeSimilarItems(int[][] a, int[][] b) {
        TreeMap&lt;Integer, Integer&gt; map = new TreeMap&lt;&gt;();
        for (int[] x : a) {
            map.put(x[0], map.getOrDefault(x[0], 0) + x[1]);
        }
        for (int[] x : b) {
            map.put(x[0], map.getOrDefault(x[0], 0) + x[1]);
        }
        List&lt;List&lt;Integer&gt;&gt; res = new ArrayList&lt;&gt;();
        for (int k : map.keySet()) {
            List&lt;Integer&gt; t = new ArrayList&lt;&gt;();
            t.add(k);
            t.add(map.get(k));
            res.add(t);
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),si={id:"problem-b-\u7EDF\u8BA1\u574F\u6570\u5BF9\u7684\u6570\u76EE",tabindex:"-1"},li=e("a",{class:"header-anchor",href:"#problem-b-\u7EDF\u8BA1\u574F\u6570\u5BF9\u7684\u6570\u76EE","aria-hidden":"true"},"#",-1),di=n(" Problem B - "),ri={href:"https://leetcode-cn.com/problems/count-number-of-bad-pairs/",target:"_blank",rel:"noopener noreferrer"},ti=n("\u7EDF\u8BA1\u574F\u6570\u5BF9\u7684\u6570\u76EE"),ai=l(`<p><strong>\u89E3\u6CD5\uFF1A\u679A\u4E3E</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public long countBadPairs(int[] nums) {
        long n = nums.length;
        for (int i = 0; i &lt; n; i ++ ) nums[i] -= i;
        long res = n * (n - 1l) / 2;
        Map&lt;Integer, Integer&gt; map = new HashMap&lt;&gt;();
        for (int x : nums) map.put(x, map.getOrDefault(x, 0) + 1);
        for (int k : map.keySet()) {
            int v = map.get(k);
            if (v == 1) continue;
            else {
                res -= v * (v - 1l) / 2;
            }
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),vi={id:"problem-c-\u4EFB\u52A1\u8C03\u5EA6\u5668-ii",tabindex:"-1"},ci=e("a",{class:"header-anchor",href:"#problem-c-\u4EFB\u52A1\u8C03\u5EA6\u5668-ii","aria-hidden":"true"},"#",-1),oi=n(" Problem C - "),ui={href:"https://leetcode-cn.com/problems/task-scheduler-ii/",target:"_blank",rel:"noopener noreferrer"},mi=n("\u4EFB\u52A1\u8C03\u5EA6\u5668 II"),bi=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF&amp;\u8D2A\u5FC3</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public long taskSchedulerII(int[] q, int space) {
        int n = q.length;
        long res = 0;
        Map&lt;Integer, Long&gt; map = new HashMap&lt;&gt;();
        for (int x : q) {
            res ++ ;
            if (!map.containsKey(x))
                map.put(x, res);
            else {
                if (res - map.get(x) &lt;= space) 
                    res = map.get(x) + space + 1;
                map.put(x, res);
            }
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),hi={id:"problem-d-\u5C06\u6570\u7EC4\u6392\u5E8F\u7684\u6700\u5C11\u66FF\u6362\u6B21\u6570",tabindex:"-1"},pi=e("a",{class:"header-anchor",href:"#problem-d-\u5C06\u6570\u7EC4\u6392\u5E8F\u7684\u6700\u5C11\u66FF\u6362\u6B21\u6570","aria-hidden":"true"},"#",-1),gi=n(" Problem D - "),_i={href:"https://leetcode-cn.com/problems/minimum-replacements-to-sort-the-array/",target:"_blank",rel:"noopener noreferrer"},fi=n("\u5C06\u6570\u7EC4\u6392\u5E8F\u7684\u6700\u5C11\u66FF\u6362\u6B21\u6570"),xi=l(`<p><strong>\u89E3\u6CD5\uFF1A\u8D2A\u5FC3&amp;\u6570\u5B66</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public long minimumReplacement(int[] nums) {
        long res = 0;
        int n = nums.length, last = nums[n - 1];
        for (int i = n - 2; i &gt;= 0; i -- ) {
            if (nums[i] &gt; last) {
            	//\u62C6\u7684\u6B21\u6570
                int x = (nums[i] + last - 1) / last;
                res += x - 1;
                //\u62C6\u51FA\u6765\u7684\u6700\u5C0F\u6570\uFF0Cnums[i]/(\u62C6\u7684\u6B21\u6570)\u5411\u4E0B\u53D6\u6574
                last = nums[i] / x;
            } else {
                last = nums[i];
            }
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_305\u573A\u5468\u8D5B" tabindex="-1"><a class="header-anchor" href="#_305\u573A\u5468\u8D5B" aria-hidden="true">#</a> 305\u573A\u5468\u8D5B</h2>`,3),ki={id:"problem-a-\u7B97\u672F\u4E09\u5143\u7EC4\u7684\u6570\u76EE",tabindex:"-1"},wi=e("a",{class:"header-anchor",href:"#problem-a-\u7B97\u672F\u4E09\u5143\u7EC4\u7684\u6570\u76EE","aria-hidden":"true"},"#",-1),Si=n(" Problem A - "),yi={href:"https://leetcode.cn/problems/number-of-arithmetic-triplets/",target:"_blank",rel:"noopener noreferrer"},ji=n("\u7B97\u672F\u4E09\u5143\u7EC4\u7684\u6570\u76EE"),qi=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int arithmeticTriplets(int[] nums, int diff) {
        int n = nums.length;
        int res = 0;
        for (int i = 0; i &lt; n - 2; i ++ ) 
            for (int j = i + 1; j &lt; n - 1; j ++ )
                for (int k = j + 1; k &lt; n; k ++ ) {
                    if ((nums[j] - nums[i] == diff) &amp;&amp; (nums[k] - nums[j] == diff)) 
                        res ++ ;
                }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ai={id:"problem-b-\u53D7\u9650\u6761\u4EF6\u4E0B\u53EF\u5230\u8FBE\u8282\u70B9\u7684\u6570\u76EE",tabindex:"-1"},Pi=e("a",{class:"header-anchor",href:"#problem-b-\u53D7\u9650\u6761\u4EF6\u4E0B\u53EF\u5230\u8FBE\u8282\u70B9\u7684\u6570\u76EE","aria-hidden":"true"},"#",-1),Ii=n(" Problem B - "),Mi={href:"https://leetcode.cn/problems/reachable-nodes-with-restrictions/",target:"_blank",rel:"noopener noreferrer"},Li=n(" \u53D7\u9650\u6761\u4EF6\u4E0B\u53EF\u5230\u8FBE\u8282\u70B9\u7684\u6570\u76EE"),Ti=l(`<p><strong>\u89E3\u6CD5\uFF1Adfs</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    List&lt;Integer&gt;[] g;
    boolean[] r;
    int res = 0;
    public void dfs(int i, int j) {
        res ++ ;
        for (int x : g[j]) 
            if (x != i &amp;&amp; !r[x]) 
                dfs(j, x);
    }
    public int reachableNodes(int n, int[][] edges, int[] restricted) {
        g = new List[n];
        for (int i = 0; i &lt; n; i ++ ) g[i] = new ArrayList&lt;&gt;();
        r = new boolean[n];
        //\u6807\u8BB0\u53D7\u9650\u8282\u70B9
        for (int x : restricted) r[x] = true;
        //\u5EFA\u56FE
        for (int[] x : edges) {
            int a = x[0], b = x[1];
            g[a].add(b);
            g[b].add(a);
        }
        dfs(0, 0);
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u89E3\u6CD5\uFF1Abfs</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int reachableNodes(int n, int[][] edges, int[] restricted) {
        List&lt;Integer&gt;[] g = new List[n];
        boolean[] r;
        int res = 1;
        for (int i = 0; i &lt; n; i ++ ) g[i] = new ArrayList&lt;&gt;();
        r = new boolean[n];
        for (int x : restricted) r[x] = true;
        //\u5EFA\u56FE
        for (int[] x : edges) {
            int a = x[0], b = x[1];
            g[a].add(b);
            g[b].add(a);
        }
        ArrayDeque&lt;Integer&gt; q = new ArrayDeque&lt;&gt;();
        q.add(0);
        r[0] = true;
        while (!q.isEmpty()) {
            int cur = q.poll();
            for (int x : g[cur]) {
                if (!r[x]) {
                    res ++ ;
                    r[x] = true;
                    q.add(x);
                }
            }
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Ci={id:"problem-c-\u68C0\u67E5\u6570\u7EC4\u662F\u5426\u5B58\u5728\u6709\u6548\u5212\u5206",tabindex:"-1"},Di=e("a",{class:"header-anchor",href:"#problem-c-\u68C0\u67E5\u6570\u7EC4\u662F\u5426\u5B58\u5728\u6709\u6548\u5212\u5206","aria-hidden":"true"},"#",-1),Ni=n(" Problem C - "),Bi={href:"https://leetcode.cn/problems/check-if-there-is-a-valid-partition-for-the-array/",target:"_blank",rel:"noopener noreferrer"},zi=n("\u68C0\u67E5\u6570\u7EC4\u662F\u5426\u5B58\u5728\u6709\u6548\u5212\u5206"),Oi=l(`<p><strong>\u89E3\u6CD5\uFF1A\u7EBF\u6027dp</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public boolean validPartition(int[] nums) {
        var n = nums.length;
        //\u8BBE f(i) \u8868\u793A\u4EE5 i \u7ED3\u5C3E\u7684\u6570\u7EC4\u662F\u5426\u5B58\u5728\u6709\u6548\u5212\u5206\u3002i \u7684\u6709\u6548\u4E0B\u6807\u4ECE 1 \u5F00\u59CB
        var f = new boolean[n + 1];
        f[0] = true;
        for (int i = 2; i &lt;= n; i ++ ) {
            if (nums[i - 1] == nums[i - 2]) 
                f[i] = f[i - 2];
            
            if (i &gt;= 3 &amp;&amp; nums[i - 1] == nums[i - 2] &amp;&amp; nums[i - 1] == nums[i - 3])
                f[i] = f[i] || f[i - 3];
            
            if (i &gt;= 3 &amp;&amp; nums[i - 1] == nums[i - 2] + 1 &amp;&amp; nums[i - 2] == nums[i - 3] + 1)
                f[i] = f[i] || f[i - 3];
        }
        return f[n];
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Hi={id:"problem-d-\u6700\u957F\u7406\u60F3\u5B50\u5E8F\u5217",tabindex:"-1"},Ki=e("a",{class:"header-anchor",href:"#problem-d-\u6700\u957F\u7406\u60F3\u5B50\u5E8F\u5217","aria-hidden":"true"},"#",-1),Ei=n(" Problem D - "),Ri={href:"https://leetcode.cn/problems/longest-ideal-subsequence/",target:"_blank",rel:"noopener noreferrer"},Fi=n("\u6700\u957F\u7406\u60F3\u5B50\u5E8F\u5217"),Qi=l(`<p><strong>\u89E3\u6CD5\uFF1A\u7EBF\u6027dp</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int longestIdealString(String s, int k) {
        //\u8BB0 f[d] \u8868\u793A\u4EE5\u5B57\u7B26 d \u4E3A\u7ED3\u5C3E\u7684\u6700\u957F\u7406\u60F3\u5B50\u5E8F\u5217\u3002
        var f = new int[26];
        var n = s.length();
        for (var c : s.toCharArray()) {
            var x = c - &#39;a&#39;;
            var t = 0;
            //\u6EE1\u8DB3Math.abs(x - y) &lt;= k\u5C31\u80FD\u5C06\u5B57\u7B26x\u63A5\u5728\u4EE5y\u7ED3\u5C3E\u7684\u5B50\u5E8F\u5217\u540E\u8FB9
            for (int y = 0; y &lt; 26; y ++ ) 
                if (Math.abs(x - y) &lt;= k)
                    t = Math.max(t, f[y] + 1);
            f[x] = Math.max(f[x], t);
        }
        return Arrays.stream(f).max().getAsInt();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_306\u573A\u5468\u8D5B" tabindex="-1"><a class="header-anchor" href="#_306\u573A\u5468\u8D5B" aria-hidden="true">#</a> 306\u573A\u5468\u8D5B</h2>`,3),Vi={id:"problem-a-\u77E9\u9635\u4E2D\u7684\u5C40\u90E8\u6700\u5927\u503C",tabindex:"-1"},Wi=e("a",{class:"header-anchor",href:"#problem-a-\u77E9\u9635\u4E2D\u7684\u5C40\u90E8\u6700\u5927\u503C","aria-hidden":"true"},"#",-1),Gi=n(" Problem A - "),Ui={href:"https://leetcode.cn/problems/largest-local-values-in-a-matrix/",target:"_blank",rel:"noopener noreferrer"},Yi=n("\u77E9\u9635\u4E2D\u7684\u5C40\u90E8\u6700\u5927\u503C"),Xi=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int[][] largestLocal(int[][] g) {
        int n = g.length, m = g[0].length;
        int[][] res = new int[n - 2][m - 2];
        for (int i = 0; i &lt; n - 2; i ++ ) 
            for (int j = 0; j &lt; m - 2; j ++ )
                for (int x = 0; x &lt; 3; x ++ )
                    for (int y = 0; y &lt; 3; y ++ ) 
                        res[i][j] = Math.max(res[i][j], g[i + x][j + y]);
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ji={id:"problem-b-\u8FB9\u79EF\u5206\u6700\u9AD8\u7684\u8282\u70B9",tabindex:"-1"},Zi=e("a",{class:"header-anchor",href:"#problem-b-\u8FB9\u79EF\u5206\u6700\u9AD8\u7684\u8282\u70B9","aria-hidden":"true"},"#",-1),$i=n(" Problem B - "),es={href:"https://leetcode.cn/problems/node-with-highest-edge-score/",target:"_blank",rel:"noopener noreferrer"},ns=n("\u8FB9\u79EF\u5206\u6700\u9AD8\u7684\u8282\u70B9"),is=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int edgeScore(int[] edges) {
        int n = edges.length;
        long[] f = new long[n];
        for (int i = 0; i &lt; n; i ++ ) {
            f[edges[i]] += i;
        }
        int res = 0;
        for (int i = 0; i &lt; n; i ++ ) 
            if (f[i] &gt; f[res]) 
                res = i;
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ss={id:"problem-c-\u6839\u636E\u6A21\u5F0F\u4E32\u6784\u9020\u6700\u5C0F\u6570\u5B57",tabindex:"-1"},ls=e("a",{class:"header-anchor",href:"#problem-c-\u6839\u636E\u6A21\u5F0F\u4E32\u6784\u9020\u6700\u5C0F\u6570\u5B57","aria-hidden":"true"},"#",-1),ds=n(" Problem C - "),rs={href:"https://leetcode.cn/problems/construct-smallest-number-from-di-string/",target:"_blank",rel:"noopener noreferrer"},ts=n("\u6839\u636E\u6A21\u5F0F\u4E32\u6784\u9020\u6700\u5C0F\u6570\u5B57"),as=l(`<p><strong>\u89E3\u6CD5\uFF1A\u8D2A\u5FC3</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public String smallestNumber(String pattern) {
        int n = pattern.length();
        int[] num = new int[n + 1];
        for (int i = 0; i &lt;= n; i ++ ) 
            num[i] = i + 1;
        for (int i = 0; i &lt; n; i ++ ) {
            if (pattern.charAt(i) == &#39;D&#39;) {
                int j = i;
                while (j &lt; n &amp;&amp; pattern.charAt(j) == &#39;D&#39;) j ++ ;
                reverse(num, i, j);
                i = j - 1;
            }
        }
        StringBuilder res = new StringBuilder();
        for (int x : num) res.append(x);
        return res.toString();
    }
    public void reverse(int[] nums, int i, int j) {
        while (i &lt; j) {
            var x = nums[i];
            nums[i] = nums[j];
            nums[j] = x;
            i ++ ;
            j -- ;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u89E3\u6CD5\uFF1A\u66B4\u529B</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    boolean[] st;
    String p;
    public String smallestNumber(String _p) {
        p = _p;
        int n = p.length();
        int[] nums = new int[n + 1];
        for (int i = 0; i &lt; n + 1; i ++ ) 
            nums[i] = i + 1;

        while (!check(nums)) {
            nextPermutation(nums);
        }
        var res = &quot;&quot;;
        for (var x : nums) res += x;
        return res;
    }
    public void nextPermutation(int[] nums) {
        int k = nums.length - 1;
        while (k &gt; 0 &amp;&amp; nums[k - 1] &gt;= nums[k]) k -- ;
        if (k == 0) Arrays.sort(nums);
        else {
            int t = k;
            while (t + 1 &lt; nums.length &amp;&amp; nums[t + 1] &gt; nums[k - 1]) t ++ ;
            swap(nums, k - 1, t);
            reverse(nums, k, nums.length - 1);
        }
    }

    public void swap(int[] nums, int l, int r) {
        int t = nums[l];
        nums[l] = nums[r];
        nums[r] = t;
    }

    public void reverse(int[] nums, int l, int r) {
        while (l &lt; r) {
            swap(nums, l, r);
            l ++ ;
            r -- ;
        }
    }
    public boolean check(int[] nums) {
        for (int i = 0; i &lt; p.length(); i ++ ) {
            char c = p.charAt(i);
            if (c == &#39;I&#39; &amp;&amp; nums[i] &gt;= nums[i + 1])
                return false; 
            if (c == &#39;D&#39; &amp;&amp; nums[i] &lt;= nums[i + 1])
                return false; 
        }
        return true;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),vs={id:"problem-d-\u7EDF\u8BA1\u7279\u6B8A\u6574\u6570",tabindex:"-1"},cs=e("a",{class:"header-anchor",href:"#problem-d-\u7EDF\u8BA1\u7279\u6B8A\u6574\u6570","aria-hidden":"true"},"#",-1),os=n(" Problem D - "),us={href:"https://leetcode.cn/problems/count-special-integers/",target:"_blank",rel:"noopener noreferrer"},ms=n("\u7EDF\u8BA1\u7279\u6B8A\u6574\u6570"),bs=e("p",null,[e("strong",null,"\u89E3\u6CD5\uFF1A\u6570\u4F4Ddp")],-1),hs=e("h2",{id:"_84\u573A\u53CC\u5468\u8D5B-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_84\u573A\u53CC\u5468\u8D5B-1","aria-hidden":"true"},"#"),n(" 84\u573A\u53CC\u5468\u8D5B")],-1),ps={id:"problem-a-\u5F97\u5230-k-\u4E2A\u9ED1\u5757\u7684\u6700\u5C11\u6D82\u8272\u6B21\u6570",tabindex:"-1"},gs=e("a",{class:"header-anchor",href:"#problem-a-\u5F97\u5230-k-\u4E2A\u9ED1\u5757\u7684\u6700\u5C11\u6D82\u8272\u6B21\u6570","aria-hidden":"true"},"#",-1),_s=n(" Problem A - "),fs={href:"https://leetcode.cn/problems/minimum-recolors-to-get-k-consecutive-black-blocks/",target:"_blank",rel:"noopener noreferrer"},xs=n("\u5F97\u5230 K \u4E2A\u9ED1\u5757\u7684\u6700\u5C11\u6D82\u8272\u6B21\u6570"),ks=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6ED1\u52A8\u7A97\u53E3</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int minimumRecolors(String s, int k) {
        int res = 100;
        for (int i = 0, j = 0, cnt = 0; i &lt; s.length(); i ++ ) {
            if (s.charAt(i) == &#39;W&#39;) cnt ++ ;
            if (i - j + 1 &gt; k) {
                if (s.charAt(j) == &#39;W&#39;) cnt -- ;
                j ++ ;
            }
            if (i &gt;= k - 1) res = Math.min(cnt, res);
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ws={id:"problem-b-\u4E8C\u8FDB\u5236\u5B57\u7B26\u4E32\u91CD\u65B0\u5B89\u6392\u987A\u5E8F\u9700\u8981\u7684\u65F6\u95F4",tabindex:"-1"},Ss=e("a",{class:"header-anchor",href:"#problem-b-\u4E8C\u8FDB\u5236\u5B57\u7B26\u4E32\u91CD\u65B0\u5B89\u6392\u987A\u5E8F\u9700\u8981\u7684\u65F6\u95F4","aria-hidden":"true"},"#",-1),ys=n(" Problem B - "),js={href:"https://leetcode.cn/problems/time-needed-to-rearrange-a-binary-string/",target:"_blank",rel:"noopener noreferrer"},qs=n("\u4E8C\u8FDB\u5236\u5B57\u7B26\u4E32\u91CD\u65B0\u5B89\u6392\u987A\u5E8F\u9700\u8981\u7684\u65F6\u95F4"),As=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int secondsToRemoveOccurrences(String s) {
        int res = 0;
        while (s.contains(&quot;01&quot;)) {
           res ++ ;
           s = s.replaceAll(&quot;01&quot;, &quot;10&quot;);
        }  
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ps={id:"problem-c-\u5B57\u6BCD\u79FB\u4F4D-ii",tabindex:"-1"},Is=e("a",{class:"header-anchor",href:"#problem-c-\u5B57\u6BCD\u79FB\u4F4D-ii","aria-hidden":"true"},"#",-1),Ms=n(" Problem C - "),Ls={href:"https://leetcode.cn/problems/shifting-letters-ii/",target:"_blank",rel:"noopener noreferrer"},Ts=n("\u5B57\u6BCD\u79FB\u4F4D II"),Cs=l(`<p><strong>\u89E3\u6CD5\uFF1A\u5DEE\u5206</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public String shiftingLetters(String s, int[][] shifts) {
        char[] c = s.toCharArray();
        int n = s.length();
        int[] t = new int[n + 1];
        for (int[] p : shifts) {
            int a = p[0], b = p[1], w = p[2];
            if (w == 0) w = -1;
            t[a] += w;
            t[b + 1] -= w;
        }
        for (int i = 0, cur = 0; i &lt; n; i ++ ) {
            cur += t[i];
            cur %= 26;
            int p = c[i] - &#39;a&#39;;
            p += cur;
            p = (p + 26) % 26;
            c[i] = (char) (p + &#39;a&#39;);
        }
        return new String(c);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ds={id:"problem-d-\u5220\u9664\u64CD\u4F5C\u540E\u7684\u6700\u5927\u5B50\u6BB5\u548C",tabindex:"-1"},Ns=e("a",{class:"header-anchor",href:"#problem-d-\u5220\u9664\u64CD\u4F5C\u540E\u7684\u6700\u5927\u5B50\u6BB5\u548C","aria-hidden":"true"},"#",-1),Bs=n(" Problem D - "),zs={href:"https://leetcode.cn/problems/maximum-segment-sum-after-removals/",target:"_blank",rel:"noopener noreferrer"},Os=n("\u5220\u9664\u64CD\u4F5C\u540E\u7684\u6700\u5927\u5B50\u6BB5\u548C"),Hs=e("p",null,[e("strong",null,"\u89E3\u6CD5\uFF1A\u6A21\u62DF")],-1),Ks=e("h2",{id:"_307\u573A\u5468\u8D5B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_307\u573A\u5468\u8D5B","aria-hidden":"true"},"#"),n(" 307\u573A\u5468\u8D5B")],-1),Es={id:"problem-a-\u8D62\u5F97\u6BD4\u8D5B\u9700\u8981\u7684\u6700\u5C11\u8BAD\u7EC3\u65F6\u957F",tabindex:"-1"},Rs=e("a",{class:"header-anchor",href:"#problem-a-\u8D62\u5F97\u6BD4\u8D5B\u9700\u8981\u7684\u6700\u5C11\u8BAD\u7EC3\u65F6\u957F","aria-hidden":"true"},"#",-1),Fs=n(" Problem A - "),Qs={href:"https://leetcode.cn/problems/minimum-hours-of-training-to-win-a-competition/",target:"_blank",rel:"noopener noreferrer"},Vs=n("\u8D62\u5F97\u6BD4\u8D5B\u9700\u8981\u7684\u6700\u5C11\u8BAD\u7EC3\u65F6\u957F"),Ws=l(`<p><strong>\u89E3\u6CD5\uFF1A\u8D2A\u5FC3</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int minNumberOfHours(int a, int b, int[] c, int[] d) {
        int n = c.length;
        int res = 0;
        for (int i = 0; i &lt; n; i ++ ) {
            if (a &gt; c[i]) a -= c[i];
            else {
                int x = c[i] + 1 - a;
                a += x - c[i];
                res += x;
            }

            if (b &gt; d[i]) b += d[i];
            else {
                int x = d[i] + 1 - b;
                b += x + d[i];
                res += x;
            }
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Gs={id:"problem-b-\u6700\u5927\u56DE\u6587\u6570\u5B57",tabindex:"-1"},Us=e("a",{class:"header-anchor",href:"#problem-b-\u6700\u5927\u56DE\u6587\u6570\u5B57","aria-hidden":"true"},"#",-1),Ys=n(" Problem B - "),Xs={href:"https://leetcode.cn/problems/largest-palindromic-number/",target:"_blank",rel:"noopener noreferrer"},Js=n("\u6700\u5927\u56DE\u6587\u6570\u5B57"),Zs=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public String largestPalindromic(String s) {
        int[] map = new int[10];
        for (char x : s.toCharArray()) {
            int t = x - &#39;0&#39;;
            map[t] ++ ;
        }
        int a = 0;
        //\u627E\u51FA\u53EF\u80FD\u8981\u8FFD\u52A0\u7684\u6570
        for (int i = 1; i &lt; 10; i ++ )
            if (map[i] % 2 == 1)
                a = i;
        StringBuilder sb = new StringBuilder();
        //\u62FC\u51D1\u7B54\u6848\u7684\u524D\u534A\u90E8\u5206
        for (int i = 9; i &gt;= 0; i -- ) {
            int t = map[i] / 2;
            if (i == 0 &amp;&amp; sb.length() == 0) break;
            for (int j = 0; j &lt; t; j ++ )
                sb.append(i);
        }

        StringBuilder x = new StringBuilder(sb).reverse();
        //\u5982\u679C\u53EF\u4EE5\u7684\u8BDD\uFF0C\u4E2D\u95F4\u8FFD\u52A0\u4E00\u4F4D
        if (map[a] != 0) sb.append(a);
        return sb.toString() + x.toString();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),$s={id:"problem-c-\u611F\u67D3\u4E8C\u53C9\u6811\u9700\u8981\u7684\u603B\u65F6\u95F4",tabindex:"-1"},el=e("a",{class:"header-anchor",href:"#problem-c-\u611F\u67D3\u4E8C\u53C9\u6811\u9700\u8981\u7684\u603B\u65F6\u95F4","aria-hidden":"true"},"#",-1),nl=n(" Problem C - "),il={href:"https://leetcode.cn/problems/amount-of-time-for-binary-tree-to-be-infected/",target:"_blank",rel:"noopener noreferrer"},sl=n("\u611F\u67D3\u4E8C\u53C9\u6811\u9700\u8981\u7684\u603B\u65F6\u95F4"),ll=l(`<p><strong>\u89E3\u6CD5\uFF1Adfs + bfs</strong></p><p>\u94FE\u5F0F\u524D\u5411\u661F\u5EFA\u56FE</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    int N = 100010;
    int[] h, e, ne;
    //\u8BB0\u5F55\u8BE5\u70B9\u662F\u5426\u8FDB\u5165\u8FC7\u961F\u5217
    boolean[] st;
    int idx;
    public void add(int a, int b) {
        e[idx] = b;
        ne[idx] = h[a];
        h[a] = idx ++ ;
    }
    //dfs\u5EFA\u56FE
    public void dfs(TreeNode root) {
        if (root.left != null) {
            add(root.val, root.left.val);
            add(root.left.val, root.val);
            dfs(root.left);
        }
        if (root.right != null) {
            add(root.val, root.right.val);
            add(root.right.val, root.val);
            dfs(root.right);
        }
    }
    public int amountOfTime(TreeNode root, int start) {
        h = new int[N];
        e = new int[N * 2];
        ne = new int[N * 2];
        st = new boolean[N];
        idx = 0;
        Arrays.fill(h, -1);
        dfs(root);
        ArrayDeque&lt;Integer&gt; q = new ArrayDeque&lt;&gt;();
        q.add(start);
        int res = 0;
        while (!q.isEmpty()) {
            int count = q.size();
            while (count -- &gt; 0) {
                var t = q.poll();
                st[t] = true;           
                for (int i = h[t]; i != -1; i = ne[i]) {
                    int j = e[i];
                    if (st[j]) continue;
                    else q.add(j);
                }
            }
            res ++ ;
        }
        return res - 1;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u89E3\u6CD5\uFF1Adfs + bfs</strong></p><p>Map\u5EFA\u56FE</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    int N = 100010;
    Map&lt;Integer, LinkedList&lt;Integer&gt;&gt; g = new HashMap&lt;&gt;();
    boolean[] st;
    public void dfs(TreeNode root) {
        if (root == null) return;
        LinkedList&lt;Integer&gt; list = g.getOrDefault(root.val, new LinkedList&lt;&gt;());
        if (root.left != null) {
            list.add(root.left.val);
            LinkedList&lt;Integer&gt; temp = new LinkedList&lt;&gt;();
            temp.add(root.val);
            g.put(root.left.val, temp);
        }
        if (root.right != null) {
            list.add(root.right.val);
            LinkedList&lt;Integer&gt; temp = new LinkedList&lt;&gt;();
            temp.add(root.val);
            g.put(root.right.val, temp);
        }
        g.put(root.val, list);
        dfs(root.left);
        dfs(root.right);
    }
    public int amountOfTime(TreeNode root, int start) {
        dfs(root);
        st = new boolean[N];
        ArrayDeque&lt;Integer&gt; q = new ArrayDeque&lt;&gt;();
        q.add(start);
        int res = -1;
        while (!q.isEmpty()) {
            int count = q.size();
            while (count -- &gt; 0) {
                int x = q.poll();
                st[x] = true;
                List&lt;Integer&gt; list = g.get(x);
                if (list != null) {
                    for (int a : list) 
                    if (!st[a])
                        q.add(a);
                }
            }
            res ++ ;
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),dl={id:"problem-d-\u627E\u51FA\u6570\u7EC4\u7684\u7B2C-k-\u5927\u548C",tabindex:"-1"},rl=e("a",{class:"header-anchor",href:"#problem-d-\u627E\u51FA\u6570\u7EC4\u7684\u7B2C-k-\u5927\u548C","aria-hidden":"true"},"#",-1),tl=n(" Problem D - "),al={href:"https://leetcode.cn/problems/find-the-k-sum-of-an-array/",target:"_blank",rel:"noopener noreferrer"},vl=n("\u627E\u51FA\u6570\u7EC4\u7684\u7B2C K \u5927\u548C"),cl=e("p",null,[e("strong",null,"\u89E3\u6CD5\uFF1A\u591A\u8DEF\u5F52\u5E76")],-1),ol=e("h2",{id:"_308\u573A\u5468\u8D5B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_308\u573A\u5468\u8D5B","aria-hidden":"true"},"#"),n(" 308\u573A\u5468\u8D5B")],-1),ul={id:"problem-a-\u548C\u6709\u9650\u7684\u6700\u957F\u5B50\u5E8F\u5217",tabindex:"-1"},ml=e("a",{class:"header-anchor",href:"#problem-a-\u548C\u6709\u9650\u7684\u6700\u957F\u5B50\u5E8F\u5217","aria-hidden":"true"},"#",-1),bl=n(" Problem A - "),hl={href:"https://leetcode.cn/problems/longest-subsequence-with-limited-sum/",target:"_blank",rel:"noopener noreferrer"},pl=n("\u548C\u6709\u9650\u7684\u6700\u957F\u5B50\u5E8F\u5217"),gl=l(`<p><strong>\u89E3\u6CD5\uFF1A\u524D\u7F00\u548C &amp;\u4E8C\u5206</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int[] answerQueries(int[] nums, int[] q) {
        Arrays.sort(nums);
        int n = nums.length, m = q.length;
        int[] s = new int[n + 1];
        for (int i = 0; i &lt; n; i ++ )
            s[i + 1] = s[i] + nums[i];
        for (int i = 0; i &lt; m; i ++ ) {
            int k = q[i];
            int l = 0, r = n;
            while (l &lt; r) {
                int mid = l + r + 1 &gt;&gt; 1;
                if (s[mid] &lt;= k) l = mid;
                else r = mid - 1;
            }
            q[i] = l;
        }
        return q;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),_l={id:"problem-b-\u4ECE\u5B57\u7B26\u4E32\u4E2D\u79FB\u9664\u661F\u53F7",tabindex:"-1"},fl=e("a",{class:"header-anchor",href:"#problem-b-\u4ECE\u5B57\u7B26\u4E32\u4E2D\u79FB\u9664\u661F\u53F7","aria-hidden":"true"},"#",-1),xl=n(" Problem B - "),kl={href:"https://leetcode.cn/problems/removing-stars-from-a-string/",target:"_blank",rel:"noopener noreferrer"},wl=n("\u4ECE\u5B57\u7B26\u4E32\u4E2D\u79FB\u9664\u661F\u53F7"),Sl=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public String removeStars(String s) {
        StringBuilder sb = new StringBuilder();
        for (char x : s.toCharArray()) {
            if (x == &#39;*&#39;) sb.deleteCharAt(sb.length() - 1);
            else sb.append(x);
        }
        return sb.toString();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),yl={id:"problem-c-\u6536\u96C6\u5783\u573E\u7684\u6700\u5C11\u603B\u65F6\u95F4",tabindex:"-1"},jl=e("a",{class:"header-anchor",href:"#problem-c-\u6536\u96C6\u5783\u573E\u7684\u6700\u5C11\u603B\u65F6\u95F4","aria-hidden":"true"},"#",-1),ql=n(" Problem C - "),Al={href:"https://leetcode.cn/problems/minimum-amount-of-time-to-collect-garbage/",target:"_blank",rel:"noopener noreferrer"},Pl=n("\u6536\u96C6\u5783\u573E\u7684\u6700\u5C11\u603B\u65F6\u95F4"),Il=l(`<p><strong>\u89E3\u6CD5\uFF1A\u8D2A\u5FC3</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int garbageCollection(String[] g, int[] t) {
        Map&lt;Character, Integer&gt; map = new HashMap&lt;&gt;();
        int a = 0, b = 0, c = 0;
        for (int i = 0; i &lt; g.length; i ++) {
            for (char x : g[i].toCharArray()) {
                if (x == &#39;M&#39;) a ++ ;
                else if (x == &#39;P&#39;) b ++ ;
                else c ++ ;
                map.put(x, i);
            }
        }
        int res = a + b + c;
        int[] s = new int[t.length + 1];
        for (int i = 0; i &lt; t.length; i ++ ) 
            s[i + 1] = s[i] + t[i];
        for (char x : map.keySet()) res += s[map.get(x)];
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ml={id:"problem-d-\u7ED9\u5B9A\u6761\u4EF6\u4E0B\u6784\u9020\u77E9\u9635",tabindex:"-1"},Ll=e("a",{class:"header-anchor",href:"#problem-d-\u7ED9\u5B9A\u6761\u4EF6\u4E0B\u6784\u9020\u77E9\u9635","aria-hidden":"true"},"#",-1),Tl=n(" Problem D - "),Cl={href:"https://leetcode.cn/problems/build-a-matrix-with-conditions/",target:"_blank",rel:"noopener noreferrer"},Dl=n("\u7ED9\u5B9A\u6761\u4EF6\u4E0B\u6784\u9020\u77E9\u9635"),Nl=l(`<p><strong>\u89E3\u6CD5\uFF1A\u62D3\u6251\u6392\u5E8F</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int[] topoSort(int k, int[][] edges) {
        List&lt;Integer&gt;[] g = new List[k];
        Arrays.setAll(g, e -&gt; new ArrayList&lt;&gt;());
        int[] d = new int[k];
        for (var e : edges) {
            int a = e[0] - 1, b = e[1] - 1;
            g[a].add(b);
            d[b] ++ ;
        }
        ArrayList&lt;Integer&gt; res = new ArrayList&lt;&gt;();
        ArrayDeque&lt;Integer&gt; q = new ArrayDeque&lt;&gt;();
        for (int i = 0; i &lt; k; i ++ )
            if (d[i] == 0)
                q.add(i);
        while (!q.isEmpty()) {
            int t = q.poll();
            res.add(t);
            for (int x : g[t])
                if (-- d[x] == 0)
                    q.add(x);
        }
        return res.stream().mapToInt(x -&gt; x).toArray();
    }
    public int[][] buildMatrix(int k, int[][] row, int[][] col) {
        int[] x = topoSort(k, row), y = topoSort(k, col);
        if (x.length &lt; k || y.length &lt; k) return new int[][]{};
        int[][] res = new int[k][k];
        for (int i = 0; i &lt; k; i ++ )
            for (int j = 0; j &lt; k; j ++ )
                if (x[i] == y[j]) res[i][j] = x[i] + 1;
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_86\u573A\u53CC\u5468\u8D5B" tabindex="-1"><a class="header-anchor" href="#_86\u573A\u53CC\u5468\u8D5B" aria-hidden="true">#</a> 86\u573A\u53CC\u5468\u8D5B</h2>`,3),Bl={id:"problem-a-\u548C\u76F8\u7B49\u7684\u5B50\u6570\u7EC4",tabindex:"-1"},zl=e("a",{class:"header-anchor",href:"#problem-a-\u548C\u76F8\u7B49\u7684\u5B50\u6570\u7EC4","aria-hidden":"true"},"#",-1),Ol=n(" Problem A - "),Hl={href:"https://leetcode.cn/problems/find-subarrays-with-equal-sum/",target:"_blank",rel:"noopener noreferrer"},Kl=n("\u548C\u76F8\u7B49\u7684\u5B50\u6570\u7EC4"),El=l(`<p><strong>\u89E3\u6CD5\uFF1A\u679A\u4E3E</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public boolean findSubarrays(int[] nums) {
        Set&lt;Integer&gt; set = new HashSet&lt;&gt;();
        int n = nums.length;
        for (int i = 0; i &lt; n - 1; i ++ ) {
            int x = nums[i] + nums[i + 1];
            if (set.contains(x)) return true;
            set.add(x);
        }
        return false;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Rl={id:"problem-b-\u4E25\u683C\u56DE\u6587\u7684\u6570\u5B57",tabindex:"-1"},Fl=e("a",{class:"header-anchor",href:"#problem-b-\u4E25\u683C\u56DE\u6587\u7684\u6570\u5B57","aria-hidden":"true"},"#",-1),Ql=n(" Problem B - "),Vl={href:"https://leetcode.cn/problems/strictly-palindromic-number/",target:"_blank",rel:"noopener noreferrer"},Wl=n("\u4E25\u683C\u56DE\u6587\u7684\u6570\u5B57"),Gl=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public boolean f(String s) {
        for (int i = 0, j = s.length() - 1; i &lt; j; i ++ , j -- ) 
            if (i &lt; j &amp;&amp; s.charAt(i) != s.charAt(j)) 
                return false;
        
        return true;
    }
    
    public boolean isStrictlyPalindromic(int n) {
        for (int i = 2; i &lt;= n - 2; i ++ ) {
            StringBuilder sb = new StringBuilder();
            int t = n;
            while (t != 0) {
                sb.append(t % i);
                t /= i;
            }
            if (!f(sb.reverse().toString())) return false;
        }
        return true;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u89E3\u6CD5\uFF1A\u8111\u7B4B\u6025\u8F6C\u5F2F</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public boolean isStrictlyPalindromic(int n) {
    	return false;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Ul={id:"problem-c-\u88AB\u5217\u8986\u76D6\u7684\u6700\u591A\u884C\u6570",tabindex:"-1"},Yl=e("a",{class:"header-anchor",href:"#problem-c-\u88AB\u5217\u8986\u76D6\u7684\u6700\u591A\u884C\u6570","aria-hidden":"true"},"#",-1),Xl=n(" Problem C - "),Jl={href:"https://leetcode.cn/problems/maximum-rows-covered-by-columns/",target:"_blank",rel:"noopener noreferrer"},Zl=n("\u88AB\u5217\u8986\u76D6\u7684\u6700\u591A\u884C\u6570"),$l=l(`<p><strong>\u89E3\u6CD5\uFF1A\u4E8C\u8FDB\u5236\u679A\u4E3E</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int maximumRows(int[][] g, int cols) {
        int m = g.length, n = g[0].length;
        int res = 0;
        for (int k = 0; k &lt; (1 &lt;&lt; n); k ++ ) {
            if (Integer.bitCount(k) != cols) continue;
            int t = 0;
            out:for (int i = 0; i &lt; m; i ++ ) {
                    for (int j = 0; j &lt; n; j ++ )
                        if ((k &gt;&gt; j &amp; 1) == 0 &amp;&amp; g[i][j] == 1)
                            continue out;
                t ++ ;
            }
            res = Math.max(res, t);
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u89E3\u6CD5\uFF1Adfs</strong>\u3001</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    int[][] g;
    int res = 0;
    int n, m;
    public int maximumRows(int[][] mat, int cols) {
        n = mat.length;
        m = mat[0].length;
        g = mat;
        dfs(0, cols,new HashSet&lt;Integer&gt;());
        return res;
    }
    public void dfs(int u, int k, Set&lt;Integer&gt; set) {
        if (set.size() == k) {
            int t = 0;
            out:for (int i = 0; i &lt; n; i ++ ) {
                for (int j = 0; j &lt; m; j ++ )
                    if (g[i][j] == 1 &amp;&amp; !set.contains(j))
                        continue out;
                t ++ ;
            }
            res = Math.max(res, t);
        } else {
            for (int i = u; i &lt; m; i ++ ) {
                set.add(i);
                dfs(i + 1, k, set);
                set.remove(i);
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),ed={id:"problem-d-\u9884\u7B97\u5185\u7684\u6700\u591A\u673A\u5668\u4EBA\u6570\u76EE",tabindex:"-1"},nd=e("a",{class:"header-anchor",href:"#problem-d-\u9884\u7B97\u5185\u7684\u6700\u591A\u673A\u5668\u4EBA\u6570\u76EE","aria-hidden":"true"},"#",-1),id=n(" Problem D - "),sd={href:"https://leetcode.cn/problems/maximum-number-of-robots-within-budget/",target:"_blank",rel:"noopener noreferrer"},ld=n("\u9884\u7B97\u5185\u7684\u6700\u591A\u673A\u5668\u4EBA\u6570\u76EE"),dd=e("p",null,[e("strong",null,"\u89E3\u6CD5\uFF1A\u53CC\u6307\u9488&\u5355\u8C03\u961F\u5217")],-1),rd=e("h2",{id:"_309\u573A\u5468\u8D5B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_309\u573A\u5468\u8D5B","aria-hidden":"true"},"#"),n(" 309\u573A\u5468\u8D5B")],-1),td={id:"problem-a-\u68C0\u67E5\u76F8\u540C\u5B57\u6BCD\u95F4\u7684\u8DDD\u79BB",tabindex:"-1"},ad=e("a",{class:"header-anchor",href:"#problem-a-\u68C0\u67E5\u76F8\u540C\u5B57\u6BCD\u95F4\u7684\u8DDD\u79BB","aria-hidden":"true"},"#",-1),vd=n(" Problem A - "),cd={href:"https://leetcode.cn/problems/check-distances-between-same-letters/",target:"_blank",rel:"noopener noreferrer"},od=n("\u68C0\u67E5\u76F8\u540C\u5B57\u6BCD\u95F4\u7684\u8DDD\u79BB"),ud=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public boolean checkDistances(String s, int[] d) {
        Map&lt;Integer, List&lt;Integer&gt;&gt; map = new HashMap&lt;&gt;();
        for (int i = 0; i &lt; s.length(); i ++ ) {
            char x = s.charAt(i);
            if (!map.containsKey(x - &#39;a&#39;)) map.put(x - &#39;a&#39;, new ArrayList&lt;&gt;());
            map.get(x - &#39;a&#39;).add(i);
        }
        for (int k : map.keySet()) {
            if (map.get(k).get(1) - map.get(k).get(0) == d[k] + 1) continue;
            else return false;
        }
        return true;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public boolean checkDistances(String s, int[] distance) {
        int[] a = new int[26];
        Arrays.fill(a, -1);
        for (int i = 0; i &lt; s.length(); i ++ ) {
            int x = s.charAt(i) - &#39;a&#39;;
            if (a[x] == -1) a[x] = i;
            else if (i - a[x] != distance[x] + 1) return false;
        }
        return true;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),md={id:"problem-b-\u6070\u597D\u79FB\u52A8-k-\u6B65\u5230\u8FBE\u67D0\u4E00\u4F4D\u7F6E\u7684\u65B9\u6CD5\u6570\u76EE",tabindex:"-1"},bd=e("a",{class:"header-anchor",href:"#problem-b-\u6070\u597D\u79FB\u52A8-k-\u6B65\u5230\u8FBE\u67D0\u4E00\u4F4D\u7F6E\u7684\u65B9\u6CD5\u6570\u76EE","aria-hidden":"true"},"#",-1),hd=n(" Problem B - "),pd={href:"https://leetcode.cn/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/",target:"_blank",rel:"noopener noreferrer"},gd=n("\u6070\u597D\u79FB\u52A8 k \u6B65\u5230\u8FBE\u67D0\u4E00\u4F4D\u7F6E\u7684\u65B9\u6CD5\u6570\u76EE"),_d=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6570\u8BBA</strong></p><p>\u52A8\u6001\u89C4\u5212\u6C42\u7EC4\u5408\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    private int mod = (int)1e9 + 7;
    public int numberOfWays(int startPos, int endPos, int k) {
        int d = Math.abs(endPos - startPos);
        if (d &gt; k || (d + k) % 2 == 1) return 0;
        int[][] f = new int[k + 1][k + 1];
        for (int i = 0; i &lt;= k; i ++ ) {
            f[i][0] = 1;
            for (int j = 1; j &lt;= i; j ++ )
                f[i][j] = (f[i - 1][j] + f[i - 1][j - 1]) % mod;
        }
        return f[k][(d + k) / 2];
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9006\u5143\u6C42\u7EC4\u5408\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    private int mod = (int)1e9 + 7;
    
    public int qmi(int m, int k, int p) {
        long res = 1l % p, t = m * 1l;
        while (k != 0) {
            if ((k &amp; 1) != 0) res = res * t % p;
            t = t * t % p;
            k &gt;&gt;= 1;
        }
        return (int)res;
    }

    public int numberOfWays(int startPos, int endPos, int k) {
        int m = Math.abs(endPos - startPos);
        if ((m - k) % 2 != 0 || k &lt; m) return 0;
        int r = (k + m) / 2;
        long res = 1;
        for (int i = k; i &gt; k - r; i -- ) 
            res = res * i % mod;
        for (int i = 1; i &lt;= r; i ++ ) {
            res = res * qmi(i, mod - 2, mod) % mod;
        }
        return (int)res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),fd={id:"problem-c-\u6700\u957F\u4F18\u96C5\u5B50\u6570\u7EC4",tabindex:"-1"},xd=e("a",{class:"header-anchor",href:"#problem-c-\u6700\u957F\u4F18\u96C5\u5B50\u6570\u7EC4","aria-hidden":"true"},"#",-1),kd=n(" Problem C - "),wd={href:"https://leetcode.cn/problems/longest-nice-subarray/",target:"_blank",rel:"noopener noreferrer"},Sd=n("\u6700\u957F\u4F18\u96C5\u5B50\u6570\u7EC4"),yd=l(`<p><strong>\u89E3\u6CD5\uFF1A\u4F4D\u8FD0\u7B97&amp;\u6ED1\u52A8\u7A97\u53E3&amp;\u72B6\u6001\u538B\u7F29</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int longestNiceSubarray(int[] nums) {
        int n = nums.length;
        int res = 0;
        int s = 0;
        for (int i = 0, j = 0; i &lt; n; i ++ ) {
            while ((s &amp; nums[i]) &gt; 0) 
                s ^= nums[j ++ ];
            s ^= nums[i];
            res = Math.max(res, i - j + 1);    
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),jd={id:"problem-d-\u4F1A\u8BAE\u5BA4-iii",tabindex:"-1"},qd=e("a",{class:"header-anchor",href:"#problem-d-\u4F1A\u8BAE\u5BA4-iii","aria-hidden":"true"},"#",-1),Ad=n(" Problem D - "),Pd={href:"https://leetcode.cn/problems/meeting-rooms-iii/",target:"_blank",rel:"noopener noreferrer"},Id=n("\u4F1A\u8BAE\u5BA4 III"),Md=e("p",null,[e("strong",null,"\u89E3\u6CD5\uFF1A\u6A21\u62DF")],-1),Ld=e("h2",{id:"_310\u573A\u5468\u8D5B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_310\u573A\u5468\u8D5B","aria-hidden":"true"},"#"),n(" 310\u573A\u5468\u8D5B")],-1),Td={id:"problem-a-\u51FA\u73B0\u6700\u9891\u7E41\u7684\u5076\u6570\u5143\u7D20",tabindex:"-1"},Cd=e("a",{class:"header-anchor",href:"#problem-a-\u51FA\u73B0\u6700\u9891\u7E41\u7684\u5076\u6570\u5143\u7D20","aria-hidden":"true"},"#",-1),Dd=n(" Problem A - "),Nd={href:"https://leetcode.cn/problems/most-frequent-even-element/",target:"_blank",rel:"noopener noreferrer"},Bd=n("\u51FA\u73B0\u6700\u9891\u7E41\u7684\u5076\u6570\u5143\u7D20"),zd=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int mostFrequentEven(int[] nums) {
        Map&lt;Integer, Integer&gt; map = new HashMap&lt;&gt;();
        for (int x : nums) {
            if (x % 2 == 0) 
                map.put(x, map.getOrDefault(x, 0) + 1);
        }
        int res = -1;
        for (int k : map.keySet()) {
            int v = map.get(k);
            if (res == -1 || map.get(res) &lt; v || (map.get(res) == v &amp;&amp; res &gt; k))
                    res = k;
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Od={id:"problem-b-\u5B50\u5B57\u7B26\u4E32\u7684\u6700\u4F18\u5212\u5206",tabindex:"-1"},Hd=e("a",{class:"header-anchor",href:"#problem-b-\u5B50\u5B57\u7B26\u4E32\u7684\u6700\u4F18\u5212\u5206","aria-hidden":"true"},"#",-1),Kd=n(" Problem B - "),Ed={href:"https://leetcode.cn/problems/optimal-partition-of-string/",target:"_blank",rel:"noopener noreferrer"},Rd=n("\u5B50\u5B57\u7B26\u4E32\u7684\u6700\u4F18\u5212\u5206"),Fd=l(`<p><strong>\u89E3\u6CD5\uFF1A\u8D2A\u5FC3</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int partitionString(String s) {
        int[] map = new int[26];
        int res = 0;
        for (int i = 0; i &lt; s.length(); i ++ ) {
            int x = s.charAt(i) - &#39;a&#39;;
            map[x] ++ ;
            if (map[x] &gt; 1) {
                res ++ ;
                i -- ;
                map = new int[26];
            }   
        }
        return res + 1;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Qd={id:"problem-c-\u5C06\u533A\u95F4\u5206\u4E3A\u6700\u5C11\u7EC4\u6570",tabindex:"-1"},Vd=e("a",{class:"header-anchor",href:"#problem-c-\u5C06\u533A\u95F4\u5206\u4E3A\u6700\u5C11\u7EC4\u6570","aria-hidden":"true"},"#",-1),Wd=n(" Problem C - "),Gd={href:"https://leetcode.cn/problems/divide-intervals-into-minimum-number-of-groups/",target:"_blank",rel:"noopener noreferrer"},Ud=n("\u5C06\u533A\u95F4\u5206\u4E3A\u6700\u5C11\u7EC4\u6570"),Yd=l(`<p><strong>\u89E3\u6CD5\uFF1A\u8D2A\u5FC3</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int minGroups(int[][] g) {
        int n = g.length;
        Arrays.sort(g, (a, b) -&gt; a[0] - b[0]);
        PriorityQueue&lt;Integer&gt; q = new PriorityQueue&lt;&gt;();

        for (int i = 0; i &lt; n; i ++ ) {
            int[] r = g[i];
            //\u9700\u8981\u521B\u5EFA\u65B0\u7EC4
            if (q.isEmpty() || q.peek() &gt;= r[0]) q.add(r[1]);
            else {
                //\u5C06\u8BE5\u6BB5\u653E\u5165\u66F4\u65B0\u5F53\u524D\u7EC4\u6700\u5927\u503C
                int t = q.poll();
                q.add(r[1]);
            }
        }
        return q.size();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Xd={id:"problem-d-\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217-ii",tabindex:"-1"},Jd=e("a",{class:"header-anchor",href:"#problem-d-\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217-ii","aria-hidden":"true"},"#",-1),Zd=n(" Problem D - "),$d={href:"https://leetcode.cn/problems/longest-increasing-subsequence-ii/",target:"_blank",rel:"noopener noreferrer"},er=n("\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217 II"),nr=e("p",null,[e("strong",null,"\u89E3\u6CD5\uFF1A\u7EBF\u6BB5\u6811")],-1),ir=e("h2",{id:"_87\u573A\u53CC\u5468\u8D5B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_87\u573A\u53CC\u5468\u8D5B","aria-hidden":"true"},"#"),n(" 87\u573A\u53CC\u5468\u8D5B")],-1),sr={id:"problem-a-\u7EDF\u8BA1\u5171\u540C\u5EA6\u8FC7\u7684\u65E5\u5B50\u6570",tabindex:"-1"},lr=e("a",{class:"header-anchor",href:"#problem-a-\u7EDF\u8BA1\u5171\u540C\u5EA6\u8FC7\u7684\u65E5\u5B50\u6570","aria-hidden":"true"},"#",-1),dr=n(" Problem A - "),rr={href:"https://leetcode.cn/problems/count-days-spent-together/",target:"_blank",rel:"noopener noreferrer"},tr=n("\u7EDF\u8BA1\u5171\u540C\u5EA6\u8FC7\u7684\u65E5\u5B50\u6570"),ar=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    int[] t = new int[]{0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    public int get(String s) {
        String[] ss = s.split(&quot;-&quot;);
        int a = Integer.parseInt(ss[0]), b = Integer.parseInt(ss[1]);
        int res = 0;
        for (int i = 0; i &lt; a; i ++ ) res += t[i];
        return res + b;
    }
    public int countDaysTogether(String s1, String s2, String s3, String s4) {
        int a = get(s1), b = get(s2), c = get(s3), d = get(s4);
        int res = Math.min(b, d) - Math.max(a, c) + 1;
        return Math.max(0, res);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),vr={id:"problem-b-\u8FD0\u52A8\u5458\u548C\u8BAD\u7EC3\u5E08\u7684\u6700\u5927\u5339\u914D\u6570",tabindex:"-1"},cr=e("a",{class:"header-anchor",href:"#problem-b-\u8FD0\u52A8\u5458\u548C\u8BAD\u7EC3\u5E08\u7684\u6700\u5927\u5339\u914D\u6570","aria-hidden":"true"},"#",-1),or=n(" Problem B - "),ur={href:"https://leetcode.cn/problems/maximum-matching-of-players-with-trainers/",target:"_blank",rel:"noopener noreferrer"},mr=n("\u8FD0\u52A8\u5458\u548C\u8BAD\u7EC3\u5E08\u7684\u6700\u5927\u5339\u914D\u6570"),br=l(`<p><strong>\u89E3\u6CD5\uFF1A\u8D2A\u5FC3</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int matchPlayersAndTrainers(int[] a, int[] b) {
        Arrays.sort(a);
        Arrays.sort(b);
        int res = 0;
        for (int i = 0, j = 0; i &lt; a.length; i ++ ) {
            while (j &lt; b.length &amp;&amp; b[j] &lt; a[i]) j ++ ;
            if (j == b.length) break;
            if (a[i] &lt;= b[j]) {
                j ++ ;
                res ++ ;
            }
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),hr={id:"problem-c-\u6309\u4F4D\u6216\u6700\u5927\u7684\u6700\u5C0F\u5B50\u6570\u7EC4\u957F\u5EA6",tabindex:"-1"},pr=e("a",{class:"header-anchor",href:"#problem-c-\u6309\u4F4D\u6216\u6700\u5927\u7684\u6700\u5C0F\u5B50\u6570\u7EC4\u957F\u5EA6","aria-hidden":"true"},"#",-1),gr=n(" Problem C - "),_r={href:"https://leetcode.cn/problems/smallest-subarrays-with-maximum-bitwise-or/",target:"_blank",rel:"noopener noreferrer"},fr=n("\u6309\u4F4D\u6216\u6700\u5927\u7684\u6700\u5C0F\u5B50\u6570\u7EC4\u957F\u5EA6"),xr=l(`<p><strong>\u89E3\u6CD5\uFF1A\u8D2A\u5FC3</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int[] smallestSubarrays(int[] nums) {
        int n = nums.length;
        int[] p = new int[30];
        int[] res = new int[n];
        Arrays.fill(p, n);
        for (int i = n - 1; i &gt;= 0; i -- ) {
            int t = i;
            for (int j = 0; j &lt; 30; j ++ )
                if ((nums[i] &gt;&gt; j &amp; 1) == 1) p[j] = i;
                else if (p[j] != n) t = Math.max(p[j], t);
            res[i] = t - i + 1;
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),kr={id:"problem-d-\u5B8C\u6210\u6240\u6709\u4EA4\u6613\u7684\u521D\u59CB\u6700\u5C11\u94B1\u6570",tabindex:"-1"},wr=e("a",{class:"header-anchor",href:"#problem-d-\u5B8C\u6210\u6240\u6709\u4EA4\u6613\u7684\u521D\u59CB\u6700\u5C11\u94B1\u6570","aria-hidden":"true"},"#",-1),Sr=n(" Problem D - "),yr={href:"https://leetcode.cn/problems/minimum-money-required-before-transactions/",target:"_blank",rel:"noopener noreferrer"},jr=n("\u5B8C\u6210\u6240\u6709\u4EA4\u6613\u7684\u521D\u59CB\u6700\u5C11\u94B1\u6570"),qr=l(`<p><strong>\u89E3\u6CD5\uFF1A\u8D2A\u5FC3</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public long minimumMoney(int[][] transactions) {
        long sum = 0;
        for (int[] p : transactions) {
            int a = p[0], b = p[1];
            if (a &gt; b) sum += a - b;
        }
        long res = 0;
        for (int[] p : transactions) {
            int a = p[0], b = p[1];
            long s = sum;
            if (a &gt; b) s -= a - b;
            res = Math.max(res, s + a);
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_311\u573A\u5468\u8D5B" tabindex="-1"><a class="header-anchor" href="#_311\u573A\u5468\u8D5B" aria-hidden="true">#</a> 311\u573A\u5468\u8D5B</h2>`,3),Ar={id:"problem-a-\u6700\u5C0F\u5076\u500D\u6570",tabindex:"-1"},Pr=e("a",{class:"header-anchor",href:"#problem-a-\u6700\u5C0F\u5076\u500D\u6570","aria-hidden":"true"},"#",-1),Ir=n(" Problem A - "),Mr={href:"https://leetcode.cn/problems/smallest-even-multiple/",target:"_blank",rel:"noopener noreferrer"},Lr=n("\u6700\u5C0F\u5076\u500D\u6570"),Tr=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6570\u5B66</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int smallestEvenMultiple(int n) {
        if (n % 2 == 0) return n;
        else return n * 2;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Cr={id:"problem-b-\u6700\u957F\u7684\u5B57\u6BCD\u5E8F\u8FDE\u7EED\u5B50\u5B57\u7B26\u4E32\u7684\u957F\u5EA6",tabindex:"-1"},Dr=e("a",{class:"header-anchor",href:"#problem-b-\u6700\u957F\u7684\u5B57\u6BCD\u5E8F\u8FDE\u7EED\u5B50\u5B57\u7B26\u4E32\u7684\u957F\u5EA6","aria-hidden":"true"},"#",-1),Nr=n(" Problem B - "),Br={href:"https://leetcode.cn/problems/length-of-the-longest-alphabetical-continuous-substring/",target:"_blank",rel:"noopener noreferrer"},zr=n("\u6700\u957F\u7684\u5B57\u6BCD\u5E8F\u8FDE\u7EED\u5B50\u5B57\u7B26\u4E32\u7684\u957F\u5EA6"),Or=l(`<p><strong>\u89E3\u6CD5\uFF1A\u679A\u4E3E</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int longestContinuousSubstring(String s) {
        char[] ss = s.toCharArray();
        int res = 0;
        for (int i = 0; i &lt; ss.length; i ++ ) {
            int j = i + 1;
            while (j &lt; ss.length &amp;&amp; ss[j] == ss[j - 1] + 1) j ++ ;
            res = Math.max(res, j - i);
            i = j - 1;
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Hr={id:"problem-c-\u53CD\u8F6C\u4E8C\u53C9\u6811\u7684\u5947\u6570\u5C42",tabindex:"-1"},Kr=e("a",{class:"header-anchor",href:"#problem-c-\u53CD\u8F6C\u4E8C\u53C9\u6811\u7684\u5947\u6570\u5C42","aria-hidden":"true"},"#",-1),Er=n(" Problem C - "),Rr={href:"https://leetcode.cn/problems/reverse-odd-levels-of-binary-tree/",target:"_blank",rel:"noopener noreferrer"},Fr=n("\u53CD\u8F6C\u4E8C\u53C9\u6811\u7684\u5947\u6570\u5C42"),Qr=l(`<p><strong>\u89E3\u6CD5\uFF1Abfs</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public void reverse(List&lt;TreeNode&gt; list) {
        int l = 0, r = list.size() - 1;
        while (l &lt; r) {
            TreeNode a = list.get(l), b = list.get(r);
            int t = a.val;
            a.val = b.val;
            b.val = t;
            l ++ ;
            r -- ;
        }
    } 
    public TreeNode reverseOddLevels(TreeNode root) {
        var q = new ArrayDeque&lt;TreeNode&gt;();
        q.add(root);
        int depth = -1;
        while (!q.isEmpty()) {
            int cur = q.size();
            var list = new ArrayList&lt;TreeNode&gt;();
            while (cur -- &gt; 0) {
                TreeNode node = q.poll();
                list.add(node);
                if (node.left != null) q.add(node.left);
                if (node.right != null) q.add(node.right);
            }
            depth ++ ;
            if (depth % 2 == 1) 
                reverse(list);
        }
        return root;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u89E3\u6CD5\uFF1Adfs</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public void swap(TreeNode a, TreeNode b) {
        int t = a.val;
        a.val = b.val;
        b.val = t;
    }

    public void dfs(TreeNode a, TreeNode b, int d) {
        if (a == null) return;
        if (d % 2 == 1) swap(a, b);
        dfs(a.left, b.right, d + 1);
        dfs(a.right, b.left, d + 1); 
    }

    public TreeNode reverseOddLevels(TreeNode root) {
        dfs(root.left, root.right, 1);
        return root;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Vr={id:"problem-d-\u5B57\u7B26\u4E32\u7684\u524D\u7F00\u5206\u6570\u548C",tabindex:"-1"},Wr=e("a",{class:"header-anchor",href:"#problem-d-\u5B57\u7B26\u4E32\u7684\u524D\u7F00\u5206\u6570\u548C","aria-hidden":"true"},"#",-1),Gr=n(" Problem D - "),Ur={href:"https://leetcode.cn/problems/sum-of-prefix-scores-of-strings/",target:"_blank",rel:"noopener noreferrer"},Yr=n("\u5B57\u7B26\u4E32\u7684\u524D\u7F00\u5206\u6570\u548C"),Xr=l(`<p><strong>\u89E3\u6CD5\uFF1A\u5B57\u5178\u6811</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    
    public class TrieNode {
        TrieNode[] child;
        int cnt;
        TrieNode() {
            child = new TrieNode[27];
            cnt = 1;
        }
    }
    
    TrieNode root = new TrieNode();
    
    public void insert(String word) {
        TrieNode p = root;
        for (int i = 0; i &lt; word.length(); i++) {
            char c = word.charAt(i);
            if (p.child[c - &#39;a&#39;] == null) {
                p.child[c - &#39;a&#39;] = new TrieNode();
            } else {
                p.child[c - &#39;a&#39;].cnt ++ ;
            }
            p = p.child[c - &#39;a&#39;];
        }
    }

    public int search(String word) {
        TrieNode p = root;
        int res = 0;
        for (int i = 0; i &lt; word.length(); i++) {
            char c = word.charAt(i);
            if (p.child[c - &#39;a&#39;] != null) {
                p = p.child[c - &#39;a&#39;];
                res += p.cnt;
            }
        }
        return res;
    }

    public int[] sumPrefixScores(String[] words) {
        int n = words.length;
        for (String x : words) {
            insert(x);
        }
        int[] res = new int[n];
        for (int i = 0; i &lt; n; i ++ ) {
            String word = words[i];
            res[i] = search(word);
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_312\u573A\u5468\u8D5B" tabindex="-1"><a class="header-anchor" href="#_312\u573A\u5468\u8D5B" aria-hidden="true">#</a> 312\u573A\u5468\u8D5B</h2>`,3),Jr={id:"problem-a-\u6309\u8EAB\u9AD8\u6392\u5E8F",tabindex:"-1"},Zr=e("a",{class:"header-anchor",href:"#problem-a-\u6309\u8EAB\u9AD8\u6392\u5E8F","aria-hidden":"true"},"#",-1),$r=n(" Problem A - "),et={href:"https://leetcode.cn/problems/sort-the-people/",target:"_blank",rel:"noopener noreferrer"},nt=n("\u6309\u8EAB\u9AD8\u6392\u5E8F"),it=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public String[] sortPeople(String[] names, int[] h) {
        var map = new HashMap&lt;Integer, String&gt;();
        for (int i = 0; i &lt; names.length; i ++ )
            map.put(h[i], names[i]);
        Arrays.sort(h);
        var list = new ArrayList&lt;String&gt;();
        for (int i = h.length - 1; i &gt;= 0; i -- )
            list.add(map.get(h[i]));
        return list.toArray(new String[h.length]);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),st={id:"problem-b-\u6309\u4F4D\u4E0E\u6700\u5927\u7684\u6700\u957F\u5B50\u6570\u7EC4",tabindex:"-1"},lt=e("a",{class:"header-anchor",href:"#problem-b-\u6309\u4F4D\u4E0E\u6700\u5927\u7684\u6700\u957F\u5B50\u6570\u7EC4","aria-hidden":"true"},"#",-1),dt=n(" Problem B - "),rt={href:"https://leetcode.cn/problems/longest-subarray-with-maximum-bitwise-and/",target:"_blank",rel:"noopener noreferrer"},tt=n("\u6309\u4F4D\u4E0E\u6700\u5927\u7684\u6700\u957F\u5B50\u6570\u7EC4"),at=l(`<p><strong>\u89E3\u6CD5\uFF1A\u8111\u7B4B\u6025\u8F6C\u5F2F</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int longestSubarray(int[] nums) {
        int mx = 0, n = nums.length;
        for (int x : nums)
            mx = Math.max(mx, x);
        int res = 0, cur = 0;
        for (int i = 0; i &lt; n; i ++ )
            if (nums[i] == mx) {
                int j = i + 1;
                while (j &lt; n &amp;&amp; nums[j] == mx) j ++ ;
                res = Math.max(res, j - i);
                i = j;
            } 
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),vt={id:"problem-c-\u627E\u5230\u6240\u6709\u597D\u4E0B\u6807",tabindex:"-1"},ct=e("a",{class:"header-anchor",href:"#problem-c-\u627E\u5230\u6240\u6709\u597D\u4E0B\u6807","aria-hidden":"true"},"#",-1),ot=n(" Problem C - "),ut={href:"https://leetcode.cn/problems/find-all-good-indices/",target:"_blank",rel:"noopener noreferrer"},mt=n("\u627E\u5230\u6240\u6709\u597D\u4E0B\u6807"),bt=l(`<p><strong>\u89E3\u6CD5\uFF1A\u679A\u4E3E</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public List&lt;Integer&gt; goodIndices(int[] nums, int k) {
        var n = nums.length;
        int[] f = new int[n], g = new int[n];
        Arrays.fill(f, 1); Arrays.fill(g, 1);
        for (int i = 1; i &lt; n; i ++ )
            if (nums[i] &lt;= nums[i - 1])
                f[i] = f[i - 1] + 1;
        for (int i = n - 1; i &gt; 0; i -- )
            if (nums[i] &gt;= nums[i - 1])
                g[i - 1] = g[i] + 1;
        var res = new ArrayList&lt;Integer&gt;();
        for (int i = k; i &lt; n - k; i ++ )
            if (f[i - 1] &gt;= k &amp;&amp; g[i + 1] &gt;= k)
                res.add(i);
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ht={id:"problem-d-\u597D\u8DEF\u5F84\u7684\u6570\u76EE",tabindex:"-1"},pt=e("a",{class:"header-anchor",href:"#problem-d-\u597D\u8DEF\u5F84\u7684\u6570\u76EE","aria-hidden":"true"},"#",-1),gt=n(" Problem D - "),_t={href:"https://leetcode.cn/problems/number-of-good-paths/",target:"_blank",rel:"noopener noreferrer"},ft=n("\u597D\u8DEF\u5F84\u7684\u6570\u76EE"),xt=e("p",null,[e("strong",null,"\u89E3\u6CD5\uFF1A\u5E76\u67E5\u96C6")],-1),kt=e("h2",{id:"_88\u573A\u53CC\u5468\u8D5B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_88\u573A\u53CC\u5468\u8D5B","aria-hidden":"true"},"#"),n(" 88\u573A\u53CC\u5468\u8D5B")],-1),wt={id:"problem-a-\u5220\u9664\u5B57\u7B26\u4F7F\u9891\u7387\u76F8\u540C",tabindex:"-1"},St=e("a",{class:"header-anchor",href:"#problem-a-\u5220\u9664\u5B57\u7B26\u4F7F\u9891\u7387\u76F8\u540C","aria-hidden":"true"},"#",-1),yt=n(" Problem A - "),jt={href:"https://leetcode.cn/problems/remove-letter-to-equalize-frequency/",target:"_blank",rel:"noopener noreferrer"},qt=n("\u5220\u9664\u5B57\u7B26\u4F7F\u9891\u7387\u76F8\u540C"),At=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public boolean equalFrequency(String s) {
        int[] map = new int[26];
        for (char x : s.toCharArray()) map[x - &#39;a&#39;] ++ ;
        for (int i = 0; i &lt; 26; i ++ )
            if (map[i] &gt; 0) {
                map[i] -- ;
                int t = 0;
                boolean res = true;
                for (int j = 0; j &lt; 26; j ++ ) 
                    if (map[j] &gt; 0) {
                        if (t == 0) t = map[j];
                        else if (map[j] != t) res = false;
                    }
                map[i] ++ ;
                if (res) return res;
            }
        return false;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Pt={id:"problem-b-\u6700\u957F\u4E0A\u4F20\u524D\u7F00",tabindex:"-1"},It=e("a",{class:"header-anchor",href:"#problem-b-\u6700\u957F\u4E0A\u4F20\u524D\u7F00","aria-hidden":"true"},"#",-1),Mt=n(" Problem B - "),Lt={href:"https://leetcode.cn/problems/longest-uploaded-prefix/",target:"_blank",rel:"noopener noreferrer"},Tt=n("\u6700\u957F\u4E0A\u4F20\u524D\u7F00"),Ct=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class LUPrefix {
    boolean[] st;
    int n, now = 0;
    public LUPrefix(int _n) {
        n = _n;
        st = new boolean[n + 1];
    }
    
    public void upload(int x) {
        st[x] = true;
        while (now &lt; n &amp;&amp; st[now + 1]) now ++ ;
    }
    
    public int longest() {
        return now;
    }
}

/**
 * Your LUPrefix object will be instantiated and called as such:
 * LUPrefix obj = new LUPrefix(n);
 * obj.upload(video);
 * int param_2 = obj.longest();
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Dt={id:"problem-c-\u6240\u6709\u6570\u5BF9\u7684\u5F02\u6216\u548C",tabindex:"-1"},Nt=e("a",{class:"header-anchor",href:"#problem-c-\u6240\u6709\u6570\u5BF9\u7684\u5F02\u6216\u548C","aria-hidden":"true"},"#",-1),Bt=n(" Problem C - "),zt={href:"https://leetcode.cn/problems/bitwise-xor-of-all-pairings/",target:"_blank",rel:"noopener noreferrer"},Ot=n("\u6240\u6709\u6570\u5BF9\u7684\u5F02\u6216\u548C"),Ht=l(`<p><strong>\u89E3\u6CD5\uFF1A\u8111\u7B4B\u6025\u8F6C\u5F2F</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int xorAllNums(int[] a, int[] b) {
        int n = a.length, m = b.length;
        int res = 0;
        if (n % 2 == 1) 
            for (int x : b) 
                res ^= x;        
        if (m % 2 == 1) 
            for (int x : a) 
                res ^= x;    
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Kt={id:"problem-d-\u6EE1\u8DB3\u4E0D\u7B49\u5F0F\u7684\u6570\u5BF9\u6570\u76EE",tabindex:"-1"},Et=e("a",{class:"header-anchor",href:"#problem-d-\u6EE1\u8DB3\u4E0D\u7B49\u5F0F\u7684\u6570\u5BF9\u6570\u76EE","aria-hidden":"true"},"#",-1),Rt=n(" Problem D - "),Ft={href:"https://leetcode.cn/problems/number-of-pairs-satisfying-inequality/",target:"_blank",rel:"noopener noreferrer"},Qt=n("\u6EE1\u8DB3\u4E0D\u7B49\u5F0F\u7684\u6570\u5BF9\u6570\u76EE"),Vt=e("p",null,[e("strong",null,"\u89E3\u6CD5\uFF1A\u6811\u72B6\u6570\u7EC4")],-1),Wt=e("h2",{id:"_313\u573A\u5468\u8D5B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_313\u573A\u5468\u8D5B","aria-hidden":"true"},"#"),n(" 313\u573A\u5468\u8D5B")],-1),Gt={id:"problem-a-\u516C\u56E0\u5B50\u7684\u6570\u76EE",tabindex:"-1"},Ut=e("a",{class:"header-anchor",href:"#problem-a-\u516C\u56E0\u5B50\u7684\u6570\u76EE","aria-hidden":"true"},"#",-1),Yt=n(" Problem A - "),Xt={href:"https://leetcode.cn/problems/number-of-common-factors/",target:"_blank",rel:"noopener noreferrer"},Jt=n("\u516C\u56E0\u5B50\u7684\u6570\u76EE"),Zt=l(`<p><strong>\u89E3\u6CD5\uFF1A\u679A\u4E3E</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int commonFactors(int a, int b) {
        int res = 0;
        for (int i = 1; i &lt;= Math.min(a, b); i ++ ) {
            if (a % i == 0 &amp;&amp; b % i == 0)
                res ++ ;
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),$t={id:"problem-b-\u6C99\u6F0F\u7684\u6700\u5927\u603B\u548C",tabindex:"-1"},ea=e("a",{class:"header-anchor",href:"#problem-b-\u6C99\u6F0F\u7684\u6700\u5927\u603B\u548C","aria-hidden":"true"},"#",-1),na=n(" Problem B - "),ia={href:"https://leetcode.cn/problems/maximum-sum-of-an-hourglass/",target:"_blank",rel:"noopener noreferrer"},sa=n("\u6C99\u6F0F\u7684\u6700\u5927\u603B\u548C"),la=l(`<p><strong>\u89E3\u6CD5\uFF1A\u524D\u7F00\u548C</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int maxSum(int[][] g) {
        int n = g.length, m = g[0].length;
        int[][] s = new int[n + 1][m + 1];
        for (int i = 0; i &lt; n; i ++ ) {
            for (int j = 0; j &lt; m; j ++ ) {
                s[i + 1][j + 1] = s[i + 1][j] + s[i][j + 1] - s[i][j] + g[i][j];
            }
        }
        int res = 0;
        for (int i = 2; i &lt; n; i ++ )
            for (int j = 2; j &lt; m; j ++ )
                res = Math.max(res, s[i + 1][j + 1] - s[i + 1][j - 2] - s[i - 2][j + 1] + s[i - 2][j - 2] - g[i - 1][j] - g[i - 1][j - 2]);
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),da={id:"problem-c-\u6700\u5C0F-xor",tabindex:"-1"},ra=e("a",{class:"header-anchor",href:"#problem-c-\u6700\u5C0F-xor","aria-hidden":"true"},"#",-1),ta=n(" Problem C - "),aa={href:"https://leetcode.cn/problems/minimize-xor/",target:"_blank",rel:"noopener noreferrer"},va=n("\u6700\u5C0F XOR"),ca=l(`<p><strong>\u89E3\u6CD5\uFF1A\u8D2A\u5FC3</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int minimizeXor(int a, int b) {
        int n = Integer.bitCount(b);
        int res = 0;
        for (int i = 32 - 1; i &gt;= 0 &amp;&amp; n != 0; i -- ) 
            if ((a &gt;&gt; i &amp; 1) == 1) {
                res += 1 &lt;&lt; i;
                n -- ;
            }
        for (int i = 0; i &lt; 32 &amp;&amp; n != 0; i ++ )
            if ((res &gt;&gt; i &amp; 1) == 0) {
                res += 1 &lt;&lt; i;
                n -- ;
            }
        
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),oa={id:"problem-d-\u5BF9\u5B57\u6BCD\u4E32\u53EF\u6267\u884C\u7684\u6700\u5927\u5220\u9664\u6570",tabindex:"-1"},ua=e("a",{class:"header-anchor",href:"#problem-d-\u5BF9\u5B57\u6BCD\u4E32\u53EF\u6267\u884C\u7684\u6700\u5927\u5220\u9664\u6570","aria-hidden":"true"},"#",-1),ma=n(" Problem D - "),ba={href:"https://leetcode.cn/problems/maximum-deletions-on-a-string/",target:"_blank",rel:"noopener noreferrer"},ha=n("\u5BF9\u5B57\u6BCD\u4E32\u53EF\u6267\u884C\u7684\u6700\u5927\u5220\u9664\u6570"),pa=l(`<p><strong>\u89E3\u6CD5\uFF1A\u7EBF\u6027dp&amp;\u5B57\u7B26\u4E32\u54C8\u5E0C</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    int P = 131, n;
    long[] h, p;
    public long get(int l, int r) {
        return h[r] - h[l - 1] * p[r - l + 1];
    }
    public int deleteString(String s) {
        n = s.length();
        h = new long[n + 1];
        p = new long[n + 1];
        p[0] = 1;
        for (int i = 1; i &lt;= n; i ++ ) {
            p[i] = p[i - 1] * P;
            h[i] = h[i - 1] * P + s.charAt(i - 1);
        }
        //\u8868\u793A\u5C06[i, n]\u8FD9\u4E2A\u540E\u7F00\u6240\u9700\u6700\u5927\u64CD\u4F5C\u6570
        int[] f = new int[n + 1];
        Arrays.fill(f, 1);
        for (int i = n; i &gt; 0; i -- ) 
            for (int j = 1; j &lt;= (n - i + 1) / 2; j ++ )
                if (get(i, i + j - 1) == get(i + j, i + j * 2 - 1))
                    f[i] = Math.max(f[i], f[i + j] + 1);
        
        return f[1];
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_314\u573A\u5468\u8D5B" tabindex="-1"><a class="header-anchor" href="#_314\u573A\u5468\u8D5B" aria-hidden="true">#</a> 314\u573A\u5468\u8D5B</h2>`,3),ga={id:"problem-a-\u5904\u7406\u7528\u65F6\u6700\u957F\u7684\u90A3\u4E2A\u4EFB\u52A1\u7684\u5458\u5DE5",tabindex:"-1"},_a=e("a",{class:"header-anchor",href:"#problem-a-\u5904\u7406\u7528\u65F6\u6700\u957F\u7684\u90A3\u4E2A\u4EFB\u52A1\u7684\u5458\u5DE5","aria-hidden":"true"},"#",-1),fa=n(" Problem A - "),xa={href:"https://leetcode.cn/problems/the-employee-that-worked-on-the-longest-task/",target:"_blank",rel:"noopener noreferrer"},ka=n("\u5904\u7406\u7528\u65F6\u6700\u957F\u7684\u90A3\u4E2A\u4EFB\u52A1\u7684\u5458\u5DE5"),wa=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int hardestWorker(int n, int[][] logs) {
        var list = new ArrayList&lt;int[]&gt;();
        int pre = 0;
        for (int[] p : logs) {
            int a = p[0], b = p[1];
            list.add(new int[]{a, b - pre});
            pre = b;
        }
        list.sort((a, b) -&gt; {
            return a[1] == b[1] ? a[0] - b[0] : b[1] - a[1];
        });
        return list.get(0)[0];
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Sa={id:"problem-b-\u627E\u51FA\u524D\u7F00\u5F02\u6216\u7684\u539F\u59CB\u6570\u7EC4",tabindex:"-1"},ya=e("a",{class:"header-anchor",href:"#problem-b-\u627E\u51FA\u524D\u7F00\u5F02\u6216\u7684\u539F\u59CB\u6570\u7EC4","aria-hidden":"true"},"#",-1),ja=n(" Problem B - "),qa={href:"https://leetcode.cn/problems/find-the-original-array-of-prefix-xor/",target:"_blank",rel:"noopener noreferrer"},Aa=n("\u627E\u51FA\u524D\u7F00\u5F02\u6216\u7684\u539F\u59CB\u6570\u7EC4"),Pa=l(`<p><strong>\u89E3\u6CD5\uFF1A\u4F4D\u8FD0\u7B97</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int[] findArray(int[] p) {
        int n = p.length;
        int[] res = new int[n];
        res[0] = p[0];
        for (int i = 1; i &lt; n; i ++ ) {
            res[i] = p[i] ^ p[i - 1];
        }
        return res;
    }   
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ia={id:"problem-c-\u4F7F\u7528\u673A\u5668\u4EBA\u6253\u5370\u5B57\u5178\u5E8F\u6700\u5C0F\u7684\u5B57\u7B26\u4E32",tabindex:"-1"},Ma=e("a",{class:"header-anchor",href:"#problem-c-\u4F7F\u7528\u673A\u5668\u4EBA\u6253\u5370\u5B57\u5178\u5E8F\u6700\u5C0F\u7684\u5B57\u7B26\u4E32","aria-hidden":"true"},"#",-1),La=n(" Problem C - "),Ta={href:"https://leetcode.cn/problems/using-a-robot-to-print-the-lexicographically-smallest-string/",target:"_blank",rel:"noopener noreferrer"},Ca=n("\u4F7F\u7528\u673A\u5668\u4EBA\u6253\u5370\u5B57\u5178\u5E8F\u6700\u5C0F\u7684\u5B57\u7B26\u4E32"),Da=l(`<p><strong>\u89E3\u6CD5\uFF1A\u8D2A\u5FC3</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public String robotWithString(String s) {
        var map = new int[26];
        var res = new StringBuilder();
        var stk = new ArrayDeque&lt;Character&gt;();
        var min = 0;
        for (char c : s.toCharArray()) map[c - &#39;a&#39;] ++ ;
        for (char c : s.toCharArray()) {
            -- map[c - &#39;a&#39;];
            while (min &lt; 26 &amp;&amp; map[min] == 0) min ++ ;
            stk.push(c);
            while (!stk.isEmpty() &amp;&amp; stk.peek() - &#39;a&#39; &lt;= min)
                res.append(stk.pop());
        }
        return res.toString();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Na={id:"problem-d-\u77E9\u9635\u4E2D\u548C\u80FD\u88AB-k-\u6574\u9664\u7684\u8DEF\u5F84",tabindex:"-1"},Ba=e("a",{class:"header-anchor",href:"#problem-d-\u77E9\u9635\u4E2D\u548C\u80FD\u88AB-k-\u6574\u9664\u7684\u8DEF\u5F84","aria-hidden":"true"},"#",-1),za=n(" Problem D - "),Oa={href:"https://leetcode.cn/problems/paths-in-matrix-whose-sum-is-divisible-by-k/",target:"_blank",rel:"noopener noreferrer"},Ha=n("\u77E9\u9635\u4E2D\u548C\u80FD\u88AB K \u6574\u9664\u7684\u8DEF\u5F84"),Ka=e("p",null,[e("strong",null,"\u89E3\u6CD5\uFF1A\u52A8\u6001\u89C4\u5212")],-1),Ea=e("h2",{id:"_89\u573A\u53CC\u5468\u8D5B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_89\u573A\u53CC\u5468\u8D5B","aria-hidden":"true"},"#"),n(" 89\u573A\u53CC\u5468\u8D5B")],-1),Ra={id:"problem-a-\u6709\u6548\u65F6\u95F4\u7684\u6570\u76EE",tabindex:"-1"},Fa=e("a",{class:"header-anchor",href:"#problem-a-\u6709\u6548\u65F6\u95F4\u7684\u6570\u76EE","aria-hidden":"true"},"#",-1),Qa=n(" Problem A - "),Va={href:"https://leetcode.cn/problems/number-of-valid-clock-times/",target:"_blank",rel:"noopener noreferrer"},Wa=n("\u6709\u6548\u65F6\u95F4\u7684\u6570\u76EE"),Ga=l(`<p><strong>\u89E3\u6CD5\uFF1A\u679A\u4E3E</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
        public int countTime(String time) {
            String[] temp = time.split(&quot;:&quot;);
            int ans1 = 1, ans2 = 1, ans3 = 1, ans4 = 1;
            if (temp[0].equals(&quot;??&quot;)) {
                ans1 = 3;
                ans2 = 8;
            } else if (temp[0].charAt(0) == &#39;?&#39; &amp;&amp; temp[0].charAt(1) != &#39;?&#39;) {
                if (temp[0].charAt(1) &gt;= &#39;4&#39; &amp;&amp; temp[0].charAt(1) &lt;= &#39;9&#39;) ans1 = 2;
                else ans1 = 3;
            } else if (temp[0].charAt(1) == &#39;?&#39; &amp;&amp; temp[0].charAt(0) != &#39;?&#39;) {
                if (temp[0].charAt(0) == &#39;2&#39;) ans2 = 4;
                else ans2 = 10;
            }
            if (temp[1].charAt(0) == &#39;?&#39;) {
                ans3 = 6;
            }
            if (temp[1].charAt(1) == &#39;?&#39;) {
                ans4 = 10;
            }
            return ans1 * ans2 * ans3 * ans4;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ua={id:"problem-b-\u4E8C\u7684\u5E42\u6570\u7EC4\u4E2D\u67E5\u8BE2\u8303\u56F4\u5185\u7684\u4E58\u79EF",tabindex:"-1"},Ya=e("a",{class:"header-anchor",href:"#problem-b-\u4E8C\u7684\u5E42\u6570\u7EC4\u4E2D\u67E5\u8BE2\u8303\u56F4\u5185\u7684\u4E58\u79EF","aria-hidden":"true"},"#",-1),Xa=n(" Problem B - "),Ja={href:"https://leetcode.cn/problems/range-product-queries-of-powers/",target:"_blank",rel:"noopener noreferrer"},Za=n("\u4E8C\u7684\u5E42\u6570\u7EC4\u4E2D\u67E5\u8BE2\u8303\u56F4\u5185\u7684\u4E58\u79EF"),$a=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    int mod = (int) 1e9 + 7;
    public int[] productQueries(int n, int[][] q) {
        var m = q.length;
        var p = new ArrayList&lt;Integer&gt;();
        for (var i = 0; i &lt; 30; i ++ ) 
            if ((n &gt;&gt; i &amp; 1) != 0)
                p.add(1 &lt;&lt; i);
        var res = new int[m];
        for (var i = 0; i &lt; m; i ++ ) {
            int l = q[i][0], r = q[i][1];
            var cur = 1l;
            for (var j = l; j &lt;= r; j ++ )
                cur = (cur * p.get(j)) % mod;
            res[i] = (int) cur;
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ev={id:"problem-c-\u6700\u5C0F\u5316\u6570\u7EC4\u4E2D\u7684\u6700\u5927\u503C",tabindex:"-1"},nv=e("a",{class:"header-anchor",href:"#problem-c-\u6700\u5C0F\u5316\u6570\u7EC4\u4E2D\u7684\u6700\u5927\u503C","aria-hidden":"true"},"#",-1),iv=n(" Problem C - "),sv={href:"https://leetcode.cn/problems/minimize-maximum-of-array/",target:"_blank",rel:"noopener noreferrer"},lv=n("\u6700\u5C0F\u5316\u6570\u7EC4\u4E2D\u7684\u6700\u5927\u503C"),dv=l(`<p><strong>\u89E3\u6CD5\uFF1A\u4E8C\u5206</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int minimizeArrayValue(int[] nums) {
        int n = nums.length;
        int k = 0;
        for (int x : nums) k = Math.max(k, x);
        int l = 0, r = k;
        while (l &lt; r) {
            int mid = l + r &gt;&gt; 1;
            var A = new long[n];
            for (int i = 0; i &lt; n; i ++ )
                A[i] = nums[i] * 1l;
            for (int i = n - 1; i &gt; 0; i -- )
                if (A[i] &gt; mid) {
                    var p = A[i] - mid * 1l;
                    A[i] = mid;
                    A[i - 1] += p;
                }
            if (mid &gt;= A[0]) r = mid;
            else l = mid + 1;
        }
        return r;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),rv={id:"problem-d-\u521B\u5EFA\u4EF7\u503C\u76F8\u540C\u7684\u8FDE\u901A\u5757",tabindex:"-1"},tv=e("a",{class:"header-anchor",href:"#problem-d-\u521B\u5EFA\u4EF7\u503C\u76F8\u540C\u7684\u8FDE\u901A\u5757","aria-hidden":"true"},"#",-1),av=n(" Problem D - "),vv={href:"https://leetcode.cn/problems/create-components-with-same-value/",target:"_blank",rel:"noopener noreferrer"},cv=n("\u521B\u5EFA\u4EF7\u503C\u76F8\u540C\u7684\u8FDE\u901A\u5757"),ov=e("p",null,[e("strong",null,"\u89E3\u6CD5\uFF1A\u679A\u4E3E")],-1),uv=e("h2",{id:"_315\u573A\u5468\u8D5B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_315\u573A\u5468\u8D5B","aria-hidden":"true"},"#"),n(" 315\u573A\u5468\u8D5B")],-1),mv={id:"problem-a-\u4E0E\u5BF9\u5E94\u8D1F\u6570\u540C\u65F6\u5B58\u5728\u7684\u6700\u5927\u6B63\u6574\u6570",tabindex:"-1"},bv=e("a",{class:"header-anchor",href:"#problem-a-\u4E0E\u5BF9\u5E94\u8D1F\u6570\u540C\u65F6\u5B58\u5728\u7684\u6700\u5927\u6B63\u6574\u6570","aria-hidden":"true"},"#",-1),hv=n(" Problem A - "),pv={href:"https://leetcode.cn/problems/largest-positive-integer-that-exists-with-its-negative/",target:"_blank",rel:"noopener noreferrer"},gv=n("\u4E0E\u5BF9\u5E94\u8D1F\u6570\u540C\u65F6\u5B58\u5728\u7684\u6700\u5927\u6B63\u6574\u6570"),_v=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int findMaxK(int[] nums) {
        var set = new HashSet&lt;&gt;();
        for (int x : nums) 
            if (x &lt; 0)
                set.add(x);
        var res = 0;
        for (int x: nums)
            if (x &gt; 0 &amp;&amp; set.contains(-x))
                res = Math.max(res, x);
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),fv={id:"problem-b-\u53CD\u8F6C\u4E4B\u540E\u4E0D\u540C\u6574\u6570\u7684\u6570\u76EE",tabindex:"-1"},xv=e("a",{class:"header-anchor",href:"#problem-b-\u53CD\u8F6C\u4E4B\u540E\u4E0D\u540C\u6574\u6570\u7684\u6570\u76EE","aria-hidden":"true"},"#",-1),kv=n(" Problem B - "),wv={href:"https://leetcode.cn/problems/count-number-of-distinct-integers-after-reverse-operations/",target:"_blank",rel:"noopener noreferrer"},Sv=n("\u53CD\u8F6C\u4E4B\u540E\u4E0D\u540C\u6574\u6570\u7684\u6570\u76EE"),yv=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int countDistinctIntegers(int[] nums) {
        var set = new HashSet&lt;Integer&gt;();
        for (int x : nums) {
            set.add(x);
            var y = 0;
            for (int k = x; k != 0; k /= 10)
                y = y * 10 + k % 10;
            set.add(y);
        }
        return set.size();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),jv={id:"problem-c-\u53CD\u8F6C\u4E4B\u540E\u7684\u6570\u5B57\u548C",tabindex:"-1"},qv=e("a",{class:"header-anchor",href:"#problem-c-\u53CD\u8F6C\u4E4B\u540E\u7684\u6570\u5B57\u548C","aria-hidden":"true"},"#",-1),Av=n(" Problem C - "),Pv={href:"https://leetcode.cn/problems/sum-of-number-and-its-reverse/",target:"_blank",rel:"noopener noreferrer"},Iv=n("\u53CD\u8F6C\u4E4B\u540E\u7684\u6570\u5B57\u548C"),Mv=l(`<p><strong>\u679A\u4E3E</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public boolean sumOfNumberAndReverse(int num) {
        for (int x = 0; x &lt;= num; x ++ ) {
            int y = 0;
            for (int j = x; j != 0; j /= 10)
                y = y * 10 + j % 10;
            if (x + y == num) return true;
        }
        return false;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Lv={id:"problem-d-\u7EDF\u8BA1\u5B9A\u754C\u5B50\u6570\u7EC4\u7684\u6570\u76EE",tabindex:"-1"},Tv=e("a",{class:"header-anchor",href:"#problem-d-\u7EDF\u8BA1\u5B9A\u754C\u5B50\u6570\u7EC4\u7684\u6570\u76EE","aria-hidden":"true"},"#",-1),Cv=n(" Problem D - "),Dv={href:"https://leetcode.cn/problems/count-subarrays-with-fixed-bounds/",target:"_blank",rel:"noopener noreferrer"},Nv=n("\u7EDF\u8BA1\u5B9A\u754C\u5B50\u6570\u7EC4\u7684\u6570\u76EE"),Bv=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6ED1\u52A8\u7A97\u53E3</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public long countSubarrays(int[] nums, int minK, int maxK) {
        var res = 0l;
        int n = nums.length, x = -1, y = -1, k = -1;
        for (int i = 0; i &lt; n; i ++ ) {
            int v = nums[i];
            if (v == minK) x = i;
            if (v == maxK) y = i;
            if (v &lt; minK || v &gt; maxK) k = i;
            res += Math.max(Math.min(x, y) - k, 0);
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_316\u573A\u5468\u8D5B" tabindex="-1"><a class="header-anchor" href="#_316\u573A\u5468\u8D5B" aria-hidden="true">#</a> 316\u573A\u5468\u8D5B</h2>`,3),zv={id:"problem-a-\u5224\u65AD\u4E24\u4E2A\u4E8B\u4EF6\u662F\u5426\u5B58\u5728\u51B2\u7A81",tabindex:"-1"},Ov=e("a",{class:"header-anchor",href:"#problem-a-\u5224\u65AD\u4E24\u4E2A\u4E8B\u4EF6\u662F\u5426\u5B58\u5728\u51B2\u7A81","aria-hidden":"true"},"#",-1),Hv=n(" Problem A - "),Kv={href:"https://leetcode.cn/problems/determine-if-two-events-have-conflict/",target:"_blank",rel:"noopener noreferrer"},Ev=n("\u5224\u65AD\u4E24\u4E2A\u4E8B\u4EF6\u662F\u5426\u5B58\u5728\u51B2\u7A81"),Rv=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int get(String s) {
        String[] ss = s.split(&quot;:&quot;);
        return Integer.parseInt(ss[0]) * 60 + Integer.parseInt(ss[1]);
    }
    public boolean haveConflict(String[] a, String[] b) {
        int t1 = get(a[0]), t2 = get(a[1]);
        int t3 = get(b[0]), t4 = get(b[1]);
        if (t2 &lt; t3 || t4 &lt; t1) return false;
        return true;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Fv={id:"problem-b-\u6700\u5927\u516C\u56E0\u6570\u7B49\u4E8E-k-\u7684\u5B50\u6570\u7EC4\u6570\u76EE",tabindex:"-1"},Qv=e("a",{class:"header-anchor",href:"#problem-b-\u6700\u5927\u516C\u56E0\u6570\u7B49\u4E8E-k-\u7684\u5B50\u6570\u7EC4\u6570\u76EE","aria-hidden":"true"},"#",-1),Vv=n(" Problem B - "),Wv={href:"https://leetcode.cn/problems/number-of-subarrays-with-gcd-equal-to-k/",target:"_blank",rel:"noopener noreferrer"},Gv=n("\u6700\u5927\u516C\u56E0\u6570\u7B49\u4E8E K \u7684\u5B50\u6570\u7EC4\u6570\u76EE"),Uv=l(`<p><strong>\u89E3\u6CD5\uFF1A\u679A\u4E3E</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    int gcd(int a, int b) {
        return b != 0 ? gcd(b, a % b) : a;
    }
    public int subarrayGCD(int[] nums, int k) {
        int n = nums.length, res = 0;
        for (int i = 0; i &lt; n; i ++ ) {
            int p = nums[i];
            for (int j = i; j &lt; n; j ++ ) {
                p = gcd(p, nums[j]);
                if (p == k) res ++ ;
            }
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Yv={id:"problem-c-\u4F7F\u6570\u7EC4\u76F8\u7B49\u7684\u6700\u5C0F\u5F00\u9500",tabindex:"-1"},Xv=e("a",{class:"header-anchor",href:"#problem-c-\u4F7F\u6570\u7EC4\u76F8\u7B49\u7684\u6700\u5C0F\u5F00\u9500","aria-hidden":"true"},"#",-1),Jv=n(" Problem C - "),Zv={href:"https://leetcode.cn/problems/minimum-cost-to-make-array-equal/",target:"_blank",rel:"noopener noreferrer"},$v=n("\u4F7F\u6570\u7EC4\u76F8\u7B49\u7684\u6700\u5C0F\u5F00\u9500"),ec=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6570\u5B66</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public long minCost(int[] nums, int[] cost) {
        var n = nums.length;
        var list = new ArrayList&lt;int[]&gt;();
        for (int i = 0; i &lt; n; i ++ )
            list.add(new int[]{nums[i], cost[i]});
        Collections.sort(list, (a, b) -&gt; {
            return a[0] == b[0] ? a[1] - b[1] : a[0] - b[0];
        });
        var tot = 0l;
        for (int x : cost)
            tot += x;
        var note = 0l;
        var choose = 0;
        for (int[] p : list) {
            int num = p[0], c = p[1];
            note += c;
            if (note * 2 &gt;= tot) {
                choose = num;
                break;
            }
        }
        var res = 0l;
        for (int[] p : list) {
            int num = p[0], c = p[1];
            res += c * 1l * Math.abs(num - choose);
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution:
    def minCost(self, nums: List[int], cost: List[int]) -&gt; int:
        tem = sorted(zip(nums, cost))
        tot, note = sum(cost), 0
        for num, c in tem:
            note += c
            if note * 2 &gt;= tot:
                choose = num
                break
        return sum(c * abs(num - choose) for num, c in tem)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),nc={id:"problem-d-\u4F7F\u6570\u7EC4\u76F8\u4F3C\u7684\u6700\u5C11\u64CD\u4F5C\u6B21\u6570",tabindex:"-1"},ic=e("a",{class:"header-anchor",href:"#problem-d-\u4F7F\u6570\u7EC4\u76F8\u4F3C\u7684\u6700\u5C11\u64CD\u4F5C\u6B21\u6570","aria-hidden":"true"},"#",-1),sc=n(" Problem D - "),lc={href:"https://leetcode.cn/problems/minimum-number-of-operations-to-make-arrays-similar/",target:"_blank",rel:"noopener noreferrer"},dc=n("\u4F7F\u6570\u7EC4\u76F8\u4F3C\u7684\u6700\u5C11\u64CD\u4F5C\u6B21\u6570"),rc=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6570\u5B66</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public long makeSimilar(int[] nums, int[] target) {
        var n = nums.length;
        var a = new Integer[n];
        var b = new Integer[n];
        for(var i = 0; i &lt; n; i ++ ){
            a[i] = nums[i];
            b[i] = target[i];
        }
        Arrays.sort(a, (o1, o2)-&gt; o1 % 2 == o2 % 2 ? o1 - o2 : o1 % 2 - o2 % 2);
        Arrays.sort(b, (o1, o2)-&gt; o1 % 2 == o2 % 2 ? o1 - o2 : o1 % 2 - o2 % 2);
        var res = 0l;
        for (var i = 0; i &lt; n; i ++ )
            res += Math.abs(a[i] - b[i]);
        return res &gt;&gt; 2;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution:
    def makeSimilar(self, nums: List[int], target: List[int]) -&gt; int:
        nums.sort(key=lambda x: (x % 2, x))
        target.sort(key=lambda x: (x % 2, x))
        return sum(abs(x - y) for x, y in zip(nums, target)) // 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_90\u573A\u53CC\u5468\u8D5B" tabindex="-1"><a class="header-anchor" href="#_90\u573A\u53CC\u5468\u8D5B" aria-hidden="true">#</a> 90\u573A\u53CC\u5468\u8D5B</h2>`,4),tc={id:"problem-a-\u5DEE\u503C\u6570\u7EC4\u4E0D\u540C\u7684\u5B57\u7B26\u4E32",tabindex:"-1"},ac=e("a",{class:"header-anchor",href:"#problem-a-\u5DEE\u503C\u6570\u7EC4\u4E0D\u540C\u7684\u5B57\u7B26\u4E32","aria-hidden":"true"},"#",-1),vc=n(" Problem A - "),cc={href:"https://leetcode.cn/problems/odd-string-difference/",target:"_blank",rel:"noopener noreferrer"},oc=n("\u5DEE\u503C\u6570\u7EC4\u4E0D\u540C\u7684\u5B57\u7B26\u4E32"),uc=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public String oddString(String[] words) {
        int n = words.length, m = words[0].length();
        int[][] d = new int[n][m - 1];
        for (int i = 0; i &lt; n; i ++ ) {
            for (int j = 0; j &lt; m - 1; j ++ ) {
                d[i][j] = words[i].charAt(j + 1) - words[i].charAt(j);
            }
        }
        Map&lt;String, List&lt;Integer&gt;&gt; map = new HashMap&lt;&gt;();
        for (int i = 0; i &lt; n; i ++ ) {
            var sb =  new StringBuilder();
            for (int c : d[i])
                sb.append(c).append(&quot;,&quot;);
            var s = sb.toString();
            if (!map.containsKey(s)) map.put(s, new ArrayList&lt;&gt;());
            map.get(s).add(i);
        }
        for (var k : map.keySet()) {
            if (map.get(k).size() == 1)
                return words[map.get(k).get(0)];
        }
        return &quot;&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),mc={id:"problem-b-\u8DDD\u79BB\u5B57\u5178\u4E24\u6B21\u7F16\u8F91\u4EE5\u5185\u7684\u5355\u8BCD",tabindex:"-1"},bc=e("a",{class:"header-anchor",href:"#problem-b-\u8DDD\u79BB\u5B57\u5178\u4E24\u6B21\u7F16\u8F91\u4EE5\u5185\u7684\u5355\u8BCD","aria-hidden":"true"},"#",-1),hc=n(" Problem B - "),pc={href:"https://leetcode.cn/problems/words-within-two-edits-of-dictionary/",target:"_blank",rel:"noopener noreferrer"},gc=n("\u8DDD\u79BB\u5B57\u5178\u4E24\u6B21\u7F16\u8F91\u4EE5\u5185\u7684\u5355\u8BCD"),_c=l(`<p><strong>\u89E3\u6CD5\uFF1A\u679A\u4E3E</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public List&lt;String&gt; twoEditWords(String[] q, String[] d) {
        var res = new ArrayList&lt;String&gt;();
        for (var s1 : q) {
            for (var s2 : d) {
                int k = 0;
                for (int i = 0; i &lt; s1.length(); i ++ ) {
                    if (s1.charAt(i) != s2.charAt(i)) k ++ ;
                    if (k &gt; 2) break;
                }
                if (k &lt;= 2) {
                    res.add(s1);
                    break;
                }
            }
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),fc={id:"problem-c-\u6467\u6BC1\u4E00\u7CFB\u5217\u76EE\u6807",tabindex:"-1"},xc=e("a",{class:"header-anchor",href:"#problem-c-\u6467\u6BC1\u4E00\u7CFB\u5217\u76EE\u6807","aria-hidden":"true"},"#",-1),kc=n(" Problem C - "),wc={href:"https://leetcode.cn/problems/destroy-sequential-targets/",target:"_blank",rel:"noopener noreferrer"},Sc=n("\u6467\u6BC1\u4E00\u7CFB\u5217\u76EE\u6807"),yc=l(`<p><strong>\u89E3\u6CD5\uFF1A\u679A\u4E3E</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int destroyTargets(int[] nums, int space) {
        var map = new TreeMap&lt;Integer, Integer&gt;();
        Arrays.sort(nums);
        for (int x : nums) {
            map.put(x % space, map.getOrDefault(x % space, 0) + 1);
        }
        var n = nums.length;
        int res = 0, p = 0;
        for (var i = 0; i &lt; n; i ++ ) {
            int x = nums[i] % space;
            if (map.get(x) &gt; p) {
                res = nums[i];
                p = map.get(x);
            }
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),jc={id:"problem-d-\u4E0B\u4E00\u4E2A\u66F4\u5927\u5143\u7D20-iv",tabindex:"-1"},qc=e("a",{class:"header-anchor",href:"#problem-d-\u4E0B\u4E00\u4E2A\u66F4\u5927\u5143\u7D20-iv","aria-hidden":"true"},"#",-1),Ac=n(" Problem D - "),Pc={href:"https://leetcode.cn/problems/next-greater-element-iv/",target:"_blank",rel:"noopener noreferrer"},Ic=n("\u4E0B\u4E00\u4E2A\u66F4\u5927\u5143\u7D20 IV"),Mc=l(`<p><strong>\u89E3\u6CD5\uFF1A\u5355\u8C03\u6808</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int[] secondGreaterElement(int[] nums) {
        var n = nums.length;
        var res = new int[n];
        Arrays.fill(res, -1);
        var s1 = new ArrayDeque&lt;Integer&gt;();
        var s2 = new ArrayDeque&lt;Integer&gt;();
        var tem = new ArrayDeque&lt;Integer&gt;();
        for (int i = 0; i &lt; n; i ++ ) {
            while (!s2.isEmpty() &amp;&amp; nums[s2.peek()] &lt; nums[i])
                res[s2.pop()] = nums[i];
            while (!s1.isEmpty() &amp;&amp; nums[s1.peek()] &lt; nums[i]) 
                tem.push(s1.pop());
            while (!tem.isEmpty()) s2.push(tem.pop());
            s1.push(i);
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u89E3\u6CD5\uFF1A\u5355\u8C03\u6808&amp;\u5806</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int[] secondGreaterElement(int[] nums) {
        var n = nums.length;
        var res = new int[n];
        Arrays.fill(res, -1);
        var s1 = new ArrayDeque&lt;Integer&gt;();
        var q = new PriorityQueue&lt;Integer&gt;((a, b) -&gt; nums[a] - nums[b]);
        for (int i = 0; i &lt; n; i ++ ) {
            while (!q.isEmpty() &amp;&amp; nums[q.peek()] &lt; nums[i]) 
                res[q.poll()] = nums[i];  
            while (!s1.isEmpty() &amp;&amp; nums[s1.peek()] &lt; nums[i]) 
                q.add(s1.pop());
            s1.push(i);
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_317\u573A\u5468\u8D5B" tabindex="-1"><a class="header-anchor" href="#_317\u573A\u5468\u8D5B" aria-hidden="true">#</a> 317\u573A\u5468\u8D5B</h2>`,5),Lc={id:"problem-a-\u53EF\u88AB\u4E09\u6574\u9664\u7684\u5076\u6570\u7684\u5E73\u5747\u503C",tabindex:"-1"},Tc=e("a",{class:"header-anchor",href:"#problem-a-\u53EF\u88AB\u4E09\u6574\u9664\u7684\u5076\u6570\u7684\u5E73\u5747\u503C","aria-hidden":"true"},"#",-1),Cc=n(" Problem A - "),Dc={href:"https://leetcode.cn/problems/average-value-of-even-numbers-that-are-divisible-by-three/",target:"_blank",rel:"noopener noreferrer"},Nc=n("\u53EF\u88AB\u4E09\u6574\u9664\u7684\u5076\u6570\u7684\u5E73\u5747\u503C"),Bc=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int averageValue(int[] nums) {
        int sum = 0, cnt = 0;
        for (var x : nums)
            if (x % 2 == 0 &amp;&amp; x % 3 == 0) {
                sum += x;
                cnt ++ ;
            }
        return cnt == 0 ? 0 : sum / cnt;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),zc={id:"problem-b-\u6700\u6D41\u884C\u7684\u89C6\u9891\u521B\u4F5C\u8005",tabindex:"-1"},Oc=e("a",{class:"header-anchor",href:"#problem-b-\u6700\u6D41\u884C\u7684\u89C6\u9891\u521B\u4F5C\u8005","aria-hidden":"true"},"#",-1),Hc=n(" Problem B - "),Kc={href:"https://leetcode.cn/problems/most-popular-video-creator/",target:"_blank",rel:"noopener noreferrer"},Ec=n("\u6700\u6D41\u884C\u7684\u89C6\u9891\u521B\u4F5C\u8005"),Rc=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public List&lt;List&lt;String&gt;&gt; mostPopularCreator(String[] creators, String[] ids, int[] views) {
        int n = creators.length;
        var max = 0l;
        List&lt;List&lt;String&gt;&gt; res = new ArrayList&lt;&gt;();
        Map&lt;String, Long&gt; m1 = new HashMap&lt;&gt;();
        Map&lt;String, Integer&gt; m2 = new HashMap&lt;&gt;();
        for (int i = 0; i &lt; n; i ++ ) {
            var creator = creators[i];
            var id = ids[i];
            var view = views[i];
            m1.put(creator, m1.getOrDefault(creator, 0l) + view);
            max = Math.max(max, m1.get(creator));
            if (m2.containsKey(creator)) {
                if (view &gt; views[m2.get(creator)]) {
                    m2.put(creator, i);
                } else if (view == views[m2.get(creator)]) {
                    if (ids[m2.get(creator)].compareTo(id) &gt; 0) {
                        m2.put(creator, i);
                    }
                }
            } else {
                m2.put(creator, i);
            }
        }
        for (var creator : m1.keySet()) {
            if (m1.get(creator) == max) {
                res.add(List.of(creator, ids[m2.get(creator)]));
            }
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Fc={id:"problem-c-\u7F8E\u4E3D\u6574\u6570\u7684\u6700\u5C0F\u589E\u91CF",tabindex:"-1"},Qc=e("a",{class:"header-anchor",href:"#problem-c-\u7F8E\u4E3D\u6574\u6570\u7684\u6700\u5C0F\u589E\u91CF","aria-hidden":"true"},"#",-1),Vc=n(" Problem C - "),Wc={href:"https://leetcode.cn/problems/minimum-addition-to-make-integer-beautiful/",target:"_blank",rel:"noopener noreferrer"},Gc=n("\u7F8E\u4E3D\u6574\u6570\u7684\u6700\u5C0F\u589E\u91CF"),Uc=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6570\u5B66&amp;\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int f(List&lt;Integer&gt; A) {
        var sm = 0;
        for (var x : A) sm += x;
        return sm;
    }
    public long makeIntegerBeautiful(long n, int target) {
        var A = new ArrayList&lt;Integer&gt;();
        var t = n;
        while (t != 0) {
            A.add((int)(t % 10));
            t /= 10;
        }
        A.add(0);
        if (f(A) &lt;= target) return 0;
        var res = 0l;
        var p = 1l;
        for (var i = 0; i + 1 &lt; A.size(); i ++, p *= 10) {
            res += (10l - A.get(i)) * p;
            A.set(i, 0);
            A.set(i + 1, A.get(i + 1) + 1);
            if (A.get(i + 1) == 10) continue;
            if (f(A) &lt;= target) break;
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Yc={id:"problem-d-\u79FB\u9664\u5B50\u6811\u540E\u7684\u4E8C\u53C9\u6811\u9AD8\u5EA6",tabindex:"-1"},Xc=e("a",{class:"header-anchor",href:"#problem-d-\u79FB\u9664\u5B50\u6811\u540E\u7684\u4E8C\u53C9\u6811\u9AD8\u5EA6","aria-hidden":"true"},"#",-1),Jc=n(" Problem D - "),Zc={href:"https://leetcode.cn/problems/height-of-binary-tree-after-subtree-removal-queries/",target:"_blank",rel:"noopener noreferrer"},$c=n("\u79FB\u9664\u5B50\u6811\u540E\u7684\u4E8C\u53C9\u6811\u9AD8\u5EA6"),eo=e("p",null,[e("strong",null,"\u89E3\u6CD5\uFF1Adfs")],-1),no=e("h2",{id:"_318\u573A\u5468\u8D5B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_318\u573A\u5468\u8D5B","aria-hidden":"true"},"#"),n(" 318\u573A\u5468\u8D5B")],-1),io={id:"problem-a-\u5BF9\u6570\u7EC4\u6267\u884C\u64CD\u4F5C",tabindex:"-1"},so=e("a",{class:"header-anchor",href:"#problem-a-\u5BF9\u6570\u7EC4\u6267\u884C\u64CD\u4F5C","aria-hidden":"true"},"#",-1),lo=n(" Problem A - "),ro={href:"https://leetcode.cn/problems/apply-operations-to-an-array/",target:"_blank",rel:"noopener noreferrer"},to=n("\u5BF9\u6570\u7EC4\u6267\u884C\u64CD\u4F5C"),ao=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int[] applyOperations(int[] nums) {
        var n = nums.length;
        for (var i = 0; i &lt; n - 1; i ++ ) {
            if (nums[i] == nums[i + 1]) {
                nums[i] *= 2;
                nums[i + 1] = 0;
            }
        }
        var idx = 0;
        for (int i = 0; i &lt; n; i ++ ) 
            if (nums[i] != 0)
                nums[idx ++ ] = nums[i];
        while (idx &lt; n) nums[idx ++ ] = 0;
        return nums;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),vo={id:"problem-b-\u957F\u5EA6\u4E3A-k-\u5B50\u6570\u7EC4\u4E2D\u7684\u6700\u5927\u548C",tabindex:"-1"},co=e("a",{class:"header-anchor",href:"#problem-b-\u957F\u5EA6\u4E3A-k-\u5B50\u6570\u7EC4\u4E2D\u7684\u6700\u5927\u548C","aria-hidden":"true"},"#",-1),oo=n(" Problem B - "),uo={href:"https://leetcode.cn/problems/maximum-sum-of-distinct-subarrays-with-length-k/",target:"_blank",rel:"noopener noreferrer"},mo=n("\u957F\u5EA6\u4E3A K \u5B50\u6570\u7EC4\u4E2D\u7684\u6700\u5927\u548C"),bo=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6ED1\u52A8\u7A97\u53E3</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public long maximumSubarraySum(int[] nums, int k) {
        var res = 0l;
        var n = nums.length;
        var map = new int[100010];
        var s = new long[n + 1];
        for (int i = 0; i &lt; n; i ++ )
            s[i + 1] = s[i] + nums[i] * 1l;
        for (int i = 0, j = 0; i &lt; n; i ++ ) {
            map[nums[i]] ++ ;
            while (map[nums[i]] &gt; 1 || i - j + 1 &gt; k)
                map[nums[j ++ ]] -- ;
            if (i - j + 1 == k)
                res = Math.max(res, s[i + 1] - s[j]);
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ho={id:"problem-c-\u96C7\u4F63-k-\u4F4D\u5DE5\u4EBA\u7684\u603B\u4EE3\u4EF7",tabindex:"-1"},po=e("a",{class:"header-anchor",href:"#problem-c-\u96C7\u4F63-k-\u4F4D\u5DE5\u4EBA\u7684\u603B\u4EE3\u4EF7","aria-hidden":"true"},"#",-1),go=n(" Problem C - "),_o={href:"https://leetcode.cn/problems/total-cost-to-hire-k-workers/",target:"_blank",rel:"noopener noreferrer"},fo=n("\u96C7\u4F63 K \u4F4D\u5DE5\u4EBA\u7684\u603B\u4EE3\u4EF7"),xo=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public long totalCost(int[] costs, int k, int candidates) {
        var qf = new PriorityQueue&lt;Integer&gt;();
        var qe = new PriorityQueue&lt;Integer&gt;();
        var n = costs.length;
        for (int i = 0; i &lt; candidates; i ++ ) 
            qf.add(costs[i]);
        for (int i = Math.max(n - candidates, candidates); i &lt; n; i ++ )
            qe.add(costs[i]);
        int i = candidates, j = n - candidates - 1;
        var res = 0l;
        while (k -- &gt; 0) {
            if (qe.isEmpty() || (!qf.isEmpty() &amp;&amp; qf.peek() &lt;= qe.peek())) {
                res += qf.poll();
                if (i &lt;= j) 
                    qf.add(costs[i ++ ]);
            } else {
                res += qe.poll();
                if (i &lt;= j) 
                    qe.add(costs[j -- ]);
            }
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ko={id:"problem-d-\u6700\u5C0F\u79FB\u52A8\u603B\u8DDD\u79BB",tabindex:"-1"},wo=e("a",{class:"header-anchor",href:"#problem-d-\u6700\u5C0F\u79FB\u52A8\u603B\u8DDD\u79BB","aria-hidden":"true"},"#",-1),So=n(" Problem D - "),yo={href:"https://leetcode.cn/problems/minimum-total-distance-traveled/",target:"_blank",rel:"noopener noreferrer"},jo=n("\u6700\u5C0F\u79FB\u52A8\u603B\u8DDD\u79BB"),qo=e("p",null,[e("strong",null,"\u89E3\u6CD5\uFF1A\u52A8\u6001\u89C4\u5212")],-1),Ao=e("h2",{id:"_91\u573A\u53CC\u5468\u8D5B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_91\u573A\u53CC\u5468\u8D5B","aria-hidden":"true"},"#"),n(" 91\u573A\u53CC\u5468\u8D5B")],-1),Po={id:"problem-a-\u4E0D\u540C\u7684\u5E73\u5747\u503C\u6570\u76EE",tabindex:"-1"},Io=e("a",{class:"header-anchor",href:"#problem-a-\u4E0D\u540C\u7684\u5E73\u5747\u503C\u6570\u76EE","aria-hidden":"true"},"#",-1),Mo=n(" Problem A - "),Lo={href:"https://leetcode.cn/problems/number-of-distinct-averages/",target:"_blank",rel:"noopener noreferrer"},To=n("\u4E0D\u540C\u7684\u5E73\u5747\u503C\u6570\u76EE"),Co=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int distinctAverages(int[] nums) {
        Arrays.sort(nums);
        var n = nums.length;
        var set = new HashSet&lt;Integer&gt;();
        for (int i = 0, j = n - 1; i &lt; j; i ++ , j -- ) {
            set.add(nums[i] + nums[j]);
        }
        return set.size();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Do={id:"problem-b-\u7EDF\u8BA1\u6784\u9020\u597D\u5B57\u7B26\u4E32\u7684\u65B9\u6848\u6570",tabindex:"-1"},No=e("a",{class:"header-anchor",href:"#problem-b-\u7EDF\u8BA1\u6784\u9020\u597D\u5B57\u7B26\u4E32\u7684\u65B9\u6848\u6570","aria-hidden":"true"},"#",-1),Bo=n(" Problem B - "),zo={href:"https://leetcode.cn/problems/count-ways-to-build-good-strings/",target:"_blank",rel:"noopener noreferrer"},Oo=n("\u7EDF\u8BA1\u6784\u9020\u597D\u5B57\u7B26\u4E32\u7684\u65B9\u6848\u6570"),Ho=l(`<p><strong>\u89E3\u6CD5\uFF1A\u9012\u63A8</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    int MOD = (int) 1e9 + 7;
    public int countGoodStrings(int l, int h, int zero, int one) {
        int res = 0;
        var f = new long[h + 1];
        for (int i = 1; i &lt;= h; i ++ ) {
            if (i - zero &gt;= 0)
                f[i] = (f[i] + f[i - zero] + 1) % MOD;
            if (i - one &gt;= 0)
                f[i] = (f[i] + f[i - one] + 1) % MOD; 
        }
        return (int)(f[h] + MOD - f[l - 1]) % MOD;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ko={id:"problem-c-\u6811\u4E0A\u6700\u5927\u5F97\u5206\u548C\u8DEF\u5F84",tabindex:"-1"},Eo=e("a",{class:"header-anchor",href:"#problem-c-\u6811\u4E0A\u6700\u5927\u5F97\u5206\u548C\u8DEF\u5F84","aria-hidden":"true"},"#",-1),Ro=n(" Problem C - "),Fo={href:"https://leetcode.cn/problems/most-profitable-path-in-a-tree/",target:"_blank",rel:"noopener noreferrer"},Qo=n("\u6811\u4E0A\u6700\u5927\u5F97\u5206\u548C\u8DEF\u5F84"),Vo=l(`<p><strong>\u89E3\u6CD5\uFF1A\u679A\u4E3E&amp;dfs</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    int n;
    int[] bt, p, w;
    List&lt;Integer&gt;[] g;
    public void dfs1(int u, int fa) {
        for (var v : g[u]) {
            if (v == fa) continue;
            p[v] = u;
            dfs1(v, u);
        }
    }

    public int dfs2(int u, int fa, int t) {
        var val = 0;
        if (bt[u] == -1 || t &lt; bt[u]) val = w[u];
        else if (bt[u] == t) val = w[u] / 2;
        var mx = (int) -2e9;
        for (var v : g[u]) {
            if (v == fa) continue;
            mx = Math.max(mx, dfs2(v, u, t + 1));
        }
        if (mx == (int) -2e9) mx = 0;
        return mx + val;
    }

    public int mostProfitablePath(int[][] edges, int bob, int[] amount) {
        w = amount;
        n = amount.length;
        bt = new int[n];
        p = new int[n];
        g = new ArrayList[n];
        Arrays.setAll(g, e -&gt; new ArrayList&lt;&gt;());
        for (var e : edges) {
            int a = e[0], b = e[1];
            g[a].add(b);
            g[b].add(a);
        }
        //\u627E\u5230\u6BCF\u4E2A\u70B9\u7684\u7236\u8282\u70B9
        dfs1(0, -1);
        Arrays.fill(bt, -1);
        var t = 0;
        while (true) {
            bt[bob] = t;
            t ++ ;
            if (bob == 0) break;
            bob = p[bob];
        }
        return dfs2(0, -1, 0);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u94FE\u5F0F\u524D\u5411\u661F\u5EFA\u56FE</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    int n;
    int idx;
    int[] e, h, ne;
    int[] bt, p, w;
    public void add(int a, int b) {
        e[idx] = b;
        ne[idx] = h[a];
        h[a] = idx ++ ;
    }

    public void dfs1(int u, int fa) {
        for (var i = h[u]; i != -1; i = ne[i]) {
            var v = e[i];
            if (v == fa) continue;
            p[v] = u;
            dfs1(v, u);
        }
    }

    public int dfs2(int u, int fa, int t) {
        var val = 0;
        if (bt[u] == -1 || t &lt; bt[u]) val = w[u];
        else if (bt[u] == t) val = w[u] / 2;
        var mx = (int) -2e9;
        for (var i = h[u]; i != -1; i = ne[i]) {
            var v = e[i];
            if (v == fa) continue;
            mx = Math.max(mx, dfs2(v, u, t + 1));
        }
        if (mx == (int) -2e9) mx = 0;
        return mx + val;
    }

    public int mostProfitablePath(int[][] edges, int bob, int[] amount) {
        w = amount;
        n = amount.length;
        bt = new int[n];
        p = new int[n];
        e = new int[n * 2];
        ne = new int[n * 2];
        h = new int[n];
        Arrays.fill(h, -1);
        for (var e : edges) {
            int a = e[0], b = e[1];
            add(a, b);
            add(b, a);
        }
        //\u627E\u5230\u6BCF\u4E2A\u70B9\u7684\u7236\u8282\u70B9
        dfs1(0, -1);
        Arrays.fill(bt, -1);
        var t = 0;
        while (true) {
            bt[bob] = t;
            t ++ ;
            if (bob == 0) break;
            bob = p[bob];
        }
        return dfs2(0, -1, 0);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Wo={id:"problem-d-\u6839\u636E\u9650\u5236\u5206\u5272\u6D88\u606F",tabindex:"-1"},Go=e("a",{class:"header-anchor",href:"#problem-d-\u6839\u636E\u9650\u5236\u5206\u5272\u6D88\u606F","aria-hidden":"true"},"#",-1),Uo=n(" Problem D - "),Yo={href:"https://leetcode.cn/problems/split-message-based-on-limit/",target:"_blank",rel:"noopener noreferrer"},Xo=n("\u6839\u636E\u9650\u5236\u5206\u5272\u6D88\u606F"),Jo=e("p",null,[e("strong",null,"\u89E3\u6CD5\uFF1A\u679A\u4E3E & \u6A21\u62DF")],-1),Zo=e("h2",{id:"_319\u573A\u5468\u8D5B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_319\u573A\u5468\u8D5B","aria-hidden":"true"},"#"),n(" 319\u573A\u5468\u8D5B")],-1),$o={id:"problem-a-\u6E29\u5EA6\u8F6C\u6362",tabindex:"-1"},eu=e("a",{class:"header-anchor",href:"#problem-a-\u6E29\u5EA6\u8F6C\u6362","aria-hidden":"true"},"#",-1),nu=n(" Problem A - "),iu={href:"https://leetcode.cn/problems/convert-the-temperature/",target:"_blank",rel:"noopener noreferrer"},su=n("\u6E29\u5EA6\u8F6C\u6362"),lu=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public double[] convertTemperature(double celsius) {
        return new double[]{celsius + 273.15, celsius * 1.80 +};
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),du={id:"problem-b-\u6700\u5C0F\u516C\u500D\u6570\u4E3A-k-\u7684\u5B50\u6570\u7EC4\u6570\u76EE",tabindex:"-1"},ru=e("a",{class:"header-anchor",href:"#problem-b-\u6700\u5C0F\u516C\u500D\u6570\u4E3A-k-\u7684\u5B50\u6570\u7EC4\u6570\u76EE","aria-hidden":"true"},"#",-1),tu=n(" Problem B - "),au={href:"https://leetcode.cn/problems/number-of-subarrays-with-lcm-equal-to-k/",target:"_blank",rel:"noopener noreferrer"},vu=n("\u6700\u5C0F\u516C\u500D\u6570\u4E3A K \u7684\u5B50\u6570\u7EC4\u6570\u76EE"),cu=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    int gcd(int a, int b) {
        return b != 0 ? gcd(b, a % b) : a;
    }

    int lcm(int a, int b) {
        return a * b / gcd(a, b);
    }

    public int subarrayLCM(int[] nums, int k) {
        int n = nums.length, res = 0;
        for (int i = 0; i &lt; n; i ++ ) {
            for (int j = i, p = 1; j &lt; n; j ++ ) {
                p = lcm(p, nums[j]);
                if (k % p != 0) break; //\u526A\u679D\uFF0Clcm\u5FC5\u987B\u662Fk\u7684\u56E0\u5B50
                if (p == k) res ++ ;
            }
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ou={id:"problem-c-\u9010\u5C42\u6392\u5E8F\u4E8C\u53C9\u6811\u6240\u9700\u7684\u6700\u5C11\u64CD\u4F5C\u6570\u76EE",tabindex:"-1"},uu=e("a",{class:"header-anchor",href:"#problem-c-\u9010\u5C42\u6392\u5E8F\u4E8C\u53C9\u6811\u6240\u9700\u7684\u6700\u5C11\u64CD\u4F5C\u6570\u76EE","aria-hidden":"true"},"#",-1),mu=n(" Problem C - "),bu={href:"https://leetcode.cn/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/",target:"_blank",rel:"noopener noreferrer"},hu=n("\u9010\u5C42\u6392\u5E8F\u4E8C\u53C9\u6811\u6240\u9700\u7684\u6700\u5C11\u64CD\u4F5C\u6570\u76EE"),pu=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public void swap(int[] arr, int a, int b) {
        int t = arr[a];
        arr[a] = arr[b];
        arr[b] = t;
    }

    public int caclSortedNum(int[] a) {
        var map = new HashMap&lt;Integer, Integer&gt;();
        var b = a.clone();
        var n = a.length;
        var res = 0;
        Arrays.sort(b);
        for (int i = 0; i &lt; n; i ++ ) map.put(b[i], i);
        for (int i = 0; i &lt; n; i ++ ) {
            while (a[i] != b[i]) {
                swap(a, i, map.get(a[i]));
                res ++ ;
            }
        }
        return res;
    }

    public int minimumOperations(TreeNode root) {
        if (root == null) return 0;
        var q = new ArrayDeque&lt;TreeNode&gt;();
        var res = 0;
        q.add(root);
        while (!q.isEmpty()) {
            var size = q.size();
            while (size -- &gt; 0) {
                var cur = q.poll();
                if (cur.left != null) q.add(cur.left);
                if (cur.right != null) q.add(cur.right);
            }
            var temp = q.stream().mapToInt(x -&gt; x.val).toArray();
            res += caclSortedNum(temp);
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),gu={id:"problem-d-\u4E0D\u91CD\u53E0\u56DE\u6587\u5B50\u5B57\u7B26\u4E32\u7684\u6700\u5927\u6570\u76EE",tabindex:"-1"},_u=e("a",{class:"header-anchor",href:"#problem-d-\u4E0D\u91CD\u53E0\u56DE\u6587\u5B50\u5B57\u7B26\u4E32\u7684\u6700\u5927\u6570\u76EE","aria-hidden":"true"},"#",-1),fu=n(" Problem D - "),xu={href:"https://leetcode.cn/problems/maximum-number-of-non-overlapping-palindrome-substrings/",target:"_blank",rel:"noopener noreferrer"},ku=n("\u4E0D\u91CD\u53E0\u56DE\u6587\u5B50\u5B57\u7B26\u4E32\u7684\u6700\u5927\u6570\u76EE"),wu=l(`<p><strong>\u89E3\u6CD5\uFF1ADP&amp;\u4E2D\u5FC3\u6269\u5C55</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int maxPalindromes(String S, int k) {
        var s = S.toCharArray();
        var n = s.length;
        var f = new int[n + 1];
        for (var i = 0; i &lt; 2 * n - 1; i ++ ) {
            int l = i / 2, r = l + i % 2; // \u4E2D\u5FC3\u6269\u5C55\u6CD5
            f[l + 1] = Math.max(f[l + 1], f[l]);
            for (; l &gt;= 0 &amp;&amp; r &lt; n &amp;&amp; s[l] == s[r]; l -- , r ++ )
                if (r - l + 1 &gt;= k)
                    f[r + 1] = Math.max(f[r + 1], f[l] + 1);
        }
        return f[n];
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_320\u573A\u5468\u8D5B" tabindex="-1"><a class="header-anchor" href="#_320\u573A\u5468\u8D5B" aria-hidden="true">#</a> 320\u573A\u5468\u8D5B</h2>`,3),Su={id:"problem-a-\u6570\u7EC4\u4E2D\u4E0D\u7B49\u4E09\u5143\u7EC4\u7684\u6570\u76EE",tabindex:"-1"},yu=e("a",{class:"header-anchor",href:"#problem-a-\u6570\u7EC4\u4E2D\u4E0D\u7B49\u4E09\u5143\u7EC4\u7684\u6570\u76EE","aria-hidden":"true"},"#",-1),ju=n(" Problem A - "),qu={href:"https://leetcode.cn/problems/number-of-unequal-triplets-in-array/",target:"_blank",rel:"noopener noreferrer"},Au=n("\u6570\u7EC4\u4E2D\u4E0D\u7B49\u4E09\u5143\u7EC4\u7684\u6570\u76EE"),Pu=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int unequalTriplets(int[] nums) {
        var res = 0;
        var n = nums.length;
        for (var i = 0; i &lt; n; i ++ )
            for (var j = i + 1; j &lt; n; j ++ )
                for (var k = j + 1; k &lt; n; k ++ )
                    if (nums[i] != nums[j] &amp;&amp; nums[i] != nums[k] &amp;&amp; nums[j] != nums[k])
                        res ++ ;
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Iu={id:"problem-b-\u4E8C\u53C9\u641C\u7D22\u6811\u6700\u8FD1\u8282\u70B9\u67E5\u8BE2",tabindex:"-1"},Mu=e("a",{class:"header-anchor",href:"#problem-b-\u4E8C\u53C9\u641C\u7D22\u6811\u6700\u8FD1\u8282\u70B9\u67E5\u8BE2","aria-hidden":"true"},"#",-1),Lu=n(" Problem B - "),Tu={href:"https://leetcode.cn/problems/closest-nodes-queries-in-a-binary-search-tree/",target:"_blank",rel:"noopener noreferrer"},Cu=n("\u4E8C\u53C9\u641C\u7D22\u6811\u6700\u8FD1\u8282\u70B9\u67E5\u8BE2"),Du=l(`<p><strong>\u89E3\u6CD5\uFF1A\u4E8C\u5206</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    List&lt;Integer&gt; arr;
    public void dfs(TreeNode root) {
        if (root == null) return;
        dfs(root.left);
        arr.add(root.val);
        dfs(root.right);
    }
    public List&lt;List&lt;Integer&gt;&gt; closestNodes(TreeNode root, List&lt;Integer&gt; queries) {
        arr = new ArrayList&lt;&gt;();
        dfs(root);
        var res = new ArrayList&lt;List&lt;Integer&gt;&gt;();
        for (var q : queries) {
            int l = 0, r = arr.size() - 1;
            var tem = new ArrayList&lt;Integer&gt;();
            while (l &lt; r) {
                var mid = l + r + 1 &gt;&gt; 1;
                if (arr.get(mid) &lt;= q) l = mid;
                else r = mid - 1;
            }
            if (arr.get(l) &lt;= q) tem.add(arr.get(l));
            else tem.add(-1);
            l = 0;
            r = arr.size() - 1;
            while (l &lt; r) {
                var mid = l + r &gt;&gt; 1;
                if (arr.get(mid) &gt;= q) r = mid;
                else l = mid + 1;
            }
            if (arr.get(r) &gt;= q) tem.add(arr.get(r));
            else tem.add(-1);
            res.add(tem);
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u89E3\u6CD5\uFF1A\u4E8C\u53C9\u641C\u7D22\u6811</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    TreeSet&lt;Integer&gt; set;
    public void dfs(TreeNode root) {
        if (root == null) return;
        dfs(root.left);
        set.add(root.val);
        dfs(root.right);
    }
    public List&lt;List&lt;Integer&gt;&gt; closestNodes(TreeNode root, List&lt;Integer&gt; queries) {
        set = new TreeSet&lt;&gt;();
        dfs(root);
        var res = new ArrayList&lt;List&lt;Integer&gt;&gt;();
        for (var q : queries) {
            var t = new ArrayList&lt;Integer&gt;();
            t.add(set.floor(q) == null ? -1 : set.floor(q));
            t.add(set.ceiling(q) == null ? -1 : set.ceiling(q));
            res.add(t);
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Nu={id:"problem-c-\u5230\u8FBE\u9996\u90FD\u7684\u6700\u5C11\u6CB9\u8017",tabindex:"-1"},Bu=e("a",{class:"header-anchor",href:"#problem-c-\u5230\u8FBE\u9996\u90FD\u7684\u6700\u5C11\u6CB9\u8017","aria-hidden":"true"},"#",-1),zu=n(" Problem C - "),Ou={href:"https://leetcode.cn/problems/minimum-fuel-cost-to-report-to-the-capital/",target:"_blank",rel:"noopener noreferrer"},Hu=n("\u5230\u8FBE\u9996\u90FD\u7684\u6700\u5C11\u6CB9\u8017"),Ku=l(`<p><strong>\u89E3\u6CD5\uFF1A\u8D2A\u5FC3</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    int seats;
    long res = 0l;
    List&lt;Integer&gt;[] g;

    public int dfs(int x, int fa) {
        var size = 1;
        for (var p : g[x])
            if (p != fa)
                size += dfs(p, x);
        if (x != 0)
            res += (size + seats - 1) / seats;
        return size;
    }

    public long minimumFuelCost(int[][] roads, int _seats) {
        var n = roads.length + 1;
        g = new List[n];
        seats = _seats;
        Arrays.setAll(g, e -&gt; new ArrayList&lt;&gt;());
        for (var road : roads) {
            int a = road[0], b = road[1];
            g[a].add(b);
            g[b].add(a);
        }
        dfs(0, -1);
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Eu={id:"problem-d-\u5B8C\u7F8E\u5206\u5272\u7684\u65B9\u6848\u6570",tabindex:"-1"},Ru=e("a",{class:"header-anchor",href:"#problem-d-\u5B8C\u7F8E\u5206\u5272\u7684\u65B9\u6848\u6570","aria-hidden":"true"},"#",-1),Fu=n(" Problem D - "),Qu={href:"https://leetcode.cn/problems/number-of-beautiful-partitions/",target:"_blank",rel:"noopener noreferrer"},Vu=n("\u5B8C\u7F8E\u5206\u5272\u7684\u65B9\u6848\u6570"),Wu=e("p",null,[e("strong",null,"\u89E3\u6CD5\uFF1Adp")],-1);function Gu(Uu,Yu){const i=a("ExternalLinkIcon");return r(),t("div",null,[c,e("h4",o,[u,m,e("a",b,[h,s(i)])]),p,e("h4",g,[_,f,e("a",x,[k,s(i)])]),w,e("h4",S,[y,j,e("a",q,[A,s(i)])]),P,e("h4",I,[M,L,e("a",T,[C,s(i)])]),D,N,e("h4",B,[z,O,e("a",H,[K,s(i)])]),E,e("h4",R,[F,Q,e("a",V,[W,s(i)])]),G,e("h4",U,[Y,X,e("a",J,[Z,s(i)])]),$,e("h4",ee,[ne,ie,e("a",se,[le,s(i)])]),de,re,e("h4",te,[ae,ve,e("a",ce,[oe,s(i)])]),ue,e("h4",me,[be,he,e("a",pe,[ge,s(i)])]),_e,e("h4",fe,[xe,ke,e("a",we,[Se,s(i)])]),ye,e("h4",je,[qe,Ae,e("a",Pe,[Ie,s(i)])]),Me,e("h4",Le,[Te,Ce,e("a",De,[Ne,s(i)])]),Be,e("h4",ze,[Oe,He,e("a",Ke,[Ee,s(i)])]),Re,e("h4",Fe,[Qe,Ve,e("a",We,[Ge,s(i)])]),Ue,e("h4",Ye,[Xe,Je,e("a",Ze,[$e,s(i)])]),en,nn,e("h4",sn,[ln,dn,e("a",rn,[tn,s(i)])]),an,e("h4",vn,[cn,on,e("a",un,[mn,s(i)])]),bn,e("h4",hn,[pn,gn,e("a",_n,[fn,s(i)])]),xn,e("h4",kn,[wn,Sn,e("a",yn,[jn,s(i)])]),qn,e("h4",An,[Pn,In,e("a",Mn,[Ln,s(i)])]),Tn,e("h4",Cn,[Dn,Nn,e("a",Bn,[zn,s(i)])]),On,e("h4",Hn,[Kn,En,e("a",Rn,[Fn,s(i)])]),Qn,e("h4",Vn,[Wn,Gn,e("a",Un,[Yn,s(i)])]),Xn,e("h4",Jn,[Zn,$n,e("a",ei,[ni,s(i)])]),ii,e("h4",si,[li,di,e("a",ri,[ti,s(i)])]),ai,e("h4",vi,[ci,oi,e("a",ui,[mi,s(i)])]),bi,e("h4",hi,[pi,gi,e("a",_i,[fi,s(i)])]),xi,e("h4",ki,[wi,Si,e("a",yi,[ji,s(i)])]),qi,e("h4",Ai,[Pi,Ii,e("a",Mi,[Li,s(i)])]),Ti,e("h4",Ci,[Di,Ni,e("a",Bi,[zi,s(i)])]),Oi,e("h4",Hi,[Ki,Ei,e("a",Ri,[Fi,s(i)])]),Qi,e("h4",Vi,[Wi,Gi,e("a",Ui,[Yi,s(i)])]),Xi,e("h4",Ji,[Zi,$i,e("a",es,[ns,s(i)])]),is,e("h4",ss,[ls,ds,e("a",rs,[ts,s(i)])]),as,e("h4",vs,[cs,os,e("a",us,[ms,s(i)])]),bs,hs,e("h4",ps,[gs,_s,e("a",fs,[xs,s(i)])]),ks,e("h4",ws,[Ss,ys,e("a",js,[qs,s(i)])]),As,e("h4",Ps,[Is,Ms,e("a",Ls,[Ts,s(i)])]),Cs,e("h4",Ds,[Ns,Bs,e("a",zs,[Os,s(i)])]),Hs,Ks,e("h4",Es,[Rs,Fs,e("a",Qs,[Vs,s(i)])]),Ws,e("h4",Gs,[Us,Ys,e("a",Xs,[Js,s(i)])]),Zs,e("h4",$s,[el,nl,e("a",il,[sl,s(i)])]),ll,e("h4",dl,[rl,tl,e("a",al,[vl,s(i)])]),cl,ol,e("h4",ul,[ml,bl,e("a",hl,[pl,s(i)])]),gl,e("h4",_l,[fl,xl,e("a",kl,[wl,s(i)])]),Sl,e("h4",yl,[jl,ql,e("a",Al,[Pl,s(i)])]),Il,e("h4",Ml,[Ll,Tl,e("a",Cl,[Dl,s(i)])]),Nl,e("h4",Bl,[zl,Ol,e("a",Hl,[Kl,s(i)])]),El,e("h4",Rl,[Fl,Ql,e("a",Vl,[Wl,s(i)])]),Gl,e("h4",Ul,[Yl,Xl,e("a",Jl,[Zl,s(i)])]),$l,e("h4",ed,[nd,id,e("a",sd,[ld,s(i)])]),dd,rd,e("h4",td,[ad,vd,e("a",cd,[od,s(i)])]),ud,e("h4",md,[bd,hd,e("a",pd,[gd,s(i)])]),_d,e("h4",fd,[xd,kd,e("a",wd,[Sd,s(i)])]),yd,e("h4",jd,[qd,Ad,e("a",Pd,[Id,s(i)])]),Md,Ld,e("h4",Td,[Cd,Dd,e("a",Nd,[Bd,s(i)])]),zd,e("h4",Od,[Hd,Kd,e("a",Ed,[Rd,s(i)])]),Fd,e("h4",Qd,[Vd,Wd,e("a",Gd,[Ud,s(i)])]),Yd,e("h4",Xd,[Jd,Zd,e("a",$d,[er,s(i)])]),nr,ir,e("h4",sr,[lr,dr,e("a",rr,[tr,s(i)])]),ar,e("h4",vr,[cr,or,e("a",ur,[mr,s(i)])]),br,e("h4",hr,[pr,gr,e("a",_r,[fr,s(i)])]),xr,e("h4",kr,[wr,Sr,e("a",yr,[jr,s(i)])]),qr,e("h4",Ar,[Pr,Ir,e("a",Mr,[Lr,s(i)])]),Tr,e("h4",Cr,[Dr,Nr,e("a",Br,[zr,s(i)])]),Or,e("h4",Hr,[Kr,Er,e("a",Rr,[Fr,s(i)])]),Qr,e("h4",Vr,[Wr,Gr,e("a",Ur,[Yr,s(i)])]),Xr,e("h4",Jr,[Zr,$r,e("a",et,[nt,s(i)])]),it,e("h4",st,[lt,dt,e("a",rt,[tt,s(i)])]),at,e("h4",vt,[ct,ot,e("a",ut,[mt,s(i)])]),bt,e("h4",ht,[pt,gt,e("a",_t,[ft,s(i)])]),xt,kt,e("h4",wt,[St,yt,e("a",jt,[qt,s(i)])]),At,e("h4",Pt,[It,Mt,e("a",Lt,[Tt,s(i)])]),Ct,e("h4",Dt,[Nt,Bt,e("a",zt,[Ot,s(i)])]),Ht,e("h4",Kt,[Et,Rt,e("a",Ft,[Qt,s(i)])]),Vt,Wt,e("h4",Gt,[Ut,Yt,e("a",Xt,[Jt,s(i)])]),Zt,e("h4",$t,[ea,na,e("a",ia,[sa,s(i)])]),la,e("h4",da,[ra,ta,e("a",aa,[va,s(i)])]),ca,e("h4",oa,[ua,ma,e("a",ba,[ha,s(i)])]),pa,e("h4",ga,[_a,fa,e("a",xa,[ka,s(i)])]),wa,e("h4",Sa,[ya,ja,e("a",qa,[Aa,s(i)])]),Pa,e("h4",Ia,[Ma,La,e("a",Ta,[Ca,s(i)])]),Da,e("h4",Na,[Ba,za,e("a",Oa,[Ha,s(i)])]),Ka,Ea,e("h4",Ra,[Fa,Qa,e("a",Va,[Wa,s(i)])]),Ga,e("h4",Ua,[Ya,Xa,e("a",Ja,[Za,s(i)])]),$a,e("h4",ev,[nv,iv,e("a",sv,[lv,s(i)])]),dv,e("h4",rv,[tv,av,e("a",vv,[cv,s(i)])]),ov,uv,e("h4",mv,[bv,hv,e("a",pv,[gv,s(i)])]),_v,e("h4",fv,[xv,kv,e("a",wv,[Sv,s(i)])]),yv,e("h4",jv,[qv,Av,e("a",Pv,[Iv,s(i)])]),Mv,e("h4",Lv,[Tv,Cv,e("a",Dv,[Nv,s(i)])]),Bv,e("h4",zv,[Ov,Hv,e("a",Kv,[Ev,s(i)])]),Rv,e("h4",Fv,[Qv,Vv,e("a",Wv,[Gv,s(i)])]),Uv,e("h4",Yv,[Xv,Jv,e("a",Zv,[$v,s(i)])]),ec,e("h4",nc,[ic,sc,e("a",lc,[dc,s(i)])]),rc,e("h4",tc,[ac,vc,e("a",cc,[oc,s(i)])]),uc,e("h4",mc,[bc,hc,e("a",pc,[gc,s(i)])]),_c,e("h4",fc,[xc,kc,e("a",wc,[Sc,s(i)])]),yc,e("h4",jc,[qc,Ac,e("a",Pc,[Ic,s(i)])]),Mc,e("h4",Lc,[Tc,Cc,e("a",Dc,[Nc,s(i)])]),Bc,e("h4",zc,[Oc,Hc,e("a",Kc,[Ec,s(i)])]),Rc,e("h4",Fc,[Qc,Vc,e("a",Wc,[Gc,s(i)])]),Uc,e("h4",Yc,[Xc,Jc,e("a",Zc,[$c,s(i)])]),eo,no,e("h4",io,[so,lo,e("a",ro,[to,s(i)])]),ao,e("h4",vo,[co,oo,e("a",uo,[mo,s(i)])]),bo,e("h4",ho,[po,go,e("a",_o,[fo,s(i)])]),xo,e("h4",ko,[wo,So,e("a",yo,[jo,s(i)])]),qo,Ao,e("h4",Po,[Io,Mo,e("a",Lo,[To,s(i)])]),Co,e("h4",Do,[No,Bo,e("a",zo,[Oo,s(i)])]),Ho,e("h4",Ko,[Eo,Ro,e("a",Fo,[Qo,s(i)])]),Vo,e("h4",Wo,[Go,Uo,e("a",Yo,[Xo,s(i)])]),Jo,Zo,e("h4",$o,[eu,nu,e("a",iu,[su,s(i)])]),lu,e("h4",du,[ru,tu,e("a",au,[vu,s(i)])]),cu,e("h4",ou,[uu,mu,e("a",bu,[hu,s(i)])]),pu,e("h4",gu,[_u,fu,e("a",xu,[ku,s(i)])]),wu,e("h4",Su,[yu,ju,e("a",qu,[Au,s(i)])]),Pu,e("h4",Iu,[Mu,Lu,e("a",Tu,[Cu,s(i)])]),Du,e("h4",Nu,[Bu,zu,e("a",Ou,[Hu,s(i)])]),Ku,e("h4",Eu,[Ru,Fu,e("a",Qu,[Vu,s(i)])]),Wu])}var Zu=d(v,[["render",Gu],["__file","article2.html.vue"]]);export{Zu as default};
