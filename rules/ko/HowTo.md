# 전제 조건

1. [마크다운 언어](https://www.markdownguide.org/basic-syntax/)에 대한 기본적인 이해.

2. [Github](https://github.com/) 계정이 없다면 무료로 생성해야 합니다. 사람들이 귀하의 SRD에 액세스하는 URL의 일부가 되므로, RPG 게임 이름으로 계정을 만드는 것을 권장합니다. 

3. Git을 몰라도 브라우저를 통해 전체 과정을 진행할 수 있습니다. 하지만 Github Desktop을 배우면 변경 사항을 실제 배포하기 전에 로컬에서 테스트해 볼 수 있습니다.

> 도메인 이름을 등록했다면, 이 과정을 통해 제가 만든 것과 같은 SRD를 생성할 수 있습니다: https://srd.7thextinctionrpg.com

# 과정

## Github에서 저장소(Repository) 만들기

1. Github 로그인

2. 공개 템플릿 https://github.com/7thExtinctionrpg/RPG_SRD_Template 로 이동

3. "Use this template" 클릭

![Step3](/_media/Step3.png)

4. "Create a new repository" 선택

5. 저장소 이름 입력

![Step5](/_media/Step5.png)

6. 'Private' 선택 

7. 'Create repository' 선택

템플릿을 복사하는 데 5~30초 정도 소요되며, 완료되면 자신만의 사본을 갖게 됩니다.

8. ".nojekyll" 파일이 있는지 확인하십시오. 이는 Github에 웹사이트를 호스팅할 때 필요한 빈 파일로, 이 파일이 없으면 SRD가 제대로 표시되지 않습니다. *(GitHub Pages가 게시된 파일을 Jekyll로 실행하지 않도록 지시합니다).*


## 콘텐츠 추가하기

### *.md 파일

.md 파일은 마크다운 파일입니다. 마크다운은 일반 텍스트 문서에 서식 요소를 추가할 수 있는 경량 마크업 언어입니다. 콘텐츠 규모에 따라 게임의 모든 정보를 단일 *.md 파일에 넣거나, [7thextinctionrpg.com](https://srd.7thextinctionrpg.com)처럼 각 챕터별로 파일을 분리할 수 있습니다. "sample.md" 파일에서 몇 가지 서식 예시를 확인할 수 있습니다. 

마크다운 언어는 배우기 매우 쉬우며, 전체 구문 목록은 위 '전제 조건' 2번에 제공된 링크를 참고하십시오. 

### _Sidebar.md

이 파일은 웹사이트 왼쪽의 메뉴 및 탐색 창입니다. 저장소에 마크다운 파일을 추가한 후에는 해당 내용을 포함할 수 있도록 이곳에 파일을 추가해야 합니다. 기존 서식을 따르십시오.


## Github Pages를 사용하여 저장소를 웹사이트로 변환하기

1. 저장소에서 'Settings' 클릭

![Website-Step1](/_media/Website-Step1.png)

2. 왼쪽 메뉴에서 'Pages' 선택

![Website-Step2](/_media/Website-Step2.png)

3. 저장소를 'public'으로 설정하지 않았다면 두 가지 선택지가 있습니다.
    a. 저장소를 공개(public)로 설정하여 Github Pages를 통해 SRD 웹사이트를 무료로 호스팅합니다.
    b. Github 계정을 업그레이드합니다 (이 글을 작성하는 시점 기준으로 월 4달러 또는 연 48달러 비용 발생).

4. 'Branch' 아래에서 'main'을 선택하고 저장을 클릭합니다.

5. 10~20초 정도 기다린 후 페이지를 새로고침합니다.

6. 이제 https://coweater.github.io/mysrd/ 와 같은 URL을 확인할 수 있습니다.

![Website-Step6](/_media/Website-Step6.png)


## 폰트 변경하기

1. /_assets/style.css 파일을 편집합니다. 

2. 'body section' 아래에서 siteFont와 headingFont를 찾을 수 있습니다.

3. 사용하려는 폰트로 변경합니다.


## Fontawesome 및/또는 Material Icons 플러그인을 사용하여 SRD에 무료 아이콘 표시하기

### Fontawesome

Fontawesome을 사용하여 무료 아이콘과 애니메이션 아이콘을 가져옵니다. 구독 사용자는 Pro 아이콘을 사용할 수 있습니다.

1. [Fontawesome](https://fontawesome.com/icons)에서 아이콘을 찾습니다.
2. 아이콘을 선택합니다.
3. 팝업 창의 HTML 탭에서 " " 사이의 모든 내용을 복사합니다.

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. 복사한 텍스트를 공백 없이 `:` 사이에 넣습니다.

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

더 많은 무료 아이콘을 위해 Material Icons를 사용합니다.

1. [Material Icons](https://fonts.google.com/icons)에서 아이콘을 찾습니다.
2. 웹 span 링크를 복사하여 마크다운 파일에 직접 삽입합니다.

```markup
<span class="material-icons">face</span>
```