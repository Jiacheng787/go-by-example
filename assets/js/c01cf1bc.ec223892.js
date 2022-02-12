"use strict";(self.webpackChunkgo_by_example=self.webpackChunkgo_by_example||[]).push([[159],{7223:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return o},toc:function(){return u},default:function(){return c}});var a=t(7462),l=t(3366),r=(t(7294),t(3905)),i=["components"],p={sidebar_position:2},m="\u6307\u9488",o={unversionedId:"pointers",id:"pointers",isDocsHomePage:!1,title:"\u6307\u9488",description:"- \u64cd\u4f5c\u7b26 &\uff08\u53d6\u5740\u7b26\uff09",source:"@site/docs/pointers.md",sourceDirName:".",slug:"/pointers",permalink:"/go-by-example/docs/pointers",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/pointers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Go \u5165\u95e8\u6559\u7a0b",permalink:"/go-by-example/docs/intro"},next:{title:"\u51fd\u6570",permalink:"/go-by-example/docs/function"}},u=[{value:"1) \u539f\u59cb\u7c7b\u578b",id:"1-\u539f\u59cb\u7c7b\u578b",children:[],level:2},{value:"2) struct",id:"2-struct",children:[],level:2},{value:"3) array",id:"3-array",children:[],level:2},{value:"4) \u5185\u90e8\u6307\u9488\uff08slice \u548c map\uff09",id:"4-\u5185\u90e8\u6307\u9488slice-\u548c-map",children:[],level:2},{value:"5) \u603b\u7ed3",id:"5-\u603b\u7ed3",children:[],level:2}],k={toc:u};function c(n){var e=n.components,t=(0,l.Z)(n,i);return(0,r.kt)("wrapper",(0,a.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6307\u9488"},"\u6307\u9488"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u7b26 ",(0,r.kt)("inlineCode",{parentName:"li"},"&"),"\uff08\u53d6\u5740\u7b26\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u7b26 ",(0,r.kt)("inlineCode",{parentName:"li"},"*"),"\uff08\u53d6\u503c\u7b26\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"new")," \u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u5904\u7406 ",(0,r.kt)("inlineCode",{parentName:"li"},"nil")),(0,r.kt)("li",{parentName:"ul"},"\u5185\u90e8\u6307\u9488")),(0,r.kt)("h2",{id:"1-\u539f\u59cb\u7c7b\u578b"},"1) \u539f\u59cb\u7c7b\u578b"),(0,r.kt)("p",null,"\u5728 Golang \u4e2d\uff0c\u8d4b\u503c\u64cd\u4f5c\u90fd copy\uff0c\u4f1a\u5728\u5185\u5b58\u4e2d\u590d\u5236\u4e00\u4e2a\u4e00\u6837\u7684\u5bf9\u8c61\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func main() {\n  a := 42\n  b := a\n  fmt.Println(a, b) // 42 42\n  a = 27\n  fmt.Println(a, b) // 27 42\n}\n")),(0,r.kt)("p",null,"\u4e3a\u4e86\u8ba9 ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," \u80fd\u591f\u8054\u52a8\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"&")," \u64cd\u4f5c\u7b26\u521b\u5efa\u4e00\u4e2a\u6307\u9488\uff08\u5373\u83b7\u53d6\u5185\u5b58\u5730\u5740\uff09\uff0c\u8ba9 ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," \u6307\u5411 ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," \u7684\u5185\u5b58\u5730\u5740\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func main() {\n  var a int = 42\n  var b *int = &a\n  fmt.Println(a, b) // 42 0x1040a124\n  // \u83b7\u53d6 a \u7684\u6307\u9488\uff0c\u4e24\u8005\u5b8c\u5168\u4e00\u81f4\n  fmt.Println(&a, b) // 0x1040a124 0x1040a124\n}\n")),(0,r.kt)("p",null,"\u4e3a\u4e86\u901a\u8fc7\u6307\u9488\u8bbf\u5bf9\u5e94\u7684\u503c\uff08\u5185\u5b58\u5730\u5740\u6307\u5411\u7684\u503c\uff09\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," \u64cd\u4f5c\u7b26\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func main() {\n  var a int = 42\n  var b *int = &a\n  fmt.Println(a, *b) // 42 42\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u5728\u7c7b\u578b\u524d\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," \u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"*int")," \u4ee3\u8868\u8fd9\u662f\u4e00\u4e2a\u6307\u9488\u7c7b\u578b\uff0c\u800c\u6307\u9488\u524d\u9762\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," \u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"*b")," \u5219\u8868\u660e\u6839\u636e\u6307\u9488\u8bbf\u95ee\u5bf9\u5e94\u7684\u503c")),(0,r.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"a")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," \u5c31\u53ef\u4ee5\u8054\u52a8\uff0c\u56e0\u4e3a\u5b83\u4eec\u6307\u5411\u5185\u5b58\u4e2d\u7684\u540c\u4e00\u4e2a\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func main() {\n  var a int = 42\n  var b *int = &a\n  fmt.Println(a, *b) // 42 42\n  // \u4fee\u6539 a \u4f1a\u5bfc\u81f4 b \u53d1\u751f\u53d8\u5316\n  a = 27\n  fmt.Println(a, *b) // 27 27\n  // \u4fee\u6539 b \u4f1a\u5bfc\u81f4 a \u53d1\u751f\u53d8\u5316\n  *b = 14\n  fmt.Println(a, *b) // 14 14\n}\n")),(0,r.kt)("p",null,"\u518d\u770b\u4e0b\u9762\u7684\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n  // \u521b\u5efa\u4e00\u4e2a\u6570\u7ec4\n    a := [3]int{1, 2, 3}\n  // \u6570\u7ec4\u7b2c\u4e00\u4e2a\u503c\u7684\u6307\u9488\n    b := &a[0]\n  // \u6570\u7ec4\u7b2c\u4e8c\u4e2a\u503c\u7684\u6307\u9488\n    c := &a[1]\n  // \u5728 c++ \u4e2d\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u65b9\u6cd5\u4ece c \u7684\u6307\u9488\u8bbf\u95ee\u5230 b \u7684\u6307\u9488\n  // c := &a[1] - 4\n  // \u5728 golang \u4e2d\u53ef\u4ee5\u901a\u8fc7 `unsafe` \u5305\u5b9e\u73b0\n    fmt.Printf("%v %p %p\\n", a, b, c) // [1 2 3] 0x1040a124 0x1040a128\n}\n')),(0,r.kt)("h2",{id:"2-struct"},"2) struct"),(0,r.kt)("p",null,"\u770b\u4e0b\u9762\u4e00\u6bb5\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type myStruct struct {\n    foo int\n}\n\nfunc main() {\n    var ms myStruct\n  // \u6b63\u5e38\u521b\u5efa\u5bf9\u8c61\u7684\u6d41\u7a0b\n    ms = myStruct{foo: 42}\n  fmt.Println(ms) // {42}\n}\n")),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"&")," \u64cd\u4f5c\u7b26\u7ed9 struct \u521b\u5efa\u6307\u9488\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type myStruct struct {\n    foo int\n}\n\nfunc main() {\n    var ms *myStruct\n  // \u5728\u5bf9\u8c61\u521d\u59cb\u5316\u7684\u65f6\u5019\u4f7f\u7528 &\n    ms = &myStruct{foo: 42}\n    fmt.Println(ms) // &{42}\n}\n")),(0,r.kt)("p",null,"\u4e5f\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," \u51fd\u6570\u521b\u5efa\u6307\u9488\uff0c\u4f46\u662f\u4e0d\u80fd\u5728\u521b\u5efa\u5bf9\u8c61\u7684\u65f6\u5019\u521d\u59cb\u5316\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type myStruct struct {\n    foo int\n}\n\nfunc main() {\n    var ms *myStruct\n  // \u6ce8\u610f\u8fd9\u91cc\u4e0d\u80fd\u521d\u59cb\u5316\n    ms = new(myStruct)\n    fmt.Println(ms) // &{0}\n}\n")),(0,r.kt)("p",null,"\u5b9e\u9645\u4e0a\u6307\u9488\u7c7b\u578b\u5728\u6ca1\u6709\u521d\u59cb\u5316\u7684\u65f6\u5019\uff0c\u9ed8\u8ba4\u6709\u4e00\u4e2a\u7a7a\u6307\u9488 ",(0,r.kt)("inlineCode",{parentName:"p"},"nil"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func main() {\n    var ms *myStruct\n  fmt.Println(ms) // <nil>\n  fmt.Println(ms == nil) // true\n}\n")),(0,r.kt)("p",null,"\u4e3a\u4e86\u8bbf\u95ee\u548c\u8bbe\u7f6e\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u4e00\u822c\u6765\u8bf4\u9700\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," \u64cd\u4f5c\u7b26\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func main() {\n    var ms *myStruct\n    ms = new(myStruct)\n    (*ms).foo = 42\n    fmt.Println((*ms).foo) // 42\n}\n")),(0,r.kt)("p",null,"\u5f88\u660e\u663e\u6bcf\u6b21\u90fd\u8fd9\u6837\u5199\u975e\u5e38\u9ebb\u70e6\u3002\u56e0\u6b64\u5bf9\u4e8e\u590d\u6742\u5bf9\u8c61\uff0c\u7f16\u8bd1\u5668\u4f1a\u81ea\u52a8\u83b7\u53d6\u5bf9\u5e94\u7684\u503c\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u6307\u9488\u8bbf\u95ee\u548c\u8bbe\u7f6e\u5bf9\u8c61\u5c5e\u6027\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func main() {\n    var ms *myStruct\n    ms = new(myStruct)\n    ms.foo = 42\n    fmt.Println(ms.foo) // 42\n}\n")),(0,r.kt)("h2",{id:"3-array"},"3) array"),(0,r.kt)("p",null,"\u4e0e struct \u7c7b\u4f3c\uff0carray \u7684\u8d4b\u503c\u4e5f\u662f copy\uff0c\u5728\u5185\u5b58\u4e2d\u521b\u5efa\u4e00\u6a21\u4e00\u6837\u7684\u5bf9\u8c61\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func main() {\n    a := [3]int{1, 2, 3}\n    b := a\n    fmt.Println(a, b) // [1 2 3] [1 2 3]\n    a[1] = 42\n    fmt.Println(a, b) // [1 42 3] [1 2 3]\n}\n")),(0,r.kt)("h2",{id:"4-\u5185\u90e8\u6307\u9488slice-\u548c-map"},"4) \u5185\u90e8\u6307\u9488\uff08slice \u548c map\uff09"),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u5982\u679c\u6211\u4eec\u5c06 array \u6539\u4e3a slice\uff0c\u60c5\u51b5\u5c31\u4e0d\u4e00\u6837\u4e86\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func main() {\n    a := []int{1, 2, 3}\n    b := a\n    fmt.Println(a, b) // [1 2 3] [1 2 3]\n    a[1] = 42\n    fmt.Println(a, b) // [1 42 3] [1 42 3]\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"slice \u672c\u8eab\u4e0d\u5305\u542b\u4efb\u4f55\u6570\u636e\uff0cslice \u5185\u90e8\u53ea\u6709\u4e00\u4e2a\u6307\u5411 array \u7684\u6307\u9488\uff0c\u56e0\u6b64 slice \u8d4b\u503c\u5b9e\u9645\u4e0a\u662f\u6307\u9488\u4f20\u9012")),(0,r.kt)("p",null,"\u53e6\u4e00\u4e2a\u4f8b\u5b50\u662f map\uff0cmap \u7684\u8d4b\u503c\u4e5f\u662f\u6307\u9488\u4f20\u9012\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    a := map[string]string {\n        "foo": "bar",\n        "baz": "buz",\n    }\n    b := a\n    fmt.Println(a, b) // map[baz:buz foo:bar] map[baz:buz foo:bar]\n    a["foo"] = "qux"\n    fmt.Println(a, b) // map[baz:buz foo:qux] map[baz:buz foo:qux]\n}\n')),(0,r.kt)("h2",{id:"5-\u603b\u7ed3"},"5) \u603b\u7ed3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u6307\u9488\uff08\u53d6\u5740\uff09"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6307\u9488\u7c7b\u578b\u5728 ",(0,r.kt)("strong",{parentName:"li"},"\u7c7b\u578b")," \u524d\u9762\u52a0 ",(0,r.kt)("inlineCode",{parentName:"li"},"*"),"\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"*int")," \u4ee3\u8868\u6307\u5411 integer \u7684\u6307\u9488\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"&")," \u64cd\u4f5c\u7b26\u83b7\u53d6\u53d8\u91cf\u7684\u5185\u5b58\u5730\u5740\uff1b"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u83b7\u53d6\u6307\u9488\u6307\u5411\u7684\u503c\uff08\u53d6\u503c\uff09"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u539f\u59cb\u7c7b\u578b\u9700\u8981\u5728 ",(0,r.kt)("strong",{parentName:"li"},"\u6307\u9488\u53d8\u91cf")," \u524d\u9762\u52a0 ",(0,r.kt)("inlineCode",{parentName:"li"},"*"),"\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u590d\u6742\u7c7b\u578b\uff08\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"struct"),"\uff09\u5219\u4f1a\u81ea\u52a8\u83b7\u53d6\u5bf9\u5e94\u503c\uff1b"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u5bf9\u8c61\u6307\u9488"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u5bf9\u8c61\u5df2\u7ecf\u521b\u5efa\uff0c\u53ef\u4ee5\u5728\u53d8\u91cf\u524d\u9762\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"&")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"ms := myStruct{foo: 42}\np  := &ms\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u5bf9\u8c61\u8fd8\u6ca1\u521b\u5efa\uff0c\u53ef\u4ee5\u5728\u521d\u59cb\u5316\u5668\u524d\u9762\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"&")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"&myStruct{foo: 42}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," \u5173\u952e\u5b57"),(0,r.kt)("p",{parentName:"li"},"\u4e0d\u80fd\u5728\u521b\u5efa\u5bf9\u8c61\u7684\u540c\u65f6\u521d\u59cb\u5316\u5b57\u6bb5")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5185\u90e8\u6307\u9488\u7c7b\u578b"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Go \u4e2d\u6240\u6709\u7684\u8d4b\u503c\u64cd\u4f5c\u90fd\u662f copy"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"slice")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"map")," \u5305\u542b\u5185\u90e8\u6307\u9488\uff0c\u56e0\u6b64\u8d4b\u503c\u5b9e\u9645\u4e0a\u662f\u6307\u9488\u4f20\u9012\uff0c\u6307\u5411\u5185\u5b58\u4e2d\u540c\u4e00\u4e2a\u6570\u636e")))))}c.isMDXComponent=!0}}]);