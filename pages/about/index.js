import Layout from 'components/Layout'

export default function About() {
  return(
    <Layout>
      <div id="about" className="container m-auto">
        <main className="flex">
          <section className="right_box">
            <div className="mb-5">
              <div className="heading">
                About this Site
              </div>
              <p>
                学習したトピックの忘備録兼、ナレッジシェアの場として書いているブログです。
                <br />
                QiitaやNoteに書くほどではないけど、覚えておきたい事、後で参照したいトピックなどを貯めていく場として運営しています。
              </p>
            </div>

            <div　className="mb-5">
              <div className="heading">
                Profile
              </div>
              {/* <img className="icon" src="/images/icon.png" alt=""/> */}
              <p>
                <span className="font-bold">富山 健作</span><br />
                都内在住のWebエンジニアです。フロントからサーバーまで書きますが、フロントの方が書いていて楽しいです。
                <br />最近は、UXデザインに興味あり。
              </p>
            </div>

            {/* <div>
              <div className="heading">
                Skill
              </div>
              <ul>
                <li>PHP</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
              </ul>
              <ul>
                <li>Laravel</li>
                <li>Django</li>
                <li>React</li>
                <li>Riot.js</li>
              </ul>
            </div> */}
          </section>
          <section className="left_box">
            <img src="/images/sheep.png" alt=""/>
          </section>

        </main>
      </div>

    </Layout>
  )
}