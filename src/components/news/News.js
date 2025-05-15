import { useState } from "react";
import styles from "./news.module.css"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const News = () => {
    const [newsClick, SetNewsClick] = useState(false)

    const handleClick = () => {
        SetNewsClick(!newsClick)
    }


    return (
        <div className={styles.container}>
            <section className={`${styles["bg-light"]} ${styles["separator-top"]} ${styles.pb0}`}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        {/*Duyurular *Start*/}
                        <div className={`${styles["col-sm-12"]} ${styles["col-md-6"]} ${styles["col-lg-6"]} ${styles["col-xl-6"]}`}>

                            <div className={styles["accordion-heading"]}>
                                <h3 className={`${styles.heading} ${styles.h3} ${styles["fs-22"]} ${styles["font-weight-normal"]} ${styles["change-middle-font-size"]}`}>Duyurular</h3>
                                <span className={styles.separator}></span>
                                <div className={styles["see-all"]}>
                                    <a href="/duyurular/" title="Duyuruların tümünü görüntülemek için tıklayın.">TÜMÜNÜ GÖR</a>
                                </div>
                            </div>
                            <div className={`${styles["accordion-group"]} ${styles["accordion-group-highlight"]}`} data-accordion-group="">
                                <div onClick={handleClick} className={`${styles.accordion} ${styles["aos-init"]} ${styles["aos-animate"]}`} data-accordion="" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                                    <div className={styles.accordionCont}>
                                        <div className={styles["accordion-control"]} data-control="">
                                            <date>
                                                {/*Duyuru Tarihi*/}
                                                09 Mayıs 2025, Cuma

                                                {/*Duyuru Departman*/}
                                                <a href="javascript:void(0)" title="Bilgi Teknolojileri Genel Müdürlüğü">
                                                    <span> - BTGM</span>
                                                </a>
                                            </date>
                                            {/*Duyuru Title*/}
                                            <h5 className={`${styles.heading} ${styles.h5}`}>Sözleşmeli Bilişim Personeli Alım İlanı […] </h5>
                                        </div>

                                        <div className={styles["accordion-content"]} data-content="" style={{ maxHeight: newsClick ? "50px" : "0px", overflow: newsClick ? "auto" : "hidden" }}>
                                            <div className={styles["accordion-content-wrapper"]}>
                                                {/*Duyuru Özet*/}
                                                <p></p>


                                                <a href="/duyurular/09052025/" className={styles["accordion-link"]} title="Duyuru detayı için tıklayın.">
                                                    <strong className={styles["accordion-link--detail"]}>Duyuru Detayı</strong>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                    <ArrowBackIosNewIcon style={{ color: 'rgb(12, 130, 143)', width: "20px", height: "20px", position: "relative", marginRight: "50px", marginTop: "50px", transform: "rotate(-90deg)" }} />
                                </div>
                                <div onClick={handleClick} className={`${styles.accordion} ${styles["aos-init"]}`} data-accordion="" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">

                                    <div className={styles.accordionCont}>
                                        <div className={styles["accordion-control"]} data-control="">
                                            <date>
                                                {/*Duyuru Tarihi*/}
                                                30 Nisan 2025, Çarşamba

                                                {/*Duyuru Departman*/}
                                                <a href="javascript:void(0)" title="Çalışma Genel Müdürlüğü">
                                                    <span> - ÇGM</span>
                                                </a>
                                            </date>
                                            {/*Duyuru Title*/}
                                            <h5 className={`${styles.heading} ${styles.h5}`}>Kamu Kurum ve Kuruluşlarına Bildirilecek Sözleşmeli Erbaş ve Erler Belirlendi. […] </h5>
                                        </div>

                                        <div className={styles["accordion-content"]} data-content="" style={{ maxHeight: newsClick ? "50px" : "0px", overflow: newsClick ? "auto" : "hidden" }}>
                                            <div className={styles["accordion-content-wrapper"]}>
                                                {/*Duyuru Özet*/}
                                                <p></p>


                                                <a href="/duyurular/30042025/" className={styles["accordion-link"]} title="Duyuru detayı için tıklayın.">
                                                    <strong className={styles["accordion-link--detail"]}>Duyuru Detayı</strong>
                                                </a>

                                            </div>
                                        </div>
                                    </div>

                                    <ArrowBackIosNewIcon style={{ color: 'rgb(12, 130, 143)', width: "20px", height: "20px", position: "relative", marginRight: "50px", marginTop: "50px", transform: "rotate(-90deg)" }} />

                                </div>
                                <div onClick={handleClick} className={`${styles.accordion} ${styles["aos-init"]}`} data-accordion="" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                                    <div className={styles.accordionCont}>
                                        <div className={styles["accordion-control"]} data-control="">
                                            <date>
                                                {/*Duyuru Tarihi*/}
                                                14 Şubat 2025, Cuma

                                                {/*Duyuru Departman*/}
                                                <a href="javascript:void(0)" title="Çalışma ve Sosyal Güvenlik Bakanlığı">
                                                    <span> - ÇSGB</span>
                                                </a>
                                            </date>
                                            {/*Duyuru Title*/}
                                            <h5 className={`${styles.heading} ${styles.h5}`}>2025-1 EKPSS Sonucuna Göre Bakanlığımız Kadrolarına Atanmaya Hak Kazanan Adaylara İlişkin Duyuru […] </h5>
                                        </div>

                                        <div className={styles["accordion-content"]} data-content="" style={{ maxHeight: newsClick ? "50px" : "0px", overflow: newsClick ? "auto" : "hidden" }}>
                                            <div className={styles["accordion-content-wrapper"]}>
                                                {/*Duyuru Özet*/}
                                                <p></p>


                                                <a href="/duyurular/14022025/" className={styles["accordion-link"]} title="Duyuru detayı için tıklayın.">
                                                    <strong className={styles["accordion-link--detail"]}>Duyuru Detayı</strong>
                                                </a>

                                            </div>
                                        </div>
                                    </div>

                                    <ArrowBackIosNewIcon style={{ color: 'rgb(12, 130, 143)', width: "20px", height: "20px", position: "relative", marginRight: "50px", marginTop: "50px", transform: "rotate(-90deg)" }} />

                                </div>
                                <div onClick={handleClick} className={`${styles.accordion} ${styles["aos-init"]}`} data-accordion="" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">

                                    <div className={styles.accordionCont}>
                                        <div className={styles["accordion-control"]} data-control="">
                                            <date>
                                                {/*Duyuru Tarihi*/}
                                                03 Şubat 2025, Pazartesi

                                                {/*Duyuru Departman*/}
                                                <a href="javascript:void(0)" title="Personel Dairesi Başkanlığı">
                                                    <span> - PDB</span>
                                                </a>
                                            </date>
                                            {/*Duyuru Title*/}
                                            <h5 className={`${styles.heading} ${styles.h5}`}>Ulusal Staj Programı İlanı […] </h5>
                                        </div>

                                        <div className={styles["accordion-content"]} data-content="" style={{ maxHeight: newsClick ? "50px" : "0px", overflow: newsClick ? "auto" : "hidden" }}>
                                            <div className={styles["accordion-content-wrapper"]}>
                                                {/*Duyuru Özet*/}
                                                <p></p>


                                                <a href="/duyurular/03022025/" className={styles["accordion-link"]} title="Duyuru detayı için tıklayın.">
                                                    <strong className={styles["accordion-link--detail"]}>Duyuru Detayı</strong>
                                                </a>

                                            </div>
                                        </div>
                                    </div>

                                    <ArrowBackIosNewIcon style={{ color: 'rgb(12, 130, 143)', width: "20px", height: "20px", position: "relative", marginRight: "50px", marginTop: "50px", transform: "rotate(-90deg)" }} />

                                </div>
                            </div>

                        </div>
                        {/*Duyurular *End*/}
                        {/*Basın Açıklamaları *Start*/}
                        <div className={`${styles["col-sm-12"]} ${styles["col-md-6"]} ${styles["col-lg-6"]} ${styles["col-xl-6"]}`}>

                            <div className={styles["accordion-heading"]}>
                                <h3 className={`${styles.heading} ${styles.h3} ${styles["fs-22"]} ${styles["font-weight-normal"]} ${styles["change-middle-font-size"]}`}>Basın Açıklamaları</h3>
                                <span className={styles.separator}></span>

                                <div className={styles["see-all"]}>
                                    <a href="/basin-aciklamalari/" title="Basın açıklamalarının tümünü görüntülemek için tıklayın.">TÜMÜNÜ GÖR</a>
                                </div>
                            </div>


                            <div className={`${styles["accordion-group"]} ${styles["accordion-group-highlight"]}`} data-accordion-group="">

                                <div onClick={handleClick} className={`${styles.accordion} ${styles["aos-init"]} ${styles["aos-animate"]}`} data-accordion="" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                                    <div className={styles.accordionCont}>
                                        <div className={styles["accordion-control"]} data-control="">

                                            <date>
                                                {/*Basın Açıklamaları Tarihi*/}
                                                27 Ağustos 2024, Salı
                                            </date>
                                            {/*Basın Açıklamaları Title*/}
                                            <h5 className={`${styles.heading} ${styles.h5}`}>27 Ağustos 2024 Tarihli Basın Açıklaması […] </h5>
                                        </div>

                                        <div className={styles["accordion-content"]} data-content="" style={{ maxHeight: newsClick ? "50px" : "0px", overflow: newsClick ? "auto" : "hidden" }}>
                                            <div className={styles["accordion-content-wrapper"]}>
                                                {/*Basın Açıklamaları Özet*/}
                                                <p>Çalışma ve Sosyal Güvenlik Bakanlığı Rehberlik ve Teftiş Başkanlığı, İstanbul Çatalca'da faaliyet gösteren bir firmada sendikanın örgütlenme çalışmaları nedeniyle işten çıkardığı 13 işçi ile bu işçilerin işten çıkarılmasına karşı olduğu için eylem yapan 132 işçiyi daha işten çıkarmasına ilişkin teftiş raporunu hazırladı.</p>

                                                <a href="/basin-aciklamalari/27-08-2024/" className={styles["accordion-link"]} title="Basın açıklaması detayı için tıklayın">
                                                    <strong className={styles["accordion-link--detail"]}>Basın Açıklaması Detayı</strong>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                    <ArrowBackIosNewIcon style={{ color: 'rgb(12, 130, 143)', width: "20px", height: "20px", position: "relative", marginRight: "50px", marginTop: "50px", transform: "rotate(-90deg)" }} />
                                </div>
                                <div onClick={handleClick} className={`${styles.accordion} ${styles["aos-init"]}`} data-accordion="" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                                    <div className={styles.accordionCont}>
                                        <div className={styles["accordion-control"]} data-control="">

                                            <date>
                                                {/*Basın Açıklamaları Tarihi*/}
                                                30 Temmuz 2024, Salı
                                            </date>
                                            {/*Basın Açıklamaları Title*/}
                                            <h5 className={`${styles.heading} ${styles.h5}`}>30 Temmuz 2024 Tarihli Basın Açıklaması […] </h5>
                                        </div>

                                        <div className={styles["accordion-content"]} data-content="" style={{ maxHeight: newsClick ? "50px" : "0px", overflow: newsClick ? "auto" : "hidden" }}>
                                            <div className={styles["accordion-content-wrapper"]}>
                                                {/*Basın Açıklamaları Özet*/}
                                                <p></p>

                                                <a href="/basin-aciklamalari/30-07-2024/" className={styles["accordion-link"]} title="Basın açıklaması detayı için tıklayın">
                                                    <strong className={styles["accordion-link--detail"]}>Basın Açıklaması Detayı</strong>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                    <ArrowBackIosNewIcon style={{ color: 'rgb(12, 130, 143)', width: "20px", height: "20px", position: "relative", marginRight: "50px", marginTop: "50px", transform: "rotate(-90deg)" }} />
                                </div>
                                <div onClick={handleClick} className={`${styles.accordion} ${styles["aos-init"]}`} data-accordion="" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                                    <div className={styles.accordionCont}>
                                        <div className={styles["accordion-control"]} data-control="">

                                            <date>
                                                {/*Basın Açıklamaları Tarihi*/}
                                                14 Şubat 2024, Çarşamba
                                            </date>
                                            {/*Basın Açıklamaları Title*/}
                                            <h5 className={`${styles.heading} ${styles.h5}`}>Erzincan İliç İlçesindeki Maden Sahasında Meydana Gelen Heyelan Hakkında Açıklama […] </h5>
                                        </div>

                                        <div className={styles["accordion-content"]} data-content="" style={{ maxHeight: newsClick ? "50px" : "0px", overflow: newsClick ? "auto" : "hidden" }}>
                                            <div className={styles["accordion-content-wrapper"]}>
                                                {/*Basın Açıklamaları Özet*/}
                                                <p>Erzincan İliç İlçesindeki Maden Sahasında Meydana Gelen Heyelan Hakkında Açıklama</p>

                                                <a href="/basin-aciklamalari/14-02-2024/" className={styles["accordion-link"]} title="Basın açıklaması detayı için tıklayın">
                                                    <strong className={styles["accordion-link--detail"]}>Basın Açıklaması Detayı</strong>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                    <ArrowBackIosNewIcon style={{ color: 'rgb(12, 130, 143)', width: "20px", height: "20px", position: "relative", marginRight: "50px", marginTop: "50px", transform: "rotate(-90deg)" }} />
                                </div>
                                <div onClick={handleClick} className={`${styles.accordion} ${styles["aos-init"]}`} data-accordion="" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                                    <div className={styles.accordionCont}>
                                        <div className={styles["accordion-control"]} data-control="">

                                            <date>
                                                {/*Basın Açıklamaları Tarihi*/}
                                                13 Şubat 2024, Salı
                                            </date>
                                            {/*Basın Açıklamaları Title*/}
                                            <h5 className={`${styles.heading} ${styles.h5}`}>Erzincan İliç İlçesindeki Maden Sahasında Meydana Gelen Heyelan Hakkında Açıklama […] </h5>
                                        </div>

                                        <div className={styles["accordion-content"]} data-content="" style={{ maxHeight: newsClick ? "50px" : "0px", overflow: newsClick ? "auto" : "hidden" }}>
                                            <div className={styles["accordion-content-wrapper"]}>
                                                {/*Basın Açıklamaları Özet*/}
                                                <p>Erzincan İliç İlçesindeki Maden Sahasında Meydana Gelen Heyelan Hakkında Açıklama</p>

                                                <a href="/basin-aciklamalari/13-02-2024/" className={styles["accordion-link"]} title="Basın açıklaması detayı için tıklayın">
                                                    <strong className={styles["accordion-link--detail"]}>Basın Açıklaması Detayı</strong>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                    <ArrowBackIosNewIcon style={{ color: 'rgb(12, 130, 143)', width: "20px", height: "20px", position: "relative", marginRight: "50px", marginTop: "50px", transform: "rotate(-90deg)" }} />
                                </div>

                            </div>

                        </div>
                        {/*Basın Açıklamaları *End*/}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default News