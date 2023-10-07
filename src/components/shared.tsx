import { useState } from "react";
import ViewTask from "@/components/kanban/viewTask";
import Image from "next/image";
import ModalRef from "./kanban/modal-ref";
import { AiOutlineDelete } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";

export const Hamburger = () => {
  return (
    <svg
      width="18"
      height="12"
      fill="none"
      viewBox="0 0 18 12"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[22px] h-[22px] sm:w-[28px] sm:h-[28px] "
    >
      <path
        fill="#999999"
        d="M16.6801 4.8H1.3201C0.657698 4.8 0.600098 5.3364 0.600098 6C0.600098 6.6636 0.657698 7.2 1.3201 7.2H16.6801C17.3425 7.2 17.4001 6.6636 17.4001 6C17.4001 5.3364 17.3425 4.8 16.6801 4.8ZM16.6801 9.6H1.3201C0.657698 9.6 0.600098 10.1364 0.600098 10.8C0.600098 11.4636 0.657698 12 1.3201 12H16.6801C17.3425 12 17.4001 11.4636 17.4001 10.8C17.4001 10.1364 17.3425 9.6 16.6801 9.6ZM1.3201 2.4H16.6801C17.3425 2.4 17.4001 1.8636 17.4001 1.2C17.4001 0.5364 17.3425 0 16.6801 0H1.3201C0.657698 0 0.600098 0.5364 0.600098 1.2C0.600098 1.8636 0.657698 2.4 1.3201 2.4Z"
      />
    </svg>
  );
};

export const InputField = (props: {
  tag?: string;
  type: string;
  placeholder: any;
}) => {
  return (
    <div className="text-[14px] font-normal bg-[#3F3F3F] text-white">
      <p className="pb-[10px] bg-[#0F0F0F] text-[#999]">{props.tag}</p>
      <input
        type={props.type}
        className="h-auto py-[9px] px-4 border-[1px] border-zinc-400 focus:outline-none focus:[#873ab3] focus:[#873ab3] focus:ring-1"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export const TextArea = (props: { tag?: string; placeholder: string }) => {
  return (
    <div className="w-full text-[14px] font-normal bg-[#3F3F3F] text-white   ">
      <p className="pb-[10px] bg-[#0F0F0F] text-[#999]">{props.tag}</p>

      <textarea
        placeholder={props.placeholder}
        className="w-full text-[14px] font-normal bg-[#3F3F3F] text-white p-4 -mb-1 border-[1px] border-zinc-400 focus:outline-none focus:[#873ab3] focus:[#873ab3] focus:ring-1"
      />
    </div>
  );
};

export const SearchSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.4444 20L15.4444 17C14.8889 17.4444 14.25 17.7963 13.5278 18.0556C12.8056 18.3148 12.037 18.4444 11.2222 18.4444C9.2037 18.4444 7.49556 17.7452 6.09778 16.3467C4.7 14.9481 4.00074 13.24 4 11.2222C4 9.2037 4.69926 7.49556 6.09778 6.09778C7.4963 4.7 9.20444 4.00074 11.2222 4C13.2407 4 14.9489 4.69926 16.3467 6.09778C17.7444 7.4963 18.4437 9.20444 18.4444 11.2222C18.4444 12.037 18.3148 12.8056 18.0556 13.5278C17.7963 14.25 17.4444 14.8889 17 15.4444L20 18.4444L18.4444 20ZM11.2222 16.2222C12.6111 16.2222 13.7919 15.7359 14.7644 14.7633C15.737 13.7907 16.223 12.6104 16.2222 11.2222C16.2222 9.83333 15.7359 8.65259 14.7633 7.68C13.7907 6.70741 12.6104 6.22148 11.2222 6.22222C9.83333 6.22222 8.65259 6.70852 7.68 7.68111C6.70741 8.6537 6.22148 9.83407 6.22222 11.2222C6.22222 12.6111 6.70852 13.7919 7.68111 14.7644C8.6537 15.737 9.83407 16.223 11.2222 16.2222Z"
        fill="#999999"
      />
    </svg>
  );
};

