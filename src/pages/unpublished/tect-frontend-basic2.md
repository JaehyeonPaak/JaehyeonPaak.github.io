---
title: '프론트엔드 컨벤션'
subtitle: '블로그 프레임워크로 Gatsby를 선택한 이유와 GitHub Pages를 사용해 배포하는 방법을 설명합니다.'
date: 2024-02-19 00:00:00
image: ../../images/matrix.png
logoImage: https://i.pinimg.com/564x/28/0d/e9/280de9c6eec1606c219840e4f1d96009.jpg
backgroundImage: 'https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
tags:
- frontend
---

## 블로그 간편히 시작하기
흔히 개발자 블로그로 잘 알려진 플랫폼은 **Tistory**나 **velog**가 있다. 타사에서 제공하는 플랫폼은 포스팅이 꽤 용이한데 커스터마이징이 까다롭다.  
  
블로그 스타일마저 원하는대로 커스터마이징하고싶다면 직접 블로그 프로젝트를 애정을 담아 한땀한땀 개발하는 방법도있다.  
필자와 같은 귀차니즘이 쩌든 사람은 간편하게 페이지를 생성해주는 프레임워크를 사용하면 정신건강에 좋다. 
그것이 바로 **Static Site Generator**이다.  

아래는 대표적인 SSG 종류 및 각 프레임워크가 사용하는 기술스택이다.  
> Jekyll - Ruby  
> Gatsby - React.js  
> Hugo - Golang  
> Hexo - Node.js
 
블로그 프레임워크로 다수가 Jekyll을 선호하는걸로 보이는데, 필자도 Jekyll로 처음 개발을 시도해봤지만 개발 언어가 Ruby (배워도 커리어에 도움이 알될거같다는 언어라고 판단) 인지라 익숙하지 않을 뿐더러 커스터마이징에 한계가 있었다.  
나는 요새 **React**에 빠져있어서 망설임없이 **Gatsby**를 선택했다.  
특히 Frontend 이해도가 어느정도 있어야 하기에 블로그 자체도 포트폴리오로 활용 가능하다는 이유도 있다.   

***
## Gatsby 설치 및 Local 실행
Gatsby를 설치하기 위해선 Gatsby CLI가 필요한데 다음과 같이 설치할 수 있다.  
`npm install -g gatsby-cli`  
`gatsby new [프로젝트명]` 프로젝트 폴더가 위치할 디렉토리에서 해당 명령어를 실행한다.    
`cd [프로젝트명]` 생성한 프로젝트로 이동한다.  
`gatsby develop` 명령어를 실행하여 localhost:8000에서 확인해본다.
  
아래와 같이 기본 Gatsby 사이트를 확인해 볼 수 있다.
[사진 첨부]  
  
프로젝트 구조는 <U>공식 사이트</U>에 친절하게 설명되어있으니 확인해보길바란다.  
  
***
## GitHub Pages를 사용해 배포하기  
내가 어떻게 GitHub Pages를 활용해 배포했는지 과정을 설명하려한다.  

GitHub에 Repository 이름을 **[계정이름].github.io**로 설정한 뒤 생성한다.  
프로젝트로 이동해 방금 생성한 Repository를 연결한다.  
나는 배포용 브랜치 (master)와 개발용 브랜치 (develop)를 따로 생성했다.  
develop 브랜치로 체크아웃 한 다음 현재 프로젝트 소스코드를 푸시한다.  
`git branch develop`  
`git add .`  
`git commit -m "메세지"`  
`git push origin develop`  

GitHub Pages에 배포하기 위해 gh-pages 패키지를 설치한다.  
`npm i gh-pages` 
프로젝트 안 package.json 파일 안에 배포 스크립트를 작성한다.  
`"scripts: {
    "deploy": "gatsby build && gh-pages -d public deploy"
}"`  
  
GitHub로 이동 후 Settings에 Pages 메뉴에서 Source 섹션을 확인해보면 브랜치를 설정할 수 있는데 아까 봤듯이 배포용 브랜치(master)로 설정해주면 된다.
  
작성 후 아래 명령어를 실행한다.  
`npm run deploy`
실행하면 스크립트 파일에서 작성한 명령어가 실행되며 GitHub에 빌드 및 배포가된다.  
  
배포가 잘 됐는지 확인하려면 Repository로 이동해 Action 패널을 클릭한다.  
[사진 첨부]  
  
배포가 성공적이라면 localhost:8000에서 보던 화면을 [GitHub 계정 이름].github.io 주소에서 확인할 수 있다.  
