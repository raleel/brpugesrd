# 前提条件

1. [Markdown言語](https://www.markdownguide.org/basic-syntax/)についての基本的な理解。

2. もしまだアカウントを持っていない場合は、無料の[github](https://github.com/)アカウントを作成する必要があります。URLの一部になるため、RPGの名称を使用することを推奨します。

3. gitを知らなくても、このプロセス全体をブラウザ上で行うことができます。ただし、Github Desktopの使い方を学ぶことで、変更を公開する前にローカル環境でテストできるようになります。

> 既にドメイン名を登録している場合は、このプロセスと組み合わせて、私が行ったようなSRDを作成できます：https://srd.7thextinctionrpg.com

# プロセス

## Github上でのリポジトリ作成

1. Githubにログインする

2. 公開テンプレート https://github.com/7thExtinctionrpg/RPG_SRD_Template に移動する

3. 「Use this template」をクリックする

![Step3](/_media/Step3.png)

4. 「Create a new repository」を選択する

5. リポジトリ名を入力する

![Step5](/_media/Step5.png)

6. 「Private」を選択する

7. 「Create repository」を選択する

テンプレートのコピーに5～30秒かかります。完了すると、自分自身のリポジトリが作成されます。

8. 「.nojekyll」というファイルがあることを確認してください。これはGithub上でWebサイトをホスティングする際に必要な空のファイルであり、これがないとSRDが正しく表示されません。（*GitHub Pagesに対し、公開するファイルをJekyllで処理しないように指示するものです*）。


## コンテンツの追加

### *.md ファイル

.mdファイルはMarkdownファイルです。Markdownは軽量なマークアップ言語で、プレーンテキストのドキュメントに書式設定を追加できます。コンテンツの規模に応じて、ゲームの全情報を単一の*.mdファイルにまとめるか、[7thextinctionrpg.com](https://srd.7thextinctionrpg.com)のように章ごとにファイルを分けることができます。「sample.md」に書式の例がいくつかあります。

Markdown言語は習得が非常に容易です。文法一覧については、上記前提条件の項目2で提供されているリンクを参照してください。

### _Sidebar.md

これはWebサイトの左側に表示されるメニューおよびナビゲーションパネルです。リポジトリにMarkdownファイルを追加したら、その内容が反映されるようにここにもファイルを追加する必要があります。既存の書式に従ってください。


## Github Pagesを有効にしてリポジトリをWebサイト化する

1. リポジトリの「Settings」をクリックする

![Website-Step1](/_media/Website-Step1.png)

2. 左側のメニューから「Pages」を選択する

![Website-Step2](/_media/Website-Step2.png)

3. リポジトリを「Public」にしていない場合、以下の2つの選択肢があります。
    a. リポジトリをPublicにする。これにより、Github Pagesを使用して無料でSRD Webサイトをホストできるようになります。
    b. Githubアカウントをアップグレードする（執筆時点で月額4ドル、または年額48ドル）。

4. 「Branch」で「main」を選択し、「Save」をクリックする

5. 10～20秒待ってからページを更新する

6. https://coweater.github.io/mysrd/ のようなURLが表示されます。

![Website-Step6](/_media/Website-Step6.png)


## フォントの変更

1. /_assets/スタイル.css ファイルを編集する

2. 「body section」の下に siteFont と headingFont があります

3. これらを好みのフォントに変更してください


## FontawesomeやMaterial Iconsプラグインを使用してSRDで無料アイコンを表示する

### Fontawesome

Fontawesomeを使用して無料のアイコンやアニメーションアイコンを取得します。サブスクリプションユーザーはProアイコンを使用できます。

1. [Fontawesome](https://fontawesome.com/icons) でアイコンを探す
2. アイコンを選択する
3. ポップアップウィンドウのHTMLタブで、" " の間にあるすべての内容をコピーする

```EXAMPLE
<i クラス="fa-solid fa-dice-d20"></i>
```

4. コピーしたテキストを `:` の間に、スペースを入れずに配置する

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Material Iconsを使用して、さらに多くの無料アイコンを利用できます。

1. [Material Icons](https://fonts.google.com/icons) でアイコンを探す
2. Web用のspanリンクをコピーし、Markdownファイル内に直接挿入する

```markup
<span クラス="material-icons">face</span>
```