export const EmojiSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 11.25C9.39782 11.25 9.77936 11.092 10.0607 10.8107C10.342 10.5294 10.5 10.1478 10.5 9.75C10.5 9.35218 10.342 8.97064 10.0607 8.68934C9.77936 8.40804 9.39782 8.25 9 8.25C8.60218 8.25 8.22064 8.40804 7.93934 8.68934C7.65804 8.97064 7.5 9.35218 7.5 9.75C7.5 10.1478 7.65804 10.5294 7.93934 10.8107C8.22064 11.092 8.60218 11.25 9 11.25ZM16.5 9.75C16.5 10.1478 16.342 10.5294 16.0607 10.8107C15.7794 11.092 15.3978 11.25 15 11.25C14.6022 11.25 14.2206 11.092 13.9393 10.8107C13.658 10.5294 13.5 10.1478 13.5 9.75C13.5 9.35218 13.658 8.97064 13.9393 8.68934C14.2206 8.40804 14.6022 8.25 15 8.25C15.3978 8.25 15.7794 8.40804 16.0607 8.68934C16.342 8.97064 16.5 9.35218 16.5 9.75ZM7.16475 14.3295C7.34172 14.241 7.54649 14.226 7.73446 14.2879C7.92242 14.3497 8.07834 14.4832 8.16825 14.6595L8.1705 14.664L8.196 14.7075C8.22225 14.7503 8.26575 14.817 8.32875 14.9017C8.4555 15.0705 8.65875 15.3038 8.95275 15.5392C9.5325 16.0027 10.4948 16.5 12 16.5C13.5052 16.5 14.4675 16.0027 15.0472 15.54C15.342 15.3037 15.5452 15.0705 15.6713 14.9017C15.7286 14.8257 15.7815 14.7463 15.8295 14.664L15.8325 14.6588C15.923 14.4826 16.0795 14.3493 16.2678 14.2881C16.4562 14.2269 16.6611 14.2427 16.8379 14.332C17.0147 14.4213 17.149 14.5769 17.2114 14.7649C17.2739 14.9529 17.2594 15.1579 17.1713 15.3353L17.1698 15.3375V15.339L17.1667 15.3435L17.1608 15.3547C17.1374 15.3994 17.1124 15.4432 17.0858 15.486C17.0199 15.5946 16.9486 15.6997 16.872 15.801C16.6153 16.1403 16.317 16.446 15.984 16.7108C15.1575 17.3723 13.8698 18 12 18C10.1302 18 8.8425 17.3723 8.016 16.71C7.68336 16.4456 7.38527 16.1405 7.12875 15.8018C7.02225 15.6595 6.92553 15.5101 6.83925 15.3547L6.83325 15.3435L6.831 15.339L6.83025 15.3368L6.8295 15.3353C6.74068 15.1574 6.72611 14.9516 6.78897 14.763C6.85183 14.5744 6.98699 14.4185 7.16475 14.3295ZM12 1.5C6.201 1.5 1.5 6.201 1.5 12C1.5 17.799 6.201 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.201 17.799 1.5 12 1.5ZM3 12C3 7.02975 7.02975 3 12 3C16.9703 3 21 7.02975 21 12C21 16.9703 16.9703 21 12 21C7.02975 21 3 16.9703 3 12Z"
        fill="#999999"
      />
    </svg>
  );
};

export const AttachSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3.42444 11.9628C3.42417 12.1113 3.46802 12.2566 3.55041 12.3801C3.6328 12.5037 3.75003 12.6001 3.88724 12.6569C4.02445 12.7138 4.17546 12.7287 4.32113 12.6996C4.46679 12.6706 4.60055 12.5989 4.70544 12.4938L11.5979 5.59827C12.3013 4.89491 13.2552 4.49977 14.2499 4.49977C14.7425 4.49977 15.2302 4.59678 15.6852 4.78526C16.1402 4.97374 16.5537 5.25 16.9019 5.59827C17.2502 5.94653 17.5265 6.35998 17.7149 6.81502C17.9034 7.27005 18.0004 7.75775 18.0004 8.25027C18.0004 8.74279 17.9034 9.23049 17.7149 9.68552C17.5265 10.1406 17.2502 10.554 16.9019 10.9023L8.94744 18.8568C8.66454 19.13 8.28563 19.2812 7.89234 19.2778C7.49904 19.2744 7.12282 19.1166 6.84471 18.8385C6.5666 18.5604 6.40885 18.1842 6.40543 17.7909C6.40201 17.3976 6.5532 17.0187 6.82644 16.7358L14.7809 8.78127C14.8507 8.71154 14.906 8.62875 14.9437 8.53764C14.9815 8.44653 15.0009 8.34888 15.0009 8.25027C15.0009 8.15165 14.9815 8.054 14.9437 7.96289C14.906 7.87178 14.8507 7.789 14.7809 7.71927C14.7112 7.64954 14.6284 7.59422 14.5373 7.55648C14.4462 7.51874 14.3486 7.49932 14.2499 7.49932C14.1513 7.49932 14.0537 7.51874 13.9626 7.55648C13.8715 7.59422 13.7887 7.64954 13.7189 7.71927L5.76444 15.6753C5.47791 15.952 5.24936 16.283 5.09214 16.6491C4.93491 17.0151 4.85215 17.4087 4.84869 17.8071C4.84523 18.2054 4.92113 18.6004 5.07197 18.9691C5.22282 19.3378 5.44558 19.6728 5.72725 19.9545C6.00893 20.2361 6.34389 20.4589 6.71258 20.6097C7.08127 20.7606 7.47631 20.8365 7.87464 20.833C8.27298 20.8296 8.66664 20.7468 9.03265 20.5896C9.39867 20.4323 9.7297 20.2038 10.0064 19.9173L17.9609 11.9628C18.9456 10.9782 19.4987 9.64273 19.4987 8.25027C19.4987 6.85781 18.9456 5.52238 17.9609 4.53777C16.9763 3.55315 15.6409 3 14.2484 3C12.856 3 11.5206 3.55315 10.5359 4.53777L3.64494 11.4318C3.5752 11.5014 3.51995 11.5842 3.48236 11.6754C3.44478 11.7665 3.4241 11.8642 3.42444 11.9628Z"
        fill="#999999"
      />
    </svg>
  );
};

export const DashboardSearch = (props: { width: string }) => {
  return (
    <div
      className={`${props.width} flex items-center rounded-full h-[45px] px-6 py-2 gap-2 text-[#999999] bg-zinc-900`}
    >
      <SearchSVG />
      <input
        type="search"
        placeholder="Search"
        className="bg-inherit focus:outline-none"
      />
    </div>
  );
};

