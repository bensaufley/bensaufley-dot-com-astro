/// <reference types="user-agent-data-types" />
import Command from '@phosphor-icons/core/regular/command.svg?component-solid';
import Ctrl from '@phosphor-icons/core/regular/control.svg?component-solid';

const MetaKey = () => {
  const platform =
    globalThis.navigator?.platform ??
    (globalThis.navigator && 'userAgentData' in globalThis.navigator
      ? globalThis.navigator.userAgentData.platform
      : null) ??
    '';
  const isMac = /macOS|Mac|iPod|iPhone|iPad/.test(platform);

  return isMac ? <Command /> : <Ctrl />;
};

export default MetaKey;
