import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c as l,a as e,b as r,d as n,e as t,r as o}from"./app.a69613ae.js";const a={},c={id:"_226-\u7FFB\u8F6C\u4E8C\u53C9\u6811",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#_226-\u7FFB\u8F6C\u4E8C\u53C9\u6811","aria-hidden":"true"},"#",-1),u=n(),m={href:"https://leetcode.cn/problems/invert-binary-tree/",target:"_blank",rel:"noopener noreferrer"},b=n("226. \u7FFB\u8F6C\u4E8C\u53C9\u6811"),_=t(`<p><strong>\u89E3\u6CD5\uFF1A\u6DF1\u641C</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public TreeNode invertTree(TreeNode root) {
        if (root == null) return null;
        TreeNode l = invertTree(root.left), r = invertTree(root.right);
        TreeNode temp = l;
        root.left = r;
        root.right = temp;
        return root;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),h={id:"_114-\u4E8C\u53C9\u6811\u5C55\u5F00\u4E3A\u94FE\u8868",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#_114-\u4E8C\u53C9\u6811\u5C55\u5F00\u4E3A\u94FE\u8868","aria-hidden":"true"},"#",-1),f=n(),g={href:"https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/",target:"_blank",rel:"noopener noreferrer"},x=n("114. \u4E8C\u53C9\u6811\u5C55\u5F00\u4E3A\u94FE\u8868"),N=t(`<p><strong>\u89E3\u6CD5\uFF1A\u6DF1\u641C</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    TreeNode t = null;
    public void flatten(TreeNode root) {
        if (root == null) return;
        flatten(root.right);
        flatten(root.left);
        root.right = t;
        root.left = null;
        t = root;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),T={id:"_116-\u586B\u5145\u6BCF\u4E2A\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u53F3\u4FA7\u8282\u70B9\u6307\u9488",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#_116-\u586B\u5145\u6BCF\u4E2A\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u53F3\u4FA7\u8282\u70B9\u6307\u9488","aria-hidden":"true"},"#",-1),S=n(),y={href:"https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/",target:"_blank",rel:"noopener noreferrer"},B=n("116. \u586B\u5145\u6BCF\u4E2A\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u53F3\u4FA7\u8282\u70B9\u6307\u9488"),V=t(`<p><strong>\u89E3\u6CD5\uFF1A\u6DF1\u641C</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public Node connect(Node root) {
        if (root == null || root.right == null) return root;
        root.left.next = root.right;
        if (root.next != null) root.right.next = root.next.left;
        connect(root.left);
        connect(root.right);
        return root;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),E={id:"_654-\u6700\u5927\u4E8C\u53C9\u6811",tabindex:"-1"},I=e("a",{class:"header-anchor",href:"#_654-\u6700\u5927\u4E8C\u53C9\u6811","aria-hidden":"true"},"#",-1),L=n(),w={href:"https://leetcode.cn/problems/maximum-binary-tree/",target:"_blank",rel:"noopener noreferrer"},C=n("654. \u6700\u5927\u4E8C\u53C9\u6811"),M=t(`<p><strong>\u89E3\u6CD5\uFF1A\u6DF1\u641C</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public TreeNode constructMaximumBinaryTree(int[] nums) {
        return dfs(nums, 0, nums.length - 1);
    }
    public TreeNode dfs(int[] nums, int l, int r) {
        if (l &gt; r) return null;
        int index = l, max = 0;
        for (int i = l; i &lt;= r; i ++ ) {
            if (max &lt; nums[i]) {
                max = nums[i];
                index = i;
            }
        }
        TreeNode root = new TreeNode(nums[index]);
        root.left = dfs(nums, l, index - 1);
        root.right = dfs(nums, index + 1, r);
        return root;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function j(q,z){const i=o("ExternalLinkIcon");return d(),l("div",null,[e("h3",c,[v,u,e("a",m,[b,r(i)])]),_,e("h3",h,[p,f,e("a",g,[x,r(i)])]),N,e("h3",T,[k,S,e("a",y,[B,r(i)])]),V,e("h3",E,[I,L,e("a",w,[C,r(i)])]),M])}var F=s(a,[["render",j],["__file","810-811.html.vue"]]);export{F as default};
