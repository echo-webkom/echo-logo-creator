type LogoProps = {
  colors: Array<string>;
  onPathClick?: (index: number) => void;
  selectedPath?: number | null;
};

export function Logo({ colors, onPathClick: onFocusChange, selectedPath }: LogoProps) {
  if (colors.length !== 16) {
    throw new Error("Expected 16 colors");
  }

  const getPathStyles = (index: number) => ({
    fill: colors[index],
    stroke: selectedPath === index ? "#3b82f6" : "transparent",
    strokeWidth: selectedPath === index ? "3" : "0",
    cursor: "pointer",
    transition: "all 0.2s ease",
    filter: selectedPath === index ? "brightness(1.1)" : "none"
  });

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200">
      <svg
        width="288"
        height="229"
        viewBox="0 0 288 229"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-full h-auto"
      >
        <g clip-path="url(#clip0_1_174)">
          <rect width="288" height="229" fill="white" />
          <path
            onClick={() => onFocusChange?.(0)}
            d="M0 0H58V29H29L0 0Z"
            style={getPathStyles(0)}
          />
          <path
            onClick={() => onFocusChange?.(1)}
            d="M145 87H88V58H116L145 87Z"
            style={getPathStyles(1)}
          />
          <path
            onClick={() => onFocusChange?.(2)}
            d="M29 29H87L116 58H58L29 29Z"
            style={getPathStyles(2)}
          />
          <path
            onClick={() => onFocusChange?.(3)}
            d="M58.0001 0L87 29H58.0001V0Z"
            style={getPathStyles(3)}
          />
          <path
            onClick={() => onFocusChange?.(4)}
            d="M58 58L88 87V58H58Z"
            style={getPathStyles(4)}
          />
          <path
            onClick={() => onFocusChange?.(5)}
            d="M135 117H175L155 137L135 117Z"
            style={getPathStyles(5)}
          />
          <path
            onClick={() => onFocusChange?.(6)}
            d="M88 87H145L175 117L118 117L88 87Z"
            style={getPathStyles(6)}
          />
          <path
            onClick={() => onFocusChange?.(7)}
            d="M135 117L155 137L134 158L93 117H135Z"
            style={getPathStyles(7)}
          />
          <path
            onClick={() => onFocusChange?.(8)}
            d="M93 117L134 158H52L93 117Z"
            style={getPathStyles(8)}
          />
          <path
            onClick={() => onFocusChange?.(9)}
            d="M93 117L134 158H52L93 117Z"
            style={getPathStyles(9)}
          />
          <path
            onClick={() => onFocusChange?.(10)}
            d="M93 199L134 158H52L93 199Z"
            style={getPathStyles(10)}
          />
          <path
            onClick={() => onFocusChange?.(11)}
            d="M93 199L134 158H52L93 199Z"
            style={getPathStyles(11)}
          />
          <path
            onClick={() => onFocusChange?.(12)}
            d="M52 158L11 199H93L52 158Z"
            style={getPathStyles(12)}
          />
          <path
            onClick={() => onFocusChange?.(13)}
            d="M52 158L11 199H93L52 158Z"
            style={getPathStyles(13)}
          />
          <path
            onClick={() => onFocusChange?.(14)}
            d="M288 229L229 170H288V229Z"
            style={getPathStyles(14)}
          />
          <path
            onClick={() => onFocusChange?.(15)}
            d="M200 141L259 200H200V141Z"
            style={getPathStyles(15)}
          />
        </g>
        <defs>
          <clipPath id="clip0_1_174">
            <rect width="288" height="229" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <p className="text-center text-sm text-gray-600 mt-4">
        Click on any part of the logo to select its color
      </p>
    </div>
  );
}
