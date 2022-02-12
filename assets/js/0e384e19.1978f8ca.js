"use strict";(self.webpackChunkgo_by_example=self.webpackChunkgo_by_example||[]).push([[671],{9881:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return r},metadata:function(){return u},toc:function(){return k},default:function(){return c}});var l=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],p={sidebar_position:1},r="Go \u5165\u95e8\u6559\u7a0b",u={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Go \u5165\u95e8\u6559\u7a0b",description:"Golang \u5b66\u4e60\u7b14\u8bb0\u3002",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/go-by-example/docs/intro",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u6307\u9488",permalink:"/go-by-example/docs/pointers"}},k=[{value:"1. \u9879\u76ee\u4f9d\u8d56\u7ba1\u7406",id:"1-\u9879\u76ee\u4f9d\u8d56\u7ba1\u7406",children:[],level:2},{value:"2. Makefile \u7f16\u5199",id:"2-makefile-\u7f16\u5199",children:[],level:2}],m={toc:k};function c(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,l.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"go-\u5165\u95e8\u6559\u7a0b"},"Go \u5165\u95e8\u6559\u7a0b"),(0,o.kt)("p",null,"Golang \u5b66\u4e60\u7b14\u8bb0\u3002"),(0,o.kt)("h2",{id:"1-\u9879\u76ee\u4f9d\u8d56\u7ba1\u7406"},"1. \u9879\u76ee\u4f9d\u8d56\u7ba1\u7406"),(0,o.kt)("p",null,"Golang \u4e2d\u7684\u5305\u7ba1\u7406\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"go.mod")," \u6587\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u5728\u9879\u76ee\u6839\u76ee\u5f55\u521d\u59cb\u5316\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"go.mod"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521d\u59cb\u5316\u4e00\u4e2a v0 \u6216\u8005 v1 \u7684\u5305\n$ go mod init example.com/m\n# \u521d\u59cb\u5316\u6307\u5b9a\u7248\u672c\u7684\u5305\n$ go mod init example.com/m/v2\n")),(0,o.kt)("p",null,"\u5b89\u88c5\u4f9d\u8d56\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ go get -u github.com/gin-gonic/gin\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"-u")," \u5b89\u88c5\u5168\u5c40\u53d8\u91cf\u7c7b\u4f3c ",(0,o.kt)("inlineCode",{parentName:"p"},"npm i -g cobra"))),(0,o.kt)("p",null,"\u5982\u679c\u76f4\u63a5\u4e0b\u8f7d\u8bf7\u6c42\u8d85\u65f6\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u955c\u50cf\u6e90\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ go env -w GO111MODULE=on\n$ go env -w GOPROXY=https://goproxy.cn,https://goproxy.io,direct\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u7c7b\u4f3c ",(0,o.kt)("inlineCode",{parentName:"p"},"npm config set registry"))),(0,o.kt)("p",null,"\u5b89\u88c5\u4e4b\u540e\u5c31\u53ef\u4ee5\u770b\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"go.mod")," \u91cc\u9762\u591a\u4e86\u4e9b\u4e1c\u897f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"module github.com/Jiacheng787/goexample\n\ngo 1.17\n\nrequire (\n    github.com/gin-gonic/gin v1.7.7\n)\n")),(0,o.kt)("p",null,"\u4e0b\u8f7d\u9879\u76ee\u4f9d\u8d56\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ go get ./...\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/103534192/"},"\u4e09\u5206\u949f\u638c\u63e1Go mod\u5e38\u7528\u4e0e\u9ad8\u7ea7\u64cd\u4f5c")),(0,o.kt)("h2",{id:"2-makefile-\u7f16\u5199"},"2. Makefile \u7f16\u5199"),(0,o.kt)("p",null,"\u672c\u5730\u5f00\u53d1\u7684\u65f6\u5019\u53ef\u4ee5\u4f7f\u7528 IDE \u8fdb\u884c\u4ee3\u7801\u7f16\u8bd1\uff0c\u70b9\u51fb\u6309\u94ae\u5373\u53ef\u5bf9\u6e90\u6587\u4ef6\u7f16\u8bd1\uff0c\u4f46\u662f\u901a\u5e38\u9879\u76ee\u4f1a\u90e8\u7f72\u5728 Linux \u73af\u5883\u4e2d\uff0c\u8fd9\u5c31\u9700\u8981\u5728 Linux \u73af\u5883\u4e0b\u8fdb\u884c\u7f16\u8bd1\u3002\u9879\u76ee\u7684\u7f16\u8bd1\u52a8\u4f5c\u53eb ",(0,o.kt)("inlineCode",{parentName:"p"},"make"),"\uff0c\u7f16\u8bd1\u7684\u5b9e\u9645\u52a8\u4f5c\u548c\u8fc7\u7a0b\u90fd\u662f\u5199\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Makefile")," \u91cc\u9762\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"Makefile")," \u4f5c\u7528\u7c7b\u4f3c\u4e8e npm scripts\uff0c\u53ef\u4ee5\u7528\u4e8e\u6267\u884c Shell \u547d\u4ee4\uff0c\u907f\u514d\u4e86\u6bcf\u6b21\u8f93\u5165\u4e00\u957f\u4e32\u7684\u7f16\u8bd1\u6307\u4ee4")),(0,o.kt)("p",null,"\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"p"},"make"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ yum install -y make\n$ make -v\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Makefile")," \u91cc\u9762\u6700\u57fa\u672c\u7684\u90e8\u5206\u5c31\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"rule"),"\uff0c\u91cc\u9762\u53ef\u4ee5\u5305\u542b\u591a\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"target"),"\uff0c\u6bcf\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," \u7ed3\u6784\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-makefile"},"target : prerequisite\n[TAB] recipe\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target"),"\uff1a\u76ee\u6807\u6587\u4ef6\u6216\u8005\u4f2a\u76ee\u6807\uff08\u4e0d\u662f\u4e00\u4e2a\u6587\u4ef6\uff0c\u800c\u662f\u4e00\u4e2a\u52a8\u4f5c\u540d\uff09"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"prerequisite"),"\uff1a\u751f\u6210 ",(0,o.kt)("inlineCode",{parentName:"li"},"target")," \u6240\u9700\u7684\u6587\u4ef6\u6216\u76ee\u6807"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"recipe"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"make")," \u9700\u8981\u6267\u884c\u7684\u547d\u4ee4\uff0c\u53ef\u4ee5\u662f\u4efb\u4f55 Shell \u547d\u4ee4")),(0,o.kt)("p",null,"\u4f8b\u5982\u53ef\u4ee5\u7f16\u5199\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"Makefile")," \u6587\u4ef6\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-makefile"},"hello.out : hello.c util_1.o util_2.o\n  cc -o hello.out hello.c util_1.o util_2.o\nutil_1.o : util_1.c helper.h\n  cc -c util_1.c\nutil_2.o : util_2.c helper.h\n  cc -c util_2.c\nclean:\n  rm hello.out hello.c util_1.o util_2.o\n")),(0,o.kt)("p",null,"\u6211\u4eec\u76f4\u63a5\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," \u547d\u4ee4\uff0c\u4e0d\u5e26\u53c2\u6570\u7684\u60c5\u51b5\u4e0b\uff0c\u9ed8\u8ba4\u4f1a\u8fd0\u884c\u7b2c\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"rule"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"make")," \u4f1a\u4e00\u5c42\u5c42\u53bb\u627e\u4f9d\u8d56\u5173\u7cfb\uff0c\u5148\u540e\u8fd0\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cc -c util_1.c helper.h\n$ cc -c util_2.c helper.h\n$ cc -o hello.out hello.c util_1.o util_2.o\n")),(0,o.kt)("p",null,"\u5982\u679c\u5728\u5bfb\u627e\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u9519\u8bef\uff0c\u5982\u6587\u4ef6\u627e\u4e0d\u5230\uff0c\u5219 ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," \u4f1a\u76f4\u63a5\u9000\u51fa\u5e76\u62a5\u9519\u3002\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u6700\u540e\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"rule")," \u5e76\u4e0d\u662f\u751f\u6210\u4e00\u4e2a\u76ee\u6807\u6587\u4ef6\uff0c\u800c\u662f\u5355\u7eaf\u4e00\u4e2a\u52a8\u4f5c\u540d\u3002\u5efa\u8bae\u6bcf\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"Makefile")," \u90fd\u5199 ",(0,o.kt)("inlineCode",{parentName:"p"},"clean")," \u89c4\u5219\uff0c\u8fd9\u6837\u4e0d\u4ec5\u65b9\u4fbf\u91cd\u65b0\u7f16\u8bd1\uff0c\u4e5f\u6709\u5229\u4e8e\u4fdd\u6301\u6587\u4ef6\u8def\u5f84\u7684\u6e05\u6d01\u3002\u4f46\u662f\u5982\u679c\u78b0\u5de7\u5728\u7f16\u8bd1\u8def\u5f84\u4e0b\u6709\u4e00\u4e2a\u4e0e\u4f2a\u76ee\u6807\u540c\u540d\u7684\u6587\u4ef6\u5b58\u5728\uff0c\u90a3\u4e48 ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," \u4f1a\u5728\u4f9d\u8d56\u5173\u7cfb\u56fe\u4e2d\u628a\u8fd9\u4e2a\u6587\u4ef6\u4e0e\u4f2a\u76ee\u6807\u540d\u76f8\u5173\u8054\uff0c\u800c\u8fd9\u4e2a\u6587\u4ef6\u6ca1\u6709\u4fee\u6539\u7684\u8bdd\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"clean")," \u662f\u4e0d\u4f1a\u6267\u884c\u7684\u3002\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0cGNU make \u63d0\u4f9b\u4e86\u4e00\u79cd\u7279\u6b8a\u76ee\u6807\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},".PHONY"),"\uff0c\u7528\u6765\u8868\u793a\u76ee\u6807\u6587\u4ef6\u4e0d\u662f\u771f\u6b63\u7684\u6587\u4ef6\uff0c\u5373\u4f2a\u76ee\u6807\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-makefile"},".PHONY: clean\nclean:\n  rm hello.out hello.c util_1.o util_2.o\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4f2a\u76ee\u6807\u4e5f\u53ef\u4f5c\u4e3a\u76ee\u6807\u6587\u4ef6\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"prerequisite"),"\uff0c\u56e0\u4e3a\u4f2a\u76ee\u6807\u4e0d\u4f1a\u7f16\u8bd1\u51fa\u5b9e\u9645\u7684\u6587\u4ef6\uff0c\u56e0\u800c\u5728\u6bcf\u6b21 ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," \u65f6\u90fd\u4f1a\u91cd\u65b0\u7f16\u8bd1\u3002\u4f2a\u76ee\u6807\u53ef\u4ee5\u88ab\u8ba4\u4e3a\u662f\u5185\u5d4c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Makefile")," \u4e2d\u7684 Shell \u811a\u672c")),(0,o.kt)("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Makefile")," \u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-makefile"},'VERSION = 1.0.0\nPKG_NAME = api-docs-backend\nDATE = `date +%Y-%m-%d_%H:%M:%S`\n\n.PHONY: version build test clean\n\nversion:\n    @echo version: ${VERSION} date: ${DATE} os: win\n\nbuild:\n  @echo "Building $(PKG_NAME) app..."\n  @go build -o $(PKG_NAME)\n\ntest:\n    @echo "Testing $(PKG_NAME) ..."\n    @mkdir -p $(output_test_dir)\n    go test -coverprofile=$(output_test_dir)/$(timestamp).out $(package)\n\nclean:\n    @echo "Cleaning..."\n    @rm -rf build/*\n    @rm -rf vendor\n')),(0,o.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5373\u53ef\u7f16\u8bd1\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ make build\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u547d\u4ee4\u524d\u9762\u52a0\u4e0a ",(0,o.kt)("inlineCode",{parentName:"p"},"@"),"\uff0c\u4e0d\u4f1a\u6253\u5370\u51fa\u6267\u884c\u8bed\u53e5\uff0c\u53ea\u663e\u793a\u6267\u884c\u7ed3\u679c")),(0,o.kt)("p",null,"\u53c2\u8003\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://blog.csdn.net/u013216061/article/details/70592461?utm_source=blogxgwz9"},"https://blog.csdn.net/u013216061/article/details/70592461?utm_source=blogxgwz9"))))}c.isMDXComponent=!0}}]);