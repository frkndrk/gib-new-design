import styles from "./topbar.module.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import Image from "next/image";

export default function Topbar() {
  const [searchState, setSearchState] = useState(false);

  const handleSearch = (e) => {
    setSearchState(true)
    e.stopPropagation();
  }

  return (
    <div className={styles.topbar} onClick={() => setSearchState(false)}>
      <div className={styles.contTB}>
        <div className={styles.addresBar}>
          <ul>
            <li className={styles.language}>
              English
            </li>{/* 
            <li>
              Türkçe
            </li> */}
          </ul>
        </div>
        {/* <a href="tel:+905400996666" style={{ textDecoration: "none", zIndex: "333" }}>
          <div className={styles.phoneNum}>
            <span><CallIcon /></span>
            <p>0540 099 66 66</p>
          </div>
        </a> */}
        <div className={styles.textMessage}>
          <p className={styles.text}>Vergi Geleceğimizdir</p>
        </div>
        <div className={styles.icons}>
          <ul>
            <li
              className={`${styles.searchContainer} ${searchState ? styles.activeSearchContainer : ''}`}
              onClick={(e) => handleSearch(e)}
            >
              <SearchIcon fontSize="small" />
              <input
                type="text"
                placeholder="Arama..."
                className={`${styles.searchInput} ${searchState ? styles.showInput : ''}`}
              />
            </li>

            <a href="https://x.com/mcpartnersymm?s=21" target="_blank" rel="noreferrer">
              <li><XIcon fontSize="small" /></li>
            </a>
            <a href="https://www.instagram.com/mcpartnersymm?igsh=MTlobXl6cTNreWtsag%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
              <li><InstagramIcon fontSize="small" /></li>
            </a>
            <a href="https://x.com/mcpartnersymm?s=21" target="_blank" rel="noreferrer">
              <li><FacebookIcon fontSize="small" /></li>
            </a>
            <a href="https://x.com/mcpartnersymm?s=21" target="_blank" rel="noreferrer">
              <li><YouTubeIcon fontSize="small" /></li>
            </a>
            <a href="https://www.linkedin.com/in/mehmet-%C3%B6zt%C3%BCrk-946a0b108/" target="_blank" rel="noreferrer">
              <li><LinkedInIcon fontSize="small" /></li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
