type LogoProps = {
  colors: Array<string>;
};

export function Logo({ colors }: LogoProps) {
  if (colors.length !== 16) {
    throw new Error("Expected 16 colors");
  }

  return (
    <svg
      width="288"
      height="229"
      viewBox="0 0 288 229"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_174)">
        <rect width="288" height="229" fill="white" />
        <path d="M0 0H58V29H29L0 0Z" fill={colors[0]} />
        <path d="M145 87H88V58H116L145 87Z" fill={colors[1]} />
        <path d="M29 29H87L116 58H58L29 29Z" fill={colors[2]} />
        <path d="M58.0001 0L87 29H58.0001V0Z" fill={colors[3]} />
        <path d="M58 58L88 87V58H58Z" fill={colors[4]} />
        <path d="M135 117H175L155 137L135 117Z" fill={colors[5]} />
        <path d="M88 87H145L175 117L118 117L88 87Z" fill={colors[6]} />
        <path d="M135 117L155 137L134 158L93 117H135Z" fill={colors[7]} />
        <path d="M93 117L134 158H52L93 117Z" fill={colors[8]} />
        <path d="M93 117L134 158H52L93 117Z" fill={colors[9]} />
        <path d="M93 199L134 158H52L93 199Z" fill={colors[10]} />
        <path d="M93 199L134 158H52L93 199Z" fill={colors[11]} />
        <path d="M52 158L11 199H93L52 158Z" fill={colors[12]} />
        <path d="M52 158L11 199H93L52 158Z" fill={colors[13]} />
        <path d="M288 229L229 170H288V229Z" fill={colors[14]} />
        <path d="M200 141L259 200H200V141Z" fill={colors[15]} />
      </g>
      <defs>
        <clipPath id="clip0_1_174">
          <rect width="288" height="229" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
