export default function AwsCommunityBuilders({ className = 'w-12' }) {
  return (
    <svg className={className} viewBox="0 0 130 75" fill="none">
      <g clipPath="url(#clip0)">
        <path d="M129.188 0H0v75h129.188V0z" fill="url(#pattern0)" />
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#image0" transform="scale(.00145 .0025)" />
        </pattern>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H129.375V75H0z" />
        </clipPath>
        <image
          id="image0"
          width={689}
          height={400}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}