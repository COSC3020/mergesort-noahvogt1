# Mergesort
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

I looked at stack overflow for an idea on how to even start this. I ended up not using its route because it didn't make much sense to me.

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.


The outer loop will run aproximatly $log_2(n)$  times because it is multiplying the size by 2 until
the size is bigger than the array length. The second loop will provide an extra $n$ number of times. 
Inside the while loop we have another for loop that will run over every element in the worst case.
This adds another $n$ number of times. This will in the end provide us with a overall complexity of
$T(n) \in \Theta (n^2log(n))$. Definitly a lot slower than the regular mergesort because of the extra
n iteration to keep it in place but hey I guess it'll save a little memory!