export const FilterIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15.0001 19.88C15.0401 20.18 14.9401 20.5 14.7101 20.71C14.6176 20.8027 14.5077 20.8762 14.3868 20.9264C14.2658 20.9766 14.1361 21.0024 14.0051 21.0024C13.8742 21.0024 13.7445 20.9766 13.6235 20.9264C13.5025 20.8762 13.3926 20.8027 13.3001 20.71L9.29013 16.7C9.18107 16.5934 9.09814 16.463 9.04783 16.319C8.99752 16.175 8.9812 16.0213 9.00013 15.87V10.75L4.21013 4.62C4.04774 4.41153 3.97446 4.14726 4.00632 3.88493C4.03817 3.6226 4.17257 3.38355 4.38013 3.22C4.57013 3.08 4.78013 3 5.00013 3H19.0001C19.2201 3 19.4301 3.08 19.6201 3.22C19.8277 3.38355 19.9621 3.6226 19.9939 3.88493C20.0258 4.14726 19.9525 4.41153 19.7901 4.62L15.0001 10.75V19.88ZM7.04013 5L11.0001 10.06V15.58L13.0001 17.58V10.05L16.9601 5H7.04013Z"
        fill="#999999"
      />
    </svg>
  );
};

export const ArrowdownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M7 10L12 15L17 10H7Z" fill="#999999" />
    </svg>
  );
};

export const ThreeDotIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M3.75 11.875C3.25272 11.875 2.77581 11.6775 2.42417 11.3258C2.07254 10.9742 1.875 10.4973 1.875 10C1.875 9.50272 2.07254 9.02581 2.42417 8.67417C2.77581 8.32254 3.25272 8.125 3.75 8.125C4.24728 8.125 4.72419 8.32254 5.07583 8.67417C5.42746 9.02581 5.625 9.50272 5.625 10C5.625 10.4973 5.42746 10.9742 5.07583 11.3258C4.72419 11.6775 4.24728 11.875 3.75 11.875ZM10 11.875C9.50272 11.875 9.02581 11.6775 8.67417 11.3258C8.32254 10.9742 8.125 10.4973 8.125 10C8.125 9.50272 8.32254 9.02581 8.67417 8.67417C9.02581 8.32254 9.50272 8.125 10 8.125C10.4973 8.125 10.9742 8.32254 11.3258 8.67417C11.6775 9.02581 11.875 9.50272 11.875 10C11.875 10.4973 11.6775 10.9742 11.3258 11.3258C10.9742 11.6775 10.4973 11.875 10 11.875ZM16.25 11.875C15.7527 11.875 15.2758 11.6775 14.9242 11.3258C14.5725 10.9742 14.375 10.4973 14.375 10C14.375 9.50272 14.5725 9.02581 14.9242 8.67417C15.2758 8.32254 15.7527 8.125 16.25 8.125C16.7473 8.125 17.2242 8.32254 17.5758 8.67417C17.9275 9.02581 18.125 9.50272 18.125 10C18.125 10.4973 17.9275 10.9742 17.5758 11.3258C17.2242 11.6775 16.7473 11.875 16.25 11.875Z"
        fill="white"
      />
    </svg>
  );
};

export const VerticalThreeDotsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M14.3684 8C15.473 8 16.3684 7.10457 16.3684 6C16.3684 4.89543 15.473 4 14.3684 4C13.2638 4 12.3684 4.89543 12.3684 6C12.3684 7.10457 13.2638 8 14.3684 8Z"
        fill="white"
      />
      <path
        d="M14.3684 14C15.473 14 16.3684 13.1046 16.3684 12C16.3684 10.8954 15.473 10 14.3684 10C13.2638 10 12.3684 10.8954 12.3684 12C12.3684 13.1046 13.2638 14 14.3684 14Z"
        fill="white"
      />
      <path
        d="M14.3684 20C15.473 20 16.3684 19.1046 16.3684 18C16.3684 16.8954 15.473 16 14.3684 16C13.2638 16 12.3684 16.8954 12.3684 18C12.3684 19.1046 13.2638 20 14.3684 20Z"
        fill="white"
      />
    </svg>
  );
};

export const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z"
        fill="white"
      />
    </svg>
  );
};

