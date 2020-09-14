import React from "react";
import Balance from "../../Components/Balance/Balance";
import CarrencyExchange from "../../Components/CurrencyExchage/CurrencyExchage";
import styles from "./Main.module.css";
import { useSelector } from "react-redux";
import { Remove, Edit } from "../../Components/SVG/sprite";
import Menu from "../../Components/Menu/Menu";

const titles = [
  "Date",
  "Type",
  "Category",
  "Comment",
  "Sum",
  "Balance",
  "Edit",
];

const Main = () => {
  const dataFinance = useSelector((state) => state.finance.data);

  return (
    <div className={styles.mainGlobal}>
      <div>
        <Menu />
        <Balance />
        <div className={styles.showTabletDesktop}>
          <CarrencyExchange />
          <div className={styles.bgCarrenceEx}></div>
        </div>
      </div>
      <div className={styles.Main}>
        <div className={styles.titleContainer}>
          {titles.map((title) => (
            <p key={title} className={styles.title}>
              {title}
            </p>
          ))}
        </div>
        <ul className={styles.list} id="style-3">
          {dataFinance.map((el) => (
            <li className={styles.item} key={el.id}>
              <p className={styles.text}>
                <span className={styles.titleMobile}>Date</span>
                {el.transactionDate.slice(0, 10)}
              </p>
              <p className={styles.textType}>
                <span className={styles.titleMobile}>Type</span>
                {el.balanceAfterSign}
              </p>
              <p className={styles.text}>
                <span className={styles.titleMobile}>Category</span>
                {el.category}
              </p>
              <p className={styles.text}>
                <span className={styles.titleMobile}>Comment</span>
                {el.comment}
              </p>
              <p
                className={
                  el.balanceAfterSign === "-"
                    ? styles.textOrange
                    : styles.textBlue
                }
              >
                <span className={styles.titleMobile}>Sum</span>
                {el.amount}
              </p>
              <p className={styles.text}>
                <span className={styles.titleMobile}>Balance</span>
                {el.balanceAfter}
              </p>
              <div className={styles.text}>
                <span className={styles.titleMobile}>Edit</span>
                <div className={styles.buttonsMobile}>
                  <button className={styles.button}>
                    <Edit scale="18" />
                  </button>
                  <button className={styles.button}>
                    <Remove scale="18" />
                  </button>
                </div>
              </div>
            </li>
          ))}
          <li>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate accusantium facilis minus aliquid asperiores eligendi
              neque molestiae error excepturi, eos omnis ipsa laudantium quidem,
              dignissimos illum ratione esse tempora. Ipsam, cum ad. Unde
              ratione, eveniet alias autem at repellendus dolorem odit rerum
              dignissimos reprehenderit similique, labore eaque? Hic ea animi
              facere doloremque velit aperiam sed incidunt eaque asperiores
              doloribus, numquam, eius inventore culpa quidem reprehenderit
              pariatur rerum quisquam voluptatem rem totam officiis accusamus
              ad. Beatae officiis eius explicabo ab, dolores totam, praesentium
              non, inventore maxime consequuntur consectetur facilis et. Veniam
              numquam rerum hic nesciunt deleniti provident ipsam iure
              necessitatibus laudantium consequatur. Tenetur fugiat labore
              deserunt eum doloremque recusandae, sed molestiae non! Deserunt,
              porro amet voluptatem aliquam officiis non! Eaque unde harum
              explicabo atque perferendis veritatis sunt cum, nemo molestiae
              porro ex distinctio, quidem fugit beatae officiis corporis at!
              Maiores sint repellat veniam mollitia repudiandae aut! Eum odit
              aperiam, provident repellendus aliquam quia odio quae itaque ab
              dolores modi exercitationem molestias illum aut ratione totam ad
              architecto animi. Corporis alias esse animi excepturi illo?
              Reiciendis suscipit, placeat recusandae pariatur quae soluta
              officia tempora et enim dolor iure ratione. A ut nemo accusamus.
              Dolorum, quia recusandae. Ad facilis ex incidunt nihil adipisci
              cumque ratione iure atque perferendis quibusdam eum, eligendi
              error quam fugit minima obcaecati corrupti laborum iusto. Sed
              voluptas doloremque, animi numquam exercitationem aut culpa dicta
              itaque sit sequi facilis earum voluptatem fuga? Libero repudiandae
              est, nobis ea, explicabo totam amet cumque a fuga impedit nesciunt
              excepturi ratione, perferendis esse possimus reiciendis mollitia
              saepe ipsum hic? Nesciunt, cupiditate. Repellat repellendus,
              explicabo suscipit libero quam quibusdam! Autem nisi quia iusto
              quos obcaecati consequuntur recusandae commodi quaerat provident.
              Officiis, tenetur nihil velit dolorum laudantium, sapiente, veniam
              quibusdam eveniet perspiciatis quia laborum repellendus blanditiis
              debitis suscipit labore alias in odit beatae qui dolor. Unde?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur ratione molestias nam cupiditate autem quis possimus
              similique magni iste vero maxime voluptate, odit explicabo quaerat
              cum minima delectus facilis praesentium deserunt quia corrupti
              sapiente illum cumque? Nostrum cupiditate ratione sequi odit
              labore est porro, sit mollitia nisi. Libero atque debitis magnam!
              Itaque enim a eligendi quis doloribus dolorum minima omnis,
              aliquid eos fugit incidunt provident odio eveniet nostrum aliquam,
              accusamus molestiae harum culpa voluptatum sit perferendis est
              totam in repellendus! Ex dolorum asperiores consequatur similique
              adipisci quis eligendi corrupti alias quaerat autem harum, quia
              laborum, maiores aut sequi eveniet, perspiciatis repellendus
              dolore consectetur a ratione? Placeat, harum veniam nam incidunt
              consequuntur dolorum rerum omnis nobis doloribus modi quasi nulla.
              Id repellat eligendi voluptatibus veniam tenetur temporibus,
              voluptatem quo ab. Maxime deserunt, veritatis facere suscipit
              mollitia voluptas eius nulla sit qui doloribus laboriosam dolorum
              enim! Cumque, accusamus unde sapiente, esse doloribus odit,
              blanditiis reiciendis at laboriosam earum odio quo ratione eum
              maiores voluptatem beatae exercitationem a harum explicabo? Enim
              non rem modi corrupti. Modi suscipit odio repellendus totam, dicta
              magni perspiciatis id omnis. Maiores eveniet nesciunt deserunt
              accusamus sequi itaque excepturi inventore. Et officia odio,
              dolorem possimus cupiditate, ea corrupti voluptatibus fugiat
              assumenda at ad consectetur quae excepturi doloremque laborum
              iusto sint officiis dolores tenetur ullam adipisci quaerat vitae
              nobis velit? Ad obcaecati at voluptas placeat commodi voluptates
              iusto delectus odit voluptatum alias quasi exercitationem
              veritatis impedit quo molestias neque, quae, doloribus eligendi
              ducimus ipsa, architecto in. Amet ducimus perspiciatis sed
              laboriosam, ullam commodi, eligendi velit exercitationem pariatur
              deleniti esse nisi aperiam, ex hic sunt. Sequi natus, consequuntur
              error voluptatum omnis enim officia ea asperiores. Vitae expedita
              nihil natus in vero aspernatur minima, ex aliquid quasi, ut
              tempore. Illum, cum excepturi officiis nulla tempore quaerat saepe
              odio modi ea sit quos accusantium quidem, culpa deleniti,
              provident ab omnis aspernatur. Illo ipsa minima vero, inventore
              tempore a quae saepe, fugiat nihil aspernatur at nesciunt
              praesentium architecto qui optio asperiores quaerat. Quam, a!
              Provident id odit ea nulla deserunt dicta eius cumque, maxime,
              eveniet expedita voluptatem sunt esse! Provident commodi dolor
              nemo quasi non, qui vitae animi omnis labore doloremque sint
              tenetur quisquam distinctio, architecto harum quas. Ea molestiae
              vero sed. Esse accusantium molestiae distinctio quae repellendus
              iure a odit temporibus sunt fugiat officia et, perferendis id
              porro delectus totam vero eum iste. Nisi architecto veritatis
              distinctio natus quo facilis quidem cum. Voluptates, nemo. Maxime,
              deserunt ex. Ex consectetur doloremque dolores laboriosam dolore,
              sint aspernatur asperiores molestiae totam porro eaque sit illo?
              Optio dolorem laboriosam expedita, at blanditiis aut ullam, a eos
              voluptates veritatis, repellat nulla tenetur nam quasi rem?
              Repudiandae est quidem neque eaque repellat aliquid dolor odit
              alias blanditiis, molestiae porro suscipit temporibus a illum vel
              nesciunt ipsam voluptatum sunt debitis at minus distinctio
              accusamus id magni? Voluptatum, laborum incidunt perspiciatis
              harum officiis sequi temporibus ad ratione quos ipsam odio enim
              excepturi doloremque sapiente pariatur, praesentium commodi animi.
              Animi voluptate, dignissimos sit ullam ab iste alias officiis
              saepe, quaerat dolor unde consequuntur a officia modi atque
              ratione qui. Reiciendis esse labore quis qui atque, quibusdam ut
              placeat quasi voluptatum error veniam, deleniti perspiciatis
              blanditiis sapiente nemo officia iste quia consectetur enim illum
              debitis in expedita dignissimos. Itaque doloremque repudiandae
              velit odit molestias autem dolores provident, officia ducimus a,
              libero non tempore ea temporibus, soluta laborum quae adipisci
              ipsa veniam repellendus. Expedita quasi ut nihil totam, ad iure
              quae saepe modi accusamus? Minima ipsa doloribus, sapiente enim
              voluptatem, odio pariatur tenetur est rerum quo, at ratione.
              Voluptatum explicabo nisi quas? Ipsam nulla, voluptates in quidem
              rerum asperiores reprehenderit harum perferendis facilis
              exercitationem.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
