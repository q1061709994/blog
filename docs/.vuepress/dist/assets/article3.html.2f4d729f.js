import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as r,a as i,b as d,e,d as n,r as v}from"./app.a2846b5d.js";var t="/blog/assets/image-20220819233725308.b79825bc.png";const c={},u=e(`<h2 id="\u4E00\u3001\u57FA\u7840\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u57FA\u7840\u7B97\u6CD5" aria-hidden="true">#</a> \u4E00\u3001\u57FA\u7840\u7B97\u6CD5</h2><h3 id="_1-\u5FEB\u901F\u6392\u5E8F\u7B97\u6CD5\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#_1-\u5FEB\u901F\u6392\u5E8F\u7B97\u6CD5\u6A21\u677F" aria-hidden="true">#</a> 1.\u5FEB\u901F\u6392\u5E8F\u7B97\u6CD5\u6A21\u677F</h3><p>[O(nlogn)] \u7A7A\u95F4[O(logn)]</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>void quick_sort(int q[], int l, int r)
{
    if (l &gt;= r) return;

    int i = l - 1, j = r + 1, x = q[l + r &gt;&gt; 1];
    while (i &lt; j)
    {
        do i ++ ; while (q[i] &lt; x);
        do j -- ; while (q[j] &gt; x);
        if (i &lt; j) swap(q[i], q[j]);
    }
    quick_sort(q, l, j), quick_sort(q, j + 1, r);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5FEB\u901F\u9009\u62E9\u7B97\u6CD5</p><p>[O(n)] \u7A7A\u95F4[O(logn)]</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public int quick_select(int[] nums, int l, int r, int k) {
	if (l == r) return nums[k];
	int x = nums[l], i = l - 1, j = r + 1;
	while (i &lt; j) {
		do i ++ ; while (nums[i] &gt; x);
		do j -- ; while (nums[j] &lt; x);
		if (i &lt; j) swap(nums, i, j);
	}
	if (k &lt;= j) return quick_select(nums, l, j, k);
	else return quick_select(nums, j + 1, r, k);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u5F52\u5E76\u6392\u5E8F\u7B97\u6CD5\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#_2-\u5F52\u5E76\u6392\u5E8F\u7B97\u6CD5\u6A21\u677F" aria-hidden="true">#</a> 2.\u5F52\u5E76\u6392\u5E8F\u7B97\u6CD5\u6A21\u677F</h3><p>\u9012\u5F52[O(nlogn)] [O(logn)]</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>void merge_sort(int q[], int l, int r)
{
    if (l &gt;= r) return;

    int mid = l + r &gt;&gt; 1;
    merge_sort(q, l, mid);
    merge_sort(q, mid + 1, r);

    int k = 0, i = l, j = mid + 1;
    while (i &lt;= mid &amp;&amp; j &lt;= r)
        if (q[i] &lt;= q[j]) tmp[k ++ ] = q[i ++ ];
        else tmp[k ++ ] = q[j ++ ];

    while (i &lt;= mid) tmp[k ++ ] = q[i ++ ];
    while (j &lt;= r) tmp[k ++ ] = q[j ++ ];

    for (i = l, j = 0; i &lt;= r; i ++, j ++ ) q[i] = tmp[j];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FED\u4EE3 [O(nlogn)] [O(1)]</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> public static void merge_sort(int[] k, int len) {
 		//\u7528\u4E8E\u5B58\u653E\u6392\u5E8F\u7684\u4E34\u65F6\u53D8\u91CF
        int[] temp = new int[len];
        //next\u662F\u7528\u6765\u6807\u5FD7temp\u6570\u7EC4\u4E0B\u6807\u7684
        int next;
        /*
        *\u6BCF\u6B21\u5F52\u5E76\u90FD\u662F\u5BF9\u4E24\u6BB5\u6570\u636E\u8FDB\u884C\u5BF9\u6BD4\u6392\u5E8F
        *left\\right\u5206\u522B\u4EE3\u8868\u5DE6\u9762\u548C\u53F3\u9762(\u524D\u9762\u548C\u540E\u9762)\u7684\u4E24\u6BB5\u6570\u636E
        *min\u548Cmax\u5206\u522B\u4EE3\u8868\u5404\u6BB5\u6570\u636E\u7684\u6700\u524D\u548C\u6700\u540E\u4E0B\u6807
        */
        int left_min, left_max, right_min, right_max;
        for (int i = 1; i &lt; len; i = i &lt;&lt; 1) {
        	//\u6BCF\u6B21\u6B65\u957F\u9012\u589E\uFF0C\u90FD\u4ECE\u5934\u5F00\u59CB\u5F52\u5E76\u5904\u7406
            for (left_min = 0; left_min &lt; len - 1; left_min = right_max) {
            	//\u4E24\u6BB5\u6570\u636E\u548C\u6B65\u957F\u4E4B\u95F4\u5173\u7CFB
                right_min = left_max = left_min + i;
                right_max = left_max + i;
                //\u6700\u540E\u7684\u4E0B\u6807\u4E0D\u80FD\u8D85\u8FC7n,\u5426\u5219\u65E0\u610F\u4E49
                if (right_max &gt; len) {
                    right_max = len;
                }
                //\u6BCF\u6B21\u7684\u5185\u5C42\u5FAA\u73AF\u90FD\u4F1A\u5C06\u6392\u5217\u597D\u7684\u6570\u636E\u8FD4\u56DE\u5230k\u6570\u7EC4,\u56E0\u6B64next\u6307\u9488\u9700\u6BCF\u6B21\u6E05\u96F6
                next = 0;
                //\u4E24\u7AEF\u6570\u636E\u5747\u672A\u6392\u5B8C
                while (left_min &lt; left_max &amp;&amp; right_min &lt; right_max) {
                    if (k[left_min] &lt; k[right_min]) temp[next++] = k[left_min++];
                    else temp[next++] = k[right_min++];
                }
                /*
                *\u4E0A\u9762\u7684\u5F52\u5E76\u6392\u5E8F\u5FAA\u73AF\u7ED3\u675F\u540E,\u53EF\u80FD\u6709\u4E00\u6BB5\u6570\u636E\u5C1A\u672A\u5B8C\u5168\u88AB\u6392\u5217\u5E26temp\u6570\u7EC4\u4E2D \u5269\u4E0B\u672A\u6392\u5217\u5230temp\u4E2D\u7684\u6570\u636E\u4E00\u5B9A\u662F\u6309\u7167\u5347\u5E8F\u6392					*\u5217\u7684\u6700\u5927\u7684\u4E00\u90E8\u5206\u6570\u636E
            	*\u6B64\u65F6\u6709\u4E24\u79CD\u60C5\u51B5:left\u672A\u6392\u5217\u5B8C\u6210,right\u672A\u6392\u5217\u5B8C\u6210
        		*\u82E5\u662Fleft\u672A\u6392\u5217\u5B8C\u6210(left_min&lt;left_max),\u5219\u5BF9\u4E8E\u8FD9\u4E00\u6BB5\u6570\u636E\u7701\u53BBtemp\u6570\u7EC4\u7684\u4E2D\u8F6C,\u76F4\u63A5\u8D4B\u503C\u5230k\u6570\u7EC4,\u5373\u4ECEright_max				*\u5F00\u59CB\u5012\u7740\u8D4B\u503C 
			 	*\u82E5\u662Fright\u672A\u6392\u5217\u5B8C\u6210,\u5219\u53EF\u4EE5\u60F3\u5230,\u90A3\u4E00\u6BB5\u6570\u636E\u672C\u5C31\u5728\u5E94\u8BE5\u653E\u7F6E\u7684\u4F4D\u7F6E,\u5219\u65E0\u9700\u5904\u7406 
			 	*\u4E0A\u9762\u5206\u6790\u5E94\u8BE5\u4ECEright_max\u5F00\u59CB\u5012\u7740\u8D4B\u503C,\u4F46\u662F\u5B9E\u9645\u56E0\u4E3A\u53F3\u8FB9\u7684\u6570\u636E\u6BB5\u5DF2\u7ECF\u5168\u90E8\u6392\u5217,\u6545\u6B64\u65F6right_min=right_max
                *\u4E14\u8FD9\u91CC\u5C06right_min\u79FB\u52A8\u5230\u9700\u8981\u7684\u4F4D\u7F6E,\u65B9\u4FBF\u4E0B\u9762\u8D4B\u503C\u65F6\u4F7F\u7528
			 	*/
                while (left_min &lt; left_max) k[--right_min] = k[--left_max];
                /*\u628A\u6392\u5217\u597D\u7684\u6570\u636E\u6BB5\u8D4B\u503C\u7ED9k\u6570\u7EC4
                *\u8FD9\u91CC\u53EF\u4EE5\u76F4\u63A5\u7528\u4E0A\u9762\u7ECF\u8FC7--right_min\u5012\u6570\u8FC7\u6765\u7684right_min\u503C
                *\u7ECF\u8FC7\u4E0A\u9762\u5012\u6570\u7684\u5904\u7406,right_min\u6070\u597D\u5728\u9700\u8981\u8D4B\u503C\u548C\u4E0D\u9700\u8981\u8D4B\u503C\u7684\u6570\u636E\u6BB5\u7684\u5206\u754C\u5904
                */
                while (next != 0) k[--right_min] = temp[--next];
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u6574\u6570\u4E8C\u5206\u7B97\u6CD5\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#_3-\u6574\u6570\u4E8C\u5206\u7B97\u6CD5\u6A21\u677F" aria-hidden="true">#</a> 3.\u6574\u6570\u4E8C\u5206\u7B97\u6CD5\u6A21\u677F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bool check(int x) {/* ... */} // \u68C0\u67E5x\u662F\u5426\u6EE1\u8DB3\u67D0\u79CD\u6027\u8D28

// \u533A\u95F4[l, r]\u88AB\u5212\u5206\u6210[l, mid]\u548C[mid + 1, r]\u65F6\u4F7F\u7528\uFF1A
int bsearch_1(int l, int r)
{
    while (l &lt; r)
    {
        int mid = l + r &gt;&gt; 1;
        if (check(mid)) r = mid;    // check()\u5224\u65ADmid\u662F\u5426\u6EE1\u8DB3\u6027\u8D28
        else l = mid + 1;
    }
    return l;
}
// \u533A\u95F4[l, r]\u88AB\u5212\u5206\u6210[l, mid - 1]\u548C[mid, r]\u65F6\u4F7F\u7528\uFF1A
int bsearch_2(int l, int r)
{
    while (l &lt; r)
    {
        int mid = l + r + 1 &gt;&gt; 1;
        if (check(mid)) l = mid;
        else r = mid - 1;
    }
    return l;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> 		int[] arr = new int[]{0, 1, 3, 7, 8, 9, 11};
        //int[] arr = new int[]{1, 2, 2, 4};
        int n = arr.length;
        int a = 2, b = 7;
        int l = 0, r = n - 1;
        //\u627E\u5927\u4E8E\u7B49\u4E8Ea\u7684\u5DE6\u8FB9\u754C
//        while (l &lt; r) {
//            int mid = l + r &gt;&gt; 1;
//            if (arr[mid] &gt;= a) r = mid;
//            else l = mid + 1;
//        }
        //\u627E\u5927\u4E8E\u7B49\u4E8Ea\u7684\u53F3\u8FB9\u754C
//        while (l &lt; r) {
//            int mid = l + r + 1 &gt;&gt; 1;
//            if (arr[mid] &gt;= a) l = mid;
//            else r = mid - 1;
//        }
        //\u627Earr\u4E2D\u5C0F\u4E8E\u7B49\u4E8Eb\u7684\u7B2C\u4E00\u4E2A\u4F4D\u7F6E
//        while (l &lt; r) {
//            int mid = l + r + 1 &gt;&gt; 1;
//            if (arr[mid] &lt;= b) l = mid;
//            else r = mid - 1;
//        }

        //\u627Earr\u4E2D\u5C0F\u4E8Eb\u7684\u6700\u540E\u4E00\u4E2A\u6570
        while (l &lt; r) {
            int mid = l + r &gt;&gt; 1;
            if (arr[mid] &lt;= b) r = mid;
            else l = mid + 1;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u627E\u53F3\u8FB9\u754C</p>`,16),m={href:"https://leetcode.cn/problems/search-in-rotated-sorted-array-ii/",target:"_blank",rel:"noopener noreferrer"},b=n("*81. \u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4 II"),o=e(`<h3 id="_4-\u6D6E\u70B9\u6570\u4E8C\u5206\u7B97\u6CD5\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#_4-\u6D6E\u70B9\u6570\u4E8C\u5206\u7B97\u6CD5\u6A21\u677F" aria-hidden="true">#</a> 4.\u6D6E\u70B9\u6570\u4E8C\u5206\u7B97\u6CD5\u6A21\u677F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bool check(double x) {/* ... */} // \u68C0\u67E5x\u662F\u5426\u6EE1\u8DB3\u67D0\u79CD\u6027\u8D28

double bsearch_3(double l, double r)
{
    const double eps = 1e-6;   // eps \u8868\u793A\u7CBE\u5EA6\uFF0C\u53D6\u51B3\u4E8E\u9898\u76EE\u5BF9\u7CBE\u5EA6\u7684\u8981\u6C42
    while (r - l &gt; eps)
    {
        double mid = (l + r) / 2;
        if (check(mid)) r = mid;
        else l = mid;
    }
    return l;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-\u9AD8\u7CBE\u5EA6" tabindex="-1"><a class="header-anchor" href="#_5-\u9AD8\u7CBE\u5EA6" aria-hidden="true">#</a> 5.\u9AD8\u7CBE\u5EA6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u9AD8\u7CBE\u5EA6\u52A0\u6CD5 \u2014\u2014 \u6A21\u677F\u9898 AcWing 791. \u9AD8\u7CBE\u5EA6\u52A0\u6CD5
// C = A + B, A &gt;= 0, B &gt;= 0
vector&lt;int&gt; add(vector&lt;int&gt; &amp;A, vector&lt;int&gt; &amp;B)
{
    if (A.size() &lt; B.size()) return add(B, A);

    vector&lt;int&gt; C;
    int t = 0;
    for (int i = 0; i &lt; A.size(); i ++ )
    {
        t += A[i];
        if (i &lt; B.size()) t += B[i];
        C.push_back(t % 10);
        t /= 10;
    }
    
    if (t) C.push_back(t);
    return C;

}
\u9AD8\u7CBE\u5EA6\u51CF\u6CD5 \u2014\u2014 \u6A21\u677F\u9898 AcWing 792. \u9AD8\u7CBE\u5EA6\u51CF\u6CD5
// C = A - B, \u6EE1\u8DB3A &gt;= B, A &gt;= 0, B &gt;= 0
vector&lt;int&gt; sub(vector&lt;int&gt; &amp;A, vector&lt;int&gt; &amp;B)
{
    vector&lt;int&gt; C;
    for (int i = 0, t = 0; i &lt; A.size(); i ++ )
    {
        t = A[i] - t;
        if (i &lt; B.size()) t -= B[i];
        C.push_back((t + 10) % 10);
        if (t &lt; 0) t = 1;
        else t = 0;
    }

    while (C.size() &gt; 1 &amp;&amp; C.back() == 0) C.pop_back();
    return C;

}
\u9AD8\u7CBE\u5EA6\u4E58\u4F4E\u7CBE\u5EA6 \u2014\u2014 \u6A21\u677F\u9898 AcWing 793. \u9AD8\u7CBE\u5EA6\u4E58\u6CD5
// C = A * b, A &gt;= 0, b &gt;= 0
vector&lt;int&gt; mul(vector&lt;int&gt; &amp;A, int b)
{
    vector&lt;int&gt; C;

    int t = 0;
    for (int i = 0; i &lt; A.size() || t; i ++ )
    {
        if (i &lt; A.size()) t += A[i] * b;
        C.push_back(t % 10);
        t /= 10;
    }
    
    while (C.size() &gt; 1 &amp;&amp; C.back() == 0) C.pop_back();
    
    return C;

}
\u9AD8\u7CBE\u5EA6\u9664\u4EE5\u4F4E\u7CBE\u5EA6 \u2014\u2014 \u6A21\u677F\u9898 AcWing 794. \u9AD8\u7CBE\u5EA6\u9664\u6CD5
// A / b = C ... r, A &gt;= 0, b &gt; 0
vector&lt;int&gt; div(vector&lt;int&gt; &amp;A, int b, int &amp;r)
{
    vector&lt;int&gt; C;
    r = 0;
    for (int i = A.size() - 1; i &gt;= 0; i -- )
    {
        r = r * 10 + A[i];
        C.push_back(r / b);
        r %= b;
    }
    reverse(C.begin(), C.end());
    while (C.size() &gt; 1 &amp;&amp; C.back() == 0) C.pop_back();
    return C;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-\u524D\u7F00\u548C" tabindex="-1"><a class="header-anchor" href="#_6-\u524D\u7F00\u548C" aria-hidden="true">#</a> 6.\u524D\u7F00\u548C</h3><h4 id="_1-\u4E00\u7EF4\u524D\u7F00\u548C" tabindex="-1"><a class="header-anchor" href="#_1-\u4E00\u7EF4\u524D\u7F00\u548C" aria-hidden="true">#</a> 1.\u4E00\u7EF4\u524D\u7F00\u548C</h4><p>S[i] = a[1] + a[2] + ... a[i] a[l] + ... + a[r] = S[r] - S[l - 1]</p><h4 id="_2-\u4E8C\u7EF4\u524D\u7F00\u548C" tabindex="-1"><a class="header-anchor" href="#_2-\u4E8C\u7EF4\u524D\u7F00\u548C" aria-hidden="true">#</a> 2.\u4E8C\u7EF4\u524D\u7F00\u548C</h4><p>S[i, j] = \u7B2Ci\u884Cj\u5217\u683C\u5B50\u5DE6\u4E0A\u90E8\u5206\u6240\u6709\u5143\u7D20\u7684\u548C \u4EE5(x1, y1)\u4E3A\u5DE6\u4E0A\u89D2\uFF0C(x2, y2)\u4E3A\u53F3\u4E0B\u89D2\u7684\u5B50\u77E9\u9635\u7684\u548C\u4E3A\uFF1A S[x2, y2] - S[x1 - 1, y2] - S[x2, y1 - 1] + S[x1 - 1, y1 - 1]</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>int[][] s = new int[n][m];
for (int i = 0; i &lt; n; i ++ )
	for (int j = 0; i &lt; m; j ++ )
		s[i + 1][j + 1] = s[i + 1][j] + s[i][j + 1] - s[i][j] + g[i][j];
public int get(int x1, int y1, int x2, int y2) {
	return s[x2 + 1][y2 + 1] - s[x1][y2 + 1] - s[x2 + 1][y1] + s[x1][y1];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-\u5DEE\u5206" tabindex="-1"><a class="header-anchor" href="#_7-\u5DEE\u5206" aria-hidden="true">#</a> 7.\u5DEE\u5206</h3><h3 id="_1-\u4E00\u7EF4\u5DEE\u5206" tabindex="-1"><a class="header-anchor" href="#_1-\u4E00\u7EF4\u5DEE\u5206" aria-hidden="true">#</a> 1.\u4E00\u7EF4\u5DEE\u5206</h3><p>\u7ED9\u533A\u95F4[l, r]\u4E2D\u7684\u6BCF\u4E2A\u6570\u52A0\u4E0Ac\uFF1AB[l] += c, B[r + 1] -= c</p><h3 id="_2-\u4E8C\u7EF4\u5DEE\u5206" tabindex="-1"><a class="header-anchor" href="#_2-\u4E8C\u7EF4\u5DEE\u5206" aria-hidden="true">#</a> 2.\u4E8C\u7EF4\u5DEE\u5206</h3><p>\u7ED9\u4EE5(x1, y1)\u4E3A\u5DE6\u4E0A\u89D2\uFF0C(x2, y2)\u4E3A\u53F3\u4E0B\u89D2\u7684\u5B50\u77E9\u9635\u4E2D\u7684\u6240\u6709\u5143\u7D20\u52A0\u4E0Ac\uFF1A S[x1, y1] += c, S[x2 + 1, y1] -= c, S[x1, y2 + 1] -= c, S[x2 + 1, y2 + 1] += c \u4F4D\u8FD0\u7B97 \u2014\u2014 \u6A21\u677F\u9898 AcWing 801. \u4E8C\u8FDB\u5236\u4E2D1\u7684\u4E2A\u6570 \u6C42n\u7684\u7B2Ck\u4F4D\u6570\u5B57: n &gt;&gt; k &amp; 1 \u8FD4\u56DEn\u7684\u6700\u540E\u4E00\u4F4D1\uFF1Alowbit(n) = n &amp; -n</p><h3 id="_8-\u53CC\u6307\u9488\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_8-\u53CC\u6307\u9488\u7B97\u6CD5" aria-hidden="true">#</a> 8.\u53CC\u6307\u9488\u7B97\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for (int i = 0, j = 0; i &lt; n; i ++ )
{
    while (j &lt; i &amp;&amp; check(i, j)) j ++ ;

    // \u5177\u4F53\u95EE\u9898\u7684\u903B\u8F91
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E38\u89C1\u95EE\u9898\u5206\u7C7B\uFF1A (1) \u5BF9\u4E8E\u4E00\u4E2A\u5E8F\u5217\uFF0C\u7528\u4E24\u4E2A\u6307\u9488\u7EF4\u62A4\u4E00\u6BB5\u533A\u95F4 (2) \u5BF9\u4E8E\u4E24\u4E2A\u5E8F\u5217\uFF0C\u7EF4\u62A4\u67D0\u79CD\u6B21\u5E8F\uFF0C\u6BD4\u5982\u5F52\u5E76\u6392\u5E8F\u4E2D\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u5E8F\u5217\u7684\u64CD\u4F5C</p><h3 id="_9-\u79BB\u6563\u5316" tabindex="-1"><a class="header-anchor" href="#_9-\u79BB\u6563\u5316" aria-hidden="true">#</a> 9.\u79BB\u6563\u5316</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vector&lt;int&gt; alls; // \u5B58\u50A8\u6240\u6709\u5F85\u79BB\u6563\u5316\u7684\u503C
sort(alls.begin(), alls.end()); // \u5C06\u6240\u6709\u503C\u6392\u5E8F
alls.erase(unique(alls.begin(), alls.end()), alls.end());   // \u53BB\u6389\u91CD\u590D\u5143\u7D20

// \u4E8C\u5206\u6C42\u51FAx\u5BF9\u5E94\u7684\u79BB\u6563\u5316\u7684\u503C
int find(int x) // \u627E\u5230\u7B2C\u4E00\u4E2A\u5927\u4E8E\u7B49\u4E8Ex\u7684\u4F4D\u7F6E
{
    int l = 0, r = alls.size() - 1;
    while (l &lt; r)
    {
        int mid = l + r &gt;&gt; 1;
        if (alls[mid] &gt;= x) r = mid;
        else l = mid + 1;
    }
    return r + 1; // \u6620\u5C04\u52301, 2, ...n
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-\u533A\u95F4\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#_10-\u533A\u95F4\u5408\u5E76" aria-hidden="true">#</a> 10.\u533A\u95F4\u5408\u5E76</h3><p><strong>\u89E3\u6CD51\uFF1A\u53CC\u6307\u9488</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int[][] merge(int[][] arr) {
        if (arr.length == 0 || arr == null) return arr;
        List&lt;int[]&gt; res = new ArrayList&lt;&gt;();
        Arrays.sort(arr, (a, b) -&gt; a[0] - b[0]);
        int st = arr[0][0], end = arr[0][1];
        for (int i = 1; i &lt; arr.length; i ++ ) {
            int a = arr[i][0], b = arr[i][1];
            //\u5F53\u524D\u533A\u95F4\u4E0D\u80FD\u5408\u5E76
            if (a &gt; end) {
                res.add(new int[]{st, end});
                st = a;
                end = b;
            } else {
                //\u80FD\u5408\u5E76\u9700\u8981\u66F4\u65B0\u6709\u7AEF\u70B9
                end = Math.max(end, b);
            }
        }
        res.add(new int[]{st, end});
        return res.toArray(new int[res.size()][2]);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-\u4F4D\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#_11-\u4F4D\u8FD0\u7B97" aria-hidden="true">#</a> 11.\u4F4D\u8FD0\u7B97</h3><h3 id="_1-n\u7684\u4E8C\u8FDB\u5236\u8868\u793A\u7B2Ck\u4F4D\u662F\u51E0" tabindex="-1"><a class="header-anchor" href="#_1-n\u7684\u4E8C\u8FDB\u5236\u8868\u793A\u7B2Ck\u4F4D\u662F\u51E0" aria-hidden="true">#</a> 1.n\u7684\u4E8C\u8FDB\u5236\u8868\u793A\u7B2Ck\u4F4D\u662F\u51E0</h3><h3 id="_2-lowbit\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#_2-lowbit\u8FD0\u7B97" aria-hidden="true">#</a> 2.lowbit\u8FD0\u7B97</h3><h3 id="_3-2\u7684x\u6B21" tabindex="-1"><a class="header-anchor" href="#_3-2\u7684x\u6B21" aria-hidden="true">#</a> 3.2\u7684x\u6B21</h3><p>\u200B 1 &lt;&lt; x</p><h3 id="_4-\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#_4-\u8FD0\u7B97" aria-hidden="true">#</a> 4.^\u8FD0\u7B97</h3><p>\u5F02\u4F4D\u6216\u8FD0\u7B97</p><p>0 ^ 0 = 0; 0 ^ 1 = 1;</p><p>1 ^ 0 = 1; 1 ^ 1 = 0;</p><h2 id="\u4E8C\u3001\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> \u4E8C\u3001\u6570\u636E\u7ED3\u6784</h2><h3 id="\u5355\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u5355\u94FE\u8868" aria-hidden="true">#</a> \u5355\u94FE\u8868</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// head\u5B58\u50A8\u94FE\u8868\u5934\uFF0Ce[]\u5B58\u50A8\u8282\u70B9\u7684\u503C\uFF0Cne[]\u5B58\u50A8\u8282\u70B9\u7684next\u6307\u9488\uFF0Cidx\u8868\u793A\u5F53\u524D\u7528\u5230\u4E86\u54EA\u4E2A\u8282\u70B9
int head, e[N], ne[N], idx;

// \u521D\u59CB\u5316
void init()
{
    head = -1;
    idx = 0;
}

// \u5728\u94FE\u8868\u5934\u63D2\u5165\u4E00\u4E2A\u6570a
void insert(int a)
{
    e[idx] = a, ne[idx] = head, head = idx ++ ;
}

// \u5C06\u5934\u7ED3\u70B9\u5220\u9664\uFF0C\u9700\u8981\u4FDD\u8BC1\u5934\u7ED3\u70B9\u5B58\u5728
void remove()
{
    head = ne[head];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53CC\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u53CC\u94FE\u8868" aria-hidden="true">#</a> \u53CC\u94FE\u8868</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// e[]\u8868\u793A\u8282\u70B9\u7684\u503C\uFF0Cl[]\u8868\u793A\u8282\u70B9\u7684\u5DE6\u6307\u9488\uFF0Cr[]\u8868\u793A\u8282\u70B9\u7684\u53F3\u6307\u9488\uFF0Cidx\u8868\u793A\u5F53\u524D\u7528\u5230\u4E86\u54EA\u4E2A\u8282\u70B9
int e[N], l[N], r[N], idx;

// \u521D\u59CB\u5316
void init()
{
    //0\u662F\u5DE6\u7AEF\u70B9\uFF0C1\u662F\u53F3\u7AEF\u70B9
    r[0] = 1, l[1] = 0;
    idx = 2;
}

// \u5728\u8282\u70B9a\u7684\u53F3\u8FB9\u63D2\u5165\u4E00\u4E2A\u6570x
void insert(int a, int x)
{
    e[idx] = x;
    l[idx] = a, r[idx] = r[a];
    l[r[a]] = idx, r[a] = idx ++ ;
}

// \u5220\u9664\u8282\u70B9a
void remove(int a)
{
    l[r[a]] = l[a];
    r[l[a]] = r[a];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6808" tabindex="-1"><a class="header-anchor" href="#\u6808" aria-hidden="true">#</a> \u6808</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// tt\u8868\u793A\u6808\u9876
int stk[N], tt = 0;

// \u5411\u6808\u9876\u63D2\u5165\u4E00\u4E2A\u6570
stk[ ++ tt] = x;

// \u4ECE\u6808\u9876\u5F39\u51FA\u4E00\u4E2A\u6570
tt -- ;

// \u6808\u9876\u7684\u503C
stk[tt];

// \u5224\u65AD\u6808\u662F\u5426\u4E3A\u7A7A
if (tt &gt; 0)
{

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u961F\u5217" aria-hidden="true">#</a> \u961F\u5217</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
1. \u666E\u901A\u961F\u5217\uFF1A
// hh \u8868\u793A\u961F\u5934\uFF0Ctt\u8868\u793A\u961F\u5C3E
int q[N], hh = 0, tt = -1;

// \u5411\u961F\u5C3E\u63D2\u5165\u4E00\u4E2A\u6570
q[ ++ tt] = x;

// \u4ECE\u961F\u5934\u5F39\u51FA\u4E00\u4E2A\u6570
hh ++ ;

// \u961F\u5934\u7684\u503C
q[hh];

// \u5224\u65AD\u961F\u5217\u662F\u5426\u4E3A\u7A7A
if (hh &lt;= tt)
{

}
2. \u5FAA\u73AF\u961F\u5217
// hh \u8868\u793A\u961F\u5934\uFF0Ctt\u8868\u793A\u961F\u5C3E\u7684\u540E\u4E00\u4E2A\u4F4D\u7F6E
int q[N], hh = 0, tt = 0;

// \u5411\u961F\u5C3E\u63D2\u5165\u4E00\u4E2A\u6570
q[tt ++ ] = x;
if (tt == N) tt = 0;

// \u4ECE\u961F\u5934\u5F39\u51FA\u4E00\u4E2A\u6570
hh ++ ;
if (hh == N) hh = 0;

// \u961F\u5934\u7684\u503C
q[hh];

// \u5224\u65AD\u961F\u5217\u662F\u5426\u4E3A\u7A7A
if (hh != tt)
{

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5355\u8C03\u6808" tabindex="-1"><a class="header-anchor" href="#\u5355\u8C03\u6808" aria-hidden="true">#</a> \u5355\u8C03\u6808</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5E38\u89C1\u6A21\u578B\uFF1A\u627E\u51FA\u6BCF\u4E2A\u6570\u5DE6\u8FB9\u79BB\u5B83\u6700\u8FD1\u7684\u6BD4\u5B83\u5927/\u5C0F\u7684\u6570
int tt = 0;
for (int i = 1; i &lt;= n; i ++ )
{
    while (tt &amp;&amp; check(stk[tt], i)) tt -- ;
    stk[ ++ tt] = i;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5355\u8C03\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u5355\u8C03\u961F\u5217" aria-hidden="true">#</a> \u5355\u8C03\u961F\u5217</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5E38\u89C1\u6A21\u578B\uFF1A\u627E\u51FA\u6ED1\u52A8\u7A97\u53E3\u4E2D\u7684\u6700\u5927\u503C/\u6700\u5C0F\u503C
int hh = 0, tt = -1;
for (int i = 0; i &lt; n; i ++ )
{
    while (hh &lt;= tt &amp;&amp; check_out(q[hh])) hh ++ ;  // \u5224\u65AD\u961F\u5934\u662F\u5426\u6ED1\u51FA\u7A97\u53E3
    while (hh &lt;= tt &amp;&amp; check(q[tt], i)) tt -- ;
    q[ ++ tt] = i;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kmp" tabindex="-1"><a class="header-anchor" href="#kmp" aria-hidden="true">#</a> KMP</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// s[]\u662F\u957F\u6587\u672C\uFF0Cp[]\u662F\u6A21\u5F0F\u4E32\uFF0Cn\u662Fs\u7684\u957F\u5EA6\uFF0Cm\u662Fp\u7684\u957F\u5EA6
\u6C42\u6A21\u5F0F\u4E32\u7684Next\u6570\u7EC4\uFF1A
for (int i = 2, j = 0; i &lt;= m; i ++ )
{
    while (j &amp;&amp; p[i] != p[j + 1]) j = ne[j];
    if (p[i] == p[j + 1]) j ++ ;
    ne[i] = j;
}

// \u5339\u914D
for (int i = 1, j = 0; i &lt;= n; i ++ )
{
    while (j &amp;&amp; s[i] != p[j + 1]) j = ne[j];
    if (s[i] == p[j + 1]) j ++ ;
    if (j == m)
    {
        j = ne[j];
        // \u5339\u914D\u6210\u529F\u540E\u7684\u903B\u8F91
    }
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="trie\u6811" tabindex="-1"><a class="header-anchor" href="#trie\u6811" aria-hidden="true">#</a> Trie\u6811</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>int son[N][26], cnt[N], idx;
// 0\u53F7\u70B9\u65E2\u662F\u6839\u8282\u70B9\uFF0C\u53C8\u662F\u7A7A\u8282\u70B9
// son[][]\u5B58\u50A8\u6811\u4E2D\u6BCF\u4E2A\u8282\u70B9\u7684\u5B50\u8282\u70B9
// cnt[]\u5B58\u50A8\u4EE5\u6BCF\u4E2A\u8282\u70B9\u7ED3\u5C3E\u7684\u5355\u8BCD\u6570\u91CF

// \u63D2\u5165\u4E00\u4E2A\u5B57\u7B26\u4E32
void insert(char *str)
{
    int p = 0;
    for (int i = 0; str[i]; i ++ )
    {
        int u = str[i] - &#39;a&#39;;
        if (!son[p][u]) son[p][u] = ++ idx;
        p = son[p][u];
    }
    cnt[p] ++ ;
}

// \u67E5\u8BE2\u5B57\u7B26\u4E32\u51FA\u73B0\u7684\u6B21\u6570
int query(char *str)
{
    int p = 0;
    for (int i = 0; str[i]; i ++ )
    {
        int u = str[i] - &#39;a&#39;;
        if (!son[p][u]) return 0;
        p = son[p][u];
    }
    return cnt[p];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E76\u67E5\u96C6" tabindex="-1"><a class="header-anchor" href="#\u5E76\u67E5\u96C6" aria-hidden="true">#</a> \u5E76\u67E5\u96C6</h3><p>\u5C06\u4E24\u4E2A\u96C6\u5408\u5408\u5E76</p><p>\u8BE2\u95EE\u4E24\u4E2A\u5143\u7D20\u662F\u5426\u5728\u4E00\u4E2A\u96C6\u5408\u5F53\u4E2D</p><p>\u57FA\u672C\u539F\u7406\uFF1A\u6BCF\u4E2A\u96C6\u5408\u7528\u4E00\u9897\u6811\u6765\u8868\u793A\uFF0C\u6811\u6839\u7684\u6807\u53F7\u5C31\u662F\u6574\u4E2A\u96C6\u5408\u7684\u7F16\u53F7\uFF0C\u6BCF\u4E2A\u8282\u70B9\u5B58\u50A8\u5B83\u7684\u7236\u8282\u70B9\uFF0Cp[x]\u8868\u793Ax\u7684\u7236\u8282\u70B9</p><p>\u95EE\u98981\uFF1A\u5982\u4F55\u5224\u65AD\u6811\u6839\uFF1Aif(p[x] == x)</p><p>\u95EE\u98982\uFF1A\u5982\u4F55\u6C42x\u7684\u96C6\u5408\u7F16\u53F7\uFF1Awhile (p[x] != x) x = p[x];</p><p>\u95EE\u98983\uFF1A\u5982\u4F55\u5408\u5E76\u4E24\u4E2A\u96C6\u5408\uFF1Apx\u662Fx\u7684\u96C6\u5408\u7F16\u53F7\uFF0Cpy\u662Fy\u7684\u96C6\u5408\u7F16\u53F7\uFF0Cpx = y</p><h3 id="_1-\u6734\u7D20\u5E76\u67E5\u96C6" tabindex="-1"><a class="header-anchor" href="#_1-\u6734\u7D20\u5E76\u67E5\u96C6" aria-hidden="true">#</a> 1.\u6734\u7D20\u5E76\u67E5\u96C6</h3><pre><code>int p[N]; //\u5B58\u50A8\u6BCF\u4E2A\u70B9\u7684\u7956\u5B97\u8282\u70B9

// \u8FD4\u56DEx\u7684\u7956\u5B97\u8282\u70B9
public int find(int x) {
	if (x != p[x]) p[x] = find(p[x]); 
	return p[x];
}

// \u5408\u5E76a\u548Cb\u6240\u5728\u7684\u4E24\u4E2A\u96C6\u5408\uFF1A
public void union(int a, int b) {
	p[find(a)] = find(b);
}

// \u521D\u59CB\u5316\uFF0C\u5047\u5B9A\u8282\u70B9\u7F16\u53F7\u662F1 ~ n
for (int i = 1; i &lt;= n; i ++ ) p[i] = i;
</code></pre><h3 id="_2-\u7EF4\u62A4size\u7684\u5E76\u67E5\u96C6" tabindex="-1"><a class="header-anchor" href="#_2-\u7EF4\u62A4size\u7684\u5E76\u67E5\u96C6" aria-hidden="true">#</a> 2.\u7EF4\u62A4size\u7684\u5E76\u67E5\u96C6</h3><pre><code>int p[N], size[N];
//p[]\u5B58\u50A8\u6BCF\u4E2A\u70B9\u7684\u7956\u5B97\u8282\u70B9, size[]\u53EA\u6709\u7956\u5B97\u8282\u70B9\u7684\u6709\u610F\u4E49\uFF0C\u8868\u793A\u7956\u5B97\u8282\u70B9\u6240\u5728\u96C6\u5408\u4E2D\u7684\u70B9\u7684\u6570\u91CF

// \u8FD4\u56DEx\u7684\u7956\u5B97\u8282\u70B9
public int find(int x) {
	if (x != p[x]) p[x] = find(p[x]); 
	return p[x];
}

// \u5408\u5E76a\u548Cb\u6240\u5728\u7684\u4E24\u4E2A\u96C6\u5408\uFF1A
public void union(int a, int b) {
	size[find(b)] += size[find(a)];
	p[find(a)] = find(b);
}

// \u521D\u59CB\u5316\uFF0C\u5047\u5B9A\u8282\u70B9\u7F16\u53F7\u662F1~n
for (int i = 1; i &lt;= n; i ++ )
{
    p[i] = i;
    size[i] = 1;
}
</code></pre><h3 id="_3-\u7EF4\u62A4\u5230\u7956\u5B97\u8282\u70B9\u8DDD\u79BB\u7684\u5E76\u67E5\u96C6" tabindex="-1"><a class="header-anchor" href="#_3-\u7EF4\u62A4\u5230\u7956\u5B97\u8282\u70B9\u8DDD\u79BB\u7684\u5E76\u67E5\u96C6" aria-hidden="true">#</a> 3.\u7EF4\u62A4\u5230\u7956\u5B97\u8282\u70B9\u8DDD\u79BB\u7684\u5E76\u67E5\u96C6</h3><pre><code>int p[N], d[N];
//p[]\u5B58\u50A8\u6BCF\u4E2A\u70B9\u7684\u7956\u5B97\u8282\u70B9, d[x]\u5B58\u50A8x\u5230p[x]\u7684\u8DDD\u79BB

// \u8FD4\u56DEx\u7684\u7956\u5B97\u8282\u70B9
int find(int x)
{
    if (p[x] != x)
    {
        int u = find(p[x]);
        d[x] += d[p[x]];
        p[x] = u;
    }
    return p[x];
}

// \u521D\u59CB\u5316\uFF0C\u5047\u5B9A\u8282\u70B9\u7F16\u53F7\u662F1~n
for (int i = 1; i &lt;= n; i ++ )
{
    p[i] = i;
    d[i] = 0;
}

// \u5408\u5E76a\u548Cb\u6240\u5728\u7684\u4E24\u4E2A\u96C6\u5408\uFF1A
p[find(a)] = find(b);
d[find(a)] = distance; // \u6839\u636E\u5177\u4F53\u95EE\u9898\uFF0C\u521D\u59CB\u5316find(a)\u7684\u504F\u79FB\u91CF
</code></pre><h3 id="\u5806" tabindex="-1"><a class="header-anchor" href="#\u5806" aria-hidden="true">#</a> \u5806</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// h[N]\u5B58\u50A8\u5806\u4E2D\u7684\u503C, h[1]\u662F\u5806\u9876\uFF0Cx\u7684\u5DE6\u513F\u5B50\u662F2x, \u53F3\u513F\u5B50\u662F2x + 1
// ph[k]\u5B58\u50A8\u7B2Ck\u4E2A\u63D2\u5165\u7684\u70B9\u5728\u5806\u4E2D\u7684\u4F4D\u7F6E
// hp[k]\u5B58\u50A8\u5806\u4E2D\u4E0B\u6807\u662Fk\u7684\u70B9\u662F\u7B2C\u51E0\u4E2A\u63D2\u5165\u7684
int h[N], ph[N], hp[N], size;

// \u4EA4\u6362\u4E24\u4E2A\u70B9\uFF0C\u53CA\u5176\u6620\u5C04\u5173\u7CFB
void heap_swap(int a, int b)
{
    swap(ph[hp[a]],ph[hp[b]]);
    swap(hp[a], hp[b]);
    swap(h[a], h[b]);
}

void down(int u)
{
    int t = u;
    if (u * 2 &lt;= size &amp;&amp; h[u * 2] &lt; h[t]) t = u * 2;
    if (u * 2 + 1 &lt;= size &amp;&amp; h[u * 2 + 1] &lt; h[t]) t = u * 2 + 1;
    if (u != t)
    {
        heap_swap(u, t);
        down(t);
    }
}

void up(int u)
{
    while (u / 2 &amp;&amp; h[u] &lt; h[u / 2])
    {
        heap_swap(u, u / 2);
        u &gt;&gt;= 1;
    }
}

// O(n)\u5EFA\u5806
for (int i = n / 2; i; i -- ) down(i);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E00\u822C\u54C8\u5E0C" tabindex="-1"><a class="header-anchor" href="#\u4E00\u822C\u54C8\u5E0C" aria-hidden="true">#</a> \u4E00\u822C\u54C8\u5E0C</h3><h3 id="_1-\u62C9\u94FE\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-\u62C9\u94FE\u6CD5" aria-hidden="true">#</a> 1.\u62C9\u94FE\u6CD5</h3><pre><code>int h[N], e[N], ne[N], idx;
// \u5411\u54C8\u5E0C\u8868\u4E2D\u63D2\u5165\u4E00\u4E2A\u6570
void insert(int x)
{
    int k = (x % N + N) % N;
    e[idx] = x;
    ne[idx] = h[k];
    h[k] = idx ++ ;
}

// \u5728\u54C8\u5E0C\u8868\u4E2D\u67E5\u8BE2\u67D0\u4E2A\u6570\u662F\u5426\u5B58\u5728
bool find(int x)
{
    int k = (x % N + N) % N;
    for (int i = h[k]; i != -1; i = ne[i])
        if (e[i] == x)
            return true;

    return false;
}
</code></pre><h3 id="_2-\u5F00\u653E\u5BFB\u5740\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u5F00\u653E\u5BFB\u5740\u6CD5" aria-hidden="true">#</a> 2.\u5F00\u653E\u5BFB\u5740\u6CD5</h3><pre><code> int h[N];
// \u5982\u679Cx\u5728\u54C8\u5E0C\u8868\u4E2D\uFF0C\u8FD4\u56DEx\u7684\u4E0B\u6807\uFF1B\u5982\u679Cx\u4E0D\u5728\u54C8\u5E0C\u8868\u4E2D\uFF0C\u8FD4\u56DEx\u5E94\u8BE5\u63D2\u5165\u7684\u4F4D\u7F6E
int find(int x)
{
    int t = (x % N + N) % N;
    while (h[t] != null &amp;&amp; h[t] != x)
    {
        t ++ ;
        if (t == N) t = 0;
    }
    return t;
}
</code></pre><h3 id="\u5B57\u7B26\u4E32\u54C8\u5E0C" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u54C8\u5E0C" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u54C8\u5E0C</h3><p>\u6838\u5FC3\u601D\u60F3\uFF1A\u5C06\u5B57\u7B26\u4E32\u770B\u6210P\u8FDB\u5236\u6570\uFF0CP\u7684\u7ECF\u9A8C\u503C\u662F131\u621613331\uFF0C\u53D6\u8FD9\u4E24\u4E2A\u503C\u7684\u51B2\u7A81\u6982\u7387\u4F4E \u5C0F\u6280\u5DE7\uFF1A\u53D6\u6A21\u7684\u6570\u75282^64\uFF0C\u8FD9\u6837\u76F4\u63A5\u7528unsigned long long\u5B58\u50A8\uFF0C\u6EA2\u51FA\u7684\u7ED3\u679C\u5C31\u662F\u53D6\u6A21\u7684\u7ED3\u679C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>typedef unsigned long long ULL;
ULL h[N], p[N]; // h[k]\u5B58\u50A8\u5B57\u7B26\u4E32\u524Dk\u4E2A\u5B57\u6BCD\u7684\u54C8\u5E0C\u503C, p[k]\u5B58\u50A8 P^k mod 2^64

// \u521D\u59CB\u5316
p[0] = 1;
for (int i = 1; i &lt;= n; i ++ )
{
    h[i] = h[i - 1] * P + str[i];
    p[i] = p[i - 1] * P;
}

// \u8BA1\u7B97\u5B50\u4E32 str[l ~ r] \u7684\u54C8\u5E0C\u503C
ULL get(int l, int r)
{
    return h[r] - h[l - 1] * p[r - l + 1];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-stl\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#c-stl\u7B80\u4ECB" aria-hidden="true">#</a> C++ STL\u7B80\u4ECB</h3><pre><code>vector, \u53D8\u957F\u6570\u7EC4\uFF0C\u500D\u589E\u7684\u601D\u60F3
    size()  \u8FD4\u56DE\u5143\u7D20\u4E2A\u6570
    empty()  \u8FD4\u56DE\u662F\u5426\u4E3A\u7A7A
    clear()  \u6E05\u7A7A
    front()/back()
    push_back()/pop_back()
    begin()/end()
    []
    \u652F\u6301\u6BD4\u8F83\u8FD0\u7B97\uFF0C\u6309\u5B57\u5178\u5E8F

pair&lt;int, int&gt;
    first, \u7B2C\u4E00\u4E2A\u5143\u7D20
    second, \u7B2C\u4E8C\u4E2A\u5143\u7D20
    \u652F\u6301\u6BD4\u8F83\u8FD0\u7B97\uFF0C\u4EE5first\u4E3A\u7B2C\u4E00\u5173\u952E\u5B57\uFF0C\u4EE5second\u4E3A\u7B2C\u4E8C\u5173\u952E\u5B57\uFF08\u5B57\u5178\u5E8F\uFF09

string\uFF0C\u5B57\u7B26\u4E32
    size()/length()  \u8FD4\u56DE\u5B57\u7B26\u4E32\u957F\u5EA6
    empty()
    clear()
    substr(\u8D77\u59CB\u4E0B\u6807\uFF0C(\u5B50\u4E32\u957F\u5EA6))  \u8FD4\u56DE\u5B50\u4E32
    c_str()  \u8FD4\u56DE\u5B57\u7B26\u4E32\u6240\u5728\u5B57\u7B26\u6570\u7EC4\u7684\u8D77\u59CB\u5730\u5740

queue, \u961F\u5217
    size()
    empty()
    push()  \u5411\u961F\u5C3E\u63D2\u5165\u4E00\u4E2A\u5143\u7D20
    front()  \u8FD4\u56DE\u961F\u5934\u5143\u7D20
    back()  \u8FD4\u56DE\u961F\u5C3E\u5143\u7D20
    pop()  \u5F39\u51FA\u961F\u5934\u5143\u7D20

priority_queue, \u4F18\u5148\u961F\u5217\uFF0C\u9ED8\u8BA4\u662F\u5927\u6839\u5806
    size()
    empty()
    push()  \u63D2\u5165\u4E00\u4E2A\u5143\u7D20
    top()  \u8FD4\u56DE\u5806\u9876\u5143\u7D20
    pop()  \u5F39\u51FA\u5806\u9876\u5143\u7D20
    \u5B9A\u4E49\u6210\u5C0F\u6839\u5806\u7684\u65B9\u5F0F\uFF1Apriority_queue&lt;int, vector&lt;int&gt;, greater&lt;int&gt;&gt; q;

stack, \u6808
    size()
    empty()
    push()  \u5411\u6808\u9876\u63D2\u5165\u4E00\u4E2A\u5143\u7D20
    top()  \u8FD4\u56DE\u6808\u9876\u5143\u7D20
    pop()  \u5F39\u51FA\u6808\u9876\u5143\u7D20

deque, \u53CC\u7AEF\u961F\u5217
    size()
    empty()
    clear()
    front()/back()
    push_back()/pop_back()
    push_front()/pop_front()
    begin()/end()
    []

set, map, multiset, multimap, \u57FA\u4E8E\u5E73\u8861\u4E8C\u53C9\u6811\uFF08\u7EA2\u9ED1\u6811\uFF09\uFF0C\u52A8\u6001\u7EF4\u62A4\u6709\u5E8F\u5E8F\u5217
    size()
    empty()
    clear()
    begin()/end()
    ++, -- \u8FD4\u56DE\u524D\u9A71\u548C\u540E\u7EE7\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6 O(logn)
set/multiset
    insert()  \u63D2\u5165\u4E00\u4E2A\u6570
    find()  \u67E5\u627E\u4E00\u4E2A\u6570
    count()  \u8FD4\u56DE\u67D0\u4E00\u4E2A\u6570\u7684\u4E2A\u6570
    erase()
        (1) \u8F93\u5165\u662F\u4E00\u4E2A\u6570x\uFF0C\u5220\u9664\u6240\u6709x   O(k + logn)
        (2) \u8F93\u5165\u4E00\u4E2A\u8FED\u4EE3\u5668\uFF0C\u5220\u9664\u8FD9\u4E2A\u8FED\u4EE3\u5668
    lower_bound()/upper_bound()
        lower_bound(x)  \u8FD4\u56DE\u5927\u4E8E\u7B49\u4E8Ex\u7684\u6700\u5C0F\u7684\u6570\u7684\u8FED\u4EE3\u5668
        upper_bound(x)  \u8FD4\u56DE\u5927\u4E8Ex\u7684\u6700\u5C0F\u7684\u6570\u7684\u8FED\u4EE3\u5668
map/multimap
    insert()  \u63D2\u5165\u7684\u6570\u662F\u4E00\u4E2Apair
    erase()  \u8F93\u5165\u7684\u53C2\u6570\u662Fpair\u6216\u8005\u8FED\u4EE3\u5668
    find()
    []  \u6CE8\u610Fmultimap\u4E0D\u652F\u6301\u6B64\u64CD\u4F5C\u3002 \u65F6\u95F4\u590D\u6742\u5EA6\u662F O(logn)
    lower_bound()/upper_bound()
    unordered_set, unordered_map, unordered_multiset, unordered_multimap, \u54C8\u5E0C\u8868
    \u548C\u4E0A\u9762\u7C7B\u4F3C\uFF0C\u589E\u5220\u6539\u67E5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u662F O(1)
    \u4E0D\u652F\u6301 lower_bound()/upper_bound()\uFF0C \u8FED\u4EE3\u5668\u7684++\uFF0C--

bitset, \u5727\u4F4D
    bitset&lt;10000&gt; s;
    ~, &amp;, |, ^
    &gt;&gt;, &lt;&lt;
    ==, !=
    []
count()  \u8FD4\u56DE\u6709\u591A\u5C11\u4E2A1

any()  \u5224\u65AD\u662F\u5426\u81F3\u5C11\u6709\u4E00\u4E2A1
none()  \u5224\u65AD\u662F\u5426\u5168\u4E3A0

set()  \u628A\u6240\u6709\u4F4D\u7F6E\u62101
set(k, v)  \u5C06\u7B2Ck\u4F4D\u53D8\u6210v
reset()  \u628A\u6240\u6709\u4F4D\u53D8\u62100
flip()  \u7B49\u4EF7\u4E8E~
flip(k) \u628A\u7B2Ck\u4F4D\u53D6\u53CD
</code></pre><p>\u6811\u4E0E\u56FE\u7684\u5B58\u50A8 \u6811\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u56FE\uFF0C\u4E0E\u56FE\u7684\u5B58\u50A8\u65B9\u5F0F\u76F8\u540C\u3002 \u5BF9\u4E8E\u65E0\u5411\u56FE\u4E2D\u7684\u8FB9ab\uFF0C\u5B58\u50A8\u4E24\u6761\u6709\u5411\u8FB9a-&gt;b, b-&gt;a\u3002 \u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u53EA\u8003\u8651\u6709\u5411\u56FE\u7684\u5B58\u50A8\u3002</p><p>(1) \u90BB\u63A5\u77E9\u9635\uFF1Ag[a] [b] \u5B58\u50A8\u8FB9a-&gt;b</p><p>(2) \u90BB\u63A5\u8868\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5BF9\u4E8E\u6BCF\u4E2A\u70B9k\uFF0C\u5F00\u4E00\u4E2A\u5355\u94FE\u8868\uFF0C\u5B58\u50A8k\u6240\u6709\u53EF\u4EE5\u8D70\u5230\u7684\u70B9\u3002h[k]\u5B58\u50A8\u8FD9\u4E2A\u5355\u94FE\u8868\u7684\u5934\u7ED3\u70B9
int h[N], e[N], ne[N], idx;

// \u6DFB\u52A0\u4E00\u6761\u8FB9a-&gt;b
void add(int a, int b)
{
    e[idx] = b, ne[idx] = h[a], h[a] = idx ++ ;
}

// \u521D\u59CB\u5316
idx = 0;
memset(h, -1, sizeof h);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09\u3001\u641C\u7D22\u4E0E\u56FE\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u641C\u7D22\u4E0E\u56FE\u8BBA" aria-hidden="true">#</a> \u4E09\u3001\u641C\u7D22\u4E0E\u56FE\u8BBA</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u6709\u5411\u5E26\u6743\u56FE\u6700\u5C0F\u73AF:Dijkstra
2. \u6709\u5411\u5E26\u6743\u56FE\u6700\u5927\u73AF:\u8FB9\u53D8\u4E3A\u8D1F\u6570+spfa \u6C42\u6700\u77ED\u8DEF
3. \u65E0\u5411\u5E26\u6743\u56FE\u6700\u5C0F\u73AF:Dijkstra
4. \u65E0\u5411\u5E26\u6743\u56FE\u6700\u5927\u73AF:\u8FB9\u53D8\u4E3A\u8D1F\u6570+spfa \u6C42\u6700\u77ED\u8DEF
5. \u6709\u5411\u65E0\u6743\u56FE\u6700\u5C0F\u73AF:\u62D3\u6251\u6392\u5E8F\u627E\u5230\u6240\u6709\u73AF\u5206\u7EC4/Tarjan \u7F29\u70B9\u6210\u62D3\u6251\u56FE
6. \u6709\u5411\u65E0\u6743\u56FE\u6700\u5927\u73AF:\u62D3\u6251\u6392\u5E8F\u627E\u5230\u6240\u6709\u73AF\u5206\u7EC4/Tarjan \u7F29\u70B9\u6210\u62D3\u6251\u56FE
7. \u65E0\u5411\u65E0\u6743\u56FE\u6700\u5C0F\u73AF:\u62D3\u6251\u6392\u5E8F\u627E\u5230\u6240\u6709\u73AF\u5206\u7EC4/dfs \u627E\u5230\u6240\u6709\u73AF\u5206\u7EC4/Tarjan \u7F29\u70B9\u6210\u6811
8. \u65E0\u5411\u65E0\u6743\u56FE\u6700\u5927\u73AF:\u62D3\u6251\u6392\u5E8F\u627E\u5230\u6240\u6709\u73AF\u5206\u7EC4/dfs \u627E\u5230\u6240\u6709\u73AF\u5206\u7EC4/Tarjan \u7F29\u70B9\u6210\u6811

- Dijkstra\u3001spfa:\u679A\u4E3E\u6240\u6709\u8FB9\uFF0C\u5220\u9664\u8FD9\u6761\u8FB9\u4E4B\u540E\u4EE5\u8FD9\u6761\u8FB9\u7684\u7AEF\u70B9\u4E3A\u8D77\u70B9\u7EC8\u70B9\u8DD1\u4E00\u6B21\u6700\u77ED\u8DEF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6811\u4E0E\u56FE\u7684\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u6811\u4E0E\u56FE\u7684\u904D\u5386" aria-hidden="true">#</a> \u6811\u4E0E\u56FE\u7684\u904D\u5386</h3><p>\u65F6\u95F4\u590D\u6742\u5EA6 O(n+m)O(n+m), nn \u8868\u793A\u70B9\u6570\uFF0Cmm \u8868\u793A\u8FB9\u6570</p><h3 id="dfs\u6DF1\u5EA6\u4F18\u5148\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#dfs\u6DF1\u5EA6\u4F18\u5148\u904D\u5386" aria-hidden="true">#</a> dfs\u6DF1\u5EA6\u4F18\u5148\u904D\u5386</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>int dfs(int u)
{
    st[u] = true; // st[u] \u8868\u793A\u70B9u\u5DF2\u7ECF\u88AB\u904D\u5386\u8FC7

    for (int i = h[u]; i != -1; i = ne[i])
    {
        int j = e[i];
        if (!st[j]) dfs(j);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bfs\u5BBD\u5EA6\u4F18\u5148\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#bfs\u5BBD\u5EA6\u4F18\u5148\u904D\u5386" aria-hidden="true">#</a> bfs\u5BBD\u5EA6\u4F18\u5148\u904D\u5386</h3><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>queue&lt;int&gt; q;
st[1] = true; // \u8868\u793A1\u53F7\u70B9\u5DF2\u7ECF\u88AB\u904D\u5386\u8FC7
q.push(1);

while (q.size())
{
    int t = q.front();
    q.pop();

    for (int i = h[t]; i != -1; i = ne[i])
    {
        int j = e[i];
        if (!st[j])
        {
            st[j] = true; // \u8868\u793A\u70B9j\u5DF2\u7ECF\u88AB\u904D\u5386\u8FC7
            q.push(j);
        }
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6811\u7684\u524D\u5E8F\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u6811\u7684\u524D\u5E8F\u904D\u5386" aria-hidden="true">#</a> \u6811\u7684\u524D\u5E8F\u904D\u5386</h3><p>\u9012\u5F52</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    List&lt;Integer&gt; res = new ArrayList&lt;&gt;();
    public List&lt;Integer&gt; preorderTraversal(TreeNode root) {
        dfs(root);
        return res;
    }
    public void dfs(TreeNode root){
        if (root == null) return;
        res.add(root.val);
        dfs(root.left);
        dfs(root.right);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FED\u4EE3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public List&lt;Integer&gt; preorderTraversal(TreeNode root) {
        List&lt;Integer&gt; res = new ArrayList&lt;&gt;();
        Stack&lt;TreeNode&gt; stack = new Stack&lt;&gt;();
        while (root != null || !stack.isEmpty()) {
            while (root != null) {
                res.add(root.val);
                stack.push(root);
                root = root.left;
            }
            root = stack.pop();
            root = root.right;
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6811\u7684\u4E2D\u5E8F\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u6811\u7684\u4E2D\u5E8F\u904D\u5386" aria-hidden="true">#</a> \u6811\u7684\u4E2D\u5E8F\u904D\u5386</h3><p>\u9012\u5F52</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
	List&lt;Integer&gt; res = new ArrayList&lt;&gt;();
    public List&lt;Integer&gt; inorderTraversal(TreeNode root){
        dfs(root);
        return res;
    }
    public void dfs(TreeNode root){
        if(root == null) return;
        dfs(root.left);
        res.add(root.val);
        dfs(root.right);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FED\u4EE3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public List&lt;Integer&gt; inorderTraversal(TreeNode root) {
        Stack&lt;TreeNode&gt; stack = new Stack&lt;&gt;();
        List&lt;Integer&gt; res = new ArrayList&lt;&gt;();
        while (root != null || !stack.isEmpty()) {
            while (root != null) {
                stack.push(root);
                root = root.left;
            }
            root = stack.pop();
            res.add(root.val);
            root = root.right;
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6811\u7684\u540E\u5E8F\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u6811\u7684\u540E\u5E8F\u904D\u5386" aria-hidden="true">#</a> \u6811\u7684\u540E\u5E8F\u904D\u5386</h3><p>\u9012\u5F52</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    List&lt;Integer&gt; res = new ArrayList&lt;&gt;();
    public List&lt;Integer&gt; postorderTraversal(TreeNode root) {
        dfs(root);
        return res;
    }
    public void dfs(TreeNode root){
        if (root == null) return;
        dfs(root.left);
        dfs(root.right);
        res.add(root.val);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FED\u4EE3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public List&lt;Integer&gt; postorderTraversal(TreeNode root) {
        List&lt;Integer&gt; res = new ArrayList&lt;&gt;();
        Stack&lt;TreeNode&gt; stack = new Stack&lt;&gt;();
        Stack&lt;TreeNode&gt; resStack = new Stack&lt;&gt;();
        while (root != null || !stack.isEmpty()) {
            while (root != null) {
                resStack.push(root);
                stack.push(root);
                root = root.right;
            }
            root = stack.pop();
            root = root.left;
        }
        while (!resStack.isEmpty()) {
            root = resStack.pop();
            res.add(root.val);
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6811\u7684\u5C42\u5E8F\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u6811\u7684\u5C42\u5E8F\u904D\u5386" aria-hidden="true">#</a> \u6811\u7684\u5C42\u5E8F\u904D\u5386</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public List&lt;List&lt;Integer&gt;&gt; levelOrder(TreeNode root) {
        List&lt;List&lt;Integer&gt;&gt; res = new ArrayList&lt;&gt;();
        Queue&lt;TreeNode&gt; queue = new LinkedList&lt;&gt;();
        if (root != null)  queue.add(root);
        while (!queue.isEmpty()) {
            int count = queue.size();
            List&lt;Integer&gt; level = new ArrayList&lt;&gt;();
            while (count != 0) {
                TreeNode node = queue.poll();
                level.add(node.val);
                if (node.left != null) 	queue.add(node.left);
                if (node.right != null) queue.add(node.right);
                count--;
            }
            res.add(level);
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u62D3\u6251\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u62D3\u6251\u6392\u5E8F" aria-hidden="true">#</a> \u62D3\u6251\u6392\u5E8F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u65F6\u95F4\u590D\u6742\u5EA6 O(n+m)O(n+m), nn \u8868\u793A\u70B9\u6570\uFF0Cmm \u8868\u793A\u8FB9\u6570
bool topsort()
{
    int hh = 0, tt = -1;

    // d[i] \u5B58\u50A8\u70B9i\u7684\u5165\u5EA6
    for (int i = 1; i &lt;= n; i ++ )
        if (!d[i])
            q[ ++ tt] = i;
    
    while (hh &lt;= tt)
    {
        int t = q[hh ++ ];
    
        for (int i = h[t]; i != -1; i = ne[i])
        {
            int j = e[i];
            if (-- d[j] == 0)
                q[ ++ tt] = j;
        }
    }
    
    // \u5982\u679C\u6240\u6709\u70B9\u90FD\u5165\u961F\u4E86\uFF0C\u8BF4\u660E\u5B58\u5728\u62D3\u6251\u5E8F\u5217\uFF1B\u5426\u5219\u4E0D\u5B58\u5728\u62D3\u6251\u5E8F\u5217\u3002
    return tt == n - 1;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6734\u7D20dijkstra\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6734\u7D20dijkstra\u7B97\u6CD5" aria-hidden="true">#</a> \u6734\u7D20dijkstra\u7B97\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u65F6\u95F4\u590D\u6742\u662F O(n2+m)O(n2+m), nn \u8868\u793A\u70B9\u6570\uFF0Cmm \u8868\u793A\u8FB9\u6570
int g[N][N];  // \u5B58\u50A8\u6BCF\u6761\u8FB9
int dist[N];  // \u5B58\u50A81\u53F7\u70B9\u5230\u6BCF\u4E2A\u70B9\u7684\u6700\u77ED\u8DDD\u79BB
bool st[N];   // \u5B58\u50A8\u6BCF\u4E2A\u70B9\u7684\u6700\u77ED\u8DEF\u662F\u5426\u5DF2\u7ECF\u786E\u5B9A

// \u6C421\u53F7\u70B9\u5230n\u53F7\u70B9\u7684\u6700\u77ED\u8DEF\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u5219\u8FD4\u56DE-1
int dijkstra()
{
    memset(dist, 0x3f, sizeof dist);
    dist[1] = 0;

    for (int i = 0; i &lt; n - 1; i ++ )
    {
        int t = -1;     // \u5728\u8FD8\u672A\u786E\u5B9A\u6700\u77ED\u8DEF\u7684\u70B9\u4E2D\uFF0C\u5BFB\u627E\u8DDD\u79BB\u6700\u5C0F\u7684\u70B9
        for (int j = 1; j &lt;= n; j ++ )
            if (!st[j] &amp;&amp; (t == -1 || dist[t] &gt; dist[j]))
                t = j;
    
        // \u7528t\u66F4\u65B0\u5176\u4ED6\u70B9\u7684\u8DDD\u79BB
        for (int j = 1; j &lt;= n; j ++ )
            dist[j] = min(dist[j], dist[t] + g[t][j]);
    
        st[t] = true;
    }
    
    if (dist[n] == 0x3f3f3f3f) return -1;
    return dist[n];

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>static final int N = 510;
static int n, m;
static int[][] g = new int[N][N];
// \u8DDD\u79BB
static int[] dist = new int[N];
// \u6BCF\u4E2A\u70B9\u6700\u77ED\u8DEF\u662F\u5426\u786E\u5B9A
static boolean[] st = new boolean[N];

public static int dijkstra() {
        Arrays.fill(dist,0x3f3f3f3f);
        dist[1] = 0;
        for (int i = 0; i &lt; n; i ++ ) {
            int t = -1;
            for (int j = 1; j &lt;= n; j ++ ) {
                if (!st[j] &amp;&amp; (t == -1 || dist[t] &gt; dist[j])) {
                    t = j;
                }
            }
            if (t == n) break;
            st[t] = true;
            for (int j = 1; j &lt;= n; j ++ ) {
                dist[j] = Math.min(dist[j], dist[t] + g[t][j]);
            }
        }
        if (dist[n] == 0x3f3f3f3f) return -1;
        return dist[n];
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5806\u4F18\u5316\u7248dijkstra" tabindex="-1"><a class="header-anchor" href="#\u5806\u4F18\u5316\u7248dijkstra" aria-hidden="true">#</a> \u5806\u4F18\u5316\u7248dijkstra</h3><pre><code>\u65F6\u95F4\u590D\u6742\u5EA6 O(mlogn)O(mlogn), nn \u8868\u793A\u70B9\u6570\uFF0Cmm \u8868\u793A\u8FB9\u6570
typedef pair&lt;int, int&gt; PII;

int n;      // \u70B9\u7684\u6570\u91CF
int h[N], w[N], e[N], ne[N], idx;       // \u90BB\u63A5\u8868\u5B58\u50A8\u6240\u6709\u8FB9
int dist[N];        // \u5B58\u50A8\u6240\u6709\u70B9\u52301\u53F7\u70B9\u7684\u8DDD\u79BB
bool st[N];     // \u5B58\u50A8\u6BCF\u4E2A\u70B9\u7684\u6700\u77ED\u8DDD\u79BB\u662F\u5426\u5DF2\u786E\u5B9A

// \u6C421\u53F7\u70B9\u5230n\u53F7\u70B9\u7684\u6700\u77ED\u8DDD\u79BB\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219\u8FD4\u56DE-1
int dijkstra()
{
    memset(dist, 0x3f, sizeof dist);
    dist[1] = 0;
    priority_queue&lt;PII, vector&lt;PII&gt;, greater&lt;PII&gt;&gt; heap;
    heap.push({0, 1});      // first\u5B58\u50A8\u8DDD\u79BB\uFF0Csecond\u5B58\u50A8\u8282\u70B9\u7F16\u53F7
    while (heap.size())
    {
        auto t = heap.top();
        heap.pop();

        int ver = t.second, distance = t.first;

        if (st[ver]) continue;
        st[ver] = true;

        for (int i = h[ver]; i != -1; i = ne[i])
        {
            int j = e[i];
            if (dist[j] &gt; distance + w[i])
            {
                dist[j] = distance + w[i];
                heap.push({dist[j], j});
            }
        }
    }

    if (dist[n] == 0x3f3f3f3f) return -1;
    return dist[n];
}
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>static final int N = 100010;
static int n, m;
static int[] w = new int[N], h = new int[N], e = new int[N], ne = new int[N];
static int idx;
// \u8DDD\u79BB
static int[] dist = new int[N];
// \u6BCF\u4E2A\u70B9\u6700\u77ED\u8DEF\u662F\u5426\u786E\u5B9A
static boolean[] st = new boolean[N];
static PriorityQueue&lt;int[]&gt; heap = new PriorityQueue&lt;&gt;((a, b)-&gt;a[0]-b[0]);

    private static void add(int a, int b, int c) {
        e[idx] = b;
        w[idx] = c;
        ne[idx] = h[a];
        h[a] = idx ++ ;
    }

    public static int dijkstra() {
        Arrays.fill(dist,0x3f3f3f3f);
        dist[1] = 0;
        heap.add(new int[]{0, 1});
        while (!heap.isEmpty()) {
            int[] t = heap.poll();
            int ver = t[1], distance = t[0];
            if (st[ver]) continue;

            for (int i = h[ver]; i != -1; i = ne[i]) {
                int j = e[i];
                if (dist[j] &gt; distance + w[i]) {
                    dist[j] = distance + w[i];
                    heap.add(new int[]{dist[j], j});
                }
            }
        }
        if (dist[n] == 0x3f3f3f3f) return -1;
        return dist[n];
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bellman-ford\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#bellman-ford\u7B97\u6CD5" aria-hidden="true">#</a> Bellman-Ford\u7B97\u6CD5</h3><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>\u65F6\u95F4\u590D\u6742\u5EA6 O(nm)O(nm), nn \u8868\u793A\u70B9\u6570\uFF0Cmm \u8868\u793A\u8FB9\u6570
\u6CE8\u610F\u5728\u6A21\u677F\u9898\u4E2D\u9700\u8981\u5BF9\u4E0B\u9762\u7684\u6A21\u677F\u7A0D\u4F5C\u4FEE\u6539\uFF0C\u52A0\u4E0A\u5907\u4EFD\u6570\u7EC4\uFF0C\u8BE6\u60C5\u89C1\u6A21\u677F\u9898\u3002

int n, m;       // n\u8868\u793A\u70B9\u6570\uFF0Cm\u8868\u793A\u8FB9\u6570
int dist[N];        // dist[x]\u5B58\u50A81\u5230x\u7684\u6700\u77ED\u8DEF\u8DDD\u79BB

struct Edge     // \u8FB9\uFF0Ca\u8868\u793A\u51FA\u70B9\uFF0Cb\u8868\u793A\u5165\u70B9\uFF0Cw\u8868\u793A\u8FB9\u7684\u6743\u91CD
{
    int a, b, w;
}edges[M];

// \u6C421\u5230n\u7684\u6700\u77ED\u8DEF\u8DDD\u79BB\uFF0C\u5982\u679C\u65E0\u6CD5\u4ECE1\u8D70\u5230n\uFF0C\u5219\u8FD4\u56DE-1\u3002
int bellman_ford()
{
    memset(dist, 0x3f, sizeof dist);
    dist[1] = 0;
// \u5982\u679C\u7B2Cn\u6B21\u8FED\u4EE3\u4ECD\u7136\u4F1A\u677E\u5F1B\u4E09\u89D2\u4E0D\u7B49\u5F0F\uFF0C\u5C31\u8BF4\u660E\u5B58\u5728\u4E00\u6761\u957F\u5EA6\u662Fn+1\u7684\u6700\u77ED\u8DEF\u5F84\uFF0C\u7531\u62BD\u5C49\u539F\u7406\uFF0C\u8DEF\u5F84\u4E2D\u81F3\u5C11\u5B58\u5728\u4E24\u4E2A\u76F8\u540C\u7684\u70B9\uFF0C\u8BF4\u660E\u56FE\u4E2D\u5B58\u5728\u8D1F\u6743\u56DE\u8DEF\u3002
for (int i = 0; i &lt; n; i ++ )
{
    for (int j = 0; j &lt; m; j ++ )
    {
        int a = edges[j].a, b = edges[j].b, w = edges[j].w;
        if (dist[b] &gt; dist[a] + w)
            dist[b] = dist[a] + w;
    }
}

	if (dist[n] &gt; 0x3f3f3f3f / 2) return -1;
	return dist[n];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>private static int bellman_ford() {
        Arrays.fill(dist, 0x3f3f3f3f);
        dist[1] = 0;
        for (int i = 0; i &lt; k; i ++ ) {
            //\u5907\u4EFD\uFF1A\u5B58\u653E\u4E0A\u4E00\u6B21\u8FED\u4EE3\u7684\u7ED3\u679C\uFF0C\u9632\u6B62\u4E32\u8054
            backup = dist.clone();
            for (int j = 0; j &lt; m; j ++ ) {
                int a = edges[j].a, b = edges[j].b, w = edges[j].w;
                dist[b] = Math.min(dist[b], backup[a] + w);
            }
        }
        if (dist[n] &gt; 0x3f3f3f3f &gt;&gt; 1) return -1;
        return dist[n];
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="spfa-\u7B97\u6CD5-\u961F\u5217\u4F18\u5316\u7684bellman-ford\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#spfa-\u7B97\u6CD5-\u961F\u5217\u4F18\u5316\u7684bellman-ford\u7B97\u6CD5" aria-hidden="true">#</a> spfa \u7B97\u6CD5\uFF08\u961F\u5217\u4F18\u5316\u7684Bellman-Ford\u7B97\u6CD5\uFF09</h3><pre><code>\u65F6\u95F4\u590D\u6742\u5EA6 \u5E73\u5747\u60C5\u51B5\u4E0B O(m)O(m)\uFF0C\u6700\u574F\u60C5\u51B5\u4E0B O(nm)O(nm), nn \u8868\u793A\u70B9\u6570\uFF0Cmm \u8868\u793A\u8FB9\u6570
int n;      // \u603B\u70B9\u6570
int h[N], w[N], e[N], ne[N], idx;       // \u90BB\u63A5\u8868\u5B58\u50A8\u6240\u6709\u8FB9
int dist[N];        // \u5B58\u50A8\u6BCF\u4E2A\u70B9\u52301\u53F7\u70B9\u7684\u6700\u77ED\u8DDD\u79BB
bool st[N];     // \u5B58\u50A8\u6BCF\u4E2A\u70B9\u662F\u5426\u5728\u961F\u5217\u4E2D

// \u6C421\u53F7\u70B9\u5230n\u53F7\u70B9\u7684\u6700\u77ED\u8DEF\u8DDD\u79BB\uFF0C\u5982\u679C\u4ECE1\u53F7\u70B9\u65E0\u6CD5\u8D70\u5230n\u53F7\u70B9\u5219\u8FD4\u56DE-1
int spfa()
{
    memset(dist, 0x3f, sizeof dist);
    dist[1] = 0;
queue&lt;int&gt; q;
q.push(1);
st[1] = true;

while (q.size())
{
    auto t = q.front();
    q.pop();

    st[t] = false;

    for (int i = h[t]; i != -1; i = ne[i])
    {
        int j = e[i];
        if (dist[j] &gt; dist[t] + w[i])
        {
            dist[j] = dist[t] + w[i];
            if (!st[j])     // \u5982\u679C\u961F\u5217\u4E2D\u5DF2\u5B58\u5728j\uFF0C\u5219\u4E0D\u9700\u8981\u5C06j\u91CD\u590D\u63D2\u5165
            {
                q.push(j);
                st[j] = true;
            }
        }
    }
}
	if (dist[n] == 0x3f3f3f3f) return -1;
	return dist[n];
}
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>static final int N = 100010;
    static int n, m;
    static int[] w = new int[N], h = new int[N], e = new int[N], ne = new int[N];
    static int idx;
    // \u8DDD\u79BB
    static int[] dist = new int[N];
    // \u6BCF\u4E2A\u70B9\u6700\u77ED\u8DEF\u662F\u5426\u786E\u5B9A
    static boolean[] st = new boolean[N];
    
    public static int spfa() {
        Arrays.fill(dist, 0x3f3f3f3f);
        dist[1] = 0;
        Queue&lt;Integer&gt; q = new LinkedList&lt;&gt;();
        q.add(1);
        st[1] = true;

        while (!q.isEmpty()) {
            int t = q.poll();

            st[t] = false;
            for (int i = h[t]; i != -1; i = ne[i]) {
                int j = e[i];
                if (dist[j] &gt; dist[t] + w[i]) {
                    dist[j] = dist[t] + w[i];
                    if (!st[j]) {
                        q.add(j);
                        st[j] = true;
                    }
                }
            }
        }
        if (dist[n] == 0x3f3f3f3f) return -1;
        return dist[n];
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="spfa\u5224\u65AD\u56FE\u4E2D\u662F\u5426\u5B58\u5728\u8D1F\u73AF" tabindex="-1"><a class="header-anchor" href="#spfa\u5224\u65AD\u56FE\u4E2D\u662F\u5426\u5B58\u5728\u8D1F\u73AF" aria-hidden="true">#</a> spfa\u5224\u65AD\u56FE\u4E2D\u662F\u5426\u5B58\u5728\u8D1F\u73AF</h3><pre><code>\u65F6\u95F4\u590D\u6742\u5EA6\u662F O(nm)O(nm), nn \u8868\u793A\u70B9\u6570\uFF0Cmm \u8868\u793A\u8FB9\u6570
int n;      // \u603B\u70B9\u6570
int h[N], w[N], e[N], ne[N], idx;       // \u90BB\u63A5\u8868\u5B58\u50A8\u6240\u6709\u8FB9
int dist[N], cnt[N];        // dist[x]\u5B58\u50A81\u53F7\u70B9\u5230x\u7684\u6700\u77ED\u8DDD\u79BB\uFF0Ccnt[x]\u5B58\u50A81\u5230x\u7684\u6700\u77ED\u8DEF\u4E2D\u7ECF\u8FC7\u7684\u70B9\u6570
bool st[N];     // \u5B58\u50A8\u6BCF\u4E2A\u70B9\u662F\u5426\u5728\u961F\u5217\u4E2D

// \u5982\u679C\u5B58\u5728\u8D1F\u73AF\uFF0C\u5219\u8FD4\u56DEtrue\uFF0C\u5426\u5219\u8FD4\u56DEfalse\u3002
bool spfa()
{
    // \u4E0D\u9700\u8981\u521D\u59CB\u5316dist\u6570\u7EC4
    // \u539F\u7406\uFF1A\u5982\u679C\u67D0\u6761\u6700\u77ED\u8DEF\u5F84\u4E0A\u6709n\u4E2A\u70B9\uFF08\u9664\u4E86\u81EA\u5DF1\uFF09\uFF0C\u90A3\u4E48\u52A0\u4E0A\u81EA\u5DF1\u4E4B\u540E\u4E00\u5171\u6709n+1\u4E2A\u70B9\uFF0C\u7531\u62BD\u5C49\u539F\u7406\u4E00\u5B9A\u6709\u4E24\u4E2A\u70B9\u76F8\u540C\uFF0C\u6240\u4EE5\u5B58\u5728\u73AF\u3002
queue&lt;int&gt; q;
for (int i = 1; i &lt;= n; i ++ )
{
    q.push(i);
    st[i] = true;
}

while (q.size())
{
    auto t = q.front();
    q.pop();

    st[t] = false;

    for (int i = h[t]; i != -1; i = ne[i])
    {
        int j = e[i];
        if (dist[j] &gt; dist[t] + w[i])
        {
            dist[j] = dist[t] + w[i];
            cnt[j] = cnt[t] + 1;
            if (cnt[j] &gt;= n) return true;       // \u5982\u679C\u4ECE1\u53F7\u70B9\u5230x\u7684\u6700\u77ED\u8DEF\u4E2D\u5305\u542B\u81F3\u5C11n\u4E2A\u70B9\uFF08\u4E0D\u5305\u62EC\u81EA\u5DF1\uFF09\uFF0C\u5219\u8BF4\u660E\u5B58\u5728\u73AF
            if (!st[j])
            {
                q.push(j);
                st[j] = true;
            }
        }
    }
}

return false;
}
</code></pre><h3 id="floyd\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#floyd\u7B97\u6CD5" aria-hidden="true">#</a> floyd\u7B97\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u65F6\u95F4\u590D\u6742\u5EA6\u662F O(n3)O(n3), nn \u8868\u793A\u70B9\u6570
\u521D\u59CB\u5316\uFF1A
    for (int i = 1; i &lt;= n; i ++ )
        for (int j = 1; j &lt;= n; j ++ )
            if (i == j) d[i][j] = 0;
            else d[i][j] = INF;

// \u7B97\u6CD5\u7ED3\u675F\u540E\uFF0Cd[a][b]\u8868\u793Aa\u5230b\u7684\u6700\u77ED\u8DDD\u79BB
void floyd()
{
    for (int k = 1; k &lt;= n; k ++ )
        for (int i = 1; i &lt;= n; i ++ )
            for (int j = 1; j &lt;= n; j ++ )
                d[i][j] = min(d[i][j], d[i][k] + d[k][j]);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6734\u7D20\u7248prim\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6734\u7D20\u7248prim\u7B97\u6CD5" aria-hidden="true">#</a> \u6734\u7D20\u7248prim\u7B97\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u65F6\u95F4\u590D\u6742\u5EA6\u662F O(n2+m)O(n2+m), nn \u8868\u793A\u70B9\u6570\uFF0Cmm \u8868\u793A\u8FB9\u6570
int n;      // n\u8868\u793A\u70B9\u6570
int g[N][N];        // \u90BB\u63A5\u77E9\u9635\uFF0C\u5B58\u50A8\u6240\u6709\u8FB9
int dist[N];        // \u5B58\u50A8\u5176\u4ED6\u70B9\u5230\u5F53\u524D\u6700\u5C0F\u751F\u6210\u6811\u7684\u8DDD\u79BB
bool st[N];     // \u5B58\u50A8\u6BCF\u4E2A\u70B9\u662F\u5426\u5DF2\u7ECF\u5728\u751F\u6210\u6811\u4E2D


// \u5982\u679C\u56FE\u4E0D\u8FDE\u901A\uFF0C\u5219\u8FD4\u56DEINF(\u503C\u662F0x3f3f3f3f), \u5426\u5219\u8FD4\u56DE\u6700\u5C0F\u751F\u6210\u6811\u7684\u6811\u8FB9\u6743\u91CD\u4E4B\u548C
int prim()
{
    memset(dist, 0x3f, sizeof dist);

    int res = 0;
    for (int i = 0; i &lt; n; i ++ )
    {
        int t = -1;
        for (int j = 1; j &lt;= n; j ++ )
            if (!st[j] &amp;&amp; (t == -1 || dist[t] &gt; dist[j]))
                t = j;
    
        if (i &amp;&amp; dist[t] == INF) return INF;
    
        if (i) res += dist[t];
        st[t] = true;
    
        for (int j = 1; j &lt;= n; j ++ ) dist[j] = min(dist[j], g[t][j]);
    }
    
    return res;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kruskal\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#kruskal\u7B97\u6CD5" aria-hidden="true">#</a> Kruskal\u7B97\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u65F6\u95F4\u590D\u6742\u5EA6\u662F O(mlogm)O(mlogm), nn \u8868\u793A\u70B9\u6570\uFF0Cmm \u8868\u793A\u8FB9\u6570
int n, m;       // n\u662F\u70B9\u6570\uFF0Cm\u662F\u8FB9\u6570
int p[N];       // \u5E76\u67E5\u96C6\u7684\u7236\u8282\u70B9\u6570\u7EC4

struct Edge     // \u5B58\u50A8\u8FB9
{
    int a, b, w;

    bool operator&lt; (const Edge &amp;W)const
    {
        return w &lt; W.w;
    }

}edges[M];

int find(int x)     // \u5E76\u67E5\u96C6\u6838\u5FC3\u64CD\u4F5C
{
    if (p[x] != x) p[x] = find(p[x]);
    return p[x];
}

int kruskal()
{
    sort(edges, edges + m);

    for (int i = 1; i &lt;= n; i ++ ) p[i] = i;    // \u521D\u59CB\u5316\u5E76\u67E5\u96C6
    
    int res = 0, cnt = 0;
    for (int i = 0; i &lt; m; i ++ )
    {
        int a = edges[i].a, b = edges[i].b, w = edges[i].w;
    
        a = find(a), b = find(b);
        if (a != b)     // \u5982\u679C\u4E24\u4E2A\u8FDE\u901A\u5757\u4E0D\u8FDE\u901A\uFF0C\u5219\u5C06\u8FD9\u4E24\u4E2A\u8FDE\u901A\u5757\u5408\u5E76
        {
            p[a] = b;
            res += w;
            cnt ++ ;
        }
    }
    
    if (cnt &lt; n - 1) return INF;
    return res;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u67D3\u8272\u6CD5\u5224\u522B\u4E8C\u5206\u56FE" tabindex="-1"><a class="header-anchor" href="#\u67D3\u8272\u6CD5\u5224\u522B\u4E8C\u5206\u56FE" aria-hidden="true">#</a> \u67D3\u8272\u6CD5\u5224\u522B\u4E8C\u5206\u56FE</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u65F6\u95F4\u590D\u6742\u5EA6\u662F O(n+m)O(n+m), nn \u8868\u793A\u70B9\u6570\uFF0Cmm \u8868\u793A\u8FB9\u6570
int n;      // n\u8868\u793A\u70B9\u6570
int h[N], e[M], ne[M], idx;     // \u90BB\u63A5\u8868\u5B58\u50A8\u56FE
int color[N];       // \u8868\u793A\u6BCF\u4E2A\u70B9\u7684\u989C\u8272\uFF0C-1\u8868\u793A\u672A\u67D3\u8272\uFF0C0\u8868\u793A\u767D\u8272\uFF0C1\u8868\u793A\u9ED1\u8272

// \u53C2\u6570\uFF1Au\u8868\u793A\u5F53\u524D\u8282\u70B9\uFF0Cc\u8868\u793A\u5F53\u524D\u70B9\u7684\u989C\u8272
bool dfs(int u, int c)
{
    color[u] = c;
    for (int i = h[u]; i != -1; i = ne[i])
    {
        int j = e[i];
        if (color[j] == -1)
        {
            if (!dfs(j, !c)) return false;
        }
        else if (color[j] == c) return false;
    }

    return true;

}

bool check()
{
    memset(color, -1, sizeof color);
    bool flag = true;
    for (int i = 1; i &lt;= n; i ++ )
        if (color[i] == -1)
            if (!dfs(i, 0))
            {
                flag = false;
                break;
            }
    return flag;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5308\u7259\u5229\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5308\u7259\u5229\u7B97\u6CD5" aria-hidden="true">#</a> \u5308\u7259\u5229\u7B97\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u65F6\u95F4\u590D\u6742\u5EA6\u662F O(nm)O(nm), nn \u8868\u793A\u70B9\u6570\uFF0Cmm \u8868\u793A\u8FB9\u6570
int n1, n2;     // n1\u8868\u793A\u7B2C\u4E00\u4E2A\u96C6\u5408\u4E2D\u7684\u70B9\u6570\uFF0Cn2\u8868\u793A\u7B2C\u4E8C\u4E2A\u96C6\u5408\u4E2D\u7684\u70B9\u6570
int h[N], e[M], ne[M], idx;     // \u90BB\u63A5\u8868\u5B58\u50A8\u6240\u6709\u8FB9\uFF0C\u5308\u7259\u5229\u7B97\u6CD5\u4E2D\u53EA\u4F1A\u7528\u5230\u4ECE\u7B2C\u4E00\u4E2A\u96C6\u5408\u6307\u5411\u7B2C\u4E8C\u4E2A\u96C6\u5408\u7684\u8FB9\uFF0C\u6240\u4EE5\u8FD9\u91CC\u53EA\u7528\u5B58\u4E00\u4E2A\u65B9\u5411\u7684\u8FB9
int match[N];       // \u5B58\u50A8\u7B2C\u4E8C\u4E2A\u96C6\u5408\u4E2D\u7684\u6BCF\u4E2A\u70B9\u5F53\u524D\u5339\u914D\u7684\u7B2C\u4E00\u4E2A\u96C6\u5408\u4E2D\u7684\u70B9\u662F\u54EA\u4E2A
bool st[N];     // \u8868\u793A\u7B2C\u4E8C\u4E2A\u96C6\u5408\u4E2D\u7684\u6BCF\u4E2A\u70B9\u662F\u5426\u5DF2\u7ECF\u88AB\u904D\u5386\u8FC7

bool find(int x)
{
    for (int i = h[x]; i != -1; i = ne[i])
    {
        int j = e[i];
        if (!st[j])
        {
            st[j] = true;
            if (match[j] == 0 || find(match[j]))
            {
                match[j] = x;
                return true;
            }
        }
    }

    return false;

}

// \u6C42\u6700\u5927\u5339\u914D\u6570\uFF0C\u4F9D\u6B21\u679A\u4E3E\u7B2C\u4E00\u4E2A\u96C6\u5408\u4E2D\u7684\u6BCF\u4E2A\u70B9\u80FD\u5426\u5339\u914D\u7B2C\u4E8C\u4E2A\u96C6\u5408\u4E2D\u7684\u70B9
int res = 0;
for (int i = 1; i &lt;= n1; i ++ )
{
    memset(st, false, sizeof st);
    if (find(i)) res ++ ;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u56DB\u3001\u6570\u5B66\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u6570\u5B66\u77E5\u8BC6" aria-hidden="true">#</a> \u56DB\u3001\u6570\u5B66\u77E5\u8BC6</h2><h3 id="_1-\u8BD5\u9664\u6CD5\u5224\u5B9A\u8D28\u6570" tabindex="-1"><a class="header-anchor" href="#_1-\u8BD5\u9664\u6CD5\u5224\u5B9A\u8D28\u6570" aria-hidden="true">#</a> 1.\u8BD5\u9664\u6CD5\u5224\u5B9A\u8D28\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bool is_prime(int x)
{
    if (x &lt; 2) return false;
    for (int i = 2; i &lt;= x / i; i ++ )
        if (x % i == 0)
            return false;
    return true;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u8BD5\u9664\u6CD5\u5206\u89E3\u8D28\u56E0\u6570" tabindex="-1"><a class="header-anchor" href="#_2-\u8BD5\u9664\u6CD5\u5206\u89E3\u8D28\u56E0\u6570" aria-hidden="true">#</a> 2.\u8BD5\u9664\u6CD5\u5206\u89E3\u8D28\u56E0\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>void divide(int x)
{
    for (int i = 2; i &lt;= x / i; i ++ )
        if (x % i == 0)
        {
            int s = 0;
            while (x % i == 0) x /= i, s ++ ;
            cout &lt;&lt; i &lt;&lt; &#39; &#39; &lt;&lt; s &lt;&lt; endl;
        }
    if (x &gt; 1) cout &lt;&lt; x &lt;&lt; &#39; &#39; &lt;&lt; 1 &lt;&lt; endl;
    cout &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u6734\u7D20\u7B5B\u6CD5\u6C42\u7D20\u6570" tabindex="-1"><a class="header-anchor" href="#_3-\u6734\u7D20\u7B5B\u6CD5\u6C42\u7D20\u6570" aria-hidden="true">#</a> 3.\u6734\u7D20\u7B5B\u6CD5\u6C42\u7D20\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>int primes[N], cnt;     // primes[]\u5B58\u50A8\u6240\u6709\u7D20\u6570
bool st[N];         // st[x]\u5B58\u50A8x\u662F\u5426\u88AB\u7B5B\u6389

void get_primes(int n)
{
    for (int i = 2; i &lt;= n; i ++ )
    {
        if (st[i]) continue;
        primes[cnt ++ ] = i;
        for (int j = i + i; j &lt;= n; j += i)
            st[j] = true;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u7EBF\u6027\u7B5B\u6CD5\u6C42\u7D20\u6570" tabindex="-1"><a class="header-anchor" href="#_4-\u7EBF\u6027\u7B5B\u6CD5\u6C42\u7D20\u6570" aria-hidden="true">#</a> 4.\u7EBF\u6027\u7B5B\u6CD5\u6C42\u7D20\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>int primes[N], cnt;     // primes[]\u5B58\u50A8\u6240\u6709\u7D20\u6570
bool st[N];         // st[x]\u5B58\u50A8x\u662F\u5426\u88AB\u7B5B\u6389

void get_primes(int n)
{
    for (int i = 2; i &lt;= n; i ++ )
    {
    	//\u5F53\u524D\u6570\u5982\u679C\u6CA1\u6709\u88AB\u7B5B\u8FC7\uFF0C\u8BF4\u660E\u5B83\u5C31\u662F\u7D20\u6570
        if (!st[i]) primes[cnt ++ ] = i;
        for (int j = 0; primes[j] &lt;= n / i; j ++ )
        {
            st[primes[j] * i] = true;
            //primes[j]\u4E00\u5B9A\u662Fi\u7684\u6700\u5C0F\u8D28\u56E0\u5B50
            if (i % primes[j] == 0) break;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-\u8BD5\u9664\u6CD5\u6C42\u6240\u6709\u7EA6\u6570" tabindex="-1"><a class="header-anchor" href="#_5-\u8BD5\u9664\u6CD5\u6C42\u6240\u6709\u7EA6\u6570" aria-hidden="true">#</a> 5.\u8BD5\u9664\u6CD5\u6C42\u6240\u6709\u7EA6\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vector&lt;int&gt; get_divisors(int x)
{
    vector&lt;int&gt; res;
    for (int i = 1; i &lt;= x / i; i ++ )
        if (x % i == 0)
        {
            res.push_back(i);
            if (i != x / i) res.push_back(x / i);
        }
    sort(res.begin(), res.end());
    return res;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-\u7EA6\u6570\u4E2A\u6570\u548C\u7EA6\u6570\u4E4B\u548C" tabindex="-1"><a class="header-anchor" href="#_6-\u7EA6\u6570\u4E2A\u6570\u548C\u7EA6\u6570\u4E4B\u548C" aria-hidden="true">#</a> 6.\u7EA6\u6570\u4E2A\u6570\u548C\u7EA6\u6570\u4E4B\u548C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5982\u679C N = p1^c1 * p2^c2 * ... *pk^ck
\u7EA6\u6570\u4E2A\u6570\uFF1A (c1 + 1) * (c2 + 1) * ... * (ck + 1)
\u7EA6\u6570\u4E4B\u548C\uFF1A (p1^0 + p1^1 + ... + p1^c1) * ... * (pk^0 + pk^1 + ... + pk^ck)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_7-\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5" aria-hidden="true">#</a> 7.\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>int gcd(int a, int b)
{
    return b ? gcd(b, a % b) : a;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-\u6C42\u6B27\u62C9\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_8-\u6C42\u6B27\u62C9\u51FD\u6570" aria-hidden="true">#</a> 8.\u6C42\u6B27\u62C9\u51FD\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>int phi(int x)
{
    int res = x;
    for (int i = 2; i &lt;= x / i; i ++ )
        if (x % i == 0)
        {
            res = res / i * (i - 1);
            while (x % i == 0) x /= i;
        }
    if (x &gt; 1) res = res / x * (x - 1);

    return res;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-\u7B5B\u6CD5\u6C42\u6B27\u62C9\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_9-\u7B5B\u6CD5\u6C42\u6B27\u62C9\u51FD\u6570" aria-hidden="true">#</a> 9.\u7B5B\u6CD5\u6C42\u6B27\u62C9\u51FD\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>int primes[N], cnt;     // primes[]\u5B58\u50A8\u6240\u6709\u7D20\u6570
int euler[N];           // \u5B58\u50A8\u6BCF\u4E2A\u6570\u7684\u6B27\u62C9\u51FD\u6570
bool st[N];         // st[x]\u5B58\u50A8x\u662F\u5426\u88AB\u7B5B\u6389

void get_eulers(int n)
{
    euler[1] = 1;
    for (int i = 2; i &lt;= n; i ++ )
    {
        if (!st[i])
        {
            primes[cnt ++ ] = i;
            euler[i] = i - 1;
        }
        for (int j = 0; primes[j] &lt;= n / i; j ++ )
        {
            int t = primes[j] * i;
            st[t] = true;
            if (i % primes[j] == 0)
            {
                euler[t] = euler[i] * primes[j];
                break;
            }
            euler[t] = euler[i] * (primes[j] - 1);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-\u5FEB\u901F\u5E42" tabindex="-1"><a class="header-anchor" href="#_10-\u5FEB\u901F\u5E42" aria-hidden="true">#</a> 10.\u5FEB\u901F\u5E42</h3><p>\u6C42 m^k mod p\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6 O(logk)\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public int qmi(int m, int k, int p) {
	long res = 1l % p, t = m * 1l;
	while (k != 0) {
    if ((k &amp; 1) != 0) res = res * t % p;
        t = t * t % p;
        k &gt;&gt;= 1;
    }
	return (int)res;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-\u6269\u5C55\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_11-\u6269\u5C55\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5" aria-hidden="true">#</a> 11.\u6269\u5C55\u6B27\u51E0\u91CC\u5F97\u7B97\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6C42x, y\uFF0C\u4F7F\u5F97ax + by = gcd(a, b)
int exgcd(int a, int b, int &amp;x, int &amp;y)
{
    if (!b)
    {
        x = 1; y = 0;
        return a;
    }
    int d = exgcd(b, a % b, y, x);
    y -= (a/b) * x;
    return d;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-\u9AD8\u65AF\u6D88\u5143" tabindex="-1"><a class="header-anchor" href="#_12-\u9AD8\u65AF\u6D88\u5143" aria-hidden="true">#</a> 12.\u9AD8\u65AF\u6D88\u5143</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// a[N][N]\u662F\u589E\u5E7F\u77E9\u9635
int gauss()
{
    int c, r;
    for (c = 0, r = 0; c &lt; n; c ++ )
    {
        int t = r;
        for (int i = r; i &lt; n; i ++ )   // \u627E\u5230\u7EDD\u5BF9\u503C\u6700\u5927\u7684\u884C
            if (fabs(a[i][c]) &gt; fabs(a[t][c]))
                t = i;

        if (fabs(a[t][c]) &lt; eps) continue;

        for (int i = c; i &lt;= n; i ++ ) swap(a[t][i], a[r][i]);      // \u5C06\u7EDD\u5BF9\u503C\u6700\u5927\u7684\u884C\u6362\u5230\u6700\u9876\u7AEF
        for (int i = n; i &gt;= c; i -- ) a[r][i] /= a[r][c];      // \u5C06\u5F53\u524D\u884C\u7684\u9996\u4F4D\u53D8\u62101
        for (int i = r + 1; i &lt; n; i ++ )       // \u7528\u5F53\u524D\u884C\u5C06\u4E0B\u9762\u6240\u6709\u7684\u5217\u6D88\u62100
            if (fabs(a[i][c]) &gt; eps)
                for (int j = n; j &gt;= c; j -- )
                    a[i][j] -= a[r][j] * a[i][c];

        r ++ ;
    }

    if (r &lt; n)
    {
        for (int i = r; i &lt; n; i ++ )
            if (fabs(a[i][n]) &gt; eps)
                return 2; // \u65E0\u89E3
        return 1; // \u6709\u65E0\u7A77\u591A\u7EC4\u89E3
    }

    for (int i = n - 1; i &gt;= 0; i -- )
        for (int j = i + 1; j &lt; n; j ++ )
            a[i][n] -= a[i][j] * a[j][n];

    return 0; // \u6709\u552F\u4E00\u89E3
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-\u9012\u5F52\u6CD5\u6C42\u7EC4\u5408\u6570" tabindex="-1"><a class="header-anchor" href="#_13-\u9012\u5F52\u6CD5\u6C42\u7EC4\u5408\u6570" aria-hidden="true">#</a> 13.\u9012\u5F52\u6CD5\u6C42\u7EC4\u5408\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// c[a][b] \u8868\u793A\u4ECEa\u4E2A\u82F9\u679C\u4E2D\u9009b\u4E2A\u7684\u65B9\u6848\u6570
for (int i = 0; i &lt; N; i ++ )
    for (int j = 0; j &lt;= i; j ++ )
        if (!j) c[i][j] = 1;
        else c[i][j] = (c[i - 1][j] + c[i - 1][j - 1]) % mod;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-\u901A\u8FC7\u9884\u5904\u7406\u9006\u5143\u7684\u65B9\u5F0F\u6C42\u7EC4\u5408\u6570" tabindex="-1"><a class="header-anchor" href="#_14-\u901A\u8FC7\u9884\u5904\u7406\u9006\u5143\u7684\u65B9\u5F0F\u6C42\u7EC4\u5408\u6570" aria-hidden="true">#</a> 14.\u901A\u8FC7\u9884\u5904\u7406\u9006\u5143\u7684\u65B9\u5F0F\u6C42\u7EC4\u5408\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u9996\u5148\u9884\u5904\u7406\u51FA\u6240\u6709\u9636\u4E58\u53D6\u6A21\u7684\u4F59\u6570fact[N]\uFF0C\u4EE5\u53CA\u6240\u6709\u9636\u4E58\u53D6\u6A21\u7684\u9006\u5143infact[N]
\u5982\u679C\u53D6\u6A21\u7684\u6570\u662F\u8D28\u6570\uFF0C\u53EF\u4EE5\u7528\u8D39\u9A6C\u5C0F\u5B9A\u7406\u6C42\u9006\u5143
int qmi(int a, int k, int p)    // \u5FEB\u901F\u5E42\u6A21\u677F
{
    int res = 1;
    while (k)
    {
        if (k &amp; 1) res = (LL)res * a % p;
        a = (LL)a * a % p;
        k &gt;&gt;= 1;
    }
    return res;
}

// \u9884\u5904\u7406\u9636\u4E58\u7684\u4F59\u6570\u548C\u9636\u4E58\u9006\u5143\u7684\u4F59\u6570
fact[0] = infact[0] = 1;
for (int i = 1; i &lt; N; i ++ )
{
    fact[i] = (LL)fact[i - 1] * i % mod;
    infact[i] = (LL)infact[i - 1] * qmi(i, mod - 2, mod) % mod;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-lucas\u5B9A\u7406" tabindex="-1"><a class="header-anchor" href="#_15-lucas\u5B9A\u7406" aria-hidden="true">#</a> 15.Lucas\u5B9A\u7406</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u82E5p\u662F\u8D28\u6570\uFF0C\u5219\u5BF9\u4E8E\u4EFB\u610F\u6574\u6570 1 &lt;= m &lt;= n\uFF0C\u6709\uFF1A
    C(n, m) = C(n % p, m % p) * C(n / p, m / p) (mod p)

int qmi(int a, int k, int p)  // \u5FEB\u901F\u5E42\u6A21\u677F
{
    int res = 1 % p;
    while (k)
    {
        if (k &amp; 1) res = (LL)res * a % p;
        a = (LL)a * a % p;
        k &gt;&gt;= 1;
    }
    return res;
}

int C(int a, int b, int p)  // \u901A\u8FC7\u5B9A\u7406\u6C42\u7EC4\u5408\u6570C(a, b)
{
    if (a &lt; b) return 0;

    LL x = 1, y = 1;  // x\u662F\u5206\u5B50\uFF0Cy\u662F\u5206\u6BCD
    for (int i = a, j = 1; j &lt;= b; i --, j ++ )
    {
        x = (LL)x * i % p;
        y = (LL) y * j % p;
    }

    return x * (LL)qmi(y, p - 2, p) % p;
}

int lucas(LL a, LL b, int p)
{
    if (a &lt; p &amp;&amp; b &lt; p) return C(a, b, p);
    return (LL)C(a % p, b % p, p) * lucas(a / p, b / p, p) % p;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-\u5206\u89E3\u8D28\u56E0\u6570\u6CD5\u6C42\u7EC4\u5408\u6570" tabindex="-1"><a class="header-anchor" href="#_16-\u5206\u89E3\u8D28\u56E0\u6570\u6CD5\u6C42\u7EC4\u5408\u6570" aria-hidden="true">#</a> 16.\u5206\u89E3\u8D28\u56E0\u6570\u6CD5\u6C42\u7EC4\u5408\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5F53\u6211\u4EEC\u9700\u8981\u6C42\u51FA\u7EC4\u5408\u6570\u7684\u771F\u5B9E\u503C\uFF0C\u800C\u975E\u5BF9\u67D0\u4E2A\u6570\u7684\u4F59\u6570\u65F6\uFF0C\u5206\u89E3\u8D28\u56E0\u6570\u7684\u65B9\u5F0F\u6BD4\u8F83\u597D\u7528\uFF1A
    1. \u7B5B\u6CD5\u6C42\u51FA\u8303\u56F4\u5185\u7684\u6240\u6709\u8D28\u6570
    2. \u901A\u8FC7 C(a, b) = a! / b! / (a - b)! \u8FD9\u4E2A\u516C\u5F0F\u6C42\u51FA\u6BCF\u4E2A\u8D28\u56E0\u5B50\u7684\u6B21\u6570\u3002 n! \u4E2Dp\u7684\u6B21\u6570\u662F n / p + n / p^2 + n / p^3 + ...
    3. \u7528\u9AD8\u7CBE\u5EA6\u4E58\u6CD5\u5C06\u6240\u6709\u8D28\u56E0\u5B50\u76F8\u4E58

int primes[N], cnt;     // \u5B58\u50A8\u6240\u6709\u8D28\u6570
int sum[N];     // \u5B58\u50A8\u6BCF\u4E2A\u8D28\u6570\u7684\u6B21\u6570
bool st[N];     // \u5B58\u50A8\u6BCF\u4E2A\u6570\u662F\u5426\u5DF2\u88AB\u7B5B\u6389


void get_primes(int n)      // \u7EBF\u6027\u7B5B\u6CD5\u6C42\u7D20\u6570
{
    for (int i = 2; i &lt;= n; i ++ )
    {
        if (!st[i]) primes[cnt ++ ] = i;
        for (int j = 0; primes[j] &lt;= n / i; j ++ )
        {
            st[primes[j] * i] = true;
            if (i % primes[j] == 0) break;
        }
    }
}


int get(int n, int p)       // \u6C42n\uFF01\u4E2D\u7684\u6B21\u6570
{
    int res = 0;
    while (n)
    {
        res += n / p;
        n /= p;
    }
    return res;
}


vector&lt;int&gt; mul(vector&lt;int&gt; a, int b)       // \u9AD8\u7CBE\u5EA6\u4E58\u4F4E\u7CBE\u5EA6\u6A21\u677F
{
    vector&lt;int&gt; c;
    int t = 0;
    for (int i = 0; i &lt; a.size(); i ++ )
    {
        t += a[i] * b;
        c.push_back(t % 10);
        t /= 10;
    }

    while (t)
    {
        c.push_back(t % 10);
        t /= 10;
    }
    
    return c;

}

get_primes(a);  // \u9884\u5904\u7406\u8303\u56F4\u5185\u7684\u6240\u6709\u8D28\u6570

for (int i = 0; i &lt; cnt; i ++ )     // \u6C42\u6BCF\u4E2A\u8D28\u56E0\u6570\u7684\u6B21\u6570
{
    int p = primes[i];
    sum[i] = get(a, p) - get(b, p) - get(a - b, p);
}

vector&lt;int&gt; res;
res.push_back(1);

for (int i = 0; i &lt; cnt; i ++ )     // \u7528\u9AD8\u7CBE\u5EA6\u4E58\u6CD5\u5C06\u6240\u6709\u8D28\u56E0\u5B50\u76F8\u4E58
    for (int j = 0; j &lt; sum[i]; j ++ )
        res = mul(res, primes[i]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_17-\u5361\u7279\u5170\u6570" tabindex="-1"><a class="header-anchor" href="#_17-\u5361\u7279\u5170\u6570" aria-hidden="true">#</a> 17.\u5361\u7279\u5170\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7ED9\u5B9An\u4E2A0\u548Cn\u4E2A1\uFF0C\u5B83\u4EEC\u6309\u7167\u67D0\u79CD\u987A\u5E8F\u6392\u6210\u957F\u5EA6\u4E3A2n\u7684\u5E8F\u5217\uFF0C\u6EE1\u8DB3\u4EFB\u610F\u524D\u7F00\u4E2D0\u7684\u4E2A\u6570\u90FD\u4E0D\u5C11\u4E8E1\u7684\u4E2A\u6570\u7684\u5E8F\u5217\u7684\u6570\u91CF\u4E3A\uFF1A Cat(n) = C(2n, n) / (n + 1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_18-nim\u6E38\u620F" tabindex="-1"><a class="header-anchor" href="#_18-nim\u6E38\u620F" aria-hidden="true">#</a> 18.NIM\u6E38\u620F</h3><p>\u7ED9\u5B9AN\u5806\u7269\u54C1\uFF0C\u7B2Ci\u5806\u7269\u54C1\u6709Ai\u4E2A\u3002\u4E24\u540D\u73A9\u5BB6\u8F6E\u6D41\u884C\u52A8\uFF0C\u6BCF\u6B21\u53EF\u4EE5\u4EFB\u9009\u4E00\u5806\uFF0C\u53D6\u8D70\u4EFB\u610F\u591A\u4E2A\u7269\u54C1\uFF0C\u53EF\u628A\u4E00\u5806\u53D6\u5149\uFF0C\u4F46\u4E0D\u80FD\u4E0D\u53D6\u3002\u53D6\u8D70\u6700\u540E\u4E00\u4EF6\u7269\u54C1\u8005\u83B7\u80DC\u3002\u4E24\u4EBA\u90FD\u91C7\u53D6\u6700\u4F18\u7B56\u7565\uFF0C\u95EE\u5148\u624B\u662F\u5426\u5FC5\u80DC\u3002</p><p>\u6211\u4EEC\u628A\u8FD9\u79CD\u6E38\u620F\u79F0\u4E3ANIM\u535A\u5F08\u3002\u628A\u6E38\u620F\u8FC7\u7A0B\u4E2D\u9762\u4E34\u7684\u72B6\u6001\u79F0\u4E3A\u5C40\u9762\u3002\u6574\u5C40\u6E38\u620F\u7B2C\u4E00\u4E2A\u884C\u52A8\u7684\u79F0\u4E3A\u5148\u624B\uFF0C\u7B2C\u4E8C\u4E2A\u884C\u52A8\u7684\u79F0\u4E3A\u540E\u624B\u3002\u82E5\u5728\u67D0\u4E00\u5C40\u9762\u4E0B\u65E0\u8BBA\u91C7\u53D6\u4F55\u79CD\u884C\u52A8\uFF0C\u90FD\u4F1A\u8F93\u6389\u6E38\u620F\uFF0C\u5219\u79F0\u8BE5\u5C40\u9762\u5FC5\u8D25\u3002 \u6240\u8C13\u91C7\u53D6\u6700\u4F18\u7B56\u7565\u662F\u6307\uFF0C\u82E5\u5728\u67D0\u4E00\u5C40\u9762\u4E0B\u5B58\u5728\u67D0\u79CD\u884C\u52A8\uFF0C\u4F7F\u5F97\u884C\u52A8\u540E\u5BF9\u9762\u9762\u4E34\u5FC5\u8D25\u5C40\u9762\uFF0C\u5219\u4F18\u5148\u91C7\u53D6\u8BE5\u884C\u52A8\u3002\u540C\u65F6\uFF0C\u8FD9\u6837\u7684\u5C40\u9762\u88AB\u79F0\u4E3A\u5FC5\u80DC\u3002\u6211\u4EEC\u8BA8\u8BBA\u7684\u535A\u5F08\u95EE\u9898\u4E00\u822C\u90FD\u53EA\u8003\u8651\u7406\u60F3\u60C5\u51B5\uFF0C\u5373\u4E24\u4EBA\u5747\u65E0\u5931\u8BEF\uFF0C\u90FD\u91C7\u53D6\u6700\u4F18\u7B56\u7565\u884C\u52A8\u65F6\u6E38\u620F\u7684\u7ED3\u679C\u3002 NIM\u535A\u5F08\u4E0D\u5B58\u5728\u5E73\u5C40\uFF0C\u53EA\u6709\u5148\u624B\u5FC5\u80DC\u548C\u5148\u624B\u5FC5\u8D25\u4E24\u79CD\u60C5\u51B5\u3002</p><p>\u5B9A\u7406\uFF1A NIM\u535A\u5F08\u5148\u624B\u5FC5\u80DC\uFF0C\u5F53\u4E14\u4EC5\u5F53 A1 ^ A2 ^ \u2026 ^ An != 0</p><p>\u516C\u5E73\u7EC4\u5408\u6E38\u620FICG \u82E5\u4E00\u4E2A\u6E38\u620F\u6EE1\u8DB3\uFF1A</p><p>\u7531\u4E24\u540D\u73A9\u5BB6\u4EA4\u66FF\u884C\u52A8\uFF1B \u5728\u6E38\u620F\u8FDB\u7A0B\u7684\u4EFB\u610F\u65F6\u523B\uFF0C\u53EF\u4EE5\u6267\u884C\u7684\u5408\u6CD5\u884C\u52A8\u4E0E\u8F6E\u5230\u54EA\u540D\u73A9\u5BB6\u65E0\u5173\uFF1B \u4E0D\u80FD\u884C\u52A8\u7684\u73A9\u5BB6\u5224\u8D1F\uFF1B \u5219\u79F0\u8BE5\u6E38\u620F\u4E3A\u4E00\u4E2A\u516C\u5E73\u7EC4\u5408\u6E38\u620F\u3002 NIM\u535A\u5F08\u5C5E\u4E8E\u516C\u5E73\u7EC4\u5408\u6E38\u620F\uFF0C\u4F46\u57CE\u5EFA\u7684\u68CB\u7C7B\u6E38\u620F\uFF0C\u6BD4\u5982\u56F4\u68CB\uFF0C\u5C31\u4E0D\u662F\u516C\u5E73\u7EC4\u5408\u6E38\u620F\u3002\u56E0\u4E3A\u56F4\u68CB\u4EA4\u6218\u53CC\u65B9\u5206\u522B\u53EA\u80FD\u843D\u9ED1\u5B50\u548C\u767D\u5B50\uFF0C\u80DC\u8D1F\u5224\u5B9A\u4E5F\u6BD4\u8F83\u590D\u6742\uFF0C\u4E0D\u6EE1\u8DB3\u6761\u4EF62\u548C\u6761\u4EF63\u3002</p><h3 id="_19-\u6709\u5411\u56FE\u6E38\u620F" tabindex="-1"><a class="header-anchor" href="#_19-\u6709\u5411\u56FE\u6E38\u620F" aria-hidden="true">#</a> 19.\u6709\u5411\u56FE\u6E38\u620F</h3><p>\u7ED9\u5B9A\u4E00\u4E2A\u6709\u5411\u65E0\u73AF\u56FE\uFF0C\u56FE\u4E2D\u6709\u4E00\u4E2A\u552F\u4E00\u7684\u8D77\u70B9\uFF0C\u5728\u8D77\u70B9\u4E0A\u653E\u6709\u4E00\u679A\u68CB\u5B50\u3002\u4E24\u540D\u73A9\u5BB6\u4EA4\u66FF\u5730\u628A\u8FD9\u679A\u68CB\u5B50\u6CBF\u6709\u5411\u8FB9\u8FDB\u884C\u79FB\u52A8\uFF0C\u6BCF\u6B21\u53EF\u4EE5\u79FB\u52A8\u4E00\u6B65\uFF0C\u65E0\u6CD5\u79FB\u52A8\u8005\u5224\u8D1F\u3002\u8BE5\u6E38\u620F\u88AB\u79F0\u4E3A\u6709\u5411\u56FE\u6E38\u620F\u3002 \u4EFB\u4F55\u4E00\u4E2A\u516C\u5E73\u7EC4\u5408\u6E38\u620F\u90FD\u53EF\u4EE5\u8F6C\u5316\u4E3A\u6709\u5411\u56FE\u6E38\u620F\u3002\u5177\u4F53\u65B9\u6CD5\u662F\uFF0C\u628A\u6BCF\u4E2A\u5C40\u9762\u770B\u6210\u56FE\u4E2D\u7684\u4E00\u4E2A\u8282\u70B9\uFF0C\u5E76\u4E14\u4ECE\u6BCF\u4E2A\u5C40\u9762\u5411\u6CBF\u7740\u5408\u6CD5\u884C\u52A8\u80FD\u591F\u5230\u8FBE\u7684\u4E0B\u4E00\u4E2A\u5C40\u9762\u8FDE\u6709\u5411\u8FB9\u3002</p><h3 id="_20-mex\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#_20-mex\u8FD0\u7B97" aria-hidden="true">#</a> 20.Mex\u8FD0\u7B97</h3><p>\u8BBES\u8868\u793A\u4E00\u4E2A\u975E\u8D1F\u6574\u6570\u96C6\u5408\u3002\u5B9A\u4E49mex(S)\u4E3A\u6C42\u51FA\u4E0D\u5C5E\u4E8E\u96C6\u5408S\u7684\u6700\u5C0F\u975E\u8D1F\u6574\u6570\u7684\u8FD0\u7B97\uFF0C\u5373\uFF1A mex(S) = min{x}, x\u5C5E\u4E8E\u81EA\u7136\u6570\uFF0C\u4E14x\u4E0D\u5C5E\u4E8ES</p><h3 id="_21-sg\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_21-sg\u51FD\u6570" aria-hidden="true">#</a> 21.SG\u51FD\u6570</h3><p>\u5728\u6709\u5411\u56FE\u6E38\u620F\u4E2D\uFF0C\u5BF9\u4E8E\u6BCF\u4E2A\u8282\u70B9x\uFF0C\u8BBE\u4ECEx\u51FA\u53D1\u5171\u6709k\u6761\u6709\u5411\u8FB9\uFF0C\u5206\u522B\u5230\u8FBE\u8282\u70B9y1, y2, \u2026, yk\uFF0C\u5B9A\u4E49SG(x)\u4E3Ax\u7684\u540E\u7EE7\u8282\u70B9y1, y2, \u2026, yk \u7684SG\u51FD\u6570\u503C\u6784\u6210\u7684\u96C6\u5408\u518D\u6267\u884Cmex(S)\u8FD0\u7B97\u7684\u7ED3\u679C\uFF0C\u5373\uFF1A SG(x) = mex({SG(y1), SG(y2), \u2026, SG(yk)}) \u7279\u522B\u5730\uFF0C\u6574\u4E2A\u6709\u5411\u56FE\u6E38\u620FG\u7684SG\u51FD\u6570\u503C\u88AB\u5B9A\u4E49\u4E3A\u6709\u5411\u56FE\u6E38\u620F\u8D77\u70B9s\u7684SG\u51FD\u6570\u503C\uFF0C\u5373SG(G) = SG(s)\u3002</p><p>\u6709\u5411\u56FE\u6E38\u620F\u7684\u548C \u2014\u2014 \u6A21\u677F\u9898 AcWing 893. \u96C6\u5408-Nim\u6E38\u620F \u8BBEG1, G2, \u2026, Gm \u662Fm\u4E2A\u6709\u5411\u56FE\u6E38\u620F\u3002\u5B9A\u4E49\u6709\u5411\u56FE\u6E38\u620FG\uFF0C\u5B83\u7684\u884C\u52A8\u89C4\u5219\u662F\u4EFB\u9009\u67D0\u4E2A\u6709\u5411\u56FE\u6E38\u620FGi\uFF0C\u5E76\u5728Gi\u4E0A\u884C\u52A8\u4E00\u6B65\u3002G\u88AB\u79F0\u4E3A\u6709\u5411\u56FE\u6E38\u620FG1, G2, \u2026, Gm\u7684\u548C\u3002 \u6709\u5411\u56FE\u6E38\u620F\u7684\u548C\u7684SG\u51FD\u6570\u503C\u7B49\u4E8E\u5B83\u5305\u542B\u7684\u5404\u4E2A\u5B50\u6E38\u620FSG\u51FD\u6570\u503C\u7684\u5F02\u6216\u548C\uFF0C\u5373\uFF1A SG(G) = SG(G1) ^ SG(G2) ^ \u2026 ^ SG(Gm)</p><h3 id="_22-\u5B9A\u7406" tabindex="-1"><a class="header-anchor" href="#_22-\u5B9A\u7406" aria-hidden="true">#</a> 22.\u5B9A\u7406</h3><p>\u6709\u5411\u56FE\u6E38\u620F\u7684\u67D0\u4E2A\u5C40\u9762\u5FC5\u80DC\uFF0C\u5F53\u4E14\u4EC5\u5F53\u8BE5\u5C40\u9762\u5BF9\u5E94\u8282\u70B9\u7684SG\u51FD\u6570\u503C\u5927\u4E8E0\u3002 \u6709\u5411\u56FE\u6E38\u620F\u7684\u67D0\u4E2A\u5C40\u9762\u5FC5\u8D25\uFF0C\u5F53\u4E14\u4EC5\u5F53\u8BE5\u5C40\u9762\u5BF9\u5E94\u8282\u70B9\u7684SG\u51FD\u6570\u503C\u7B49\u4E8E0\u3002</p><h2 id="\u4E94\u3001\u5341\u5927\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u5341\u5927\u6392\u5E8F" aria-hidden="true">#</a> \u4E94\u3001\u5341\u5927\u6392\u5E8F</h2><h3 id="_1\u63D2\u5165\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_1\u63D2\u5165\u6392\u5E8F" aria-hidden="true">#</a> 1\u63D2\u5165\u6392\u5E8F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>void insert_sort()
{
    for (int i = 1; i &lt; n; i ++ )
    {
        int x = a[i];
        int j = i-1;

        while (j &gt;= 0 &amp;&amp; x &lt; a[j])
        {
            a[j+1] = a[j];
            j -- ;
        }
        a[j+1] = x;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2\u9009\u62E9\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_2\u9009\u62E9\u6392\u5E8F" aria-hidden="true">#</a> 2\u9009\u62E9\u6392\u5E8F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>void select_sort()
{
    for (int i = 0; i &lt; n; i ++ )
    {
        int k = i;
        for (int j = i+1; j &lt; n; j ++ )
        {
            if (a[j] &lt; a[k])
                k = j;
        }
        swap(a[i], a[k]);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3\u5192\u6CE1\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_3\u5192\u6CE1\u6392\u5E8F" aria-hidden="true">#</a> 3\u5192\u6CE1\u6392\u5E8F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>void bubble_sort()
{
    for (int i = n-1; i &gt;= 1; i -- )
    {
        bool flag = true;
        for (int j = 1; j &lt;= i; j ++ )
            if (a[j-1] &gt; a[j])
            {
                swap(a[j-1], a[j]);
                flag = false;
            }
        if (flag) return;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4\u5E0C\u5C14\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_4\u5E0C\u5C14\u6392\u5E8F" aria-hidden="true">#</a> 4\u5E0C\u5C14\u6392\u5E8F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>void shell_sort()
{
    for (int gap = n &gt;&gt; 1; gap; gap &gt;&gt;= 1)
    {
        for (int i = gap; i &lt; n; i ++ )
        {
            int x = a[i];
            int j;
            for (j = i; j &gt;= gap &amp;&amp; a[j-gap] &gt; x; j -= gap)
                a[j] = a[j-gap];
            a[j] = x;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5\u5FEB\u901F\u6392\u5E8F-\u6700\u5FEB" tabindex="-1"><a class="header-anchor" href="#_5\u5FEB\u901F\u6392\u5E8F-\u6700\u5FEB" aria-hidden="true">#</a> 5\u5FEB\u901F\u6392\u5E8F\uFF08\u6700\u5FEB\uFF09</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>void quick_sort(int l, int r)
{
    if (l &gt;= r) return ;

    int x = a[l+r&gt;&gt;1], i = l-1, j = r+1;
    while (i &lt; j)
    {
        while (a[++ i] &lt; x);
        while (a[-- j] &gt; x);
        if (i &lt; j) swap(a[i], a[j]);
    }
    sort(l, j), sort(j+1, r);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6\u5F52\u5E76\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_6\u5F52\u5E76\u6392\u5E8F" aria-hidden="true">#</a> 6\u5F52\u5E76\u6392\u5E8F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>void merge_sort(int l, int r)
{
    if (l &gt;= r) return;
    int temp[N];
    int mid = l+r&gt;&gt;1;
    merge_sort(l, mid), merge_sort(mid+1, r);
    int k = 0, i = l, j = mid+1;
    while (i &lt;= mid &amp;&amp; j &lt;= r)
    {
        if (a[i] &lt; a[j]) temp[k ++ ] = a[i ++ ];
        else temp[k ++ ] = a[j ++ ];
    }
    while (i &lt;= mid) temp[k ++ ] = a[i ++ ];
    while (j &lt;= r) temp[k ++ ] = a[j ++ ];
    for (int i = l, j = 0; i &lt;= r; i ++ , j ++ ) a[i] = temp[j];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7\u5806\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_7\u5806\u6392\u5E8F" aria-hidden="true">#</a> 7\u5806\u6392\u5E8F</h3><p>(\u987B\u77E5\u6B64\u6392\u5E8F\u4E3A\u4F7F\u7528\u4E86\u6A21\u62DF\u5806\uFF0C\u4E3A\u4E86\u4F7F\u6700\u540E\u4E00\u4E2A\u975E\u53F6\u5B50\u8282\u70B9\u7684\u7F16\u53F7\u4E3An/2\uFF0C\u6570\u7EC4\u7F16\u53F7\u4ECE1\u5F00\u59CB)</p>`,195),h={href:"https://www.cnblogs.com/wanglei5205/p/8733524.html",target:"_blank",rel:"noopener noreferrer"},p=n("https://www.cnblogs.com/wanglei5205/p/8733524.html"),g=e(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>void down(int u)
{
    int t = u;
    if (u&lt;&lt;1 &lt;= n &amp;&amp; h[u&lt;&lt;1] &lt; h[t]) t = u&lt;&lt;1;
    if ((u&lt;&lt;1|1) &lt;= n &amp;&amp; h[u&lt;&lt;1|1] &lt; h[t]) t = u&lt;&lt;1|1;
    if (u != t)
    {
        swap(h[u], h[t]);
        down(t);
    }
}

int main()
{
    for (int i = 1; i &lt;= n; i ++ ) cin &gt;&gt; h[i];
    for (int i = n/2; i; i -- ) down(i);
    while (true)
    {
        if (!n) break;
        cout &lt;&lt; h[1] &lt;&lt; &#39; &#39;;
        h[1] = h[n];
        n -- ;
        down(1);
    }
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8\u57FA\u6570\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_8\u57FA\u6570\u6392\u5E8F" aria-hidden="true">#</a> 8\u57FA\u6570\u6392\u5E8F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>int maxbit()
{
    int maxv = a[0];
    for (int i = 1; i &lt; n; i ++ )
        if (maxv &lt; a[i])
            maxv = a[i];
    int cnt = 1;
    while (maxv &gt;= 10) maxv /= 10, cnt ++ ;

    return cnt;
}
void radixsort()
{
    int t = maxbit();
    int radix = 1;

    for (int i = 1; i &lt;= t; i ++ )
    {
        for (int j = 0; j &lt; 10; j ++ ) count[j] = 0;
        for (int j = 0; j &lt; n; j ++ )
        {
            int k = (a[j] / radix) % 10;
            count[k] ++ ;
        }
        for (int j = 1; j &lt; 10; j ++ ) count[j] += count[j-1];
        for (int j = n-1; j &gt;= 0; j -- )
        {
            int k = (a[j] / radix) % 10;
            temp[count[k]-1] = a[j];
            count[k] -- ;
        }
        for (int j = 0; j &lt; n; j ++ ) a[j] = temp[j];
        radix *= 10;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9\u8BA1\u6570\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_9\u8BA1\u6570\u6392\u5E8F" aria-hidden="true">#</a> 9\u8BA1\u6570\u6392\u5E8F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>void counting_sort()
{
    int sorted[N];
    int maxv = a[0];
    for (int i = 1; i &lt; n; i ++ )
        if (maxv &lt; a[i])
            maxv = a[i];
    int count[maxv+1];
    for (int i = 0; i &lt; n; i ++ ) count[a[i]] ++ ;
    for (int i = 1; i &lt;= maxv; i ++ ) count[i] += count[i-1];
    for (int i = n-1; i &gt;= 0; i -- )
    {
        sorted[count[a[i]]-1] = a[i];
        count[a[i]] -- ;
    }
    for (int i = 0; i &lt; n; i ++ ) a[i] = sorted[i];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10\u6876\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_10\u6876\u6392\u5E8F" aria-hidden="true">#</a> 10\u6876\u6392\u5E8F</h3><p>\uFF08\u57FA\u6570\u6392\u5E8F\u662F\u6876\u6392\u5E8F\u7684\u7279\u4F8B\uFF0C\u4F18\u52BF\u662F\u53EF\u4EE5\u5904\u7406\u6D6E\u70B9\u6570\u548C\u8D1F\u6570\uFF0C\u52A3\u52BF\u662F\u8FD8\u8981\u914D\u5408\u522B\u7684\u6392\u5E8F\u51FD\u6570\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vector&lt;int&gt; bucketSort(vector&lt;int&gt;&amp; nums) {
    int n = nums.size();
    int maxv = *max_element(nums.begin(), nums.end());
    int minv = *min_element(nums.begin(), nums.end());
    int bs = 1000;
    int m = (maxv-minv)/bs+1;
    vector&lt;vector&lt;int&gt; &gt; bucket(m);
    for (int i = 0; i &lt; n; ++i) {
        bucket[(nums[i]-minv)/bs].push_back(nums[i]);
    }
    int idx = 0;
    for (int i = 0; i &lt; m; ++i) {
        int sz = bucket[i].size();
        bucket[i] = quickSort(bucket[i]);
        for (int j = 0; j &lt; sz; ++j) {
            nums[idx++] = bucket[i][j];
        }
    }
    return nums;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u516D\u3001\u5176\u4ED6\u5E38\u7528\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001\u5176\u4ED6\u5E38\u7528\u6A21\u677F" aria-hidden="true">#</a> \u516D\u3001\u5176\u4ED6\u5E38\u7528\u6A21\u677F</h2><h3 id="\u94FE\u8868\u53CD\u8F6C" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8868\u53CD\u8F6C" aria-hidden="true">#</a> \u94FE\u8868\u53CD\u8F6C</h3><h3 id="_1-\u8FED\u4EE3" tabindex="-1"><a class="header-anchor" href="#_1-\u8FED\u4EE3" aria-hidden="true">#</a> 1.\u8FED\u4EE3</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public ListNode reverseList(ListNode head) {
        ListNode cur = head, pre = null;
        while (cur != null) {
            ListNode nex = cur.next;
            cur.next = pre;
            pre = cur;
            cur = nex;
        }
        return pre;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#_2-\u9012\u5F52" aria-hidden="true">#</a> 2.\u9012\u5F52</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public ListNode reverseList(ListNode head) {
        if (head == null || head.next == null) 					return head;
        //\u5B9A\u4E49\u8FD4\u56DE\u7684\u65B0\u7684\u5934\u8282\u70B9
        ListNode tail = reverseList(head.next);
        head.next.next = head;
        head.next = null;
        return tail;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u5934\u63D2\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-\u5934\u63D2\u6CD5" aria-hidden="true">#</a> 3.\u5934\u63D2\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public ListNode reverseList(ListNode head) {
        ListNode dummy = new ListNode(-1);
        while (head != null) {
            ListNode node = new ListNode(head.val);
            node.next = dummy.next;
            dummy.next = node;
            head = head.next;
        }
        return dummy.next;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53D6\u6574\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u53D6\u6574\u95EE\u9898" aria-hidden="true">#</a> \u53D6\u6574\u95EE\u9898</h3><p>\u200B (n / k) \u4E0A\u53D6\u6574\u7B49\u4E8E(n + k - 1) / k\u4E0B\u53D6\u6574\u6216\u8005(n - 1) / k + 1</p><h3 id="flood-fill" tabindex="-1"><a class="header-anchor" href="#flood-fill" aria-hidden="true">#</a> Flood Fill</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//https://leetcode-cn.com/problems/color-fill-lcci/
class Solution {
    int[][] g;
    int[][] st; //0\uFF1A\u672A\u641C\u8FC7\uFF0C1\uFF1A\u641C\u8FC7
    int[] dx = new int[]{-1, 0, 1, 0}, dy = new int[]{0, 1, 0, -1};
    int n, m;
    public void dfs(int x, int y) {
        for (int i = 0; i &lt; 4; i ++ ) {
            int a = x + dx[i], b = y + dy[i];
            if (a &gt;= 0 &amp;&amp; a &lt; n &amp;&amp; b &gt;= 0 &amp;&amp; b &lt; m &amp;&amp; g[a][b] == g[x][y]){
                if (st[a][b] == 0) {
                    st[a][b] = 1;
                    dfs(a, b);
                }
            }
        }
    }
    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        n = image.length;
        m = image[0].length;
        g = image;
        st = new int[n][m];
        st[sr][sc] = 1;
        dfs(sr, sc);
        for (int i = 0; i &lt; n; i ++ ) 
            for (int j = 0; j &lt; m; j ++ )
                if (st[i][j] == 1)
                    image[i][j] = newColor;
        return image;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u84C4\u6C34\u6C60\u62BD\u6837\u7B97\u6CD5</p>`,21),x={id:"_382-\u94FE\u8868\u968F\u673A\u8282\u70B9",tabindex:"-1"},f=i("a",{class:"header-anchor",href:"#_382-\u94FE\u8868\u968F\u673A\u8282\u70B9","aria-hidden":"true"},"#",-1),j=n(),_={href:"https://leetcode-cn.com/problems/linked-list-random-node/",target:"_blank",rel:"noopener noreferrer"},k=n("382. \u94FE\u8868\u968F\u673A\u8282\u70B9"),w=e(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    private ListNode h;
    public Solution(ListNode head) {
        h = head;
    }
    
    public int getRandom() {
        int res = -1, n = 0;
        Random random = new Random();
        for (ListNode node = h; node != null; node = node.next) {
            n ++ ;
            if (random.nextInt() % n == 0) res = node.val;
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6C42\u6700\u5927\u516C\u7EA6\u6570" tabindex="-1"><a class="header-anchor" href="#\u6C42\u6700\u5927\u516C\u7EA6\u6570" aria-hidden="true">#</a> \u6C42\u6700\u5927\u516C\u7EA6\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public static int gcd(int a, int b) {
        //\u9012\u5F52\u65B9\u5F0F\u6027\u80FD\u5DEE\u4E9B\uFF0C\u4F46\u662F\u5199\u6CD5\u7B80\u5355
        //return b == 0 ? a : gcd(b, a % b);
        int t;
        while(b != 0) {
            t = a % b;
            a = b;
            b = t;
        }
        return a;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6C42\u6700\u5C0F\u516C\u500D\u6570" tabindex="-1"><a class="header-anchor" href="#\u6C42\u6700\u5C0F\u516C\u500D\u6570" aria-hidden="true">#</a> \u6C42\u6700\u5C0F\u516C\u500D\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> public static int lcm(int a, int b) {
        return a * b / gcd(a, b);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6C42a-b\u4E0A\u53D6\u6574" tabindex="-1"><a class="header-anchor" href="#\u6C42a-b\u4E0A\u53D6\u6574" aria-hidden="true">#</a> \u6C42a/b\u4E0A\u53D6\u6574</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(a + b  - 1)  /  b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u8868\u8FBE\u5F0F\u6C42\u503C" tabindex="-1"><a class="header-anchor" href="#\u8868\u8FBE\u5F0F\u6C42\u503C" aria-hidden="true">#</a> \u8868\u8FBE\u5F0F\u6C42\u503C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public void calc(ArrayDeque&lt;Integer&gt; num, ArrayDeque&lt;Character&gt; op) {
        var b = num.pop();
        var a = num.pop();
        if (op.peek() == &#39;+&#39;) num.push(a + b);
        else num.push(a - b);
        op.pop();
    }

    public int calculate(String rs) {
        StringBuilder sb = new StringBuilder();
        for (char x : rs.toCharArray())
            if (x != &#39; &#39;)
                sb.append(x);
        String s = sb.toString();
        ArrayDeque&lt;Integer&gt; num = new ArrayDeque&lt;&gt;();
        ArrayDeque&lt;Character&gt; op = new ArrayDeque&lt;&gt;();
        for (int i = 0; i &lt; s.length(); i ++ ) {
            char c = s.charAt(i);
            if (c == &#39; &#39;) continue;
            if (c == &#39;+&#39; || c == &#39;-&#39;) {
                //\u7279\u6B8A\u7B26\u53F7\u5904\u7406
                if (i == 0 || s.charAt(i - 1) == &#39;-&#39; || s.charAt(i - 1) == &#39;(&#39;) 
                    num.push(0);
                op.push(c);
            } else if (c == &#39;(&#39;) {
                op.push(c);
            } else if (c == &#39;)&#39;) {
                op.pop();
                while (!op.isEmpty() &amp;&amp; op.peek() != &#39;(&#39;) calc(num, op);
            } else {
                int k = i;
                while (k &lt; s.length() &amp;&amp; Character.isDigit(s.charAt(k))) k ++ ;
                num.push(Integer.parseInt(s.substring(i, k)));
                i = k - 1;
                while (!op.isEmpty() &amp;&amp; op.peek() != &#39;(&#39;) calc(num, op);
            }
        }
        return num.pop();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#map\u6392\u5E8F" aria-hidden="true">#</a> Map\u6392\u5E8F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	//\u901A\u8FC7\u5806\u6765\u6392\u5E8F
	Map&lt;Integer, Integer&gt; map = new HashMap&lt;&gt;();
	Set&lt;Map.Entry&lt;Integer, Integer&gt;&gt; entries = map.entrySet();
	// \u6839\u636Emap\u7684value\u503C\u6B63\u5E8F\u6392\uFF0C\u76F8\u5F53\u4E8E\u4E00\u4E2A\u5C0F\u9876\u5806
	PriorityQueue&lt;Map.Entry&lt;Integer, Integer&gt;&gt; queue = new PriorityQueue&lt;&gt;((o1, o2) -&gt; o1.getValue() - o2.getValue());
	for (Map.Entry&lt;Integer, Integer&gt; entry : entries) queue.offer(entry);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4FDD\u7559\u4E24\u4F4D\u5C0F\u6570" tabindex="-1"><a class="header-anchor" href="#\u4FDD\u7559\u4E24\u4F4D\u5C0F\u6570" aria-hidden="true">#</a> \u4FDD\u7559\u4E24\u4F4D\u5C0F\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DecimalFormat df = new DecimalFormat(&quot;$%.2f&quot;); 
num = df.format(num);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u662F\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u662F\u6570\u5B57" aria-hidden="true">#</a> \u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u662F\u6570\u5B57</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public static boolean isNum(String str) {
	for (int i = 0; i &lt; str.length(); i++) {
		if (!Character.isDigit(str.charAt(i))) {
			return false;
		}
	}
	return true;
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6C42\u6570\u7EC4\u6700\u5927\u503C" tabindex="-1"><a class="header-anchor" href="#\u6C42\u6570\u7EC4\u6700\u5927\u503C" aria-hidden="true">#</a> \u6C42\u6570\u7EC4\u6700\u5927\u503C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Arrays.stream(f).max().getAsInt();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="java\u5FEB\u8BFB\u5FEB\u5199\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#java\u5FEB\u8BFB\u5FEB\u5199\u6A21\u677F" aria-hidden="true">#</a> java\u5FEB\u8BFB\u5FEB\u5199\u6A21\u677F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>static BufferedReader bf = new BufferedReader(new BufferedReader(new InputStreamReader(System.in)));
static StreamTokenizer in = new StreamTokenizer(new BufferedReader(new InputStreamReader(System.in)));
static PrintWriter pw = new PrintWriter(new BufferedWriter(new OutputStreamWriter(System.out)));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>while (in.nextToken() != -1) {
	//code
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public InputReader = new InputReader(System.in);
//\u624B\u5199\u5FEB\u8BFB
public class InputReader {
    private final BufferedReader reader;
    private StringTokenizer tokenizer;

    public InputReader(InputStream stream) {
        reader = new BufferedReader(new InputStreamReader(stream), 32768);
        tokenizer = null;
    }

    public String next() {
        while (tokenizer == null || !tokenizer.hasMoreTokens()) {
            try {
                tokenizer = new StringTokenizer(reader.readLine());
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
        return tokenizer.nextToken();
    }

    public String nextLine() {
        String str;
        try {
            str = reader.readLine();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return str;
    }

    public boolean hasNext() {
        while (tokenizer == null || !tokenizer.hasMoreTokens()) {
            String nextLine;
            try {
                nextLine = reader.readLine();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            if (nextLine == null) {
                return false;
            }
            tokenizer = new StringTokenizer(nextLine);
        }
        return true;
    }

    public int nextInt() {
        return Integer.parseInt(next());
    }

    public long nextLong() {
        return Long.parseLong(next());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6C42n\u7684\u9636\u4E58\u8D28\u56E0\u6570p\u7684\u4E2A\u6570" tabindex="-1"><a class="header-anchor" href="#\u6C42n\u7684\u9636\u4E58\u8D28\u56E0\u6570p\u7684\u4E2A\u6570" aria-hidden="true">#</a> \u6C42n\u7684\u9636\u4E58\u8D28\u56E0\u6570p\u7684\u4E2A\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public int getCur(int n, int p) {
    int res = 0;
    while (n != 0) {
        res += n / p;
        n /= p;
    }
    return res;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9012\u63A8\u6CD5\u9884\u5904\u7406\u6240\u6709\u7EC4\u5408\u6570" tabindex="-1"><a class="header-anchor" href="#\u9012\u63A8\u6CD5\u9884\u5904\u7406\u6240\u6709\u7EC4\u5408\u6570" aria-hidden="true">#</a> \u9012\u63A8\u6CD5\u9884\u5904\u7406\u6240\u6709\u7EC4\u5408\u6570</h3>`,24),N=i("p",null,[i("span",{class:"katex"},[i("span",{class:"katex-mathml"},[i("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[i("semantics",null,[i("mrow",null,[i("msubsup",null,[i("mi",null,"C"),i("mi",null,"i"),i("mi",null,"j")]),i("mo",null,"="),i("msubsup",null,[i("mi",null,"C"),i("mrow",null,[i("mi",null,"i"),i("mo",null,"\u2212"),i("mn",null,"1")]),i("mrow",null,[i("mi",null,"j"),i("mo",null,"\u2212"),i("mn",null,"1")])]),i("mo",null,"+"),i("msubsup",null,[i("mi",null,"C"),i("mrow",null,[i("mi",null,"i"),i("mo",null,"\u2212"),i("mn",null,"1")]),i("mi",null,"j")])]),i("annotation",{encoding:"application/x-tex"},"C^j_i=C^{j - 1}_{i - 1} + C^j_{i\u22121}")])])]),i("span",{class:"katex-html","aria-hidden":"true"},[i("span",{class:"base"},[i("span",{class:"strut",style:{height:"1.2194em","vertical-align":"-0.2769em"}}),i("span",{class:"mord"},[i("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),i("span",{class:"msupsub"},[i("span",{class:"vlist-t vlist-t2"},[i("span",{class:"vlist-r"},[i("span",{class:"vlist",style:{height:"0.9426em"}},[i("span",{style:{top:"-2.4231em","margin-left":"-0.0715em","margin-right":"0.05em"}},[i("span",{class:"pstrut",style:{height:"2.7em"}}),i("span",{class:"sizing reset-size6 size3 mtight"},[i("span",{class:"mord mathnormal mtight"},"i")])]),i("span",{style:{top:"-3.1809em","margin-right":"0.05em"}},[i("span",{class:"pstrut",style:{height:"2.7em"}}),i("span",{class:"sizing reset-size6 size3 mtight"},[i("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"j")])])]),i("span",{class:"vlist-s"},"\u200B")]),i("span",{class:"vlist-r"},[i("span",{class:"vlist",style:{height:"0.2769em"}},[i("span")])])])])]),i("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),i("span",{class:"mrel"},"="),i("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),i("span",{class:"base"},[i("span",{class:"strut",style:{height:"1.2778em","vertical-align":"-0.3352em"}}),i("span",{class:"mord"},[i("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),i("span",{class:"msupsub"},[i("span",{class:"vlist-t vlist-t2"},[i("span",{class:"vlist-r"},[i("span",{class:"vlist",style:{height:"0.9426em"}},[i("span",{style:{top:"-2.4231em","margin-left":"-0.0715em","margin-right":"0.05em"}},[i("span",{class:"pstrut",style:{height:"2.7em"}}),i("span",{class:"sizing reset-size6 size3 mtight"},[i("span",{class:"mord mtight"},[i("span",{class:"mord mathnormal mtight"},"i"),i("span",{class:"mbin mtight"},"\u2212"),i("span",{class:"mord mtight"},"1")])])]),i("span",{style:{top:"-3.1809em","margin-right":"0.05em"}},[i("span",{class:"pstrut",style:{height:"2.7em"}}),i("span",{class:"sizing reset-size6 size3 mtight"},[i("span",{class:"mord mtight"},[i("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"j"),i("span",{class:"mbin mtight"},"\u2212"),i("span",{class:"mord mtight"},"1")])])])]),i("span",{class:"vlist-s"},"\u200B")]),i("span",{class:"vlist-r"},[i("span",{class:"vlist",style:{height:"0.3352em"}},[i("span")])])])])]),i("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),i("span",{class:"mbin"},"+"),i("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),i("span",{class:"base"},[i("span",{class:"strut",style:{height:"1.2778em","vertical-align":"-0.3352em"}}),i("span",{class:"mord"},[i("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),i("span",{class:"msupsub"},[i("span",{class:"vlist-t vlist-t2"},[i("span",{class:"vlist-r"},[i("span",{class:"vlist",style:{height:"0.9426em"}},[i("span",{style:{top:"-2.4231em","margin-left":"-0.0715em","margin-right":"0.05em"}},[i("span",{class:"pstrut",style:{height:"2.7em"}}),i("span",{class:"sizing reset-size6 size3 mtight"},[i("span",{class:"mord mtight"},[i("span",{class:"mord mathnormal mtight"},"i"),i("span",{class:"mbin mtight"},"\u2212"),i("span",{class:"mord mtight"},"1")])])]),i("span",{style:{top:"-3.1809em","margin-right":"0.05em"}},[i("span",{class:"pstrut",style:{height:"2.7em"}}),i("span",{class:"sizing reset-size6 size3 mtight"},[i("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"j")])])]),i("span",{class:"vlist-s"},"\u200B")]),i("span",{class:"vlist-r"},[i("span",{class:"vlist",style:{height:"0.3352em"}},[i("span")])])])])])])])])],-1),y=e(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u9884\u5904\u7406\u6240\u6709\u7684\u7EC4\u5408\u6570\uFF0C\u8981\u6CE8\u610F\u53D6 mod\uFF0C\u5426\u5219\u4F1A\u6EA2\u51FA
    private static long[][] dp = new long[1001][1001];
    static {
        for (int i = 0; i &lt;= 1000; i++)
            dp[i][0] = 1;
        for (int i = 1; i &lt;= 1000; i++)
            for (int j = 1; j &lt;= i; j++)
                dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % mod;
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7531\u6570\u636E\u8303\u56F4\u53CD\u63A8\u7B97\u6CD5\u590D\u6742\u5EA6\u548C\u7B97\u6CD5\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u7531\u6570\u636E\u8303\u56F4\u53CD\u63A8\u7B97\u6CD5\u590D\u6742\u5EA6\u548C\u7B97\u6CD5\u5185\u5BB9" aria-hidden="true">#</a> \u7531\u6570\u636E\u8303\u56F4\u53CD\u63A8\u7B97\u6CD5\u590D\u6742\u5EA6\u548C\u7B97\u6CD5\u5185\u5BB9</h2>`,2),L=i("p",null,[n("\u4E00\u822CACM\u6216\u8005\u7B14\u8BD5\u9898\u7684\u65F6\u95F4\u9650\u5236\u662F1\u79D2\u62162\u79D2\u3002 \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0CC++\u4EE3\u7801\u4E2D\u7684\u64CD\u4F5C\u6B21\u6570\u63A7\u5236\u5728 "),i("span",{class:"katex"},[i("span",{class:"katex-mathml"},[i("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[i("semantics",null,[i("mrow",null,[i("mn",null,"1"),i("msup",null,[i("mn",null,"0"),i("mn",null,"7")])]),i("annotation",{encoding:"application/x-tex"},"10^7")])])]),i("span",{class:"katex-html","aria-hidden":"true"},[i("span",{class:"base"},[i("span",{class:"strut",style:{height:"0.8141em"}}),i("span",{class:"mord"},"1"),i("span",{class:"mord"},[i("span",{class:"mord"},"0"),i("span",{class:"msupsub"},[i("span",{class:"vlist-t"},[i("span",{class:"vlist-r"},[i("span",{class:"vlist",style:{height:"0.8141em"}},[i("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[i("span",{class:"pstrut",style:{height:"2.7em"}}),i("span",{class:"sizing reset-size6 size3 mtight"},[i("span",{class:"mord mtight"},"7")])])])])])])])])])]),n("~"),i("span",{class:"katex"},[i("span",{class:"katex-mathml"},[i("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[i("semantics",null,[i("mrow",null,[i("mn",null,"1"),i("msup",null,[i("mn",null,"0"),i("mn",null,"8")])]),i("annotation",{encoding:"application/x-tex"},"10^8")])])]),i("span",{class:"katex-html","aria-hidden":"true"},[i("span",{class:"base"},[i("span",{class:"strut",style:{height:"0.8141em"}}),i("span",{class:"mord"},"1"),i("span",{class:"mord"},[i("span",{class:"mord"},"0"),i("span",{class:"msupsub"},[i("span",{class:"vlist-t"},[i("span",{class:"vlist-r"},[i("span",{class:"vlist",style:{height:"0.8141em"}},[i("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[i("span",{class:"pstrut",style:{height:"2.7em"}}),i("span",{class:"sizing reset-size6 size3 mtight"},[i("span",{class:"mord mtight"},"8")])])])])])])])])])]),n(" \u4E3A\u6700\u4F73\u3002")],-1),q=i("p",null,"\u4E0B\u9762\u7ED9\u51FA\u5728\u4E0D\u540C\u6570\u636E\u8303\u56F4\u4E0B\uFF0C\u4EE3\u7801\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u548C\u7B97\u6CD5\u8BE5\u5982\u4F55\u9009\u62E9\uFF1A",-1),S=i("p",null,[i("img",{src:t,alt:"image-20220819233725308",loading:"lazy"})],-1);function z(I,A){const s=v("ExternalLinkIcon");return a(),r("div",null,[u,i("p",null,[i("a",m,[b,d(s)])]),o,i("p",null,[i("a",h,[p,d(s)])]),g,i("h3",x,[f,j,i("a",_,[k,d(s)])]),w,N,y,L,q,S])}var T=l(c,[["render",z],["__file","article3.html.vue"]]);export{T as default};