export const StartNewChatSVG = () => {
  return (
    <svg
      width="170"
      height="13"
      viewBox="0 0 170 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.082 12.192C4.26067 12.192 3.54067 12.048 2.922 11.76C2.30333 11.472 1.818 11.0613 1.466 10.528C1.12467 9.99467 0.948667 9.36 0.938 8.624H2.73C2.74067 9.22133 2.94867 9.728 3.354 10.144C3.75933 10.56 4.33 10.768 5.066 10.768C5.71667 10.768 6.22333 10.6133 6.586 10.304C6.95933 9.984 7.146 9.57867 7.146 9.088C7.146 8.69333 7.05533 8.37333 6.874 8.128C6.70333 7.88267 6.46333 7.68 6.154 7.52C5.85533 7.36 5.50867 7.216 5.114 7.088C4.71933 6.96 4.30333 6.82133 3.866 6.672C3.002 6.384 2.35133 6.01067 1.914 5.552C1.48733 5.09333 1.274 4.49067 1.274 3.744C1.26333 3.11467 1.40733 2.56533 1.706 2.096C2.01533 1.62667 2.442 1.264 2.986 1.008C3.54067 0.741333 4.186 0.608 4.922 0.608C5.64733 0.608 6.282 0.741333 6.826 1.008C7.38067 1.27467 7.81267 1.648 8.122 2.128C8.43133 2.59733 8.59133 3.14667 8.602 3.776H6.81C6.81 3.488 6.73533 3.216 6.586 2.96C6.43667 2.69333 6.218 2.47467 5.93 2.304C5.642 2.13333 5.29 2.048 4.874 2.048C4.34067 2.03733 3.898 2.17067 3.546 2.448C3.20467 2.72533 3.034 3.10933 3.034 3.6C3.034 4.03733 3.162 4.37333 3.418 4.608C3.674 4.84267 4.026 5.04 4.474 5.2C4.922 5.34933 5.434 5.52533 6.01 5.728C6.56467 5.90933 7.06067 6.128 7.498 6.384C7.93533 6.64 8.282 6.976 8.538 7.392C8.80467 7.808 8.938 8.336 8.938 8.976C8.938 9.54133 8.794 10.0693 8.506 10.56C8.218 11.04 7.786 11.4347 7.21 11.744C6.634 12.0427 5.92467 12.192 5.082 12.192ZM14.0563 12C13.2776 12 12.6589 11.8133 12.2003 11.44C11.7416 11.056 11.5123 10.3787 11.5123 9.408V5.488H10.1523V4.064H11.5123L11.7203 2.048H13.2083V4.064H15.4483V5.488H13.2083V9.408C13.2083 9.84533 13.2989 10.1493 13.4803 10.32C13.6723 10.48 13.9976 10.56 14.4563 10.56H15.3683V12H14.0563ZM19.885 12.192C19.213 12.192 18.6583 12.08 18.221 11.856C17.7837 11.632 17.4583 11.3387 17.245 10.976C17.0317 10.6027 16.925 10.1973 16.925 9.76C16.925 8.992 17.2237 8.384 17.821 7.936C18.4183 7.488 19.2717 7.264 20.381 7.264H22.461V7.12C22.461 6.50133 22.2903 6.03733 21.949 5.728C21.6183 5.41867 21.1863 5.264 20.653 5.264C20.1837 5.264 19.773 5.38133 19.421 5.616C19.0797 5.84 18.8717 6.176 18.797 6.624H17.101C17.1543 6.048 17.3463 5.55733 17.677 5.152C18.0183 4.736 18.445 4.42133 18.957 4.208C19.4797 3.984 20.0503 3.872 20.669 3.872C21.7783 3.872 22.637 4.16533 23.245 4.752C23.853 5.328 24.157 6.11733 24.157 7.12V12H22.685L22.541 10.64C22.317 11.0773 21.9917 11.4453 21.565 11.744C21.1383 12.0427 20.5783 12.192 19.885 12.192ZM20.221 10.816C20.6797 10.816 21.0637 10.7093 21.373 10.496C21.693 10.272 21.9383 9.97867 22.109 9.616C22.2903 9.25333 22.4023 8.85333 22.445 8.416H20.557C19.885 8.416 19.405 8.53333 19.117 8.768C18.8397 9.00267 18.701 9.296 18.701 9.648C18.701 10.0107 18.8343 10.2987 19.101 10.512C19.3783 10.7147 19.7517 10.816 20.221 10.816ZM26.1345 12V4.064H27.6545L27.7985 5.568C28.0758 5.04533 28.4598 4.63467 28.9505 4.336C29.4518 4.02667 30.0545 3.872 30.7585 3.872V5.648H30.2945C29.8252 5.648 29.4038 5.728 29.0305 5.888C28.6678 6.03733 28.3745 6.29867 28.1505 6.672C27.9372 7.03467 27.8305 7.54133 27.8305 8.192V12H26.1345ZM35.5406 12C34.762 12 34.1433 11.8133 33.6846 11.44C33.226 11.056 32.9966 10.3787 32.9966 9.408V5.488H31.6366V4.064H32.9966L33.2046 2.048H34.6926V4.064H36.9326V5.488H34.6926V9.408C34.6926 9.84533 34.7833 10.1493 34.9646 10.32C35.1566 10.48 35.482 10.56 35.9406 10.56H36.8526V12H35.5406ZM42.7126 12V4.064H44.2166L44.3446 5.456C44.59 4.96533 44.9473 4.58133 45.4166 4.304C45.8966 4.016 46.446 3.872 47.0646 3.872C48.0246 3.872 48.7766 4.17067 49.3206 4.768C49.8753 5.36533 50.1526 6.256 50.1526 7.44V12H48.4726V7.616C48.4726 6.08 47.8433 5.312 46.5846 5.312C45.9553 5.312 45.4326 5.536 45.0166 5.984C44.6113 6.432 44.4086 7.072 44.4086 7.904V12H42.7126ZM55.8621 12.192C55.0835 12.192 54.3901 12.0213 53.7821 11.68C53.1848 11.328 52.7155 10.8427 52.3741 10.224C52.0328 9.60533 51.8621 8.88533 51.8621 8.064C51.8621 7.232 52.0275 6.50133 52.3581 5.872C52.6995 5.24267 53.1688 4.752 53.7661 4.4C54.3741 4.048 55.0781 3.872 55.8781 3.872C56.6568 3.872 57.3341 4.048 57.9101 4.4C58.4861 4.74133 58.9341 5.2 59.2541 5.776C59.5741 6.352 59.7341 6.98667 59.7341 7.68C59.7341 7.78667 59.7288 7.904 59.7181 8.032C59.7181 8.14933 59.7128 8.28267 59.7021 8.432H53.5261C53.5795 9.2 53.8301 9.78667 54.2781 10.192C54.7368 10.5867 55.2648 10.784 55.8621 10.784C56.3421 10.784 56.7421 10.6773 57.0621 10.464C57.3928 10.24 57.6381 9.94133 57.7981 9.568H59.4941C59.2808 10.3147 58.8541 10.9387 58.2141 11.44C57.5848 11.9413 56.8008 12.192 55.8621 12.192ZM55.8621 5.264C55.2968 5.264 54.7955 5.43467 54.3581 5.776C53.9208 6.10667 53.6541 6.608 53.5581 7.28H58.0381C58.0061 6.66133 57.7875 6.17067 57.3821 5.808C56.9768 5.44533 56.4701 5.264 55.8621 5.264ZM62.7654 12L60.4294 4.064H62.1254L63.6614 10.048L65.3894 4.064H67.2774L69.0054 10.048L70.5414 4.064H72.2374L69.9014 12H68.1574L66.3334 5.76L64.5094 12H62.7654ZM81.4258 12.192C80.6471 12.192 79.9484 12.016 79.3298 11.664C78.7218 11.312 78.2418 10.8267 77.8898 10.208C77.5484 9.57867 77.3778 8.85333 77.3778 8.032C77.3778 7.21067 77.5484 6.49067 77.8898 5.872C78.2418 5.24267 78.7218 4.752 79.3298 4.4C79.9484 4.048 80.6471 3.872 81.4258 3.872C82.4071 3.872 83.2284 4.128 83.8898 4.64C84.5618 5.152 84.9938 5.84533 85.1858 6.72H83.4098C83.3031 6.28267 83.0684 5.94133 82.7058 5.696C82.3431 5.45067 81.9164 5.328 81.4258 5.328C81.0098 5.328 80.6258 5.43467 80.2738 5.648C79.9218 5.85067 79.6391 6.15467 79.4258 6.56C79.2124 6.95467 79.1058 7.44533 79.1058 8.032C79.1058 8.61867 79.2124 9.11467 79.4258 9.52C79.6391 9.91467 79.9218 10.2187 80.2738 10.432C80.6258 10.6453 81.0098 10.752 81.4258 10.752C81.9164 10.752 82.3431 10.6293 82.7058 10.384C83.0684 10.1387 83.3031 9.792 83.4098 9.344H85.1858C85.0044 10.1973 84.5778 10.8853 83.9058 11.408C83.2338 11.9307 82.4071 12.192 81.4258 12.192ZM87.0251 12V0.48H88.7211V5.344C88.9878 4.88533 89.3558 4.528 89.8251 4.272C90.3051 4.00533 90.8331 3.872 91.4091 3.872C92.3585 3.872 93.1051 4.17067 93.6491 4.768C94.1931 5.36533 94.4651 6.256 94.4651 7.44V12H92.7851V7.616C92.7851 6.08 92.1718 5.312 90.9451 5.312C90.3051 5.312 89.7718 5.536 89.3451 5.984C88.9291 6.432 88.7211 7.072 88.7211 7.904V12H87.0251ZM99.1506 12.192C98.4786 12.192 97.924 12.08 97.4866 11.856C97.0493 11.632 96.724 11.3387 96.5106 10.976C96.2973 10.6027 96.1906 10.1973 96.1906 9.76C96.1906 8.992 96.4893 8.384 97.0866 7.936C97.684 7.488 98.5373 7.264 99.6466 7.264H101.727V7.12C101.727 6.50133 101.556 6.03733 101.215 5.728C100.884 5.41867 100.452 5.264 99.9186 5.264C99.4493 5.264 99.0386 5.38133 98.6866 5.616C98.3453 5.84 98.1373 6.176 98.0626 6.624H96.3666C96.42 6.048 96.612 5.55733 96.9426 5.152C97.284 4.736 97.7106 4.42133 98.2226 4.208C98.7453 3.984 99.316 3.872 99.9346 3.872C101.044 3.872 101.903 4.16533 102.511 4.752C103.119 5.328 103.423 6.11733 103.423 7.12V12H101.951L101.807 10.64C101.583 11.0773 101.257 11.4453 100.831 11.744C100.404 12.0427 99.844 12.192 99.1506 12.192ZM99.4866 10.816C99.9453 10.816 100.329 10.7093 100.639 10.496C100.959 10.272 101.204 9.97867 101.375 9.616C101.556 9.25333 101.668 8.85333 101.711 8.416H99.8226C99.1506 8.416 98.6706 8.53333 98.3826 8.768C98.1053 9.00267 97.9666 9.296 97.9666 9.648C97.9666 10.0107 98.1 10.2987 98.3666 10.512C98.644 10.7147 99.0173 10.816 99.4866 10.816ZM108.572 12C107.793 12 107.175 11.8133 106.716 11.44C106.257 11.056 106.028 10.3787 106.028 9.408V5.488H104.668V4.064H106.028L106.236 2.048H107.724V4.064H109.964V5.488H107.724V9.408C107.724 9.84533 107.815 10.1493 107.996 10.32C108.188 10.48 108.513 10.56 108.972 10.56H109.884V12H108.572ZM115.808 12V0.799999H117.504V12H115.808ZM119.713 12V4.064H121.217L121.345 5.456C121.59 4.96533 121.947 4.58133 122.417 4.304C122.897 4.016 123.446 3.872 124.065 3.872C125.025 3.872 125.777 4.17067 126.321 4.768C126.875 5.36533 127.153 6.256 127.153 7.44V12H125.473V7.616C125.473 6.08 124.843 5.312 123.585 5.312C122.955 5.312 122.433 5.536 122.017 5.984C121.611 6.432 121.409 7.072 121.409 7.904V12H119.713ZM132.318 12.192C131.315 12.192 130.489 11.9467 129.838 11.456C129.187 10.9653 128.814 10.3147 128.718 9.504H130.43C130.515 9.86667 130.718 10.1813 131.038 10.448C131.358 10.704 131.779 10.832 132.302 10.832C132.814 10.832 133.187 10.7253 133.422 10.512C133.657 10.2987 133.774 10.0533 133.774 9.776C133.774 9.37067 133.609 9.09867 133.278 8.96C132.958 8.81067 132.51 8.67733 131.934 8.56C131.486 8.464 131.038 8.336 130.59 8.176C130.153 8.016 129.785 7.792 129.486 7.504C129.198 7.20533 129.054 6.80533 129.054 6.304C129.054 5.61067 129.321 5.03467 129.854 4.576C130.387 4.10667 131.134 3.872 132.094 3.872C132.979 3.872 133.694 4.08533 134.238 4.512C134.793 4.93867 135.118 5.54133 135.214 6.32H133.582C133.529 5.97867 133.369 5.712 133.102 5.52C132.846 5.328 132.499 5.232 132.062 5.232C131.635 5.232 131.305 5.32267 131.07 5.504C130.835 5.67467 130.718 5.89867 130.718 6.176C130.718 6.45333 130.878 6.672 131.198 6.832C131.529 6.992 131.961 7.136 132.494 7.264C133.027 7.38133 133.518 7.52 133.966 7.68C134.425 7.82933 134.793 8.05333 135.07 8.352C135.347 8.65067 135.486 9.088 135.486 9.664C135.497 10.3893 135.214 10.992 134.638 11.472C134.073 11.952 133.299 12.192 132.318 12.192ZM140.369 12C139.59 12 138.971 11.8133 138.513 11.44C138.054 11.056 137.825 10.3787 137.825 9.408V5.488H136.465V4.064H137.825L138.033 2.048H139.521V4.064H141.761V5.488H139.521V9.408C139.521 9.84533 139.611 10.1493 139.793 10.32C139.985 10.48 140.31 10.56 140.769 10.56H141.681V12H140.369ZM147.018 12.192C146.24 12.192 145.546 12.0213 144.938 11.68C144.341 11.328 143.872 10.8427 143.53 10.224C143.189 9.60533 143.018 8.88533 143.018 8.064C143.018 7.232 143.184 6.50133 143.514 5.872C143.856 5.24267 144.325 4.752 144.922 4.4C145.53 4.048 146.234 3.872 147.034 3.872C147.813 3.872 148.49 4.048 149.066 4.4C149.642 4.74133 150.09 5.2 150.41 5.776C150.73 6.352 150.89 6.98667 150.89 7.68C150.89 7.78667 150.885 7.904 150.874 8.032C150.874 8.14933 150.869 8.28267 150.858 8.432H144.682C144.736 9.2 144.986 9.78667 145.434 10.192C145.893 10.5867 146.421 10.784 147.018 10.784C147.498 10.784 147.898 10.6773 148.218 10.464C148.549 10.24 148.794 9.94133 148.954 9.568H150.65C150.437 10.3147 150.01 10.9387 149.37 11.44C148.741 11.9413 147.957 12.192 147.018 12.192ZM147.018 5.264C146.453 5.264 145.952 5.43467 145.514 5.776C145.077 6.10667 144.81 6.608 144.714 7.28H149.194C149.162 6.66133 148.944 6.17067 148.538 5.808C148.133 5.44533 147.626 5.264 147.018 5.264ZM155.338 12.192C154.666 12.192 154.111 12.08 153.674 11.856C153.237 11.632 152.911 11.3387 152.698 10.976C152.485 10.6027 152.378 10.1973 152.378 9.76C152.378 8.992 152.677 8.384 153.274 7.936C153.871 7.488 154.725 7.264 155.834 7.264H157.914V7.12C157.914 6.50133 157.743 6.03733 157.402 5.728C157.071 5.41867 156.639 5.264 156.106 5.264C155.637 5.264 155.226 5.38133 154.874 5.616C154.533 5.84 154.325 6.176 154.25 6.624H152.554C152.607 6.048 152.799 5.55733 153.13 5.152C153.471 4.736 153.898 4.42133 154.41 4.208C154.933 3.984 155.503 3.872 156.122 3.872C157.231 3.872 158.09 4.16533 158.698 4.752C159.306 5.328 159.61 6.11733 159.61 7.12V12H158.138L157.994 10.64C157.77 11.0773 157.445 11.4453 157.018 11.744C156.591 12.0427 156.031 12.192 155.338 12.192ZM155.674 10.816C156.133 10.816 156.517 10.7093 156.826 10.496C157.146 10.272 157.391 9.97867 157.562 9.616C157.743 9.25333 157.855 8.85333 157.898 8.416H156.01C155.338 8.416 154.858 8.53333 154.57 8.768C154.293 9.00267 154.154 9.296 154.154 9.648C154.154 10.0107 154.287 10.2987 154.554 10.512C154.831 10.7147 155.205 10.816 155.674 10.816ZM165.204 12.192C164.436 12.192 163.758 12.0107 163.172 11.648C162.585 11.2853 162.126 10.7893 161.796 10.16C161.465 9.53067 161.3 8.816 161.3 8.016C161.3 7.216 161.465 6.50667 161.796 5.888C162.126 5.25867 162.585 4.768 163.172 4.416C163.769 4.05333 164.452 3.872 165.22 3.872C165.849 3.872 166.398 3.99467 166.868 4.24C167.348 4.48533 167.721 4.832 167.988 5.28V0.48H169.684V12H168.164L167.988 10.768C167.732 11.1413 167.38 11.472 166.932 11.76C166.484 12.048 165.908 12.192 165.204 12.192ZM165.508 10.72C166.233 10.72 166.825 10.4693 167.284 9.968C167.753 9.46667 167.988 8.82133 167.988 8.032C167.988 7.232 167.753 6.58667 167.284 6.096C166.825 5.59467 166.233 5.344 165.508 5.344C164.782 5.344 164.185 5.59467 163.716 6.096C163.246 6.58667 163.012 7.232 163.012 8.032C163.012 8.55467 163.118 9.01867 163.332 9.424C163.545 9.82933 163.838 10.1493 164.212 10.384C164.596 10.608 165.028 10.72 165.508 10.72Z"
        fill="url(#paint0_linear_1354_709)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1354_709"
          x1="-73.5727"
          y1="19"
          x2="201.065"
          y2="4.1172"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FC8C02" />
          <stop offset="1" stop-color="#5618FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const CloseBtn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_1112_758)">
        <path
          d="M3.516 20.484C2.36988 19.377 1.45569 18.0529 0.826781 16.5889C0.197873 15.1248 -0.133162 13.5502 -0.147008 11.9568C-0.160854 10.3635 0.142767 8.78331 0.746137 7.30855C1.34951 5.83379 2.24055 4.49397 3.36726 3.36726C4.49397 2.24055 5.83379 1.34951 7.30855 0.746137C8.78331 0.142767 10.3635 -0.160854 11.9568 -0.147008C13.5502 -0.133162 15.1248 0.197873 16.5889 0.826781C18.0529 1.45569 19.377 2.36988 20.484 3.516C22.6699 5.77922 23.8794 8.81045 23.8521 11.9568C23.8247 15.1032 22.5627 18.1129 20.3378 20.3378C18.1129 22.5627 15.1032 23.8247 11.9568 23.8521C8.81045 23.8794 5.77922 22.6699 3.516 20.484ZM5.208 18.792C7.00935 20.5933 9.4525 21.6053 12 21.6053C14.5475 21.6053 16.9906 20.5933 18.792 18.792C20.5933 16.9906 21.6053 14.5475 21.6053 12C21.6053 9.4525 20.5933 7.00935 18.792 5.208C16.9906 3.40665 14.5475 2.39466 12 2.39466C9.4525 2.39466 7.00935 3.40665 5.208 5.208C3.40665 7.00935 2.39466 9.4525 2.39466 12C2.39466 14.5475 3.40665 16.9906 5.208 18.792ZM17.088 8.604L13.692 12L17.088 15.396L15.396 17.088L12 13.692L8.604 17.088L6.912 15.396L10.308 12L6.912 8.604L8.604 6.912L12 10.308L15.396 6.912L17.088 8.604Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1112_758">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ArrowRightDiagonalBtn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M1.29231 12L0 10.7077L8.86154 1.84615H0.923077V0H12V11.0769H10.1538V3.13846L1.29231 12Z"
        fill="white"
      />
    </svg>
  );
};

