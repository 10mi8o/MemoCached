import Layout from 'components/Layout'
import { 
  SiQiita, 
  SiSpotify, 
  SiPinterest, 
  SiPhp, 
  SiLaravel, 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiCss3,
  SiReact,
  SiGraphql, 
  SiGo,
} from "react-icons/si";

export default function About() {
  return(
    <Layout>
      <div id="about" className="container m-auto px-8 lg:px-0">
        <main className="md:flex">
          <section className="right_box">
            <div　className="mb-5">
              <div className="heading">
                Profile
              </div>
              <div className="w-1/2 m-auto">
                <img className="icon" src="/images/icon.png" alt=""/>
              </div>
              <p className="border-b-2 border-gray-600 pb-5">
                <span className="font-bold">富山 健作</span><br />
                都内在住のWebエンジニアです。仕事では主にWebアプリケーションの開発やフロントエンドの技術を用いるWeb制作に携わっています。
                フロントからサーバーまで書きますが、現在は、フロントエンド開発のスキルを上げるべく、キャッチアップ中。
                最近は、UXデザインに興味あり。
              </p>
              <div className="flex items-center react-icons">
                Skill...
                <a href="https://www.php.net/manual/ja/index.php" target="_blank">
                  <SiPhp size="30"/>
                </a>
                <a href="https://readouble.com/laravel/" target="_blank">
                  <SiLaravel size="30"/>
                </a>
                <a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference" target="_blank">
                  <SiJavascript size="30"/>
                </a>
                <a href="https://www.typescriptlang.org/docs/" target="_blank">
                  <SiTypescript size="30"/>
                </a>
                <a href="https://developer.mozilla.org/ja/docs/Web/HTML/Reference" target="_blank">
                  <SiHtml5 size="30"/>                
                </a>
                <a href="https://developer.mozilla.org/ja/docs/Web/CSS/Reference" target="_blank">
                  <SiCss3 size="30"/>
                </a>
              </div>

              <div className="flex items-center react-icons">
                Studying...
                <a href="https://ja.reactjs.org/" target="_blank">
                  <SiReact size="30"/>
                </a>
                <a href="https://graphql.org/" target="_blank">
                  <SiGraphql size="30"/>
                </a>
                <a href="https://golang.org/" target="_blank">
                  <SiGo size="30"/>
                </a>
              </div>

              <div className="flex items-center react-icons">
                Others...
                <a href="https://qiita.com/10mi8o" target="_blank">
                  <SiQiita size="30"/>
                </a>
                <a href="https://www.pinterest.com/10mi/_saved/" target="_blank">
                  <SiPinterest size="30"/>
                </a>
                <a href="https://open.spotify.com/user/totoma855?si=ZBneslMGR86Dh21jL4bKmw" target="_blank">
                  <SiSpotify size="30"/>
                </a>
              </div>
            </div>

          </section>
          <section className="left_box">
            <div className="mb-5">
                <div className="heading">
                  About this Site
                </div>
                <p>
                  学習したトピックの忘備録兼、ナレッジシェアの場として書いているブログです。
                  <br />
                  QiitaやNoteに書くほどではないけど、覚えておきたい事、後で参照したいトピックなどを貯めていく場として運営しています。
                </p>
                <p>
                  このブログは、Next.js, Contentful, Vercelで作っています。
                </p>
            </div>            
          </section>

        </main>
      </div>
    </Layout>
  )
}