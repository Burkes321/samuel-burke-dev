interface Props {
  className?: string;
}

export const LinkedinLogo = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_152_18)">
        <path d="M38 0H10C4.478 0 0 4.478 0 10V38C0 43.522 4.478 48 10 48H38C43.524 48 48 43.522 48 38V10C48 4.478 43.524 0 38 0ZM16 38H10V16H16V38ZM13 13.464C11.068 13.464 9.5 11.884 9.5 9.936C9.5 7.988 11.068 6.408 13 6.408C14.932 6.408 16.5 7.988 16.5 9.936C16.5 11.884 14.934 13.464 13 13.464ZM40 38H34V26.792C34 20.056 26 20.566 26 26.792V38H20V16H26V19.53C28.792 14.358 40 13.976 40 24.482V38Z" />
      </g>
      <defs>
        <clipPath id="clip0_152_18">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
