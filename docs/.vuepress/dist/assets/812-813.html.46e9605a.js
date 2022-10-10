import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c as l,a as e,b as r,d as n,e as s,r as o}from"./app.37ebd3ca.js";const a={},c={id:"\u5251\u6307-offer-55-i-\u4E8C\u53C9\u6811\u7684\u6DF1\u5EA6",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#\u5251\u6307-offer-55-i-\u4E8C\u53C9\u6811\u7684\u6DF1\u5EA6","aria-hidden":"true"},"#",-1),v=n(),m={href:"https://leetcode.cn/problems/er-cha-shu-de-shen-du-lcof/",target:"_blank",rel:"noopener noreferrer"},b=n("\u5251\u6307 Offer 55 - I. \u4E8C\u53C9\u6811\u7684\u6DF1\u5EA6"),h=s(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    int res = 0;
    public int maxDepth(TreeNode root) {
        dfs(root, 0);
        return res;
    }
    public void dfs(TreeNode root, int depth) {
        res = Math.max(res, depth);
        if (root == null) return;
        dfs(root.left, depth + 1);
        dfs(root.right, depth + 1);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),p={id:"_112-\u8DEF\u5F84\u603B\u548C",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#_112-\u8DEF\u5F84\u603B\u548C","aria-hidden":"true"},"#",-1),f=n(),g={href:"https://leetcode.cn/problems/path-sum/",target:"_blank",rel:"noopener noreferrer"},x=n("112. \u8DEF\u5F84\u603B\u548C"),N=s(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {
        return dfs(root, targetSum);
    }
    public boolean dfs(TreeNode root, int target) {
        if (root == null) return false;
        if (root.left == null &amp;&amp; root.right == null &amp;&amp; target == root.val)
            return true;
        return dfs(root.left, target - root.val) || dfs(root.right, target - root.val);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),T={id:"\u5251\u6307-offer-68-ii-\u4E8C\u53C9\u6811\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148",tabindex:"-1"},S=e("a",{class:"header-anchor",href:"#\u5251\u6307-offer-68-ii-\u4E8C\u53C9\u6811\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148","aria-hidden":"true"},"#",-1),k=n(),q={href:"https://leetcode.cn/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/",target:"_blank",rel:"noopener noreferrer"},w=n("\u5251\u6307 Offer 68 - II. \u4E8C\u53C9\u6811\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148"),I=s(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null) return null;
        if (root == p || root == q) return root;
        TreeNode l = lowestCommonAncestor(root.left, p, q);
        TreeNode r = lowestCommonAncestor(root.right, p, q);
        if (l != null &amp;&amp; r != null) return root;
        if (l == null) return r;
        else return l;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),B={id:"_652-\u5BFB\u627E\u91CD\u590D\u7684\u5B50\u6811",tabindex:"-1"},L=e("a",{class:"header-anchor",href:"#_652-\u5BFB\u627E\u91CD\u590D\u7684\u5B50\u6811","aria-hidden":"true"},"#",-1),M=n(),A={href:"https://leetcode.cn/problems/find-duplicate-subtrees/",target:"_blank",rel:"noopener noreferrer"},C=n("652. \u5BFB\u627E\u91CD\u590D\u7684\u5B50\u6811"),O=s(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    Map&lt;String, Integer&gt; map = new HashMap&lt;&gt;();
    List&lt;TreeNode&gt; res = new ArrayList&lt;&gt;();
    public List&lt;TreeNode&gt; findDuplicateSubtrees(TreeNode root) {
        dfs(root);
        return res;
    }
    public String dfs(TreeNode root) {
        if (root == null) return &quot;&quot;;
        StringBuilder sb = new StringBuilder();
        sb.append(root.val).append(&quot;,&quot;);
        sb.append(dfs(root.left)).append(&quot;,&quot;);
        sb.append(dfs(root.right));
        String x = sb.toString();
        map.put(x, map.getOrDefault(x, 0) + 1);
        if (map.get(x) == 2) res.add(root);
        return x;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),V={id:"\u5251\u6307-offer-07-\u91CD\u5EFA\u4E8C\u53C9\u6811",tabindex:"-1"},z=e("a",{class:"header-anchor",href:"#\u5251\u6307-offer-07-\u91CD\u5EFA\u4E8C\u53C9\u6811","aria-hidden":"true"},"#",-1),D=n(),E={href:"https://leetcode.cn/problems/zhong-jian-er-cha-shu-lcof/",target:"_blank",rel:"noopener noreferrer"},j=n("\u5251\u6307 Offer 07. \u91CD\u5EFA\u4E8C\u53C9\u6811"),H=s(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    Map&lt;Integer, Integer&gt; map = new HashMap&lt;&gt;();
    public TreeNode buildTree(int[] pre, int[] in) {
        for (int i = 0; i &lt; in.length; i ++ ) 
            map.put(in[i], i);
        return dfs(pre, in, 0, pre.length - 1, 0, in.length - 1);
    }
    public TreeNode dfs(int[] pre, int[] in, int pl, int pr, int il, int ir) {
        if (pl &gt; pr) return null;
        int k = map.get(pre[pl]) - il;
        TreeNode root = new TreeNode(pre[pl]);
        root.left = dfs(pre, in, pl + 1, pl + k, il, il + k - 1);
        root.right = dfs(pre, in, pl + k + 1, pr, il + k + 1, ir);
        return root;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function y(P,F){const i=o("ExternalLinkIcon");return d(),l("div",null,[e("h3",c,[u,v,e("a",m,[b,r(i)])]),h,e("h3",p,[_,f,e("a",g,[x,r(i)])]),N,e("h3",T,[S,k,e("a",q,[w,r(i)])]),I,e("h3",B,[L,M,e("a",A,[C,r(i)])]),O,e("h3",V,[z,D,e("a",E,[j,r(i)])]),H])}var K=t(a,[["render",y],["__file","812-813.html.vue"]]);export{K as default};
