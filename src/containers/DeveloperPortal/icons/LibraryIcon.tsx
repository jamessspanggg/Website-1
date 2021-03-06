import React, {FC} from 'react';

const LibraryIcon: FC<{size?: number}> = ({size = 40}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.4998 9.00005H10.4998C10.3015 8.98114 10.1037 9.04015 9.94814 9.16458C9.79259 9.28902 9.69159 9.46911 9.6665 9.66671V29H16.3332V9.66671C16.3081 9.46911 16.2071 9.28902 16.0515 9.16458C15.896 9.04015 15.6981 8.98114 15.4998 9.00005Z"
        fill="white"
      />
      <path
        d="M29.5132 27.7266L24.8865 15.5266C24.8554 15.4447 24.8085 15.3698 24.7485 15.306C24.6885 15.2423 24.6165 15.191 24.5366 15.1551C24.4567 15.1192 24.3706 15.0994 24.2831 15.0968C24.1955 15.0942 24.1084 15.1088 24.0265 15.1399L21.6665 16.0599V12.9999C21.6665 12.8231 21.5963 12.6535 21.4712 12.5285C21.3462 12.4035 21.1766 12.3333 20.9998 12.3333H17.6665V28.9999H21.6665V16.7933L26.2865 28.9999L29.5132 27.7266Z"
        fill="white"
      />
    </svg>
  );
};

export default LibraryIcon;
