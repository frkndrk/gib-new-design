import { useEffect, useState } from "react"
import styles from "./navbar.module.css"
import CallIcon from '@mui/icons-material/Call'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from "next/image"
import Link from "next/link";

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const scrollNum = () => {
            if (window.scrollY >= 40) {
                setNavbar(true)
            } else {
                setNavbar(false)
            }
        }

        window.addEventListener("scroll", scrollNum)
        return () => window.removeEventListener("scroll", scrollNum)
    }, [])



    return (
        <div className={(navbar || menuOpen) ? `${styles.navbar} ${styles.active}` : styles.navbar} style={{ position: navbar && "fixed", top: navbar && "0" }}>
            <div className={styles.cont1}>
                <div className={styles.logoCont}>
                    <Link href="/Anasayfa">
                        {
                            navbar
                                ?
                                <Image
                                    src="/logo.png"
                                    alt="Sample Image"
                                    width={140}
                                    height={50}
                                />
                                :
                                <Image
                                    src="/logo.png"
                                    alt="Sample Image"
                                    width={140}
                                    height={50}
                                />

                        }
                    </Link>
                </div>
                <div className={styles.menu}>
                    <ul className={styles.menuUl}>
                        <li className={navbar ? `${styles.menuLi} ${styles.fontColor}` : styles.menuLi}><Link className={styles.link} href="/Anasayfa">Anasayfa</Link></li>
                        <li className={navbar ? `${styles.menuLi} ${styles.fontColor}` : styles.menuLi}>
                            <Link className={styles.link} href="/Kurumsal">Mevzuat</Link><KeyboardArrowDownIcon />
                            <ul className={styles.subMenuCont}>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Kurumsal">Vergi Mevzuatı</Link></li>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Ortaklarimiz">Uluslararası Mevzuat</Link></li>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Ortaklarimiz">KKDF Mevzuatı</Link></li>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Ortaklarimiz">Taslaklar</Link></li>
                                <li className={styles.linkBottom}><Link className={styles.link} href="/Ortaklarimiz">Mevzuat Arama</Link></li>
                            </ul>
                        </li>
                        <li className={navbar ? `${styles.menuLi} ${styles.fontColor}` : styles.menuLi}>
                            <Link className={styles.link} href="/Hizmetler">e-İşlemler</Link><KeyboardArrowDownIcon />
                            <ul className={styles.subMenuCont}>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Hizmetler/tam-tasdik-hizmetleri">Dijital Vergi Dairesi</Link></li>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Hizmetler/tam-tasdik-hizmetleri">İnteraktif Vergi Dairesi</Link></li>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Hizmetler/tam-tasdik-hizmetleri">İnternet Vergi Dairesi</Link></li>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Hizmetler/tam-tasdik-hizmetleri">Defter-Beyan Sistemi</Link></li>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Hizmetler/tam-tasdik-hizmetleri">e-Beyanname</Link></li>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Hizmetler/tam-tasdik-hizmetleri">Borç Sorgulama ve Ödeme</Link></li>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Hizmetler/tam-tasdik-hizmetleri">Hazır Beyan Sistemi</Link></li>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Hizmetler/tam-tasdik-hizmetleri">e-Fatura</Link></li>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Hizmetler/tam-tasdik-hizmetleri">e-Defter</Link></li>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Hizmetler/tam-tasdik-hizmetleri">e-Tebligat</Link></li>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Hizmetler/tam-tasdik-hizmetleri">B-Trans</Link></li>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Hizmetler/tam-tasdik-hizmetleri">İadem Nerede?</Link></li>
                                <li className={`${styles.subMenu} ${styles.linkBottom}`}><Link className={styles.link} href="/Hizmetler/diger-tasdik-ve-ozel-amacli-raporlama-hizmetleri">e-Yoklama Fişi Görüntüleme</Link></li>
                            </ul>
                        </li>
                        <li className={navbar ? `${styles.menuLi} ${styles.fontColor}` : styles.menuLi}><Link className={styles.link} href="/Iletisim">Mükellef Hakları</Link></li>
                        <li className={navbar ? `${styles.menuLi} ${styles.fontColor}` : styles.menuLi}>
                            <Link className={styles.link} href="/Iletisim">İletişim</Link><KeyboardArrowDownIcon />
                            <ul className={styles.subMenuCont}>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Hizmetler/tam-tasdik-hizmetleri">Adres, Telefon ve Fakslar</Link></li>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Hizmetler/tam-tasdik-hizmetleri">OECD Ankara Çok Taraflı Vergi Merkezi</Link></li>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Hizmetler/tam-tasdik-hizmetleri">Vergi İletişim Merkezi</Link></li>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Hizmetler/tam-tasdik-hizmetleri">Defterdarlıklar</Link></li>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Hizmetler/tam-tasdik-hizmetleri">Mükellef Geri Bildirim</Link></li>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Hizmetler/tam-tasdik-hizmetleri">e-Posta Bilgilendirme</Link></li>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Hizmetler/tam-tasdik-hizmetleri">Vergi İhbarı</Link></li>
                                <li className={styles.subMenu}><Link className={styles.link} href="/Hizmetler/tam-tasdik-hizmetleri">Bilgi Edinme</Link></li>
                                <li className={`${styles.subMenu} ${styles.linkBottom}`}><Link className={styles.link} href="/Hizmetler/diger-tasdik-ve-ozel-amacli-raporlama-hizmetleri">İnternet Sitemiz Hakkında Önerileriniz İçin</Link></li>
                            </ul>
                        </li>
                        <li className={navbar ? `${styles.menuLi} ${styles.fontColor}` : styles.menuLi}><Link className={styles.link} href="/Iletisim">Anketler</Link></li>
                    </ul>
                </div>
                {/* <div className={styles.contact}>
                    <a href="tel:+905400996666" style={{ textDecoration: "none" }}>
                        <ul>
                            <li><CallIcon fontSize="large" style={{ backgroundColor: "#fff", color: "rgb(28, 65, 119)", borderRadius: "50%", padding: "10px" }} /></li>
                            <li>
                                <p className={navbar && styles.fontColor}>İletişim</p>
                                <p className={navbar && styles.fontColor}>0540 099 66 66</p>
                            </li>
                        </ul>
                    </a>
                </div> */}
                <div className={`${styles.hamburger} ${menuOpen && styles.active}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <ul className={styles.hambList}>
                        <span className={navbar ? `${styles.hamb} ${styles.bgColor}` : styles.hamb}></span>
                        <span className={navbar ? `${styles.hamb} ${styles.bgColor}` : styles.hamb}></span>
                        <span className={navbar ? `${styles.hamb} ${styles.bgColor}` : styles.hamb}></span>
                    </ul>
                </div>
                <div className={`${styles.menuListList} ${menuOpen && styles.active}`} id="menuList" style={{ top: navbar && "70px", height: "calc(100vh - 70px)" }}>
                    <ul>
                        <li onClick={() => setMenuOpen(false)} className={styles.menu1}><Link href="/Anasayfa">Anasayfa</Link></li>
                        <li onClick={() => setMenuOpen(false)} className={styles.menu1}><Link href="/Kurumsal">Kurumsal</Link></li>
                        <li onClick={() => setMenuOpen(false)} className={styles.menu1}><Link href="/Ortaklarimiz">Yönetim Kurulu Başkanımız</Link></li>
                        <li onClick={() => setMenuOpen(false)} className={styles.menu1}><Link href="/Hizmetler">Hizmetlerimiz</Link></li>
                        <li onClick={() => setMenuOpen(false)} className={styles.menu1}><Link href="/Iletisim">İletişim</Link></li>
                        <li onClick={() => setMenuOpen(false)} className={styles.menu1}><Link href="/Kariyer">Kariyer</Link></li>
                        <div className={styles.logoCont2}>
                            <Link href="/Anasayfa">
                                <Image
                                    src="/Gelir_idaresi_Baskanligi_logo.svg"
                                    alt="Sample Image"
                                    width={150}
                                    height={80}
                                />
                            </Link>
                        </div>
                    </ul>
                </div>
                <div className={styles.ataturk}>
                    <Image
                        src="/ataBayrak.png"
                        alt="Sample Image"
                        width={150}
                        height={100}
                        style={{}}
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar

/* import Image from "next/image"
import styles from "./navbar.module.css"

export default function Navbar() {
    return (
        <div className={styles.container}>
            <Image
                src="/Gelir_idaresi_Baskanligi_logo.svg"
                alt="Sample Image"
                width={150}
                height={80}
            />
        </div>
    )
}
 */