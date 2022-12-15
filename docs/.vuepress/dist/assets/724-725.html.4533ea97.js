import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as a,a as e,b as s,d as n,e as l,r}from"./app.aebf164a.js";const c={},o={id:"_141-\u73AF\u5F62\u94FE\u8868",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_141-\u73AF\u5F62\u94FE\u8868","aria-hidden":"true"},"#",-1),v=n(),m={href:"https://leetcode.cn/problems/linked-list-cycle/",target:"_blank",rel:"noopener noreferrer"},b=n("141. \u73AF\u5F62\u94FE\u8868"),h=l(`<p><strong>\u89E3\u6CD5\uFF1A\u5FEB\u6162\u6307\u9488</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Solution {
    public boolean hasCycle(ListNode head) {
        ListNode quick = head, slow = head;
        while (quick != null &amp;&amp; quick.next != null) {
            quick = quick.next.next;
            slow = slow.next;
            if (quick == slow) return true;
        }
        return false;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),_={id:"_83-\u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#_83-\u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20","aria-hidden":"true"},"#",-1),p=n(),f={href:"https://leetcode.cn/problems/remove-duplicates-from-sorted-list/",target:"_blank",rel:"noopener noreferrer"},g=n("83. \u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20"),k=l(`<p><strong>\u89E3\u6CD5\uFF1A\u66B4\u529B</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        if (head == null) return null;
        ListNode quick = head, slow = head;
        while (quick != null) {
            quick = quick.next;
            if (quick != null &amp;&amp; quick.val != slow.val) {
                slow = slow.next = quick;
            }
        }
        slow.next = null;
        return head;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),N={id:"_2-\u4E24\u6570\u76F8\u52A0",tabindex:"-1"},L=e("a",{class:"header-anchor",href:"#_2-\u4E24\u6570\u76F8\u52A0","aria-hidden":"true"},"#",-1),w=n(),q={href:"https://leetcode.cn/problems/add-two-numbers/",target:"_blank",rel:"noopener noreferrer"},y=n("2. \u4E24\u6570\u76F8\u52A0"),S=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(-1);
        ListNode cur = dummy;
        int t = 0;
        while (l1 != null || l2 != null || t != 0) {
            if (l1 != null) {
                t += l1.val;
                l1 = l1.next;
            }
            if (l2 != null) {
                t += l2.val;
                l2 = l2.next;
            }
            cur = cur.next = new ListNode(t % 10);
            t /= 10;
        }
        return dummy.next;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),V={id:"_61-\u65CB\u8F6C\u94FE\u8868",tabindex:"-1"},B=e("a",{class:"header-anchor",href:"#_61-\u65CB\u8F6C\u94FE\u8868","aria-hidden":"true"},"#",-1),E=n(),C={href:"https://leetcode.cn/problems/rotate-list/",target:"_blank",rel:"noopener noreferrer"},I=n("61. \u65CB\u8F6C\u94FE\u8868"),T=l(`<p><strong>\u89E3\u6CD5\uFF1A\u6A21\u62DF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        if (head == null) return null;
        ListNode dummy = new ListNode(-1);
        dummy.next = head;
        int num = 0;
        ListNode a = dummy;
        while (a.next != null) {
            a = a.next;
            num ++ ;
        }
        k %= num;
        ListNode b = dummy;
        for (int i = 0; i &lt; num - k; i ++ ) b = b.next;
        a.next = dummy.next;
        dummy.next = b.next;
        b.next = null;
        return dummy.next;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function D(R,j){const i=r("ExternalLinkIcon");return t(),a("div",null,[e("h2",o,[u,v,e("a",m,[b,s(i)])]),h,e("h2",_,[x,p,e("a",f,[g,s(i)])]),k,e("h2",N,[L,w,e("a",q,[y,s(i)])]),S,e("h2",V,[B,E,e("a",C,[I,s(i)])]),T])}var F=d(c,[["render",D],["__file","724-725.html.vue"]]);export{F as default};
