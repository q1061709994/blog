import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as a,a as e,b as s,d as n,e as d,r}from"./app.a69613ae.js";const v={},c={id:"_25-k-\u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868",tabindex:"-1"},o=e("a",{class:"header-anchor",href:"#_25-k-\u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868","aria-hidden":"true"},"#",-1),u=n(),m={href:"https://leetcode.cn/problems/reverse-nodes-in-k-group/",target:"_blank",rel:"noopener noreferrer"},b=n("25. K \u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868"),h=d(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        ListNode dummy = new ListNode(-1);
        dummy.next = head; 
        for (ListNode p = dummy;; ) {
            ListNode q = p;
            // \u5BF9\u4E8E\u94FE\u8868\u4E2D\u7684\u6BCF\u4E00\u4E2A\u70B9, \u5148\u904D\u5386\u5176\u540E\u7684k\u4E2A\u70B9, \u5982\u679C\u904D\u5386\u5B8C\u4E3A\u7A7A, \u8BF4\u660E\u4E0D\u591Fk\u4E2A\u70B9
            for (int i = 0; i &lt; k &amp;&amp; q != null; i ++ ) q = q.next;
            if (q == null) break;
            //System.out.println(q.val);
            ListNode a = p.next, b = a.next;
            //\u5F00\u59CB\u7FFB\u8F6C\u5BF9k\u4E2A\u8282\u70B9\u8FDB\u884C\u5185\u90E8\u7FFB\u8F6C, \u9700\u8981\u7FFB\u8F6Ck-1\u6B21
            for (int i = 0; i &lt; k - 1; i ++ ) {
                ListNode c = b.next;
                b.next = a;
                a = b;
                b = c;
            }
            ListNode c = p.next;
            p.next = a;
            c.next = b;
            // \u66F4\u65B0\u94FE\u8868\u5230\u4E0B\u4E00\u4E2A\u8282\u70B9
            p = c;
        }
        return dummy.next;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),_={id:"_725-\u5206\u9694\u94FE\u8868",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#_725-\u5206\u9694\u94FE\u8868","aria-hidden":"true"},"#",-1),x=n(),N={href:"https://leetcode.cn/problems/split-linked-list-in-parts/",target:"_blank",rel:"noopener noreferrer"},L=n("725. \u5206\u9694\u94FE\u8868"),f=d(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public ListNode[] splitListToParts(ListNode head, int k) {
        ListNode[] res = new ListNode[k];
        ListNode cur = head;
        int n = 0;
        while (cur != null) {
            n ++ ;
            cur = cur.next;
        }
        int a = n / k, b = n % k;
        ListNode p = head, pre = null;
        for (int i = 0; i &lt; k; i ++ ) {
            res[i] = p;
            int t = a + (b -- &gt; 0 ? 1 : 0);
            for (int j = 0; j &lt; t; j ++ ) {
                pre = p;
                p = p.next;
            }
            if (pre != null) pre.next = null;
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),g={id:"_160-\u76F8\u4EA4\u94FE\u8868",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#_160-\u76F8\u4EA4\u94FE\u8868","aria-hidden":"true"},"#",-1),y=n(),B={href:"https://leetcode.cn/problems/intersection-of-two-linked-lists/",target:"_blank",rel:"noopener noreferrer"},w=n("160. \u76F8\u4EA4\u94FE\u8868"),q=d(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        ListNode a = headA, b = headB;
        while (a != b) {
            if (a != null) a = a.next;
            else a = headB;

            if (b != null) b = b.next;
            else b = headA;
        }
        return a;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),A={id:"_328-\u5947\u5076\u94FE\u8868",tabindex:"-1"},S=e("a",{class:"header-anchor",href:"#_328-\u5947\u5076\u94FE\u8868","aria-hidden":"true"},"#",-1),E=n(),V={href:"https://leetcode.cn/problems/odd-even-linked-list/",target:"_blank",rel:"noopener noreferrer"},j=n("328. \u5947\u5076\u94FE\u8868"),I=d(`<p>\u89E3\u6CD5\uFF1A\u6A21\u62DF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public ListNode oddEvenList(ListNode head) {
        ListNode dummyA = new ListNode(-1), a = dummyA;
        ListNode dummyB = new ListNode(-1), b = dummyB;
        int t = 1;
        while (head != null) {
            if ((t &amp; 1) == 1) {
                a = a.next = head;
                head = head.next;
            } else {
                b = b.next = head;
                head = head.next;
            }
            t ++ ;
        }
        b.next = null;
        a.next = dummyB.next;
        return dummyA.next;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function K(T,C){const i=r("ExternalLinkIcon");return t(),a("div",null,[e("h2",c,[o,u,e("a",m,[b,s(i)])]),h,e("h2",_,[p,x,e("a",N,[L,s(i)])]),f,e("h2",g,[k,y,e("a",B,[w,s(i)])]),q,e("h2",A,[S,E,e("a",V,[j,s(i)])]),I])}var P=l(v,[["render",K],["__file","728-729.html.vue"]]);export{P as default};
