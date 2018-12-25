# git cherry-pick 合并某次提交记录

如果你想 只合并其中一次的commit，那个 cherry-pick，就派上用途了

==注意：当执行完 cherry-pick 以后，将会生成一个新的提交；这个新的提交的哈希值和原来的不同，但提交的messge是一样的；==


```git cherry-pick branch-v2
git cherry-pick d181004..41535e0
git cherry-pick d181004
git cherry-pick d181004 41535e0
```




