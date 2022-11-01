import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as a,a as e,b as s,d as n,e as l,r as v}from"./app.c628af9c.js";const t={},u={id:"_225-\u7528\u961F\u5217\u5B9E\u73B0\u6808",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#_225-\u7528\u961F\u5217\u5B9E\u73B0\u6808","aria-hidden":"true"},"#",-1),b=n(),m={href:"https://leetcode.cn/problems/implement-stack-using-queues/",target:"_blank",rel:"noopener noreferrer"},o=n("225. \u7528\u961F\u5217\u5B9E\u73B0\u6808"),p=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class MyStack {
    ArrayDeque&lt;Integer&gt; q1 = new ArrayDeque&lt;&gt;();
    ArrayDeque&lt;Integer&gt; q2 = new ArrayDeque&lt;&gt;();
    public MyStack() {

    }
    
    public void push(int x) {
        q2.add(x);
        while (!q1.isEmpty()) q2.add(q1.poll());
        ArrayDeque&lt;Integer&gt; t = q1;
        q1 = q2;
        q2 = t;
    }
    
    public int pop() {
        return q1.poll();
    }
    
    public int top() {
        return q1.peek();
    }
    
    public boolean empty() {
        return q1.isEmpty();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),h={id:"_232-\u7528\u6808\u5B9E\u73B0\u961F\u5217",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#_232-\u7528\u6808\u5B9E\u73B0\u961F\u5217","aria-hidden":"true"},"#",-1),g=n(),x={href:"https://leetcode.cn/problems/implement-queue-using-stacks/",target:"_blank",rel:"noopener noreferrer"},q=n("232. \u7528\u6808\u5B9E\u73B0\u961F\u5217"),y=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class MyQueue {
    ArrayDeque&lt;Integer&gt; a, b;
    public MyQueue() {
        a = new ArrayDeque&lt;&gt;();
        b = new ArrayDeque&lt;&gt;();
    }
    
    public void push(int x) {
        while (!b.isEmpty()) a.push(b.pop());
        a.push(x);
    }
    
    public int pop() {
        int x = peek();
        b.pop();
        return x;
    }
    
    public int peek() {
        while (!a.isEmpty()) b.push(a.pop());
        return b.peek();
    }
    
    public boolean empty() {
        return a.isEmpty() &amp;&amp; b.isEmpty();
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),f={id:"_20-\u6709\u6548\u7684\u62EC\u53F7",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#_20-\u6709\u6548\u7684\u62EC\u53F7","aria-hidden":"true"},"#",-1),w=n(),E={href:"https://leetcode.cn/problems/valid-parentheses/",target:"_blank",rel:"noopener noreferrer"},j=n("20. \u6709\u6548\u7684\u62EC\u53F7"),M=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public boolean isValid(String s) {
        ArrayDeque&lt;Character&gt; stack = new ArrayDeque&lt;&gt;();
        for (char x : s.toCharArray()) {
            if (x == &#39;(&#39;) stack.push(&#39;)&#39;);
            else if (x == &#39;[&#39;) stack.push(&#39;]&#39;);
            else if (x == &#39;{&#39;) stack.push(&#39;}&#39;);
            else {
                if (stack.size() &gt; 0 &amp;&amp; stack.peek() == x) stack.pop();
                else return false;
            }
        }
        return stack.isEmpty();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),A={id:"_622-\u8BBE\u8BA1\u5FAA\u73AF\u961F\u5217",tabindex:"-1"},D=e("a",{class:"header-anchor",href:"#_622-\u8BBE\u8BA1\u5FAA\u73AF\u961F\u5217","aria-hidden":"true"},"#",-1),Q=n(),S={href:"https://leetcode.cn/problems/design-circular-queue/",target:"_blank",rel:"noopener noreferrer"},I=n("622. \u8BBE\u8BA1\u5FAA\u73AF\u961F\u5217"),C=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class MyCircularQueue {
    int[] q;
    int hh = 0, tt = 0;
    public MyCircularQueue(int k) {
        //\u5C06\u957F\u5EA6\u5F00\u5230k + 1\uFF0C\u76EE\u7684\u662F\u533A\u5206\u961F\u7A7A\u548C\u961F\u6EE1\u7684\u60C5\u51B5
        q = new int[k + 1];
    }
    
    public boolean enQueue(int x) {
        if (isFull()) return false;
        q[tt ++ ] = x;
        if (tt == q.length) tt = 0;
        return true;
    }
    
    public boolean deQueue() {
        if (isEmpty()) return false;
        hh ++ ;
        if (hh == q.length) hh = 0;
        return true;
    }
    
    public int Front() {
        if (isEmpty()) return -1;
        return q[hh];
    }
    
    public int Rear() {
        if (isEmpty()) return -1;
        int t = tt - 1;
        return t &lt; 0 ? q[q.length - 1] : q[t];
    }
    
    public boolean isEmpty() {
        return hh == tt;
    }
    
    public boolean isFull() {
        return (tt + 1) % q.length == hh;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int minimumOperations(int[] nums) {
        Priority&lt;Integer&gt; q = new PriorityQueue&lt;&gt;();
        for (int x : nums) if (x &gt; 0) q.add(x);
        int res = 0;
        while (!q.isEmpty()) {
            int t = q.poll();
            int num = q.size();
            while (num -- &gt; 0) {
                int p = q.poll();
                res ++ ;
                p -= t;
                if (p &gt; 0) q.add(p);
            }
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function V(N,B){const i=v("ExternalLinkIcon");return r(),a("div",null,[e("h2",u,[c,b,e("a",m,[o,s(i)])]),p,e("h2",h,[_,g,e("a",x,[q,s(i)])]),y,e("h2",f,[k,w,e("a",E,[j,s(i)])]),M,e("h2",A,[D,Q,e("a",S,[I,s(i)])]),C])}var L=d(t,[["render",V],["__file","730-731.html.vue"]]);export{L as default};
