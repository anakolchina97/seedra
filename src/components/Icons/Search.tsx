import React from "react";
import styles from "./page.module.scss";

const Search = () => {
  return (
    <svg
      className={styles.icon__svg}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.7753 18.6511L16.8091 15.7067C17.9605 14.2699 18.5181 12.4464 18.3672 10.6109C18.2164 8.77535 17.3685 7.06745 15.998 5.83834C14.6275 4.60923 12.8385 3.95232 10.9989 4.0027C9.15928 4.05307 7.40887 4.8069 6.10758 6.10918C4.80629 7.41146 4.05303 9.1632 4.0027 11.0042C3.95236 12.8452 4.60876 14.6356 5.83694 16.0071C7.06512 17.3787 8.77172 18.2272 10.6058 18.3781C12.4399 18.5291 14.2621 17.9711 15.6978 16.8188L18.64 19.7633C18.7143 19.8383 18.8028 19.8978 18.9002 19.9385C18.9976 19.9791 19.1021 20 19.2077 20C19.3132 20 19.4177 19.9791 19.5152 19.9385C19.6126 19.8978 19.701 19.8383 19.7753 19.7633C19.9194 19.6141 20 19.4147 20 19.2072C20 18.9997 19.9194 18.8003 19.7753 18.6511ZM11.2124 16.8188C10.1055 16.8188 9.02346 16.4903 8.10309 15.8749C7.18272 15.2595 6.46538 14.3847 6.04178 13.3613C5.61818 12.3379 5.50735 11.2117 5.7233 10.1252C5.93925 9.03875 6.47228 8.04076 7.25499 7.25746C8.0377 6.47416 9.03493 5.94072 10.1206 5.72461C11.2062 5.50849 12.3315 5.61941 13.3542 6.04333C14.3768 6.46725 15.2509 7.18514 15.8659 8.1062C16.4809 9.02727 16.8091 10.1102 16.8091 11.2179C16.8091 12.7034 16.2195 14.128 15.1699 15.1784C14.1203 16.2287 12.6968 16.8188 11.2124 16.8188Z"
        fill="#70737C"
      />
    </svg>
  );
};

export default Search;
