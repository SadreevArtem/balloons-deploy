import React from "react";

type Props = {
  className?: string;
};

export const FavoriteOutlined: React.FC<Props> = ({ className = "" }) => (
  <svg
    className={className}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M16.275 4C14.622 4 13.0355 4.75041 12 5.93624C10.9645 4.75041 9.378 4 7.725 4C4.799 4 2.5 6.24196 2.5 9.09537C2.5 12.5973 5.73 15.4507 10.6225 19.7864L12 21L13.3775 19.7771C18.27 15.4507 21.5 12.5973 21.5 9.09537C21.5 6.24196 19.201 4 16.275 4ZM12.095 18.406L12 18.4986L11.905 18.406C7.383 14.4131 4.4 11.7728 4.4 9.09537C4.4 7.24251 5.825 5.85286 7.725 5.85286C9.188 5.85286 10.613 6.77003 11.1165 8.03924H12.893C13.387 6.77003 14.812 5.85286 16.275 5.85286C18.175 5.85286 19.6 7.24251 19.6 9.09537C19.6 11.7728 16.617 14.4131 12.095 18.406Z'
      fill='currentColor'
    />
  </svg>
);