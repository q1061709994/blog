import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c as t,a as e,b as s,d as n,e as r,r as a}from"./app.a2846b5d.js";const o={},v={id:"_102-\u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#_102-\u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386","aria-hidden":"true"},"#",-1),u=n(),m={href:"https://leetcode.cn/problems/binary-tree-level-order-traversal/",target:"_blank",rel:"noopener noreferrer"},b=n("102. \u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386"),g=r(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public List&lt;List&lt;Integer&gt;&gt; levelOrder(TreeNode root) {
        List&lt;List&lt;Integer&gt;&gt; res = new ArrayList&lt;&gt;();
        ArrayDeque&lt;TreeNode&gt; q = new ArrayDeque&lt;&gt;();
        if (root != null) q.add(root);
        while (!q.isEmpty()) {
            int num = q.size();
            List&lt;Integer&gt; tem = new ArrayList&lt;&gt;();
            while (num -- &gt; 0) {
                root = q.poll();
                tem.add(root.val);
                if (root.left != null) q.add(root.left);
                if (root.right != null) q.add(root.right);
            }
            res.add(tem);
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h={id:"_94-\u4E8C\u53C9\u6811\u7684\u4E2D\u5E8F\u904D\u5386",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#_94-\u4E8C\u53C9\u6811\u7684\u4E2D\u5E8F\u904D\u5386","aria-hidden":"true"},"#",-1),p=n(),f={href:"https://leetcode.cn/problems/binary-tree-inorder-traversal/",target:"_blank",rel:"noopener noreferrer"},x=n("94. \u4E8C\u53C9\u6811\u7684\u4E2D\u5E8F\u904D\u5386"),L=r(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    List&lt;Integer&gt; res = new ArrayList&lt;&gt;();
    public List&lt;Integer&gt; inorderTraversal(TreeNode root) {
        dfs(root);
        return res;
    }
    public void dfs(TreeNode root) {
        if (root == null) return;
        dfs(root.left);
        res.add(root.val);
        dfs(root.right);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public List&lt;Integer&gt; inorderTraversal(TreeNode root) {
        List&lt;Integer&gt; res = new ArrayList&lt;&gt;();
        ArrayDeque&lt;TreeNode&gt; s = new ArrayDeque();
        while (!s.isEmpty() || root != null) {
            while (root != null) {
                s.push(root);
                root = root.left;
            }
            root = s.pop();
            res.add(root.val);
            root = root.right;
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),y={id:"_144-\u4E8C\u53C9\u6811\u7684\u524D\u5E8F\u904D\u5386",tabindex:"-1"},T=e("a",{class:"header-anchor",href:"#_144-\u4E8C\u53C9\u6811\u7684\u524D\u5E8F\u904D\u5386","aria-hidden":"true"},"#",-1),w=n(),N={href:"https://leetcode.cn/problems/binary-tree-preorder-traversal/",target:"_blank",rel:"noopener noreferrer"},I=n("144. \u4E8C\u53C9\u6811\u7684\u524D\u5E8F\u904D\u5386"),A=r(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    List&lt;Integer&gt; res = new ArrayList&lt;&gt;();
    public List&lt;Integer&gt; preorderTraversal(TreeNode root) {
        dfs(root);
        return res;
    }
    public void dfs(TreeNode root) {
        if (root == null) return;
        res.add(root.val);
        dfs(root.left);
        dfs(root.right);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public List&lt;Integer&gt; preorderTraversal(TreeNode root) {
        List&lt;Integer&gt; res = new ArrayList&lt;&gt;();
        ArrayDeque&lt;TreeNode&gt; s = new ArrayDeque();
        while (!s.isEmpty() || root != null) {
            while (root != null) {
                res.add(root.val);
                s.push(root);
                root = root.left;
            }
            root = s.pop().right;
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),q={id:"_145-\u4E8C\u53C9\u6811\u7684\u540E\u5E8F\u904D\u5386",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#_145-\u4E8C\u53C9\u6811\u7684\u540E\u5E8F\u904D\u5386","aria-hidden":"true"},"#",-1),D=n(),S={href:"https://leetcode.cn/problems/binary-tree-postorder-traversal/",target:"_blank",rel:"noopener noreferrer"},E=n("145. \u4E8C\u53C9\u6811\u7684\u540E\u5E8F\u904D\u5386"),V=r(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    List&lt;Integer&gt; res = new ArrayList&lt;&gt;();
    public List&lt;Integer&gt; postorderTraversal(TreeNode root) {
        dfs(root);
        return res;
    }
    public void dfs(TreeNode root) {
        if (root == null) return;
        dfs(root.left);
        dfs(root.right);
        res.add(root.val);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public List&lt;Integer&gt; postorderTraversal(TreeNode root) {
        List&lt;Integer&gt; res = new ArrayList&lt;&gt;();
        ArrayDeque&lt;TreeNode&gt; s = new ArrayDeque();
        while (!s.isEmpty() || root != null) {
            while (root != null) {
                res.add(root.val);
                s.push(root);
                root = root.right;
            }
            root = s.pop().left;
        }
        Collections.reverse(res);
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function B(C,z){const i=a("ExternalLinkIcon");return d(),t("div",null,[e("h2",v,[c,u,e("a",m,[b,s(i)])]),g,e("h2",h,[_,p,e("a",f,[x,s(i)])]),L,e("h2",y,[T,w,e("a",N,[I,s(i)])]),A,e("h2",q,[k,D,e("a",S,[E,s(i)])]),V])}var F=l(o,[["render",B],["__file","806-809.html.vue"]]);export{F as default};
