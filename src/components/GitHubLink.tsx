import GitHub from '@phosphor-icons/core/fill/github-logo-fill.svg?component-solid';

import TooltipIcon from '~components/TooltipIcon';

const GitHubLink = () => (
  <TooltipIcon
    icon={GitHub}
    href="https://github.com/bensaufley/personal-website"
    invert
    tooltipProps={{
      floatingOptions: { autoPlacement: false, offset: { crossAxis: 8 } },
      placement: 'bottom-start',
    }}
    zIndex={11}
  >
    View this website on GitHub
  </TooltipIcon>
);

export default GitHubLink;
