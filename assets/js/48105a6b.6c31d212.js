"use strict";(self.webpackChunkgo_by_example=self.webpackChunkgo_by_example||[]).push([[957],{6681:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return o},default:function(){return k}});var a=t(7462),l=t(3366),r=(t(7294),t(3905)),i=["components"],m={sidebar_position:3},p="\u51fd\u6570",u={unversionedId:"function",id:"function",isDocsHomePage:!1,title:"\u51fd\u6570",description:"- \u57fa\u672c\u8bed\u6cd5",source:"@site/docs/function.md",sourceDirName:".",slug:"/function",permalink:"/go-by-example/docs/function",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/function.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u6307\u9488",permalink:"/go-by-example/docs/pointers"},next:{title:"Gin \u6559\u7a0b",permalink:"/go-by-example/docs/gin-tutorial"}},o=[{value:"1) \u57fa\u672c\u8bed\u6cd5",id:"1-\u57fa\u672c\u8bed\u6cd5",children:[],level:2},{value:"2) \u53c2\u6570",id:"2-\u53c2\u6570",children:[],level:2},{value:"3) \u8fd4\u56de\u503c",id:"3-\u8fd4\u56de\u503c",children:[],level:2},{value:"4) \u533f\u540d\u51fd\u6570",id:"4-\u533f\u540d\u51fd\u6570",children:[],level:2},{value:"5) \u51fd\u6570\u7c7b\u578b",id:"5-\u51fd\u6570\u7c7b\u578b",children:[],level:2},{value:"6) \u65b9\u6cd5",id:"6-\u65b9\u6cd5",children:[],level:2},{value:"7) \u603b\u7ed3",id:"7-\u603b\u7ed3",children:[],level:2}],s={toc:o};function k(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u57fa\u672c\u8bed\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u503c"),(0,r.kt)("li",{parentName:"ul"},"\u533f\u540d\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570\u7c7b\u578b\uff08\u51fd\u6570\u4f5c\u4e3a\u4e00\u7b49\u516c\u6c11\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\uff08\u7279\u6b8a\u7684\u51fd\u6570\uff09")),(0,r.kt)("h2",{id:"1-\u57fa\u672c\u8bed\u6cd5"},"1) \u57fa\u672c\u8bed\u6cd5"),(0,r.kt)("p",null,"Go \u7684\u5e94\u7528\u5165\u53e3\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"package main\n\nfunc main() {\n  // ...\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728 Go \u4e2d\uff0c\u5982\u679c\u65b9\u6cd5\u540d\u9996\u5b57\u6bcd\u5927\u5199\uff0c\u8868\u660e\u8fd9\u4e2a\u65b9\u6cd5\u662f\u516c\u6709\u65b9\u6cd5\uff0c\u53ef\u4ee5\u5728\u6a21\u5757\u5916\u90e8\u8bbf\u95ee\uff0c\u5982\u679c\u65b9\u6cd5\u540d\u9996\u5b57\u6bcd\u5c0f\u5199\uff0c\u5219\u8868\u660e\u8fd9\u4e2a\u65b9\u6cd5\u662f\u6a21\u5757\u7684\u79c1\u6709\u65b9\u6cd5")),(0,r.kt)("h2",{id:"2-\u53c2\u6570"},"2) \u53c2\u6570"),(0,r.kt)("p",null,"\u4e00\u4e2a\u7b80\u5355\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n  // \u6253\u5370 5 \u6b21 hello go\n    for i := 0; i < 5; i++ {\n        sayMessage("hello go", i)\n    }\n}\n\nfunc sayMessage(message string, idx int) {\n    fmt.Println(message, idx)\n}\n')),(0,r.kt)("p",null,"\u4f20\u9012\u591a\u4e2a\u76f8\u540c\u7c7b\u578b\u7684\u53c2\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n  sayMessage("hello", "Stacey")\n}\n\n// \u591a\u4e2a\u7c7b\u578b\u76f8\u540c\u7684\u53c2\u6570\uff0c\u5728\u6700\u540e\u58f0\u660e\u7c7b\u578b\u5373\u53ef\nfunc sayMessage(greeting, name string) {\n    fmt.Println(greeting, name)\n}\n')),(0,r.kt)("p",null,"\u4f20\u9012\u6307\u9488\u548c\u4f20\u9012\u503c\u7684\u533a\u522b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    greeting := "hello"\n    name := "Stacey"\n    sayMessage(greeting, name)\n    // \u8fd9\u8fb9 name \u5e76\u6ca1\u6709\u4fee\u6539\n    fmt.Println(name) // Stacey\n}\n\nfunc sayMessage(greeting, name string) {\n    fmt.Println(greeting, name)\n    // \u5c1d\u8bd5\u5728 sayMessage \u4e2d\u4fee\u6539 name\n    name = "Ted"\n    fmt.Println(name) // Ted\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8fd9\u610f\u5473\u7740 Go \u8fd0\u884c\u65f6\u4f1a\u5728\u8c03\u7528\u51fd\u6570\u7684\u65f6\u5019 copy \u53c2\u6570\u7684\u503c")),(0,r.kt)("p",null,"\u6211\u4eec\u4fee\u6539\u4e00\u4e0b\u4ee3\u7801\uff0c\u8fd9\u6b21\u4f20\u9012\u6307\u9488\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    greeting := "hello"\n    name := "Stacey"\n    sayMessage(&greeting, &name)\n    // \u4f20\u9012\u6307\u9488\u4e4b\u540e\uff0cname \u88ab\u4fee\u6539\u4e86\n    fmt.Println(name) // Ted\n}\n\nfunc sayMessage(greeting, name *string) {\n    fmt.Println(*greeting, *name)\n    // \u5c1d\u8bd5\u5728 sayMessage \u4e2d\u4fee\u6539 name\n    *name = "Ted"\n    fmt.Println(*name) // Ted\n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4e3a\u4ec0\u4e48\u8981\u4f20\u9012\u6307\u9488\uff1f\u4e3b\u8981\u6709\u4e24\u4e2a\u539f\u56e0\uff1a"),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"\u6709\u65f6\u5019\u786e\u5b9e\u9700\u8981\u901a\u8fc7\u51fd\u6570\u4fee\u6539\u53d8\u91cf\u7684\u503c\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u53ea\u80fd\u4f20\u9012\u6307\u9488\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u4f20\u9012\u6307\u9488\u6bd4\u4f20\u9012\u6574\u4e2a\u503c\u6027\u80fd\u66f4\u597d\uff0c\u5982\u679c\u4f20\u9012\u5f88\u5927\u7684\u6570\u636e\u7ed3\u6784\uff0c\u6bcf\u6b21\u90fd\u8981 copy \u4e00\u4e0b\u5f71\u54cd\u6027\u80fd\uff1b")),(0,r.kt)("p",{parentName:"div"},"\u5f53\u7136\u5982\u679c\u4f20\u9012\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"slice")," \u53ef\u4ee5\u4e0d\u7528\u8003\u8651\u6307\u9488\u95ee\u9898\uff0c\u56e0\u4e3a\u672c\u6765\u4f20\u9012\u7684\u5c31\u662f\u6307\u9488"))),(0,r.kt)("p",null,"\u4f20\u9012\u4efb\u610f\u4e2a\u6570\u7684\u53c2\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    sum(1, 2, 3, 4, 5)\n}\n\nfunc sum(values ...int) {\n    fmt.Println(values) // [1 2 3 4 5]\n    result := 0\n    for _, value := range values {\n        result += value\n    }\n    fmt.Println("The sum is ", result) // The sum is 15\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7c7b\u4f3c JS \u4e2d\u7684\u5269\u4f59\u53c2\u6570\u8bed\u6cd5\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"values")," \u62ff\u5230\u7684\u662f\u4e00\u4e2a\u6570\u7ec4")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"for index, value := range values")," \u662f Go \u4e2d\u7684\u53e6\u4e00\u79cd\u904d\u5386\u65b9\u5f0f")),(0,r.kt)("p",null,"\u4e0e JS \u7684\u5269\u4f59\u53c2\u6570\u8bed\u6cd5\u7c7b\u4f3c\uff0c\u5269\u4f59\u53c2\u6570\u524d\u9762\u8fd8\u53ef\u4ee5\u52a0\u5176\u4ed6\u53c2\u6570\uff0c\u4f46\u662f\u5269\u4f59\u53c2\u6570\u540e\u9762\u4e0d\u80fd\u6709\u522b\u7684\u53c2\u6570\uff0c\u5fc5\u987b\u4f5c\u4e3a\u6700\u540e\u4e00\u4e2a\u53c2\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    sum("The sum is ", 1, 2, 3, 4, 5)\n}\n\nfunc sum(msg string, values ...int) {\n    fmt.Println(values) // [1 2 3 4 5]\n    result := 0\n    for _, value := range values {\n        result += value\n    }\n    fmt.Println(msg, result) // The sum is 15\n}\n')),(0,r.kt)("h2",{id:"3-\u8fd4\u56de\u503c"},"3) \u8fd4\u56de\u503c"),(0,r.kt)("p",null,"\u6211\u4eec\u6539\u4e00\u4e0b\u4e0a\u9762\u7684\u4ee3\u7801\uff0c\u63a5\u6536\u4e00\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," \u51fd\u6570\u7684\u8fd4\u56de\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    s := sum(1, 2, 3, 4, 5)\n    fmt.Println("The sum is ", s) // The sum is 15\n}\n\n// \u4fee\u6539\u4e86\u65b9\u6cd5\u7b7e\u540d\uff0c\u58f0\u660e\u4e86\u51fd\u6570\u8fd4\u56de\u7c7b\u578b\n// sum \u51fd\u6570\u53d8\u4e3a\u7eaf\u51fd\u6570\uff0c\u8ba1\u7b97\u5e76\u8fd4\u56de\u7ed3\u679c\uff0c\u4e0d\u5173\u5fc3\u5bf9\u7ed3\u679c\u505a\u4ec0\u4e48\u64cd\u4f5c\nfunc sum(values ...int) int {\n    fmt.Println(values) // [1 2 3 4 5]\n    result := 0\n    for _, value := range values {\n        result += value\n    }\n    return result\n}\n')),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," \u51fd\u6570\u8fd4\u56de\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," \u5b9e\u9645\u4e0a\u88ab Go copy \u4e86\u4e00\u4efd\u8d4b\u503c\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," \u3002\u6211\u4eec\u4e5f\u53ef\u4ee5\u4e0d\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"result"),"\uff0c\u800c\u662f\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," \u7684\u6307\u9488\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    s := sum(1, 2, 3, 4, 5)\n    fmt.Println("The sum is ", *s) // The sum is 15\n}\n\n// \u8fd4\u56de\u6307\u9488\u7c7b\u578b\nfunc sum(values ...int) *int {\n    fmt.Println(values) // [1 2 3 4 5]\n    result := 0\n    for _, value := range values {\n        result += value\n    }\n    return &result\n}\n')),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u8bed\u6cd5\u7cd6\u6307\u5b9a\u51fd\u6570\u8fd4\u56de\u503c\uff0c\u62ec\u53f7\u4e2d\u58f0\u660e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," \u4f1a\u4f5c\u4e3a\u53d8\u91cf\u5728\u51fd\u6570\u4f5c\u7528\u57df\u4e2d\u521b\u5efa\uff0c\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\uff0c\u800c\u4e14\u6700\u540e\u76f4\u63a5 ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," \u5c31\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    s := sum(1, 2, 3, 4, 5)\n    fmt.Println("The sum is ", s) // The sum is 15\n}\n\n// \u51fd\u6570\u4f5c\u7528\u57df\u4e2d\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee result\n// \u6700\u540e\u53ea\u8981\u76f4\u63a5 return \u5c31\u884c\uff0c\u7ed3\u679c\u4f1a\u9690\u5f0f\u8fd4\u56de\nfunc sum(values ...int) (result int) {\n    fmt.Println(values) // [1 2 3 4 5]\n    for _, value := range values {\n        result += value\n    }\n    return\n}\n')),(0,r.kt)("p",null,"\u6700\u540e\u8c08\u8c08 Go \u4e2d\u7684\u591a\u4e2a\u8fd4\u56de\u503c\u3002\u5728\u4e0b\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," \u4f20\u9012 ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0")," \u5219\u4f1a\u5f97\u5230\u65e0\u7a77\u5927\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u7a0b\u5e8f\u51fa\u73b0\u5f02\u5e38\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u8fdb\u884c\u5224\u65ad\uff0c\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0")," \u7684\u65f6\u5019\u629b\u51fa\u5f02\u5e38\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    d := divide(0.5, 0.3)\n    fmt.Println(d) // 1.6666666666666667\n}\n\nfunc divide(a, b float64) float64 {\n  // \u5982\u679c b \u7684\u503c\u4e3a 0.0 \u5219\u4f1a\u5f97\u5230\u65e0\u7a77\u5927 +Inf\n  // \u4e3a\u4e86\u907f\u514d b \u4f20\u9012 0.0 \u9700\u8981\u8fdb\u884c\u5224\u65ad\u5e76\u629b\u51fa\u5f02\u5e38\n    if b == 0.0 {\n        panic("Cannot provide zero as second value")\n    }\n    return a / b\n}\n')),(0,r.kt)("p",null,"\u5982\u679c\u76f4\u63a5\u629b\u51fa\u5f02\u5e38\uff0c\u76f8\u5f53\u4e8e\u4e2d\u65ad\u4e86\u7a0b\u5e8f\u6267\u884c\uff0c\u800c\u5728 Go \u4e2d\u6ca1\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"try...catch")," \u7684\u673a\u5236\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u591a\u4e2a\u8fd4\u56de\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    d, err := divide(0.5, 0.3)\n    // Go \u4e2d\u5178\u578b\u7684\u5f02\u5e38\u5904\u7406\u903b\u8f91\n    if err != nil {\n        fmt.Println(err)\n        return\n    }\n    fmt.Println(d)\n}\n\n// \u58f0\u660e\u4e24\u4e2a\u8fd4\u56de\u503c\uff0c\u7b2c\u4e8c\u4e2a\u662f\u9519\u8bef\u5bf9\u8c61\nfunc divide(a, b float64) (float64, error) {\n    if b == 0.0 {\n        // \u5f53 b \u4e3a 0.0\uff0c\u8fd4\u56de\u9519\u8bef\u5bf9\u8c61\n        return 0.0, fmt.Errorf("cannot divide by zero")\n    }\n    // \u5f53 b \u4e0d\u4e3a 0.0\uff0c\u6b63\u5e38\u8fd4\u56de\u7ed3\u679c\uff0c\u9519\u8bef\u5bf9\u8c61\u4f20 nil\n    return a / b, nil\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8fd9\u70b9\u5728 JS \u4e2d\u4f18\u96c5\u5904\u7406\u5f02\u6b65\u9519\u8bef\u7684\u65f6\u5019\u4e5f\u4f1a\u7528\u5230\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"await-to-js"))),(0,r.kt)("h2",{id:"4-\u533f\u540d\u51fd\u6570"},"4) \u533f\u540d\u51fd\u6570"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u58f0\u660e\u4e86\u4e00\u4e2a\u533f\u540d\u51fd\u6570\uff0c\u5728\u51fd\u6570\u540e\u9762\u52a0\u4e86\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"()"),"\uff0c\u5b9e\u9645\u4e0a\u5c31\u662f\u5728\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\uff0c\u56e0\u6b64\u8fd9\u91cc\u58f0\u660e\u7684\u662f\u4e00\u4e2a\u7acb\u5373\u6267\u884c\u51fd\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    func() {\n        fmt.Println("Hello Go!")\n    }()\n}\n')),(0,r.kt)("p",null,"\u4e0e JS \u7684\u7acb\u5373\u6267\u884c\u51fd\u6570\u7c7b\u4f3c\uff0cGo \u7684\u7acb\u5373\u6267\u884c\u51fd\u6570\u4e5f\u4f1a\u521b\u5efa\u4e00\u4e2a\u72ec\u7acb\u7684\u4f5c\u7528\u57df\uff0c\u5185\u90e8\u7684\u53d8\u91cf\u4e0d\u4f1a\u6c61\u67d3\u5230\u5168\u5c40\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    func() {\n        msg := "Hello Go!"\n        fmt.Println(msg)\n    }()\n}\n')),(0,r.kt)("p",null,"\u8003\u8651\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"fmt.Println(i)")," \u9700\u8981\u7b49\u5f85\u5f02\u6b65\u64cd\u4f5c\u5b8c\u6210\u4e4b\u540e\u518d\u6253\u5370\uff0c\u8fd9\u65f6\u5019 ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," \u7684\u503c\u53ef\u80fd\u5df2\u7ecf\u53d1\u751f\u53d8\u5316\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func main() {\n    for i := 0; i < 5; i++ {\n        func() {\n            // \u76f4\u63a5\u8fd0\u884c\u8f93\u51fa 0 1 2 3 4\n            // \u5982\u679c\u9700\u8981\u7b49\u5f85\u5f02\u6b65\u64cd\u4f5c\u5b8c\u6210\u4e4b\u540e\u518d\u6253\u5370\n            // i \u7684\u503c\u53ef\u80fd\u5df2\u7ecf\u53d1\u751f\u53d8\u5316\n            // \u53ef\u80fd\u4f1a\u6253\u5370 5 5 5 5 5\n            fmt.Println(i)\n        }()\n    }\n}\n")),(0,r.kt)("p",null,"\u56e0\u6b64\u6bd4\u8f83\u5408\u7406\u7684\u5199\u6cd5\u662f\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," \u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u7acb\u5373\u6267\u884c\u51fd\u6570\uff0c\u8fd9\u91cc\u4f1a\u5f62\u6210\u4e00\u4e2a\u72ec\u7acb\u7684\u4f5c\u7528\u57df\uff0c\u5373\u4f7f\u5916\u90e8 ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," \u53d8\u5316\u4e5f\u4e0d\u4f1a\u5f71\u54cd\u91cc\u9762\u7684\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func main() {\n    for i := 0; i < 5; i++ {\n        func(i int) {\n            fmt.Println(i)\n        }(i)\n    }\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u5982\u679c\u533f\u540d\u51fd\u6570\u65e2\u6ca1\u6709\u8d4b\u503c\u7ed9\u53d8\u91cf\uff0c\u4e5f\u4e5f\u6ca1\u6709\u5199\u6210\u7acb\u5373\u6267\u884c\u51fd\u6570\u7684\u5f62\u5f0f\uff0c\u8fd9\u6837\u7684\u5199\u6cd5\u662f\u65e0\u6548\u7684\uff0c\u7f16\u8bd1\u5668\u4f1a\u62a5\u9519")),(0,r.kt)("h2",{id:"5-\u51fd\u6570\u7c7b\u578b"},"5) \u51fd\u6570\u7c7b\u578b"),(0,r.kt)("p",null,"\u5728 Go \u4e2d\uff0c\u51fd\u6570\u8fd8\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u79cd\u7c7b\u578b\uff0c\u8fd9\u610f\u5473\u7740\u51fd\u6570\u53ef\u4ee5\u8d4b\u503c\u7ed9\u53d8\u91cf\u3001\u4f5c\u4e3a\u51fd\u6570\u53c2\u6570\u3001\u4f5c\u4e3a\u51fd\u6570\u8fd4\u56de\u503c\u7b49\u7b49\u3002"),(0,r.kt)("p",null,"\u4e0e JS \u4e2d\u7684\u51fd\u6570\u8868\u8fbe\u5f0f\u7c7b\u4f3c\uff0c\u4e0b\u9762\u7684\u4ee3\u7801\u5c06\u51fd\u6570\u8d4b\u503c\u7ed9\u4e00\u4e2a\u53d8\u91cf\uff0c\u7136\u540e\u6267\u884c\u4e86\u8fd9\u4e2a\u51fd\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    f := func() {\n        fmt.Println("Hello Go!")\n    }\n    f()\n}\n')),(0,r.kt)("p",null,"\u6b64\u65f6\u7684\u51fd\u6570\u7b7e\u540d\u5982\u4e0b\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u51fd\u6570\u4e0d\u63a5\u6536\u53c2\u6570\u4e5f\u6ca1\u6709\u8fd4\u56de\u503c\uff0c\u6240\u4ee5\u76f4\u63a5\u8fd9\u6837\u58f0\u660e\u5c31\u597d\u4e86\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    var f func() = func() {\n        fmt.Println("Hello Go!")\n    }\n    f()\n}\n')),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u5c55\u793a\u4e86\u4e00\u4e2a\u590d\u6742\u51fd\u6570\u7684\u7b7e\u540d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    // \u6ce8\u610f\u5728\u8fd9\u4e2a\u4f4d\u7f6e\u8c03\u7528\u4f1a\u62a5\u9519\uff0c\u8fd9\u91cc\u8fd8\u6ca1\u6709\u58f0\u660e\u53d8\u91cf\n    // divide(5.0, 3.0)\n\n    // \u53d8\u91cf\u58f0\u660e\uff08\u51fd\u6570\u7b7e\u540d\uff09\n    var divide func(float64, float64) (float64 error)\n    // \u53d8\u91cf\u521d\u59cb\u5316\uff08\u51fd\u6570\u5b9e\u73b0\uff09\n    divide = func(a, b float64) (float64 error) {\n        if b == 0.0 {\n            return 0.0, fmt.Errorf("Cannot divide by zero")\n        } else {\n            return a / b, nil\n        }\n    }\n    // \u8c03\u7528\u51fd\u6570\n    d, err := divide(5.0, 3.0)\n    if err != nil {\n        fmt.Println(err)\n        return\n    }\n    fmt.Println(d)\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u51fd\u6570\u8d4b\u503c\u7ed9\u53d8\u91cf\uff0c\u53ea\u6709\u5728\u53d8\u91cf\u521d\u59cb\u5316\u4e4b\u540e\u624d\u80fd\u8c03\u7528\uff0c\u672a\u521d\u59cb\u5316\u8c03\u7528\u4f1a\u62a5\u9519")),(0,r.kt)("h2",{id:"6-\u65b9\u6cd5"},"6) \u65b9\u6cd5"),(0,r.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u58f0\u660e\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"greeter")," \u7684\u7ed3\u6784\u4f53\uff0c\u540c\u65f6\u6dfb\u52a0\u4e86\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"greet")," \u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    // \u521b\u5efa greeter \u5bf9\u8c61\n    g := greeter{\n        greeting: "hello",\n        name: "Go",\n    }\n    // \u8c03\u7528\u4e0a\u9762\u7684 greet \u65b9\u6cd5\n    g.greet()\n}\n\n// \u58f0\u660e greeter \u7ed3\u6784\u4f53\ntype greeter struct {\n    greeting string\n    name string\n}\n\n// \u65b9\u6cd5\u7684\u4e0a\u4e0b\u6587\u53ef\u4ee5\u662f\u4efb\u4f55\u7c7b\u578b\uff0c\u4e0d\u4e00\u5b9a\u662f struct\n// \u4f8b\u5982\u4f7f\u7528 integer \u4e5f\u662f\u53ef\u4ee5\u7684\uff0c\u53ef\u4ee5\u5f80 int \u4e0a\u6dfb\u52a0\u65b9\u6cd5\n// type counter int\n\n// \u5728 greeter \u4e0a\u9762\u6dfb\u52a0 greet \u65b9\u6cd5\n// \u6ce8\u610f\u51fd\u6570\u524d\u9762\u6dfb\u52a0 (g greeter) \u5bf9\u8c61\u4f1a\u8ba9\u51fd\u6570\u53d8\u4e3a\u65b9\u6cd5\nfunc (g greeter) greet() {\n    fmt.Println(g.greeting, g.name)\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u65b9\u6cd5")," \u5b9e\u9645\u4e0a\u5c31\u662f\u4e00\u4e2a\u5728\u7279\u5b9a\u4e0a\u4e0b\u6587\u4e2d\u6267\u884c\u7684\u51fd\u6570\uff0c\u8fd9\u4e2a\u4e0a\u4e0b\u6587\u53ef\u4ee5\u662f\u4efb\u4f55\u7c7b\u578b\uff0c\u4e0d\u4ec5\u4ec5\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"struct"))),(0,r.kt)("p",null,"\u6ce8\u610f\u65b9\u6cd5\u4e2d\u4f20\u5165\u7684\u4e0a\u4e0b\u6587\u53ea\u662f\u4e00\u4e2a copy\uff0c\u4fee\u6539\u5b57\u6bb5\u503c\u5e76\u4e0d\u4f1a\u5f71\u54cd\u539f\u59cb\u5bf9\u8c61\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    g := greeter{\n        greeting: "hello",\n        name: "Go",\n    }\n    g.greet()\n    // \u6253\u5370 The new name is:Go\n    fmt.Println("The new name is:", g.name)\n}\n\ntype greeter struct {\n    greeting string\n    name string\n}\n\nfunc (g greeter) greet() {\n    fmt.Println(g.greeting, g.name)\n    // \u5c06 name \u5b57\u6bb5\u8bbe\u4e3a\u7a7a\u5b57\u7b26\u4e32\n    g.name = ""\n}\n')),(0,r.kt)("p",null,"\u5982\u679c\u5c06\u4f20\u5165\u7684\u4e0a\u4e0b\u6587\u6539\u4e3a\u6307\u9488\u5bf9\u8c61\uff0c\u8fd9\u65f6\u5019\u4fee\u6539\u5c31\u4f1a\u5f71\u54cd\u539f\u59cb\u5bf9\u8c61\u4e86\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    g := greeter{\n        greeting: "hello",\n        name: "Go",\n    }\n    g.greet()\n    // \u6253\u5370 The new name is:\n    fmt.Println("The new name is:", g.name)\n}\n\ntype greeter struct {\n    greeting string\n    name string\n}\n\n// \u4e0a\u4e0b\u6587\u4f20\u9012\u6307\u9488\u5bf9\u8c61\nfunc (g *greeter) greet() {\n    fmt.Println(g.greeting, g.name)\n    // \u5c06 name \u5b57\u6bb5\u8bbe\u4e3a\u7a7a\u5b57\u7b26\u4e32\n    g.name = ""\n}\n')),(0,r.kt)("h2",{id:"7-\u603b\u7ed3"},"7) \u603b\u7ed3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u57fa\u672c\u7528\u6cd5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53c2\u6570"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u9017\u53f7\u5206\u9694\u53c2\u6570\u548c\u7c7b\u578b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func foo(bar string, baz int)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7c7b\u578b\u76f8\u540c\u7684\u53c2\u6570\uff0c\u7c7b\u578b\u53ea\u9700\u8981\u58f0\u660e\u4e00\u6b21"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func foo(bar, baz int)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f20\u9012\u6307\u9488\u7c7b\u578b\u7684\u65f6\u5019\uff0c\u51fd\u6570\u5185\u90e8\u53ef\u4ee5\u6539\u53d8\u53c2\u6570\u7684\u503c"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u4f20\u6307\u9488\u9ed8\u8ba4\u90fd\u662f copy"),(0,r.kt)("li",{parentName:"ul"},"\u7531\u4e8e slice \u548c map \u9ed8\u8ba4\u5c31\u662f\u6307\u9488\u7c7b\u578b\uff0c\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u53c2\u6570\u7684\u503c"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u53ef\u53d8\u53c2\u6570\u4f20\u9012\u591a\u4e2a\u5177\u6709\u540c\u6837\u7c7b\u578b\u7684\u53c2\u6570"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u4f5c\u4e3a\u6700\u540e\u4e00\u4e2a\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u63a5\u6536\u5230\u662f\u4e00\u4e2a slice")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func foo(bar string, baz ...int)\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd4\u56de\u503c"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5355\u4e2a\u8fd4\u56de\u503c\u53ea\u9700\u8981\u5217\u51fa\u7c7b\u578b\u5373\u53ef"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func foo() int\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u591a\u4e2a\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u7528\u62ec\u53f7\u5305\u88f9"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func foo() (int, error)\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(result type, error)")," \u8fd9\u79cd\u5f62\u5f0f\u5728 Go \u4e2d\u5f88\u5e38\u89c1"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528 named return values\uff0c\u4e5f\u5c31\u662f\u4e00\u4e2a\u8bed\u6cd5\u7cd6"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5728\u51fd\u6570\u5185\u90e8\u521b\u5efa\u4e00\u4e2a\u5f85\u8fd4\u56de\u53d8\u91cf"),(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u7684\u65f6\u5019\u76f4\u63a5\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"return")," \u5173\u952e\u5b57\u5c31\u884c"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u8fd4\u56de\u5c40\u90e8\u53d8\u91cf\u7684\u5185\u5b58\u5730\u5740"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u4ece\u5c40\u90e8\u5185\u5b58\uff08\u6808\uff09\u63d0\u5347\u5230\u5171\u4eab\u5185\u5b58\uff08\u5806\uff09"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u533f\u540d\u51fd\u6570"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6709\u4e24\u79cd\u5199\u6cd5"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7acb\u5373\u6267\u884c\u51fd\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func() {\n    // ...\n}()\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8d4b\u503c\u7ed9\u53d8\u91cf\u6216\u8005\u4f5c\u4e3a\u51fd\u6570\u53c2\u6570\u4f20\u5165"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"a := func() {\n    // ...\n}\na()\n"))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u51fd\u6570\u4f5c\u4e3a\u7c7b\u578b"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u51fd\u6570\u53ef\u4ee5\u8d4b\u503c\u7ed9\u53d8\u91cf\u3001\u4f5c\u4e3a\u51fd\u6570\u53c2\u6570\u3001\u4f5c\u4e3a\u51fd\u6570\u8fd4\u56de\u503c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7c7b\u578b\u7b7e\u540d\u7c7b\u4f3c\u51fd\u6570\u7b7e\u540d\uff0c\u53ea\u662f\u6ca1\u6709\u53c2\u6570\u540d"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"var f func(string, string, int) (int, error)\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u65b9\u6cd5"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u4e00\u4e2a\u7279\u5b9a type \u4e0a\u4e0b\u6587\u4e2d\u6267\u884c\u7684\u51fd\u6570"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u4e00\u5b9a\u8981\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"struct"),"\uff0c\u4f8b\u5982\u4e5f\u53ef\u4ee5\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"integer")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f62\u5f0f"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func (g greeter) greet() {\n    // ...\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"receiver \u53ef\u4ee5\u662f\u503c\u6216\u8005\u6307\u9488"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u503c\u7c7b\u578b\u62ff\u5230\u7684\u662f cpoy"),(0,r.kt)("li",{parentName:"ul"},"\u6307\u9488\u7c7b\u578b\u62ff\u5230\u7684\u662f\u6307\u9488")))))))}k.isMDXComponent=!0}}]);