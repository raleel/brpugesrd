# 前提条件

1. [Markdown言語](https://www.markdownguide.org/basic-syntax/)についての基本的な理解。

2. まだお持ちでない場合は、無料の[Github](https://github.com/)アカウントを作成する必要があります。作成するSRDにアクセスするためのURLの一部となるため、RPGのタイトルをアカウント名に使用することをお勧めします。

3. Gitの知識がなくても、ブラウザだけでこの全プロセスを行うことが可能です。ただし、GitHub Desktopを学習しておくと、世界中に公開する前にローカルで変更をテストできるようになります。

> 既にドメイン名を取得している場合は、それを使用して私のように https://srd.7thextinctionrpg.com のようなSRDを作成することができます。

# 手順

## Githubでリポジトリを作成する

1. Githubにログインします。

2. 公開テンプレート https://github.com/7thExtinctionrpg/RPG_SRD_Template に移動します。

3. 「Use this template（このテンプレートを使用する）」をクリックします。

![Step3](/_media/Step3.png)

4. 「Create a new repository（新しいリポジトリを作成）」を選択します。

5. リポジトリ名を入力します。

![Step5](/_media/Step5.png)

6. 「Private（プライベート）」を選択します。

7. 「Create repository（リポジトリを作成）」を選択します。

テンプレートのコピーに5～30秒かかります。完了すると、あなた専用のコピーが作成されます。

8. 「.nojekyll」というファイルが存在することを確認してください。これはGithubでウェブサイトをホストする際に必要な空のファイルで、これがないとSRDが正しく表示されません。（*GitHub Pagesに対し、公開するファイルをJekyllで処理しないように指示します*）。


## コンテンツを追加する

### *.md ファイル

.mdファイルはMarkdownファイルです。Markdownは軽量なマークアップ言語で、プレーンテキストドキュメントに書式設定要素を追加するために使用できます。コンテンツの規模に応じて、ゲームの全情報を1つの*.mdファイルにまとめるか、私が [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) で行っているように各章ごとにファイルを分けることができます。「sample.md」に書式設定の例がいくつか記載されています。

Markdown言語は非常に習得が容易です。構文の全リストについては、前述の「前提条件」の項目2にあるリンク先を参照してください。

### _Sidebar.md

これはウェブサイトの左側に表示されるメニューおよびナビゲーションペインです。リポジトリにMarkdownファイルを追加したら、その内容が含まれるようにここにファイルを追加する必要があります。既存の書式に従ってください。


## Github Pagesを有効にしてリポジトリをウェブサイト化する

1. リポジトリ内の「Settings（設定）」をクリックします。

![Website-Step1](/_media/Website-Step1.png)

2. 左側のメニューから「Pages」を選択します。

![Website-Step2](/_media/Website-Step2.png)

3. リポジトリを「Public（公開）」にしていない場合、2つの選択肢があります。
    a. リポジトリを公開設定に変更する。これにより、Github Pagesを使用してSRDウェブサイトを無料でホストできるようになります。
    b. Githubアカウントをアップグレードする（執筆時点では月額4ドル、または年額48ドルの料金がかかります）。

4. 「Branch（ブランチ）」の下で「main」を選択し、「Save（保存）」をクリックします。

5. 10～20秒待ってからページを更新します。

6. これで https://coweater.github.io/mysrd/ のようなURLが表示されるようになります。

![Website-Step6](/_media/Website-Step6.png)


## フォントを変更する

1. /_assets/style.css ファイルを編集します。

2. 「body section」の下に siteFont と headingFont があります。

3. これらを使用したいフォントに変更します。


## FontawesomeやMaterial Iconsプラグインを使用してSRDに無料アイコンを表示する

### Fontawesome

Fontawesomeを使用して、無料のアイコンやアニメーションアイコンを取得します。サブスクリプションユーザーはProアイコンも使用可能です。

1. [Fontawesome](https://fontawesome.com/icons) でアイコンを探します。
2. アイコンを選択します。
3. ポップアップウィンドウのHTMLタブ内で、" " の間にあるすべてをコピーします。

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. コピーしたテキストを `:` の間にスペースなしで配置します。

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

無料のアイコンをさらに利用するには、Material Iconsを使用します。

1. [Material Icons](https://fonts.google.com/icons) でアイコンを探します。
2. Web用のspanリンクをコピーし、Markdownファイルに直接挿入します。

```markup
<span class="material-icons">face</span>
```