export const StatusDropdownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="5"
      viewBox="0 0 10 5"
      fill="none"
    >
      <path d="M0 0L5 5L10 0H0Z" fill="#999999" />
    </svg>
  );
};

export const ChatSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M15.9998 4C8.6665 4 2.6665 8.77333 2.6665 14.6667C2.69998 16.0836 3.04601 17.4756 3.67985 18.7433C4.3137 20.011 5.21972 21.1231 6.33317 22C6.33317 22.8 5.77317 24.8933 2.6665 28C5.8265 27.8533 8.85317 26.6667 11.2932 24.6667C12.8132 25.1067 14.4132 25.3333 15.9998 25.3333C23.3332 25.3333 29.3332 20.56 29.3332 14.6667C29.3332 8.77333 23.3332 4 15.9998 4ZM15.9998 22.6667C10.1065 22.6667 5.33317 19.08 5.33317 14.6667C5.33317 10.2533 10.1065 6.66667 15.9998 6.66667C21.8932 6.66667 26.6665 10.2533 26.6665 14.6667C26.6665 19.08 21.8932 22.6667 15.9998 22.6667Z"
        fill="white"
      />
    </svg>
  );
};

export const TaskCard = (props: { borderColor: string }) => {
  const [viewTask, setViewTask] = useState(false);
  const displayViewTaskModal = () => {
    return setViewTask(!viewTask);
  };

  const [openTaskMenu, setOpenTaskMenu] = useState(false);
  const toggleOpenTaskMenu = () => {
    console.log("clicked");
    setOpenTaskMenu(!openTaskMenu);
  };

  const TaskMenu = (props: { handleEditTask: any; handleDeleteTask: any }) => {
    const Menu = [
      {
        id: 1,
        title: "View/Edit task",
        icon: <TbEdit />,
        onclick: props.handleEditTask,
      },
      {
        id: 2,
        title: "Delete task",
        icon: <AiOutlineDelete />,
        onclick: props.handleDeleteTask,
      },
    ];
    return (
      <div className="bg-white text-black h-auto w-[180px] py-3 absolute top-8 right-0 flex flex-col gap-2 rounded-md   ">
        {Menu.map((list) => {
          return (
            <p
              key={list.id}
              className="flex gap-1.5 items-center py-1 px-3.5"
              onClick={list.onclick}
            >
              {list.icon} {list.title}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div
        className={`${props.borderColor} max-w-[320px] flex flex-col px-[14px] py-[34px] border-[1px] rounded-md`}
      >
        <div className="flex flex-row justify-between">
          <p>Armored Core</p>
          <div className="relative">
            <div onClick={toggleOpenTaskMenu}>
              <ThreeDotIcon />
            </div>

            <ModalRef onClose={() => setOpenTaskMenu(false)}>
              {openTaskMenu ? (
                <TaskMenu
                  handleEditTask={displayViewTaskModal}
                  handleDeleteTask={undefined}
                />
              ) : (
                ""
              )}
            </ModalRef>
          </div>
        </div>
        <p className="pt-[28px] pb-[55px]">
          Acronis looks forward to working with the security community to find
          security vulnerabilities in
        </p>
        <div className="flex flex-row items-center justify-between ">
          <div className="flex flex-row gap-3">
            <Image
              src="/images/user-avatar.png"
              alt="avatar"
              className="w-[28px] h-[28px] rounded-full"
              width={28}
              height={28}
            />
            <p>Jun 12</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <div className="flex flex-row gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M11.6668 1.66699H5.00016C4.55814 1.66699 4.13421 1.84259 3.82165 2.15515C3.50909 2.46771 3.3335 2.89163 3.3335 3.33366V16.667C3.3335 17.109 3.50909 17.5329 3.82165 17.8455C4.13421 18.1581 4.55814 18.3337 5.00016 18.3337H15.0002C15.4422 18.3337 15.8661 18.1581 16.1787 17.8455C16.4912 17.5329 16.6668 17.109 16.6668 16.667V6.66699L11.6668 1.66699ZM15.0002 16.667H5.00016V3.33366H10.8335V7.50033H15.0002V16.667Z"
                  fill="white"
                />
              </svg>
              <p>4</p>
            </div>
            <div className="flex flex-row gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.99984 2.5C5.4165 2.5 1.6665 5.48333 1.6665 9.16667C1.68743 10.0522 1.90369 10.9223 2.29985 11.7146C2.696 12.5069 3.26226 13.2019 3.95817 13.75C3.95817 14.25 3.60817 15.5583 1.6665 17.5C3.6415 17.4083 5.53317 16.6667 7.05817 15.4167C8.00817 15.6917 9.00817 15.8333 9.99984 15.8333C14.5832 15.8333 18.3332 12.85 18.3332 9.16667C18.3332 5.48333 14.5832 2.5 9.99984 2.5ZM9.99984 14.1667C6.3165 14.1667 3.33317 11.925 3.33317 9.16667C3.33317 6.40833 6.3165 4.16667 9.99984 4.16667C13.6832 4.16667 16.6665 6.40833 16.6665 9.16667C16.6665 11.925 13.6832 14.1667 9.99984 14.1667Z"
                  fill="white"
                />
              </svg>
              <p>6</p>
            </div>{" "}
          </div>
        </div>
      </div>
      {viewTask && (
        <div className="bg-[#191919] overflow-auto fixed z-10 left-0 top-0 w-screen h-screen items-center justify-center">
          <div className="flex py-20 items-center justify-center">
            <ViewTask onclick={displayViewTaskModal} />
          </div>
        </div>
      )}
    </>
  );
};

export const SendChatText = (props: { text: string; time: string }) => {
  return (
    <div className="flex self-end bg-[#242424] text-[#999999] text-sm w-auto max-w-[80%] sm:max-w-[60%] rounded-3xl px-5 sm:px-7 py-3 sm:py-4">
      <div className="text-left bg-[#242424] text-[#999999]">
        <p>{props.text}</p>
        <p className="text-right mt-0 text-[11px]">{props.time}</p>
      </div>
    </div>
  );
};

export const ReceiveChatText = (props: { text: string; time: string }) => {
  return (
    <div className="self-start bg-[#242424] text-sm text-[#999999] w-auto max-w-[80%] sm:max-w-[60%] rounded-3xl px-5 sm:px-7 py-3 sm:py-4">
      <p>{props.text}</p>
      <p className="text-right mt-0 sm:mt-[6px] text-[11px]">{props.time}</p>
    </div>
  );
};