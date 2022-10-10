import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,c as o,a as e,b as r,d as n,e as s,r as d}from"./app.a2846b5d.js";const a={},c={id:"_235-\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#_235-\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148","aria-hidden":"true"},"#",-1),u=n(),m={href:"https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/",target:"_blank",rel:"noopener noreferrer"},b=n("235. \u4E8C\u53C9\u641C\u7D22\u6811\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148"),p=s(`<p><strong>\u89E3\u6CD5\uFF1A\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null) return null;
        if (p.val &gt; root.val &amp;&amp; q.val &gt; root.val)
            return lowestCommonAncestor(root.right, p, q);
        if (p.val &lt; root.val &amp;&amp; q.val &lt; root.val)
            return lowestCommonAncestor(root.left, p, q);
        return root;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),_={id:"_701-\u4E8C\u53C9\u641C\u7D22\u6811\u4E2D\u7684\u63D2\u5165\u64CD\u4F5C",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#_701-\u4E8C\u53C9\u641C\u7D22\u6811\u4E2D\u7684\u63D2\u5165\u64CD\u4F5C","aria-hidden":"true"},"#",-1),f=n(),g={href:"https://leetcode.cn/problems/insert-into-a-binary-search-tree/",target:"_blank",rel:"noopener noreferrer"},x=n("701. \u4E8C\u53C9\u641C\u7D22\u6811\u4E2D\u7684\u63D2\u5165\u64CD\u4F5C"),T=s(`<p><strong>\u89E3\u6CD5\uFF1A\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public TreeNode insertIntoBST(TreeNode root, int val) {
        if (root == null) return new TreeNode(val);
        if (val &lt; root.val) root.left = insertIntoBST(root.left, val);
        else root.right = insertIntoBST(root.right, val);
        return root;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),N={id:"_105-\u4ECE\u524D\u5E8F\u4E0E\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217\u6784\u9020\u4E8C\u53C9\u6811",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#_105-\u4ECE\u524D\u5E8F\u4E0E\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217\u6784\u9020\u4E8C\u53C9\u6811","aria-hidden":"true"},"#",-1),S=n(),I={href:"https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",target:"_blank",rel:"noopener noreferrer"},w=n("105. \u4ECE\u524D\u5E8F\u4E0E\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217\u6784\u9020\u4E8C\u53C9\u6811"),B=s(`<p><strong>\u89E3\u6CD5\uFF1A\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public Map&lt;Integer, Integer&gt; map = new HashMap&lt;&gt;();
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        int n = preorder.length;
        for (int i = 0; i &lt; n; i ++ ) {
            map.put(inorder[i], i);
        }
        return dfs(preorder, inorder, 0, n - 1, 0, n - 1);
    }
    public TreeNode dfs(int[] pre, int[] in, int pl, int pr, int il, int ir) {
        int k = map.get(pre[pl]) - il;
        TreeNode root = new TreeNode(pre[pl]);
        root.left = dfs(pre, in, pl + 1, pl + k, il, il + k - 1);
        root.right = dfs(pre, in, pl + k + 1, pr, il + k + 1, ir);
        return root;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),V={id:"_98-\u9A8C\u8BC1\u4E8C\u53C9\u641C\u7D22\u6811",tabindex:"-1"},q=e("a",{class:"header-anchor",href:"#_98-\u9A8C\u8BC1\u4E8C\u53C9\u641C\u7D22\u6811","aria-hidden":"true"},"#",-1),y=n(),A={href:"https://leetcode.cn/problems/validate-binary-search-tree/",target:"_blank",rel:"noopener noreferrer"},C=n("98. \u9A8C\u8BC1\u4E8C\u53C9\u641C\u7D22\u6811"),E=s(`<p><strong>\u89E3\u6CD5\uFF1A\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    long pre = Long.MIN_VALUE;
    public boolean isValidBST(TreeNode root) {
        return dfs(root);
    }
    public boolean dfs(TreeNode root) {
        if (root == null) return true;
        boolean l = dfs(root.left);
        if (root.val &lt;= pre) return false;
        pre = root.val;
        boolean r = dfs(root.right);
        return l &amp;&amp; r;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function L(M,H){const i=d("ExternalLinkIcon");return l(),o("div",null,[e("h3",c,[v,u,e("a",m,[b,r(i)])]),p,e("h3",_,[h,f,e("a",g,[x,r(i)])]),T,e("h3",N,[k,S,e("a",I,[w,r(i)])]),B,e("h3",V,[q,y,e("a",A,[C,r(i)])]),E])}var z=t(a,[["render",L],["__file","815-816.html.vue"]]);export{z as default};
