'use client';

import styles from './intro.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useEffect, useState } from 'react';

const Intro = () => {
    const [currentState, setCurrentState] = useState(0);

    const homeImages = [
        {
            id: 1,
            img: '/tam-tasdik.jpg',
            descH2: 'kolayı var',
            descH1: 'İşimiz Vergi, Gücümüz Teknoloji',
            desc1: 'Online Ödeme ve Başvuru',
        },
        {
            id: 2,
            img: '/plaza3-0HZyrbSf.webp',
            descH1: 'KURUMLAR VERGİSİ BEYANNAMESİ İÇİN SON GÜN BUGÜN',
            desc1: 'Bilgi için tıklayınız..'
        }
    ];

    const quickAccess = [
        {
            id: 1,
            img: '/sl3.86dd08e7.svg',
            descH2: 'M&C PARTNERS',
            descH1: 'Yeminli Mali Müşavirlik A.Ş.',
            descP: 'VERGİYE DAİR HER TÜRLÜ SORUNUNUZU UZMANLIKLA ÇÖZÜYOR VE İŞİNİZİ BÜYÜTÜYORUZ',
        },
        {
            id: 2,
            img: '/sl5.7c9c3973(1).svg',
            descH2: 'M&C PARTNERS',
            descH1: 'Yeminli Mali Müşavirlik A.Ş.',
            descP: 'VERGİYE DAİR HER TÜRLÜ SORUNUNUZU UZMANLIKLA ÇÖZÜYOR VE İŞİNİZİ BÜYÜTÜYORUZ',
        },
        {
            id: 3,
            img: '/sl3.86dd08e7.svg',
            descH2: 'M&C PARTNERS',
            descH1: 'Yeminli Mali Müşavirlik A.Ş.',
            descP: 'VERGİYE DAİR HER TÜRLÜ SORUNUNUZU UZMANLIKLA ÇÖZÜYOR VE İŞİNİZİ BÜYÜTÜYORUZ',
        },
        {
            id: 4,
            img: '/sl5.7c9c3973(1).svg',
            descH2: 'M&C PARTNERS',
            descH1: 'Yeminli Mali Müşavirlik A.Ş.',
            descP: 'VERGİYE DAİR HER TÜRLÜ SORUNUNUZU UZMANLIKLA ÇÖZÜYOR VE İŞİNİZİ BÜYÜTÜYORUZ',
        },
        {
            id: 5,
            img: '/sl3.86dd08e7.svg',
            descH2: 'M&C PARTNERS',
            descH1: 'Yeminli Mali Müşavirlik A.Ş.',
            descP: 'VERGİYE DAİR HER TÜRLÜ SORUNUNUZU UZMANLIKLA ÇÖZÜYOR VE İŞİNİZİ BÜYÜTÜYORUZ',
        },
        {
            id: 6,
            img: '/sl5.7c9c3973(1).svg',
            descH2: 'M&C PARTNERS',
            descH1: 'Yeminli Mali Müşavirlik A.Ş.',
            descP: 'VERGİYE DAİR HER TÜRLÜ SORUNUNUZU UZMANLIKLA ÇÖZÜYOR VE İŞİNİZİ BÜYÜTÜYORUZ',
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentState((prev) => (prev === 1 ? 0 : prev + 1));
        }, 10000);
        return () => clearTimeout(timer);
    }, [currentState]);

    const clickArrowLeft = () => {
        setCurrentState((prev) => (prev === 0 ? 1 : prev - 1));
    };

    const clickArrowRight = () => {
        setCurrentState((prev) => (prev === 1 ? 0 : prev + 1));
    };

    return (
        <div className={styles.home}>
            <div className={styles.contHomeA}>
                <div className={styles.contHomeLeft}>
                    <div className={styles.contHome11}>
                        {homeImages.map((item, index) => (
                            <div
                                key={index}
                                className={styles.header1}
                                style={{ opacity: index === currentState ? 1 : 0 }}
                            >
                                <h2>{item.descH2}</h2>
                                <h1>{item.descH1}</h1>
                                {item.descP && <p>{item.descP}</p>}
                            </div>
                        ))}

                        {homeImages.map((item, index) => (
                            <div key={index} className={styles.buttons} style={{cursor: "pointer"}}>
                                {item.desc1 && (
                                    <Link href="/Teklif-Al" className={`${styles.link} ${styles.lnk}`}>
                                        <button style={{ opacity: index === currentState ? 1 : 0 }}>{item.desc1}</button>
                                    </Link>
                                )}
                                {item.desc2 && (
                                    <Link href="/Iletisim" className={`${styles.link} ${styles.lnk}`}>
                                        <button style={{ opacity: index === currentState ? 1 : 0 }}>{item.desc2}</button>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.contHomeRight}>
                    <div className={styles.shade}></div>
                    {homeImages.map((image, index) => (
                        <Image
                            key={index}
                            className={styles.homeImg1}
                            src={image.img}
                            alt="Vergi tasdiki ve mali denetim hizmetleri - M&C Partners YMM"
                            fill
                            style={{ opacity: index === currentState ? 1 : 0, objectFit: 'cover', zIndex: "1" }}
                        />
                    ))}
                </div>

                <div className={styles.curtain}></div>
            </div>
            <div className={styles.section_link}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        {quickAccess.map((image, index) => (
                            <div className={`${styles.colxl - 2} ${styles.col - 4}`}>
                                <div className={styles.icons}>
                                    <a
                                        href="https://enabiz.gov.tr/"
                                        target="_blank"
                                        title="e-Nabız"
                                        className={
                                            index === 0
                                                ? styles.firstIcon
                                                : index === quickAccess.length - 1
                                                    ? styles.lastIcon
                                                    : ''
                                        }
                                    >
                                        <Image
                                            key={index}
                                            className={styles.homeImg2}
                                            src={image.img}
                                            alt="Vergi tasdiki ve mali denetim hizmetleri - M&C Partners YMM"
                                            fill
                                        /* style={{
                                            opacity: index === currentState ? 1 : 0,
                                            objectFit: 'fill',
                                        }} */
                                        />
                                        <span className={styles.menu_lines}></span>
                                    </a>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.scrollIcon}>
                    <div className={`${styles.col} ${styles.textCenter}`}>
                        <div className={styles.mouse}></div>
                    </div>
                </div>
            </div>



            <div className={styles.arrows}>
                <button onClick={clickArrowLeft} className={styles.left}>
                    <ArrowBackIosNewIcon style={{ color: 'rgb(255, 255, 255)', width: "70px", height: "70px" }} />
                </button>
                <button onClick={clickArrowRight} className={styles.right}>
                    <ArrowBackIosNewIcon style={{ color: 'rgb(255, 255, 255)', width: "70px", height: "70px" }} />
                </button>
            </div>

            <div className={styles.lines}>
                <div className={styles['line-1']}></div>
                <div className={styles['line-2']}></div>
                <div className={styles['line-3']}></div>
            </div>
        </div>
    );
};

export default Intro;
